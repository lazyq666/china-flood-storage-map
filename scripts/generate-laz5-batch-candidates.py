#!/usr/bin/env python3
"""Build deterministic review artifacts for the first five active LAZ-5 tasks.

The supplied images do not contain a coordinate grid or enough control points.
This script therefore keeps image-space evidence separate from map placement:

* every task gets a lossless target mask and pixel rings;
* incomplete/occluded shapes are blocked before WGS84 conversion;
* complete shapes are normalized to the documented area and centred on the
  existing evidence anchor, explicitly as review-only candidates.

It never writes data/location-boundaries.js.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import math
from collections import defaultdict, deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter


TASKS = [
    {
        "issueId": "LAZ-20",
        "zoneId": "长江-28",
        "name": "人民大垸",
        "source": "renmin-dayuan-clean.png",
        "targetColor": "light-orange",
        "seed": [520, 620],
        "referenceAreaSqKm": 341.0,
        "anchorWgs84": [112.73830402056629, 29.836357765],
        "candidateAllowed": True,
        "gridClose": 5,
        "occlusions": [],
        "blockers": [
            "placement uses the existing evidence anchor rather than independently surveyed control points",
            "area is used to set display scale and cannot independently validate the candidate",
        ],
    },
    {
        "issueId": "LAZ-24",
        "zoneId": "长江-26",
        "name": "宛市扩大区",
        "source": "wanshi-expanded.png",
        "targetColor": "light-orange",
        "seed": [620, 625],
        "referenceAreaSqKm": 96.0,
        "anchorWgs84": [112.06584221434721, 30.247836461225514],
        "candidateAllowed": False,
        "occlusions": [],
        "blockers": [
            "target fill is cut by the bottom image edge, so the supplied view does not define a closed boundary",
            "source image has no scale, coordinate grid, or independent control points",
        ],
    },
    {
        "issueId": "LAZ-25",
        "zoneId": "长江-06",
        "name": "澧南垸",
        "source": "linnan-jiu-xiguan-anli.png",
        "targetColor": "brown",
        "seed": [680, 390],
        "referenceAreaSqKm": 34.3,
        "anchorWgs84": [111.73096212219292, 29.5901651],
        "candidateAllowed": True,
        "occlusions": [
            {
                "kind": "arrow-tip",
                "bbox": [628, 429, 646, 453],
                "repair": "not-filled",
                "reason": "Only the visible colour component is retained; no broad closing is applied.",
            }
        ],
        "blockers": [
            "placement uses the existing evidence anchor rather than independently surveyed control points",
            "area is used to set display scale and cannot independently validate the candidate",
        ],
    },
    {
        "issueId": "LAZ-29",
        "zoneId": "长江-03",
        "name": "九垸",
        "source": "linnan-jiu-xiguan-anli.png",
        "targetColor": "light-orange",
        "seed": [996, 436],
        "referenceAreaSqKm": 53.64,
        "anchorWgs84": [111.9720626665366, 29.560777092567754],
        "candidateAllowed": True,
        "occlusions": [
            {
                "kind": "arrow-tip",
                "bbox": [958, 493, 978, 514],
                "repair": "not-filled",
                "reason": "The arrow is excluded and the surrounding river gap is preserved.",
            }
        ],
        "blockers": [
            "placement uses the existing evidence anchor rather than independently surveyed control points",
            "area is used to set display scale and cannot independently validate the candidate",
        ],
    },
    {
        "issueId": "LAZ-27",
        "zoneId": "长江-04",
        "name": "西官垸",
        "source": "linnan-jiu-xiguan-anli.png",
        "sourceLabel": "西宫垸",
        "targetColor": "brown",
        "seed": [1103, 365],
        "referenceAreaSqKm": 69.6,
        "anchorWgs84": [112.03460350280858, 29.548614628532395],
        "candidateAllowed": True,
        "occlusions": [
            {
                "kind": "arrow-tip",
                "bbox": [1097, 580, 1119, 605],
                "repair": "not-filled",
                "reason": "The attachment label is retained only as provenance; the arrow is not part of the mask.",
            }
        ],
        "blockers": [
            "placement uses the existing evidence anchor rather than independently surveyed control points",
            "area is used to set display scale and cannot independently validate the candidate",
        ],
    },
]


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def target_mask(rgb: np.ndarray, color: str) -> np.ndarray:
    r, g, b = (rgb[:, :, index].astype(np.int16) for index in range(3))
    if color == "light-orange":
        return (
            (r >= 225) & (r <= 255) & (g >= 155) & (g <= 225) &
            (b >= 75) & (b <= 185) & ((r - g) >= 24) & ((g - b) >= 30)
        )
    if color == "brown":
        return (
            (r >= 175) & (r <= 235) & (g >= 95) & (g <= 180) &
            (b >= 65) & (b <= 155) & ((r - g) >= 35) & ((g - b) >= 2)
        )
    raise ValueError(f"Unknown target colour: {color}")


def components(mask: np.ndarray, minimum_pixels: int = 12) -> list[list[tuple[int, int]]]:
    height, width = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    found: list[list[tuple[int, int]]] = []
    for y, x in zip(*np.where(mask)):
        if seen[y, x]:
            continue
        queue = [(int(y), int(x))]
        seen[y, x] = True
        pixels: list[tuple[int, int]] = []
        while queue:
            cy, cx = queue.pop()
            pixels.append((cy, cx))
            for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                ny, nx = cy + dy, cx + dx
                if 0 <= ny < height and 0 <= nx < width and mask[ny, nx] and not seen[ny, nx]:
                    seen[ny, nx] = True
                    queue.append((ny, nx))
        if len(pixels) >= minimum_pixels:
            found.append(pixels)
    return found


def select_nearest_component(mask: np.ndarray, seed: tuple[int, int]) -> np.ndarray:
    found = components(mask)
    if not found:
        raise RuntimeError(f"No colour component found near {seed}")
    selected = min(
        found,
        key=lambda pixels: min((x - seed[0]) ** 2 + (y - seed[1]) ** 2 for y, x in pixels),
    )
    result = np.zeros_like(mask, dtype=bool)
    for y, x in selected:
        result[y, x] = True
    return result


def remove_tiny_holes(mask: np.ndarray, maximum_pixels: int = 16) -> np.ndarray:
    """Remove only antialias pinholes; preserve rivers and meaningful inner water."""
    inverse = ~mask
    height, width = mask.shape
    for pixels in components(inverse, minimum_pixels=1):
        touches_edge = any(y in (0, height - 1) or x in (0, width - 1) for y, x in pixels)
        if not touches_edge and len(pixels) <= maximum_pixels:
            for y, x in pixels:
                mask[y, x] = True
    return mask


def boundary_rings(mask: np.ndarray) -> list[list[tuple[float, float]]]:
    height, width = mask.shape
    edges: dict[tuple[int, int], list[tuple[int, int]]] = defaultdict(list)
    for y, x in zip(*np.where(mask)):
        if y == 0 or not mask[y - 1, x]:
            edges[(x, y)].append((x + 1, y))
        if x == width - 1 or not mask[y, x + 1]:
            edges[(x + 1, y)].append((x + 1, y + 1))
        if y == height - 1 or not mask[y + 1, x]:
            edges[(x + 1, y + 1)].append((x, y + 1))
        if x == 0 or not mask[y, x - 1]:
            edges[(x, y + 1)].append((x, y))
    unused = {(start, end) for start, ends in edges.items() for end in ends}
    rings: list[list[tuple[float, float]]] = []
    while unused:
        start, current = next(iter(unused))
        first = (start, current)
        ring = [start, current]
        unused.remove(first)
        while current != start:
            choices = [edge for edge in unused if edge[0] == current]
            if not choices:
                break
            edge = choices[0]
            unused.remove(edge)
            current = edge[1]
            ring.append(current)
        if len(ring) > 8 and ring[-1] == ring[0]:
            rings.append(ring)
    if not rings:
        raise RuntimeError("Could not trace the selected colour component")
    return sorted(rings, key=len, reverse=True)


def perpendicular_distance(point, start, end) -> float:
    point, start, end = map(np.asarray, (point, start, end))
    if np.array_equal(start, end):
        return float(np.linalg.norm(point - start))
    vector = end - start
    offset = start - point
    return float(abs(vector[0] * offset[1] - vector[1] * offset[0]) / np.linalg.norm(vector))


def simplify(points: list[tuple[float, float]], epsilon: float) -> list[tuple[float, float]]:
    if len(points) < 3:
        return points
    distances = [perpendicular_distance(point, points[0], points[-1]) for point in points[1:-1]]
    if not distances or max(distances) <= epsilon:
        return [points[0], points[-1]]
    index = distances.index(max(distances)) + 1
    return simplify(points[: index + 1], epsilon)[:-1] + simplify(points[index:], epsilon)


def polygon_area_pixels(ring: list[tuple[float, float]]) -> float:
    return abs(sum(x1 * y2 - x2 * y1 for (x1, y1), (x2, y2) in zip(ring, ring[1:]))) / 2


def mask_touches_edge(mask: np.ndarray) -> bool:
    return bool(mask[0].any() or mask[-1].any() or mask[:, 0].any() or mask[:, -1].any())


def pixel_ring_to_wgs84(
    ring: list[tuple[float, float]],
    centre_pixel: tuple[float, float],
    anchor: tuple[float, float],
    kilometres_per_pixel: float,
) -> list[list[float]]:
    lon0, lat0 = anchor
    cos_lat = math.cos(math.radians(lat0))
    result = []
    for x, y in ring:
        east_km = (x - centre_pixel[0]) * kilometres_per_pixel
        north_km = (centre_pixel[1] - y) * kilometres_per_pixel
        result.append([lon0 + east_km / (111.320 * cos_lat), lat0 + north_km / 110.574])
    return result


def make_preview(image: Image.Image, mask: np.ndarray, task: dict) -> Image.Image:
    base = image.convert("RGBA")
    overlay = Image.new("RGBA", image.size, (0, 0, 0, 0))
    data = np.asarray(overlay).copy()
    data[mask] = [12, 126, 133, 145]
    overlay = Image.fromarray(data, "RGBA")
    composed = Image.alpha_composite(base, overlay)
    draw = ImageDraw.Draw(composed)
    for item in task["occlusions"]:
        draw.rectangle(item["bbox"], outline=(190, 60, 45, 255), width=4)
    return composed


def process_task(task: dict, source_dir: Path, output_dir: Path) -> tuple[dict, dict | None]:
    source_path = source_dir / task["source"]
    image = Image.open(source_path).convert("RGB")
    rgb = np.asarray(image)
    raw_mask = target_mask(rgb, task["targetColor"])
    if task.get("gridClose"):
        size = int(task["gridClose"]) | 1
        raw_mask = np.asarray(
            Image.fromarray((raw_mask * 255).astype(np.uint8))
            .filter(ImageFilter.MaxFilter(size))
            .filter(ImageFilter.MinFilter(size))
        ) > 0
    mask = select_nearest_component(raw_mask, tuple(task["seed"]))
    mask = remove_tiny_holes(mask)
    traced_rings = []
    for ring in boundary_rings(mask):
        simplified = simplify(ring[:-1], 2.0)
        simplified.append(simplified[0])
        if polygon_area_pixels(simplified) >= 20:
            traced_rings.append(simplified)
    outer = traced_rings[0]
    ys, xs = np.where(mask)
    bbox = [int(xs.min()), int(ys.min()), int(xs.max() + 1), int(ys.max() + 1)]
    pixel_area = polygon_area_pixels(outer) - sum(
        polygon_area_pixels(ring) for ring in traced_rings[1:]
    )
    touches_edge = mask_touches_edge(mask)
    task_dir = output_dir / task["issueId"].lower()
    task_dir.mkdir(parents=True, exist_ok=True)

    Image.fromarray((mask * 255).astype(np.uint8), "L").save(task_dir / "target-mask.png")
    image.save(task_dir / "working-copy.png")
    make_preview(image, mask, task).convert("RGB").save(task_dir / "extraction-preview.jpg", quality=94)
    pixel_document = {
        "schemaVersion": 1,
        "issueId": task["issueId"],
        "zoneId": task["zoneId"],
        "name": task["name"],
        "sourceLabel": task.get("sourceLabel"),
        "coordinateSystem": "source-image-pixels",
        "sourceImage": f"source/{task['source']}",
        "sourceImageSize": list(image.size),
        "sourceSha256": sha256(source_path),
        "targetColorClass": task["targetColor"],
        "seedPixel": task["seed"],
        "bbox": bbox,
        "pixelCount": int(mask.sum()),
        "outerRingAreaPixels": round(pixel_area, 2),
        "touchesImageEdge": touches_edge,
        "occlusions": task["occlusions"],
        "rings": [
            [[round(float(x), 2), round(float(y), 2)] for x, y in ring]
            for ring in traced_rings
        ],
    }
    (task_dir / "pixel-rings.json").write_text(
        json.dumps(pixel_document, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    report = {
        "issueId": task["issueId"],
        "zoneId": task["zoneId"],
        "name": task["name"],
        "sourceLabel": task.get("sourceLabel"),
        "status": "candidate-ready-for-map-review" if task["candidateAllowed"] else "pixel-evidence-only-blocked",
        "sourceImage": f"source/{task['source']}",
        "sourceImageSize": list(image.size),
        "sourceSha256": sha256(source_path),
        "targetMask": f"{task['issueId'].lower()}/target-mask.png",
        "pixelRings": f"{task['issueId'].lower()}/pixel-rings.json",
        "preview": f"{task['issueId'].lower()}/extraction-preview.jpg",
        "workingCopy": f"{task['issueId'].lower()}/working-copy.png",
        "pixelCount": int(mask.sum()),
        "bbox": bbox,
        "touchesImageEdge": touches_edge,
        "occlusions": task["occlusions"],
        "referenceAreaSqKm": task["referenceAreaSqKm"],
        "rawTracedAreaSqKm": None,
        "uniformScaleFactor": None,
        "georeference": {
            "method": "existing-evidence-anchor-plus-reference-area-normalization" if task["candidateAllowed"] else None,
            "controlPointCount": 0,
            "holdoutPointCount": 0,
            "leaveOneOutRmsKm": None,
            "leaveOneOutMaxKm": None,
            "thresholdRmsKm": 1.0,
            "thresholdMaxKm": 2.0,
            "passed": False,
        },
        "legalBoundary": False,
        "fieldVerified": False,
        "promotionBlockedBy": task["blockers"],
    }

    if not task["candidateAllowed"]:
        return report, None

    kilometres_per_pixel = math.sqrt(task["referenceAreaSqKm"] / pixel_area)
    body = np.asarray(outer[:-1])
    centre = (float(body[:, 0].mean()), float(body[:, 1].mean()))
    wgs84_rings = [
        pixel_ring_to_wgs84(
            ring, centre, tuple(task["anchorWgs84"]), kilometres_per_pixel
        )
        for ring in traced_rings
    ]
    report["areaNormalizationKmPerPixel"] = round(kilometres_per_pixel, 8)
    feature = {
        "type": "Feature",
        "properties": {
            "issueId": task["issueId"],
            "zoneId": task["zoneId"],
            "name": task["name"],
            "sourceLabel": task.get("sourceLabel"),
            "status": "review-only-checks-failed",
            "coordinateSystem": "WGS84",
            "referenceAreaSqKm": task["referenceAreaSqKm"],
            "rawTracedAreaSqKm": None,
            "uniformScaleFactor": None,
            "areaMeasurementIndependent": False,
            "areaNormalizationKmPerPixel": round(kilometres_per_pixel, 8),
            "placementMethod": "existing evidence anchor plus reference-area normalization",
            "visibleBoundarySource": "project-owner supplied image colour component",
            "legalBoundary": False,
            "fieldVerified": False,
            "promotionBlockedBy": task["blockers"],
        },
        "geometry": {"type": "Polygon", "coordinates": wgs84_rings},
    }
    return report, feature


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-dir", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)

    reports = []
    features = []
    for task in TASKS:
        report, feature = process_task(task, args.source_dir, args.output)
        reports.append(report)
        task_dir = args.output / task["issueId"].lower()
        (task_dir / "task-report.json").write_text(
            json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        if feature:
            features.append(feature)
            (task_dir / "candidate.geojson").write_text(
                json.dumps(feature, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
            )

    collection = {
        "type": "FeatureCollection",
        "name": "laz-5-first-five-review-candidates-2026-09-21",
        "features": features,
    }
    (args.output / "candidates.geojson").write_text(
        json.dumps(collection, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (args.output / "candidates.js").write_text(
        "window.FLOOD_STORAGE_LAZ5_BATCH_CANDIDATES = "
        + json.dumps(collection, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    summary = {
        "schemaVersion": 1,
        "batch": "LAZ-5 first five active subtasks",
        "generatedAt": "2026-09-21",
        "taskCount": len(reports),
        "mapCandidateCount": len(features),
        "mainMapUpdated": False,
        "tasks": reports,
    }
    (args.output / "report.json").write_text(
        json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (args.output / "report.js").write_text(
        "window.FLOOD_STORAGE_LAZ5_BATCH_REPORT = "
        + json.dumps(summary, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
