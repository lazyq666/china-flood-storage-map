#!/usr/bin/env python3
"""Generate review-only flood-zone candidates from the 2007 reference-map image.

This intentionally does not edit data/location-boundaries.js. The source map is a
cartographic overview, and its georeferencing must pass the documented holdout
threshold before a candidate can be promoted to the public map.
"""

from __future__ import annotations

import argparse
import json
import math
from collections import defaultdict, deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter


CONTROL_POINTS = [
    # name, pixel x/y, approximate WGS84 city-centre longitude/latitude
    ("荆州", 328.0, 406.8, 112.2397, 30.3352),
    ("南县", 383.0, 793.7, 112.4104, 29.3722),
    ("汉寿", 247.9, 982.2, 111.9705, 28.9062),
    ("湘阴", 572.6, 1060.9, 112.8897, 28.6892),
    ("岳阳", 639.1, 795.3, 113.1289, 29.3571),
    ("武汉", 1016.5, 275.9, 114.3054, 30.5931),
    ("黄冈", 1223.5, 325.9, 114.8723, 30.4535),
    ("咸宁", 1041.0, 585.3, 114.3225, 29.8413),
    ("黄梅", 1594.5, 450.4, 115.9442, 30.0705),
    ("九江", 1603.3, 627.3, 116.0019, 29.7051),
    ("永修", 1573.4, 885.0, 115.8321, 29.0114),
    ("南昌", 1591.8, 1018.5, 115.8582, 28.6829),
]


REGIONS = [
    {
        "id": "长江-25",
        "name": "荆江分洪区",
        "crop": (250, 390, 390, 720),
        "seed": (314, 540),
        "referenceAreaSqKm": 921.0,
        "color": "key",
        "close": 25,
        "traceSource": "clean-jingjiang-reference",
    },
    {
        "id": "长江-30",
        "name": "杜家台",
        "crop": (710, 316, 1015, 478),
        "seed": (785, 382),
        "referenceAreaSqKm": 613.98,
        "color": "important",
        "close": 23,
        "traceSource": "clean-dujiatai-reference",
    },
    {
        "id": "长江-36",
        "name": "康山圩",
        "crop": (1705, 865, 1860, 1020),
        "seed": (1811, 943),
        "referenceAreaSqKm": 343.4,
        "color": "important",
        "close": 19,
        "traceSource": "clean-kangshan-reference",
    },
]


def design_matrix(points: list[tuple], width: int, height: int) -> np.ndarray:
    return np.asarray([[1.0, p[1] / width, p[2] / height] for p in points])


def haversine_km(a: np.ndarray, b: np.ndarray) -> float:
    lon1, lat1 = map(math.radians, a)
    lon2, lat2 = map(math.radians, b)
    dlon, dlat = lon2 - lon1, lat2 - lat1
    value = math.sin(dlat / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2) ** 2
    return 6371.0088 * 2 * math.asin(min(1.0, math.sqrt(value)))


def fit_georeference(width: int, height: int) -> tuple[np.ndarray, dict]:
    x = design_matrix(CONTROL_POINTS, width, height)
    y = np.asarray([[p[3], p[4]] for p in CONTROL_POINTS])
    coefficients = np.linalg.lstsq(x, y, rcond=None)[0]
    fitted_errors = [haversine_km(a, b) for a, b in zip(x @ coefficients, y)]
    holdout_errors = []
    for index in range(len(CONTROL_POINTS)):
        keep = np.arange(len(CONTROL_POINTS)) != index
        candidate = np.linalg.lstsq(x[keep], y[keep], rcond=None)[0]
        holdout_errors.append(haversine_km(x[index] @ candidate, y[index]))
    metrics = {
        "model": "global-affine",
        "controlPointCount": len(CONTROL_POINTS),
        "fitRmsKm": round(float(np.sqrt(np.mean(np.square(fitted_errors)))), 3),
        "fitMaxKm": round(max(fitted_errors), 3),
        "leaveOneOutRmsKm": round(float(np.sqrt(np.mean(np.square(holdout_errors)))), 3),
        "leaveOneOutMaxKm": round(max(holdout_errors), 3),
        "thresholdRmsKm": 1.0,
        "thresholdMaxKm": 2.0,
        "passed": False,
        "controlPoints": [
            {
                "name": point[0],
                "pixel": [point[1], point[2]],
                "wgs84": [point[3], point[4]],
                "fitErrorKm": round(fitted_errors[index], 3),
                "holdoutErrorKm": round(holdout_errors[index], 3),
            }
            for index, point in enumerate(CONTROL_POINTS)
        ],
    }
    metrics["passed"] = (
        metrics["leaveOneOutRmsKm"] <= metrics["thresholdRmsKm"]
        and metrics["leaveOneOutMaxKm"] <= metrics["thresholdMaxKm"]
    )
    return coefficients, metrics


def target_mask(rgb: np.ndarray, color: str) -> np.ndarray:
    r, g, b = (rgb[:, :, index].astype(np.int16) for index in range(3))
    if color == "key":
        return (
            (r >= 168) & (r <= 228) & (g >= 82) & (g <= 158) &
            (b >= 78) & (b <= 160) & ((r - g) >= 42) & (np.abs(g - b) <= 34)
        )
    return (
        (r >= 182) & (r <= 238) & (g >= 112) & (g <= 178) &
        (b >= 82) & (b <= 150) & ((r - g) >= 42) & ((g - b) >= 8)
    )


def component_nearest_seed(mask: np.ndarray, seed: tuple[int, int]) -> np.ndarray:
    height, width = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    components: list[tuple[float, list[tuple[int, int]]]] = []
    for y, x in zip(*np.where(mask)):
        if seen[y, x]:
            continue
        queue = [(int(y), int(x))]
        seen[y, x] = True
        pixels = []
        while queue:
            cy, cx = queue.pop()
            pixels.append((cy, cx))
            for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                ny, nx = cy + dy, cx + dx
                if 0 <= ny < height and 0 <= nx < width and mask[ny, nx] and not seen[ny, nx]:
                    seen[ny, nx] = True
                    queue.append((ny, nx))
        if len(pixels) >= 20:
            distance = min((px - seed[0]) ** 2 + (py - seed[1]) ** 2 for py, px in pixels)
            components.append((distance, pixels))
    if not components:
        raise RuntimeError("No colored component survived extraction")
    pixels = min(components, key=lambda item: (item[0], -len(item[1])))[1]
    result = np.zeros_like(mask, dtype=bool)
    for y, x in pixels:
        result[y, x] = True
    return result


def fill_holes(mask: np.ndarray) -> np.ndarray:
    height, width = mask.shape
    outside = np.zeros_like(mask, dtype=bool)
    queue: deque[tuple[int, int]] = deque()
    for x in range(width):
        for y in (0, height - 1):
            if not mask[y, x] and not outside[y, x]:
                outside[y, x] = True
                queue.append((y, x))
    for y in range(height):
        for x in (0, width - 1):
            if not mask[y, x] and not outside[y, x]:
                outside[y, x] = True
                queue.append((y, x))
    while queue:
        y, x = queue.popleft()
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < height and 0 <= nx < width and not mask[ny, nx] and not outside[ny, nx]:
                outside[ny, nx] = True
                queue.append((ny, nx))
    return mask | (~mask & ~outside)


def extract_region(image: Image.Image, region: dict) -> np.ndarray:
    rgb = np.asarray(image)
    raw = target_mask(rgb, region["color"])
    x1, y1, x2, y2 = region["crop"]
    cropped = np.zeros_like(raw)
    cropped[y1:y2, x1:x2] = raw[y1:y2, x1:x2]
    pil = Image.fromarray((cropped * 255).astype(np.uint8))
    size = region["close"] | 1
    closed = np.asarray(pil.filter(ImageFilter.MaxFilter(size)).filter(ImageFilter.MinFilter(size))) > 0
    component = component_nearest_seed(closed, region["seed"])
    return fill_holes(component)


def extract_clean_jingjiang_reference(reference: Image.Image, canvas_size: tuple[int, int]) -> np.ndarray:
    """Map the user's clean #A64F61 tracing back into the 2048x1152 source-map pixels.

    The clean image is a 10x crop of source pixels x=261..414, y=402..676.
    Alignment was independently checked against the city marker, blue rivers and
    orange neighbouring zone (best structural match at 10.05x; 10x is the source
    crop's exact integer scale).
    """
    if reference.size != (1536, 2752):
        raise ValueError(f"Expected 1536x2752 Jingjiang reference, received {reference.size}")
    rgb = np.asarray(reference.convert("RGB")).astype(np.int16)
    target = np.asarray([166, 79, 97], dtype=np.int16)
    exact_color = np.linalg.norm(rgb - target, axis=2) <= 18
    exact_color = component_nearest_seed(exact_color, (768, 1400))
    reduced = np.asarray(
        Image.fromarray(exact_color).resize((154, 275), Image.Resampling.NEAREST)
    ).astype(bool)
    canvas = np.zeros((canvas_size[1], canvas_size[0]), dtype=bool)
    canvas[402:677, 261:415] = reduced
    return fill_holes(canvas)


def extract_clean_dujiatai_reference(reference: Image.Image, canvas_size: tuple[int, int]) -> np.ndarray:
    """Map the user's clean #C57C5B tracing back into source-map pixels.

    The clean 742x400 image aligns to source pixels x=710..1014, y=316..477.
    The transform was selected by jointly matching the visible fill and river
    strokes; their combined Dice overlap is 0.814 at 305x162 source pixels.
    """
    if reference.size != (742, 400):
        raise ValueError(f"Expected 742x400 Dujiatai reference, received {reference.size}")
    rgb = np.asarray(reference.convert("RGB")).astype(np.int16)
    target = np.asarray([197, 124, 91], dtype=np.int16)
    exact_color = np.linalg.norm(rgb - target, axis=2) <= 18
    exact_color = component_nearest_seed(exact_color, (380, 190))
    reduced = np.asarray(
        Image.fromarray(exact_color).resize((305, 162), Image.Resampling.NEAREST)
    ).astype(bool)
    canvas = np.zeros((canvas_size[1], canvas_size[0]), dtype=bool)
    canvas[316:478, 710:1015] = reduced
    return fill_holes(canvas)


def keep_components(mask: np.ndarray, minimum_pixels: int) -> np.ndarray:
    height, width = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    result = np.zeros_like(mask, dtype=bool)
    for y, x in zip(*np.where(mask)):
        if seen[y, x]:
            continue
        queue = [(int(y), int(x))]
        seen[y, x] = True
        pixels = []
        while queue:
            cy, cx = queue.pop()
            pixels.append((cy, cx))
            for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                ny, nx = cy + dy, cx + dx
                if 0 <= ny < height and 0 <= nx < width and mask[ny, nx] and not seen[ny, nx]:
                    seen[ny, nx] = True
                    queue.append((ny, nx))
        if len(pixels) >= minimum_pixels:
            for py, px in pixels:
                result[py, px] = True
    return result


def extract_clean_kangshan_reference(reference: Image.Image, canvas_size: tuple[int, int]) -> np.ndarray:
    """Normalize the user's halftone orange Kangshan scan around the old map anchor.

    The scan has no coordinate grid or map scale. Its shape is therefore anchored
    to the centroid of the old visible Kangshan fragment (about pixel 1789, 950),
    then normalized by the independently sourced 343.4 km² reference area.
    """
    if reference.size != (1024, 1024):
        raise ValueError(f"Expected 1024x1024 Kangshan reference, received {reference.size}")
    rgb = np.asarray(reference.convert("RGB")).astype(np.int16)
    r, g, b = (rgb[:, :, index] for index in range(3))
    orange = (r - g > 25) & (g - b > 8) & (r > 155) & (b < 190)
    coverage = np.asarray(
        Image.fromarray((orange * 255).astype(np.uint8)).resize((120, 120), Image.Resampling.BOX)
    )
    reduced = keep_components(coverage >= 80, 8)
    reduced = fill_holes(reduced)
    canvas = np.zeros((canvas_size[1], canvas_size[0]), dtype=bool)
    canvas[890:1010, 1729:1849] = reduced
    return canvas


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
    rings = []
    unused = {(start, end) for start, ends in edges.items() for end in ends}
    while unused:
        first = next(iter(unused))
        start, current = first
        ring = [start, current]
        unused.remove(first)
        while current != start:
            candidates = [edge for edge in unused if edge[0] == current]
            if not candidates:
                break
            edge = candidates[0]
            unused.remove(edge)
            current = edge[1]
            ring.append(current)
        if len(ring) > 8 and ring[-1] == ring[0]:
            rings.append(ring)
    if not rings:
        raise RuntimeError("Could not trace extracted component")
    return sorted(rings, key=len, reverse=True)


def boundary_ring(mask: np.ndarray) -> list[tuple[float, float]]:
    return boundary_rings(mask)[0]


def perpendicular_distance(point, start, end) -> float:
    point, start, end = map(np.asarray, (point, start, end))
    if np.array_equal(start, end):
        return float(np.linalg.norm(point - start))
    vector = end - start
    offset = start - point
    cross = vector[0] * offset[1] - vector[1] * offset[0]
    return float(abs(cross) / np.linalg.norm(vector))


def simplify(points: list[tuple], epsilon: float) -> list[tuple]:
    if len(points) < 3:
        return points
    distances = [perpendicular_distance(point, points[0], points[-1]) for point in points[1:-1]]
    if not distances or max(distances) <= epsilon:
        return [points[0], points[-1]]
    index = distances.index(max(distances)) + 1
    return simplify(points[: index + 1], epsilon)[:-1] + simplify(points[index:], epsilon)


def pixel_to_geo(point: tuple[float, float], coefficients: np.ndarray, width: int, height: int) -> list[float]:
    value = np.asarray([1.0, point[0] / width, point[1] / height]) @ coefficients
    return [float(value[0]), float(value[1])]


def spherical_area_sq_km(ring: list[list[float]]) -> float:
    radius = 6371.0088
    total = 0.0
    for first, second in zip(ring, ring[1:]):
        lon1, lat1 = map(math.radians, first)
        lon2, lat2 = map(math.radians, second)
        total += (lon2 - lon1) * (2 + math.sin(lat1) + math.sin(lat2))
    return abs(total) * radius * radius / 2


def scale_to_area(ring: list[list[float]], target_area: float) -> tuple[list[list[float]], float]:
    raw_area = spherical_area_sq_km(ring)
    scale = math.sqrt(target_area / raw_area)
    body = np.asarray(ring[:-1])
    centre = body.mean(axis=0)
    scaled = centre + (body - centre) * scale
    result = scaled.tolist()
    result.append(result[0])
    return result, scale


def scale_rings_to_area(
    rings: list[list[list[float]]], target_area: float
) -> tuple[list[list[list[float]]], float]:
    raw_area = sum(spherical_area_sq_km(ring) for ring in rings)
    scale = math.sqrt(target_area / raw_area)
    bodies = [np.asarray(ring[:-1]) for ring in rings]
    centre = np.concatenate(bodies).mean(axis=0)
    scaled_rings = []
    for body in bodies:
        scaled = centre + (body - centre) * scale
        result = scaled.tolist()
        result.append(result[0])
        scaled_rings.append(result)
    return scaled_rings, scale


def make_preview(image: Image.Image, masks: list[tuple[dict, np.ndarray]], path: Path) -> None:
    preview = image.convert("RGBA")
    colors = [(15, 118, 110, 135), (37, 99, 235, 135), (124, 58, 237, 155)]
    overlay = Image.new("RGBA", image.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for (region, mask), color in zip(masks, colors):
        ys, xs = np.where(mask)
        for y, x in zip(ys, xs):
            draw.point((int(x), int(y)), fill=color)
        x1, y1, _, _ = region["crop"]
        draw.text((x1 + 4, y1 + 4), f'{region["id"]} candidate', fill=(10, 35, 60, 255))
    Image.alpha_composite(preview, overlay).convert("RGB").save(path, quality=92)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("image", type=Path)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--jingjiang-reference", type=Path)
    parser.add_argument("--dujiatai-reference", type=Path)
    parser.add_argument("--kangshan-reference", type=Path)
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)
    image = Image.open(args.image).convert("RGB")
    width, height = image.size
    if (width, height) != (2048, 1152):
        raise SystemExit(f"Expected the 2048x1152 source image, received {width}x{height}")

    coefficients, georeference = fit_georeference(width, height)
    jingjiang_reference = (
        Image.open(args.jingjiang_reference).convert("RGB") if args.jingjiang_reference else None
    )
    dujiatai_reference = (
        Image.open(args.dujiatai_reference).convert("RGB") if args.dujiatai_reference else None
    )
    if dujiatai_reference is not None:
        dujiatai_reference.save(
            args.output / "dujiatai-clean-reference.jpg", quality=94, subsampling=0
        )
    kangshan_reference = (
        Image.open(args.kangshan_reference).convert("RGB") if args.kangshan_reference else None
    )
    if kangshan_reference is not None:
        kangshan_reference.save(
            args.output / "kangshan-clean-reference.jpg", quality=94, subsampling=0
        )
    features = []
    masks = []
    region_reports = []
    for region in REGIONS:
        if region["id"] == "长江-25" and jingjiang_reference is not None:
            mask = extract_clean_jingjiang_reference(jingjiang_reference, image.size)
            trace_source = "user-confirmed #A64F61 clean reference"
        elif region["id"] == "长江-30" and dujiatai_reference is not None:
            mask = extract_clean_dujiatai_reference(dujiatai_reference, image.size)
            trace_source = "user-confirmed #C57C5B clean reference"
        elif region["id"] == "长江-36" and kangshan_reference is not None:
            mask = extract_clean_kangshan_reference(kangshan_reference, image.size)
            trace_source = "user-confirmed orange scan reference"
        else:
            mask = extract_region(image, region)
            trace_source = "color-segmented labeled overview map"
        masks.append((region, mask))
        pixel_rings = boundary_rings(mask) if region["id"] == "长江-36" and kangshan_reference is not None else [boundary_ring(mask)]
        pixel_rings = [simplify(ring[:-1], 2.0) for ring in pixel_rings]
        pixel_rings = [ring + [ring[0]] for ring in pixel_rings if len(ring) >= 3]
        raw_rings = [
            [pixel_to_geo(point, coefficients, width, height) for point in pixel_ring]
            for pixel_ring in pixel_rings
        ]
        raw_area = sum(spherical_area_sq_km(ring) for ring in raw_rings)
        constrained_rings, scale = scale_rings_to_area(raw_rings, region["referenceAreaSqKm"])
        constrained_area = sum(spherical_area_sq_km(ring) for ring in constrained_rings)
        area_measurement_independent = not (
            region["id"] == "长江-36" and kangshan_reference is not None
        )
        area_adjustment_passed = area_measurement_independent and 0.9 <= scale <= 1.1
        blocked_by = ["leave-one-out georeferencing error"]
        if not area_measurement_independent:
            blocked_by.append("clean reference lacks an independent map scale and coordinate grid")
        if not area_adjustment_passed:
            if area_measurement_independent:
                blocked_by.append("area constraint requires more than 10% uniform linear scaling")
        properties = {
            "zoneId": region["id"],
            "name": region["name"],
            "status": "review-only-checks-failed",
            "coordinateSystem": "WGS84",
            "referenceAreaSqKm": region["referenceAreaSqKm"],
            "rawTracedAreaSqKm": round(raw_area, 2),
            "constrainedAreaSqKm": round(constrained_area, 2),
            "uniformScaleFactor": round(scale, 5),
            "areaAdjustmentPassed": area_adjustment_passed,
            "areaMeasurementIndependent": area_measurement_independent,
            "placementMethod": (
                "old-fragment-centroid plus reference-area normalization"
                if not area_measurement_independent
                else "source-image alignment"
            ),
            "visibleBoundarySource": trace_source,
            "legalBoundary": False,
            "fieldVerified": False,
            "promotionBlockedBy": blocked_by,
        }
        features.append({
            "type": "Feature",
            "properties": properties,
            "geometry": (
                {"type": "MultiPolygon", "coordinates": [[ring] for ring in constrained_rings]}
                if len(constrained_rings) > 1
                else {"type": "Polygon", "coordinates": [constrained_rings[0]]}
            ),
        })
        region_reports.append(properties)
        if region["id"] == "长江-25" and jingjiang_reference is not None:
            (args.output / "jingjiang-reference-pixel-ring.json").write_text(
                json.dumps({
                    "coordinateSystem": "source-image-pixels",
                    "sourceImageSize": [width, height],
                    "referenceColor": "#A64F61",
                    "alignment": {"scale": 10.0, "sourceOrigin": [261, 402]},
                    "ring": [[round(float(x), 2), round(float(y), 2)] for x, y in pixel_rings[0]],
                }, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )
        if region["id"] == "长江-30" and dujiatai_reference is not None:
            (args.output / "dujiatai-reference-pixel-ring.json").write_text(
                json.dumps({
                    "coordinateSystem": "source-image-pixels",
                    "sourceImageSize": [width, height],
                    "referenceColor": "#C57C5B",
                    "alignment": {
                        "sourceOrigin": [710, 316],
                        "sourceSize": [305, 162],
                        "referenceSize": [742, 400],
                    },
                    "ring": [[round(float(x), 2), round(float(y), 2)] for x, y in pixel_rings[0]],
                }, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )
        if region["id"] == "长江-36" and kangshan_reference is not None:
            (args.output / "kangshan-reference-pixel-rings.json").write_text(
                json.dumps({
                    "coordinateSystem": "source-image-pixels",
                    "sourceImageSize": [width, height],
                    "referenceColor": "orange halftone region",
                    "placement": {
                        "method": "old-fragment-centroid plus reference-area normalization",
                        "sourceOrigin": [1729, 890],
                        "sourceSize": [120, 120],
                        "referenceSize": [1024, 1024],
                    },
                    "rings": [
                        [[round(float(x), 2), round(float(y), 2)] for x, y in ring]
                        for ring in pixel_rings
                    ],
                }, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )

    collection = {
        "type": "FeatureCollection",
        "name": "reference-map-boundary-candidates-2026-09-16",
        "features": features,
    }
    (args.output / "candidates.geojson").write_text(
        json.dumps(collection, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (args.output / "candidates.js").write_text(
        "window.FLOOD_STORAGE_REFERENCE_MAP_CANDIDATES = "
        + json.dumps(collection, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    report = {
        "source": {
            "title": "长江中下游干流蓄滞洪区分布",
            "referencePrintedOnImage": "长江勘测规划设计研究院，《长江流域蓄滞洪区图集》，2007",
            "imageSize": [width, height],
            "rawSourceImageCommitted": False,
            "derivedPreviewIncludesSourceImage": True,
            "jingjiangCleanReferenceUsed": jingjiang_reference is not None,
            "dujiataiCleanReferenceUsed": dujiatai_reference is not None,
            "kangshanCleanReferenceUsed": kangshan_reference is not None,
        },
        "georeference": georeference,
        "regions": region_reports,
        "decision": {
            "promoteToPublicBoundaryData": False,
            "reason": "The independent holdout error exceeds the project's 1 km RMS / 2 km maximum trial threshold.",
            "nextEvidenceNeeded": "A georeferenceable original map or local engineering/river control points around each trial zone.",
        },
    }
    (args.output / "report.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    make_preview(image, masks, args.output / "extraction-preview.jpg")


if __name__ == "__main__":
    main()
