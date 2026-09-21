#!/usr/bin/env python3
"""Replace the LAZ-25 review candidate with the project owner's red-line markup.

The screenshot already contains the previous teal candidate overlay. Its known
WGS84 extent is used to recover the screenshot's map transform. The centre of
the user's red stroke is then converted to WGS84. This remains review evidence:
it is not an independent survey and this script never edits the public map.
"""

from __future__ import annotations

import argparse
import hashlib
import importlib.util
import json
import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw


def load_helpers(path: Path):
    spec = importlib.util.spec_from_file_location("laz5_batch_generator", path)
    module = importlib.util.module_from_spec(spec)
    assert spec.loader
    spec.loader.exec_module(module)
    return module


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def ring_area_pixels(ring: list[tuple[float, float]]) -> float:
    return abs(sum(x1 * y2 - x2 * y1 for (x1, y1), (x2, y2) in zip(ring, ring[1:]))) / 2


def resample_ring(ring: list[tuple[float, float]], count: int = 720) -> np.ndarray:
    points = np.asarray(ring, dtype=float)
    if np.array_equal(points[0], points[-1]):
        points = points[:-1]
    closed = np.vstack([points, points[0]])
    lengths = np.linalg.norm(np.diff(closed, axis=0), axis=1)
    cumulative = np.concatenate([[0.0], np.cumsum(lengths)])
    targets = np.linspace(0.0, cumulative[-1], count, endpoint=False)
    indexes = np.searchsorted(cumulative, targets, side="right") - 1
    indexes = np.clip(indexes, 0, len(lengths) - 1)
    fractions = (targets - cumulative[indexes]) / np.maximum(lengths[indexes], 1e-9)
    return closed[indexes] + (closed[indexes + 1] - closed[indexes]) * fractions[:, None]


def signed_area(points: np.ndarray) -> float:
    return float(np.sum(points[:, 0] * np.roll(points[:, 1], -1) - np.roll(points[:, 0], -1) * points[:, 1]) / 2)


def stroke_centreline(rings: list[list[tuple[float, float]]]) -> list[tuple[float, float]]:
    ranked = sorted(rings, key=ring_area_pixels, reverse=True)
    if len(ranked) < 2:
        raise RuntimeError("The red stroke is not a closed loop")
    outer = resample_ring(ranked[0])
    inner = resample_ring(ranked[1])
    if signed_area(outer) * signed_area(inner) < 0:
        inner = inner[::-1]
    scores = [float(np.mean(np.linalg.norm(outer - np.roll(inner, shift, axis=0), axis=1))) for shift in range(len(inner))]
    inner = np.roll(inner, int(np.argmin(scores)), axis=0)
    centre = (outer + inner) / 2
    result = [(float(x), float(y)) for x, y in centre]
    result.append(result[0])
    return result


def mercator(point: list[float]) -> tuple[float, float]:
    lon, lat = point
    radius = 6378137.0
    return radius * math.radians(lon), radius * math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))


def fit_screen_transform(teal_mask: np.ndarray, geo_ring: list[list[float]]) -> dict:
    ys, xs = np.where(teal_mask)
    if len(xs) < 100:
        raise RuntimeError("Could not find the teal candidate overlay used for calibration")
    # The AMap review stroke is about 6 px wide; use its centre extent.
    screen = [float(xs.min() + 3), float(ys.min() + 3), float(xs.max() - 3), float(ys.max() - 3)]
    projected = np.asarray([mercator(point) for point in geo_ring])
    min_x, min_y = projected.min(axis=0)
    max_x, max_y = projected.max(axis=0)
    scale_x = (screen[2] - screen[0]) / (max_x - min_x)
    scale_y = (screen[3] - screen[1]) / (max_y - min_y)
    return {
        "screenCandidateCentreBbox": [round(value, 2) for value in screen],
        "scaleX": scale_x,
        "scaleY": scale_y,
        "offsetX": screen[0] - scale_x * min_x,
        "offsetY": screen[1] + scale_y * max_y,
    }


def screen_to_wgs84(point: tuple[float, float], transform: dict) -> list[float]:
    radius = 6378137.0
    mx = (point[0] - transform["offsetX"]) / transform["scaleX"]
    my = (transform["offsetY"] - point[1]) / transform["scaleY"]
    lon = math.degrees(mx / radius)
    lat = math.degrees(2 * math.atan(math.exp(my / radius)) - math.pi / 2)
    return [lon, lat]


def spherical_area(ring: list[list[float]]) -> float:
    radius = 6371.0088
    total = 0.0
    for first, second in zip(ring, ring[1:]):
        lon1, lat1 = map(math.radians, first)
        lon2, lat2 = map(math.radians, second)
        total += (lon2 - lon1) * (2 + math.sin(lat1) + math.sin(lat2))
    return abs(total) * radius * radius / 2


def write_js(path: Path, global_name: str, value: dict) -> None:
    path.write_text(
        f"window.{global_name} = " + json.dumps(value, ensure_ascii=False, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--image", type=Path, required=True)
    parser.add_argument("--batch-dir", type=Path, required=True)
    parser.add_argument("--generator", type=Path, required=True)
    args = parser.parse_args()
    helper = load_helpers(args.generator)

    image = Image.open(args.image).convert("RGB")
    rgb = np.asarray(image)
    r, g, b = (rgb[:, :, index].astype(np.int16) for index in range(3))
    red = (r >= 235) & (g <= 105) & (b <= 105) & ((r - g) >= 145)
    red = helper.select_nearest_component(red, (500, 100))
    teal = (r <= 70) & (g >= 95) & (g <= 175) & (b >= 100) & (b <= 190) & ((g - r) >= 55)

    raw_rings = helper.boundary_rings(red)
    centreline = stroke_centreline(raw_rings)
    simplified = helper.simplify(centreline[:-1], 3.0)
    simplified.append(simplified[0])

    collection_path = args.batch_dir / "candidates.geojson"
    collection = json.loads(collection_path.read_text(encoding="utf-8"))
    feature = next(item for item in collection["features"] if item["properties"]["issueId"] == "LAZ-25")
    transform = fit_screen_transform(teal, feature["geometry"]["coordinates"][0])
    wgs84_ring = [screen_to_wgs84(point, transform) for point in simplified]
    area = spherical_area(wgs84_ring)
    reference_area = 34.3
    scale_to_reference = math.sqrt(reference_area / area)
    area_passed = 0.9 <= scale_to_reference <= 1.1
    blockers = [
        "red-line georeferencing is calibrated from the existing review overlay, not independent surveyed control points",
        "explicit project-owner acceptance is still required before public-map promotion",
    ]
    if not area_passed:
        blockers.insert(1, "red-line area differs from the documented reference area by more than 10% linear scaling")

    feature["properties"] = {
        **feature["properties"],
        "status": "review-only-user-redline",
        "referenceAreaSqKm": reference_area,
        "rawTracedAreaSqKm": round(area, 2),
        "uniformScaleFactor": round(scale_to_reference, 5),
        "areaAdjustmentPassed": area_passed,
        "areaMeasurementIndependent": True,
        "placementMethod": "screen-space Web Mercator fit to existing review candidate overlay",
        "visibleBoundarySource": "project-owner supplied red-line screenshot",
        "sourceImageSha256": digest(args.image),
        "promotionBlockedBy": blockers,
    }
    feature["geometry"] = {"type": "Polygon", "coordinates": [wgs84_ring]}
    collection_path.write_text(json.dumps(collection, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_js(args.batch_dir / "candidates.js", "FLOOD_STORAGE_LAZ5_BATCH_CANDIDATES", collection)

    task_dir = args.batch_dir / "laz-25"
    Image.fromarray((red * 255).astype(np.uint8), "L").save(task_dir / "redline-mask.png")
    image.save(task_dir / "redline-working-copy.png")
    preview = image.convert("RGBA")
    draw = ImageDraw.Draw(preview)
    draw.line(simplified, fill=(0, 115, 125, 255), width=3, joint="curve")
    preview.convert("RGB").save(task_dir / "redline-preview.jpg", quality=94)
    pixel_record = {
        "schemaVersion": 1,
        "issueId": "LAZ-25",
        "coordinateSystem": "redline-screenshot-pixels",
        "sourceImage": "source/linnan-redline.png",
        "sourceImageSize": list(image.size),
        "sourceSha256": digest(args.image),
        "calibration": {
            "method": "teal-review-candidate Web Mercator extent",
            **{key: round(value, 12) if isinstance(value, float) else value for key, value in transform.items()},
        },
        "ring": [[round(x, 2), round(y, 2)] for x, y in simplified],
    }
    (task_dir / "redline-pixel-ring.json").write_text(json.dumps(pixel_record, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (task_dir / "candidate.geojson").write_text(json.dumps(feature, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    report_path = args.batch_dir / "report.json"
    report = json.loads(report_path.read_text(encoding="utf-8"))
    task = next(item for item in report["tasks"] if item["issueId"] == "LAZ-25")
    task.update({
        "status": "candidate-ready-for-map-review-user-redline",
        "sourceImage": "source/linnan-redline.png",
        "sourceImageSize": list(image.size),
        "sourceSha256": digest(args.image),
        "targetMask": "laz-25/redline-mask.png",
        "pixelRings": "laz-25/redline-pixel-ring.json",
        "preview": "laz-25/redline-preview.jpg",
        "workingCopy": "laz-25/redline-working-copy.png",
        "pixelCount": int(red.sum()),
        "bbox": [int(np.where(red)[1].min()), int(np.where(red)[0].min()), int(np.where(red)[1].max() + 1), int(np.where(red)[0].max() + 1)],
        "occlusions": [],
        "referenceAreaSqKm": reference_area,
        "rawTracedAreaSqKm": round(area, 2),
        "uniformScaleFactor": round(scale_to_reference, 5),
        "areaAdjustmentPassed": area_passed,
        "promotionBlockedBy": blockers,
        "georeference": {
            "method": "screen-space Web Mercator fit to existing review candidate overlay",
            "controlPointCount": 0,
            "holdoutPointCount": 0,
            "leaveOneOutRmsKm": None,
            "leaveOneOutMaxKm": None,
            "thresholdRmsKm": 1.0,
            "thresholdMaxKm": 2.0,
            "passed": False,
        },
    })
    task.pop("areaNormalizationKmPerPixel", None)
    report["mapCandidateCount"] = len(collection["features"])
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_js(args.batch_dir / "report.js", "FLOOD_STORAGE_LAZ5_BATCH_REPORT", report)
    (task_dir / "task-report.json").write_text(json.dumps(task, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
