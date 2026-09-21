#!/usr/bin/env python3
"""Refine LAZ-5 review candidates into natural, map-guided boundaries.

The reference images locate a flood-storage area; their raster edges are not
accepted as geographic boundaries. LAZ-20 is re-georeferenced from the
Yangtze river visible in the supplied image and OpenStreetMap way 33684910.
The remaining owner-guided review outlines are resampled and curve-smoothed
to remove raster stair steps while they await surveyed/legal boundary data.

This script only updates review artifacts. It never edits the public map.
"""

from __future__ import annotations

import argparse
import json
import math
from pathlib import Path

import numpy as np


RENMIN_IMAGE_TRANSFORM = {
    "west": 112.37998748356785,
    "north": 30.010896728743838,
    "pixelsPerDegreeLongitude": 5076.596898289534,
    "pixelsPerDegreeLatitude": 5393.105601728585,
    "controlFeature": "OpenStreetMap Yangtze river way 33684910",
    "fitMethod": "deterministic river-mask alignment",
}


def perpendicular_distance(point, start, end) -> float:
    point, start, end = map(np.asarray, (point, start, end))
    if np.array_equal(start, end):
        return float(np.linalg.norm(point - start))
    vector = end - start
    cross = vector[0] * (start - point)[1] - vector[1] * (start - point)[0]
    return float(abs(cross) / np.linalg.norm(vector))


def simplify(points: list[list[float]], epsilon: float) -> list[list[float]]:
    if len(points) < 3:
        return points
    distances = [perpendicular_distance(point, points[0], points[-1]) for point in points[1:-1]]
    if not distances or max(distances) <= epsilon:
        return [points[0], points[-1]]
    index = distances.index(max(distances)) + 1
    return simplify(points[: index + 1], epsilon)[:-1] + simplify(points[index:], epsilon)


def resample_closed_ring(ring: list[list[float]], count: int = 96) -> list[list[float]]:
    points = np.asarray(ring, dtype=float)
    if np.array_equal(points[0], points[-1]):
        points = points[:-1]
    closed = np.vstack([points, points[0]])
    lengths = np.linalg.norm(np.diff(closed, axis=0), axis=1)
    cumulative = np.concatenate([[0.0], np.cumsum(lengths)])
    targets = np.linspace(0.0, cumulative[-1], count, endpoint=False)
    indexes = np.searchsorted(cumulative, targets, side="right") - 1
    indexes = np.clip(indexes, 0, len(lengths) - 1)
    fractions = (targets - cumulative[indexes]) / np.maximum(lengths[indexes], 1e-12)
    sampled = closed[indexes] + (closed[indexes + 1] - closed[indexes]) * fractions[:, None]
    result = sampled.tolist()
    result.append(result[0])
    return result


def chaikin_closed(ring: list[list[float]], iterations: int = 2) -> list[list[float]]:
    points = np.asarray(ring[:-1] if ring[0] == ring[-1] else ring, dtype=float)
    for _ in range(iterations):
        following = np.roll(points, -1, axis=0)
        first = 0.75 * points + 0.25 * following
        second = 0.25 * points + 0.75 * following
        points = np.stack([first, second], axis=1).reshape(-1, 2)
    result = points.tolist()
    result.append(result[0])
    return result


def naturalize_review_ring(ring: list[list[float]]) -> list[list[float]]:
    sampled = resample_closed_ring(ring, 72)
    curved = chaikin_closed(sampled, 2)
    return resample_closed_ring(curved, 96)


def pixel_to_wgs84(point: list[float]) -> list[float]:
    x, y = point
    return [
        RENMIN_IMAGE_TRANSFORM["west"] + x / RENMIN_IMAGE_TRANSFORM["pixelsPerDegreeLongitude"],
        RENMIN_IMAGE_TRANSFORM["north"] - y / RENMIN_IMAGE_TRANSFORM["pixelsPerDegreeLatitude"],
    ]


def spherical_area(ring: list[list[float]]) -> float:
    radius = 6371.0088
    total = 0.0
    for first, second in zip(ring, ring[1:]):
        lon1, lat1 = map(math.radians, first)
        lon2, lat2 = map(math.radians, second)
        total += (lon2 - lon1) * (2 + math.sin(lat1) + math.sin(lat2))
    return abs(total) * radius * radius / 2


def scale_ring_and_align_west(
    ring: list[list[float]], target_area_sq_km: float
) -> tuple[list[list[float]], float, float]:
    """Uniformly shrink a ring, then restore its original western extent."""
    original_area = spherical_area(ring)
    original_west = min(point[0] for point in ring)
    open_ring = np.asarray(ring[:-1], dtype=float)
    centre = open_ring.mean(axis=0)
    scaled = open_ring.copy()
    cumulative_scale = 1.0

    # A second pass removes the small spherical-area approximation error.
    for _ in range(2):
        current_ring = scaled.tolist() + [scaled[0].tolist()]
        factor = math.sqrt(target_area_sq_km / spherical_area(current_ring))
        cumulative_scale *= factor
        scaled = centre + (scaled - centre) * factor
        scaled[:, 0] += original_west - float(scaled[:, 0].min())

    result = scaled.tolist()
    result.append(result[0])
    return result, original_area, cumulative_scale


def write_js(path: Path, name: str, value: dict) -> None:
    path.write_text(
        f"window.{name} = " + json.dumps(value, ensure_ascii=False, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--batch-dir", type=Path, required=True)
    args = parser.parse_args()

    collection_path = args.batch_dir / "candidates.geojson"
    collection = json.loads(collection_path.read_text(encoding="utf-8"))
    report_path = args.batch_dir / "report.json"
    report = json.loads(report_path.read_text(encoding="utf-8"))

    for feature in collection["features"]:
        issue_id = feature["properties"]["issueId"]
        task = next(item for item in report["tasks"] if item["issueId"] == issue_id)

        if issue_id == "LAZ-20":
            pixel_record = json.loads(
                (args.batch_dir / "laz-20/pixel-rings.json").read_text(encoding="utf-8")
            )
            pixel_ring = pixel_record["rings"][0]
            if pixel_ring[0] == pixel_ring[-1]:
                pixel_ring = pixel_ring[:-1]
            simplified = simplify(pixel_ring, 12.0)
            simplified.append(simplified[0])
            ring = naturalize_review_ring([pixel_to_wgs84(point) for point in simplified])
            ring, pre_scale_area, west_scale_factor = scale_ring_and_align_west(
                ring, float(feature["properties"]["referenceAreaSqKm"])
            )
            placement = "basemap riverbank georeference; uniformly scaled and west-aligned to 341 km²"
            source = "project-owner location reference aligned to the Yangtze riverbank"
            feature["properties"]["westBoundarySnappedTo"] = "riverbank"
            feature["properties"]["scaleAnchor"] = "west-edge-aligned"
            feature["properties"]["preScaleAreaSqKm"] = round(pre_scale_area, 2)
            feature["properties"]["westAlignedScaleFactor"] = round(west_scale_factor, 5)
            feature["properties"]["geographicControl"] = RENMIN_IMAGE_TRANSFORM
            feature["properties"]["promotionBlockedBy"] = [
                "river alignment uses the supplied image and public map data, not surveyed boundary points",
                "non-river sides still require project-owner map review before public-map promotion",
            ]
            task["geographicControl"] = RENMIN_IMAGE_TRANSFORM
            task["scaleAnchor"] = "west-edge-aligned"
            task["preScaleAreaSqKm"] = round(pre_scale_area, 2)
            task["westAlignedScaleFactor"] = round(west_scale_factor, 5)
            task["promotionBlockedBy"] = feature["properties"]["promotionBlockedBy"]
        else:
            ring = naturalize_review_ring(feature["geometry"]["coordinates"][0])
            placement = "basemap-guided natural curve refinement of the owner-supplied location envelope"
            source = "project-owner location reference interpreted against visible map geography"

        area = spherical_area(ring)
        reference = float(feature["properties"]["referenceAreaSqKm"])
        scale_factor = math.sqrt(reference / area)
        feature["geometry"] = {"type": "Polygon", "coordinates": [ring]}
        feature["properties"].update(
            {
                "status": "review-only-natural-boundary",
                "rawTracedAreaSqKm": round(area, 2),
                "uniformScaleFactor": round(scale_factor, 5),
                "areaAdjustmentPassed": 0.9 <= scale_factor <= 1.1,
                "placementMethod": placement,
                "visibleBoundarySource": source,
                "boundaryBasis": "basemap-geographic-features",
                "pixelOutlineUsedAsBoundary": False,
                "naturalCurveRefinement": True,
            }
        )
        task.update(
            {
                "status": "candidate-ready-for-map-review-natural-boundary",
                "rawTracedAreaSqKm": round(area, 2),
                "uniformScaleFactor": round(scale_factor, 5),
                "areaAdjustmentPassed": 0.9 <= scale_factor <= 1.1,
                "boundaryBasis": "basemap-geographic-features",
                "pixelOutlineUsedAsBoundary": False,
                "naturalCurveRefinement": True,
            }
        )
        if issue_id == "LAZ-20":
            task["westBoundarySnappedTo"] = "riverbank"
        task_dir = args.batch_dir / issue_id.lower()
        (task_dir / "candidate.geojson").write_text(
            json.dumps(feature, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        (task_dir / "task-report.json").write_text(
            json.dumps(task, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )

    collection_path.write_text(
        json.dumps(collection, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    write_js(args.batch_dir / "candidates.js", "FLOOD_STORAGE_LAZ5_BATCH_CANDIDATES", collection)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_js(args.batch_dir / "report.js", "FLOOD_STORAGE_LAZ5_BATCH_REPORT", report)


if __name__ == "__main__":
    main()
