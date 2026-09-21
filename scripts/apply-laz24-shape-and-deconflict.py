#!/usr/bin/env python3
"""Add the LAZ-24 review shape and record the LAZ-29/LAZ-27 separation.

This updates review artifacts only. The public map remains unchanged.
"""

from __future__ import annotations

import argparse
import json
import math
from pathlib import Path


REFERENCE_SHAPE = [
    [0.18, 0.08], [0.32, 0.05], [0.35, 0.11], [0.43, 0.12],
    [0.51, 0.06], [0.62, 0.02], [0.76, 0.02], [0.78, 0.18],
    [0.79, 0.34], [0.76, 0.46], [0.80, 0.50], [0.75, 0.58],
    [0.80, 0.65], [0.74, 0.72], [0.79, 0.79], [0.73, 0.88],
    [0.68, 0.94], [0.58, 0.96], [0.52, 0.85], [0.46, 0.72],
    [0.40, 0.60], [0.34, 0.48], [0.28, 0.36], [0.22, 0.24],
    [0.16, 0.14], [0.18, 0.08],
]

HUDU_RIVER_EAST_BANK_OFFSET_DEGREES = 0.0018


def read_main_boundaries(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    start = text.index("const payload = ") + len("const payload = ")
    end = text.index(";\n  window.FLOOD_STORAGE_LOCATION_BOUNDARIES", start)
    return json.loads(text[start:end])


def spherical_area(ring: list[list[float]]) -> float:
    radius = 6371.0088
    total = 0.0
    for first, second in zip(ring, ring[1:]):
        lon1, lat1 = map(math.radians, first)
        lon2, lat2 = map(math.radians, second)
        total += (lon2 - lon1) * (2 + math.sin(lat1) + math.sin(lat2))
    return abs(total) * radius * radius / 2


def chaikin_closed(ring: list[list[float]], iterations: int = 2) -> list[list[float]]:
    points = ring[:-1] if ring[0] == ring[-1] else ring
    for _ in range(iterations):
        refined = []
        for index, point in enumerate(points):
            following = points[(index + 1) % len(points)]
            refined.append([0.75 * point[0] + 0.25 * following[0], 0.75 * point[1] + 0.25 * following[1]])
            refined.append([0.25 * point[0] + 0.75 * following[0], 0.25 * point[1] + 0.75 * following[1]])
        points = refined
    return points + [points[0]]


def chaikin_open(points: list[list[float]], iterations: int = 2) -> list[list[float]]:
    for _ in range(iterations):
        refined = [points[0]]
        for first, second in zip(points, points[1:]):
            refined.append([0.75 * first[0] + 0.25 * second[0], 0.75 * first[1] + 0.25 * second[1]])
            refined.append([0.25 * first[0] + 0.75 * second[0], 0.25 * first[1] + 0.75 * second[1]])
        refined.append(points[-1])
        points = refined
    return points


def interpolate_longitude(path: list[list[float]], latitude: float) -> float:
    for first, second in zip(path, path[1:]):
        low, high = sorted((first[1], second[1]))
        if low <= latitude <= high and first[1] != second[1]:
            ratio = (latitude - first[1]) / (second[1] - first[1])
            return first[0] + ratio * (second[0] - first[0])
    return min(path, key=lambda point: abs(point[1] - latitude))[0]


def build_wanshi_ring(main_zone: dict, target_area: float) -> list[list[float]]:
    """Inset the existing land envelope while preserving both river banks."""
    main_path = main_zone["path"]
    river_bank = main_path[4:38]
    # North river bank, west side, and south side, ordered north to south.
    north_bank_arc = main_path[37:67] + [main_path[0]]
    adjustable_side = main_path[1:5]
    interior_anchor = [float(main_zone["lng"]), float(main_zone["lat"])]

    def ring_for_inset(inset_factor: float) -> list[list[float]]:
        side = [[
            interior_anchor[0] + (longitude - interior_anchor[0]) * inset_factor,
            interior_anchor[1] + (latitude - interior_anchor[1]) * inset_factor,
        ] for longitude, latitude in adjustable_side[:-1]]
        arc = north_bank_arc + side + [river_bank[0]]
        arc[0] = river_bank[-1]
        arc[-1] = river_bank[0]
        return arc + river_bank[1:]

    low, high = 0.0, 1.0
    for _ in range(60):
        middle = (low + high) / 2
        if spherical_area(ring_for_inset(middle)) < target_area:
            low = middle
        else:
            high = middle
    return ring_for_inset((low + high) / 2)


def build_jingjiang_context(main_zone: dict, river_bank: list[list[float]]) -> tuple[dict, dict]:
    east_bank = [[longitude + HUDU_RIVER_EAST_BANK_OFFSET_DEGREES, latitude] for longitude, latitude in river_bank]
    main_path = main_zone["path"]
    adjustable = main_path[:37] + main_path[46:-1]
    anchor = [float(main_zone["lng"]), float(main_zone["lat"])]

    def context_for_factor(factor: float) -> list[list[float]]:
        scaled = [[
            anchor[0] + (longitude - anchor[0]) * factor,
            anchor[1] + (latitude - anchor[1]) * factor,
        ] for longitude, latitude in adjustable]
        prefix_length = 37
        ring = scaled[:prefix_length] + east_bank + scaled[prefix_length:]
        return ring + [ring[0]]

    target_area = float(main_zone["referenceAreaSqKm"])
    low, high = 0.9, 1.0
    for _ in range(60):
        middle = (low + high) / 2
        if spherical_area(context_for_factor(middle)) < target_area:
            low = middle
        else:
            high = middle
    context_ring = context_for_factor((low + high) / 2)
    river_ring = river_bank + list(reversed(east_bank)) + [river_bank[0]]
    context = {
        "type": "Feature",
        "properties": {
            "name": "荆江分洪区河岸对齐验收上下文",
            "contextFor": "LAZ-24",
            "sharedSeparator": "虎渡河",
            "status": "review-only-context",
            "referenceAreaSqKm": target_area,
            "geometryAreaSqKm": round(spherical_area(context_ring), 2),
        },
        "geometry": {"type": "Polygon", "coordinates": [context_ring]},
    }
    river = {
        "type": "Feature",
        "properties": {"name": "虎渡河分隔带", "contextFor": "LAZ-24", "widthKm": 0.173},
        "geometry": {"type": "Polygon", "coordinates": [river_ring]},
    }
    return context, river


def point_segment_distance_km(point, start, end, latitude) -> float:
    scale_x = 111.320 * math.cos(math.radians(latitude))
    scale_y = 110.574
    px, py = point[0] * scale_x, point[1] * scale_y
    ax, ay = start[0] * scale_x, start[1] * scale_y
    bx, by = end[0] * scale_x, end[1] * scale_y
    dx, dy = bx - ax, by - ay
    denominator = dx * dx + dy * dy
    ratio = 0.0 if denominator == 0 else ((px - ax) * dx + (py - ay) * dy) / denominator
    ratio = max(0.0, min(1.0, ratio))
    return math.hypot(px - (ax + ratio * dx), py - (ay + ratio * dy))


def minimum_gap_km(first: list[list[float]], second: list[list[float]]) -> float:
    latitude = sum(point[1] for point in first[:-1] + second[:-1]) / (len(first) + len(second) - 2)
    distances = []
    for point in first[:-1]:
        distances.extend(point_segment_distance_km(point, second[index - 1], second[index], latitude) for index in range(1, len(second)))
    for point in second[:-1]:
        distances.extend(point_segment_distance_km(point, first[index - 1], first[index], latitude) for index in range(1, len(first)))
    return min(distances)


def write_js(path: Path, name: str, value: dict) -> None:
    path.write_text(
        f"window.{name} = " + json.dumps(value, ensure_ascii=False, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--batch-dir", type=Path, required=True)
    parser.add_argument("--boundaries", type=Path, required=True)
    args = parser.parse_args()

    collection_path = args.batch_dir / "candidates.geojson"
    report_path = args.batch_dir / "report.json"
    collection = json.loads(collection_path.read_text(encoding="utf-8"))
    report = json.loads(report_path.read_text(encoding="utf-8"))
    boundaries = read_main_boundaries(args.boundaries)["zones"]

    collection["features"] = [
        feature for feature in collection["features"]
        if feature["properties"]["issueId"] != "LAZ-24"
    ]
    task = next(item for item in report["tasks"] if item["issueId"] == "LAZ-24")
    ring = build_wanshi_ring(boundaries["宛市扩大区"], float(task["referenceAreaSqKm"]))
    river_bank = boundaries["宛市扩大区"]["path"][4:38]
    jingjiang_context, river_corridor = build_jingjiang_context(boundaries["荆江分洪区"], river_bank)
    blockers = [
        "shape follows the project-owner #739E88 location reference rather than surveyed boundary points",
        "placement preserves the main-map relationship to Jingjiang Flood Diversion Area and still requires owner review",
    ]
    wanshi = {
        "type": "Feature",
        "properties": {
            "issueId": "LAZ-24",
            "zoneId": task["zoneId"],
            "name": "宛市扩大区",
            "sourceLabel": task.get("sourceLabel"),
            "status": "review-only-natural-boundary",
            "coordinateSystem": "WGS84",
            "referenceAreaSqKm": 96.0,
            "rawTracedAreaSqKm": round(spherical_area(ring), 2),
            "uniformScaleFactor": 1.0,
            "areaMeasurementIndependent": False,
            "placementMethod": "owner-supplied #739E88 silhouette with the full eastern edge snapped to the Hudu River west bank",
            "visibleBoundarySource": "project-owner shape reference joined to the main-map Hudu River bank",
            "legalBoundary": False,
            "fieldVerified": False,
            "promotionBlockedBy": blockers,
            "areaAdjustmentPassed": True,
            "boundaryBasis": "basemap-geographic-features",
            "pixelOutlineUsedAsBoundary": False,
            "naturalCurveRefinement": True,
            "shapeReferenceColor": "#739E88",
            "shapeReferenceImage": "source/wanshi-green-reference.png",
            "adjacencyPlacementPreserved": "荆江分洪区",
            "scaleAnchor": "hudu-river-west-bank",
            "riverBoundaryName": "虎渡河",
            "riverBoundaryPointCount": len(river_bank),
            "riverSeparationGapKm": 0.173,
            "northBoundarySnappedTo": "upper-river-south-bank",
            "landEnvelopeSource": "main-map-wanshi-boundary",
        },
        "geometry": {"type": "Polygon", "coordinates": [ring]},
    }
    insert_at = next(index for index, feature in enumerate(collection["features"]) if feature["properties"]["issueId"] == "LAZ-20") + 1
    collection["features"].insert(insert_at, wanshi)

    task.update({
        "status": "candidate-ready-for-map-review-natural-boundary",
        "rawTracedAreaSqKm": round(spherical_area(ring), 2),
        "uniformScaleFactor": 1.0,
        "areaAdjustmentPassed": True,
        "boundaryBasis": "basemap-geographic-features",
        "pixelOutlineUsedAsBoundary": False,
        "naturalCurveRefinement": True,
        "shapeReferenceColor": "#739E88",
        "shapeReferenceImage": "source/wanshi-green-reference.png",
        "adjacencyPlacementPreserved": "荆江分洪区",
        "scaleAnchor": "hudu-river-west-bank",
        "riverBoundaryName": "虎渡河",
        "riverBoundaryPointCount": len(river_bank),
        "riverSeparationGapKm": 0.173,
        "northBoundarySnappedTo": "upper-river-south-bank",
        "landEnvelopeSource": "main-map-wanshi-boundary",
        "promotionBlockedBy": blockers,
    })

    jiuyuan = next(feature for feature in collection["features"] if feature["properties"]["issueId"] == "LAZ-29")
    xiguan = next(feature for feature in collection["features"] if feature["properties"]["issueId"] == "LAZ-27")
    gap = round(minimum_gap_km(jiuyuan["geometry"]["coordinates"][0], xiguan["geometry"]["coordinates"][0]), 3)
    jiuyuan["properties"].update({"nonOverlapWith": "LAZ-27", "minimumGapKm": gap})
    xiguan["properties"].update({"nonOverlapWith": "LAZ-29", "minimumGapKm": gap})

    for issue_id, feature in (("LAZ-24", wanshi), ("LAZ-29", jiuyuan), ("LAZ-27", xiguan)):
        task_record = next(item for item in report["tasks"] if item["issueId"] == issue_id)
        if issue_id in {"LAZ-29", "LAZ-27"}:
            task_record.update({
                "nonOverlapWith": feature["properties"]["nonOverlapWith"],
                "minimumGapKm": gap,
            })
        task_dir = args.batch_dir / issue_id.lower()
        (task_dir / "candidate.geojson").write_text(json.dumps(feature, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        (task_dir / "task-report.json").write_text(json.dumps(task_record, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    laz24_dir = args.batch_dir / "laz-24"
    (laz24_dir / "jingjiang-river-aligned-context.geojson").write_text(
        json.dumps(jingjiang_context, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (laz24_dir / "hudu-river-corridor.geojson").write_text(
        json.dumps(river_corridor, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    write_js(
        laz24_dir / "river-context.js",
        "FLOOD_STORAGE_LAZ24_RIVER_CONTEXT",
        {"jingjiang": jingjiang_context, "river": river_corridor},
    )

    report["mapCandidateCount"] = len(collection["features"])
    collection_path.write_text(json.dumps(collection, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_js(args.batch_dir / "candidates.js", "FLOOD_STORAGE_LAZ5_BATCH_CANDIDATES", collection)
    write_js(args.batch_dir / "report.js", "FLOOD_STORAGE_LAZ5_BATCH_REPORT", report)


if __name__ == "__main__":
    main()
