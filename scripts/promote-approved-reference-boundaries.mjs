#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { gcj02ToWgs84, wgs84GeoJSONToGcj02, wgs84ToGcj02 } = require("../core.js");

const root = new URL("../", import.meta.url);
const boundaryUrl = new URL("data/location-boundaries.js", root);
const candidatePath = "review/reference-map-boundary-trial-2026-09-16/candidates.geojson";
const candidateUrl = new URL(candidatePath, root);
const approvedNames = new Set(["荆江分洪区", "杜家台", "康山圩"]);
const approvedAt = "2026-09-21";

function pointInRing(point, ring) {
  let inside = false;
  for (let index = 0, previous = ring.length - 1; index < ring.length; previous = index, index += 1) {
    const a = ring[index];
    const b = ring[previous];
    if (((a[1] > point[1]) !== (b[1] > point[1]))
      && point[0] < (b[0] - a[0]) * (point[1] - a[1]) / (b[1] - a[1]) + a[0]) {
      inside = !inside;
    }
  }
  return inside;
}

function pointInPolygon(point, polygon) {
  return pointInRing(point, polygon[0]) && !polygon.slice(1).some((ring) => pointInRing(point, ring));
}

function ringAreaAndCentroid(ring) {
  let twiceArea = 0;
  let weightedX = 0;
  let weightedY = 0;
  for (let index = 0; index < ring.length - 1; index += 1) {
    const [x1, y1] = ring[index];
    const [x2, y2] = ring[index + 1];
    const cross = x1 * y2 - x2 * y1;
    twiceArea += cross;
    weightedX += (x1 + x2) * cross;
    weightedY += (y1 + y2) * cross;
  }
  const divisor = 3 * twiceArea;
  return {
    area: Math.abs(twiceArea / 2),
    centroid: divisor === 0 ? ring[0] : [weightedX / divisor, weightedY / divisor]
  };
}

function representativePoint(geometry, previousGcjPoint) {
  const polygons = geometry.type === "MultiPolygon" ? geometry.coordinates : [geometry.coordinates];
  const previousWgsPoint = gcj02ToWgs84(previousGcjPoint);
  if (polygons.some((polygon) => pointInPolygon(previousWgsPoint, polygon))) return previousWgsPoint;

  const largest = polygons
    .map((polygon) => ({ polygon, ...ringAreaAndCentroid(polygon[0]) }))
    .sort((a, b) => b.area - a.area)[0];
  if (pointInPolygon(largest.centroid, largest.polygon)) return largest.centroid;

  const vertex = largest.polygon[0][0];
  let point = largest.centroid;
  for (let attempt = 0; attempt < 20; attempt += 1) {
    point = [(point[0] + vertex[0]) / 2, (point[1] + vertex[1]) / 2];
    if (pointInPolygon(point, largest.polygon)) return point;
  }
  return vertex;
}

function haversineKm(a, b) {
  const radians = (value) => value * Math.PI / 180;
  const lat1 = radians(a[1]);
  const lat2 = radians(b[1]);
  const deltaLat = lat2 - lat1;
  const deltaLng = radians(b[0] - a[0]);
  const value = Math.sin(deltaLat / 2) ** 2
    + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
  return 6371.0088 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function coordinatePoints(value, output = []) {
  if (!Array.isArray(value)) return output;
  if (value.length >= 2 && typeof value[0] === "number" && typeof value[1] === "number") {
    output.push(value);
  } else {
    value.forEach((child) => coordinatePoints(child, output));
  }
  return output;
}

function findObjectRange(source, zoneName) {
  const marker = `    ${JSON.stringify(zoneName)}: {`;
  const start = source.indexOf(marker);
  if (start < 0) throw new Error(`Boundary entry not found: ${zoneName}`);
  const openBrace = source.indexOf("{", start);
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = openBrace; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    else if (character === "{") depth += 1;
    else if (character === "}") {
      depth -= 1;
      if (depth === 0) return { start, openBrace, end: index + 1 };
    }
  }
  throw new Error(`Unterminated boundary entry: ${zoneName}`);
}

function updateBoundary(boundary, feature) {
  const geometry = structuredClone(feature.geometry);
  const displayGeometry = wgs84GeoJSONToGcj02(geometry);
  const polygons = displayGeometry.type === "MultiPolygon"
    ? displayGeometry.coordinates
    : [displayGeometry.coordinates];
  const labelWgs = representativePoint(geometry, [boundary.lng, boundary.lat]);
  const labelGcj = wgs84ToGcj02(labelWgs);
  const area = Number(feature.properties.constrainedAreaSqKm);

  Object.assign(boundary, {
    name: `${feature.properties.name}参考图验收边界`,
    coordinateSystem: "GCJ-02",
    lng: labelGcj[0],
    lat: labelGcj[1],
    labelPointMethod: "previous-point-if-inside-else-largest-component-interior",
    radiusKm: Math.max(...coordinatePoints(geometry.coordinates).map((point) => haversineKm(labelWgs, point))),
    areaSqKm: area,
    geometryAreaSqKm: area,
    referenceAreaSqKm: Number(feature.properties.referenceAreaSqKm),
    areaRatio: Number((area / Number(feature.properties.referenceAreaSqKm)).toFixed(6)),
    areaValidation: "user-approved-reference-map-area-normalization",
    path: polygons[0][0],
    polygonsGCJ02: polygons,
    method: "reference-map-trace-user-approved",
    quality: "human-reviewed-reference-map",
    geometryType: geometry.type,
    constraintMode: "user-approved-reference-map-trace",
    basis: `采用用户于 ${approvedAt} 验收通过的参考图色块轮廓；仅用于主图展示，不代表法定边界或实地核验结果。`,
    estimatedLocation: true,
    estimatedBoundary: true,
    fieldVerified: false,
    legalBoundary: false,
    samplingGeometry: {
      ...geometry,
      coordinateSystem: "WGS84",
      derivation: "user-approved-reference-map-trace"
    },
    humanReviewStatus: "accepted",
    reviewedAt: approvedAt,
    reviewer: "project-owner",
    boundaryClass: "user-approved-reference-map-boundary-for-display",
    hypothesisBoundary: true,
    candidatePath,
    reviewPath: "prototype-boundary-review.html?variant=A",
    referenceMapPromotion: {
      approvedAt,
      approvedBy: "project-owner",
      sourceCandidateStatus: feature.properties.status,
      sourceDescription: feature.properties.visibleBoundarySource,
      automaticChecksPassed: false,
      promotionReason: "explicit-user-acceptance",
      limitations: ["not-a-legal-boundary", "not-field-verified"]
    }
  });
  return boundary;
}

let source = await readFile(boundaryUrl, "utf8");
const candidates = JSON.parse(await readFile(candidateUrl, "utf8"));
const selected = candidates.features.filter((feature) => approvedNames.has(feature.properties.name));
if (selected.length !== approvedNames.size) throw new Error("One or more approved candidates are missing");

for (const feature of selected) {
  const range = findObjectRange(source, feature.properties.name);
  const current = JSON.parse(source.slice(range.openBrace, range.end));
  const updated = updateBoundary(current, feature);
  const replacement = `${JSON.stringify(feature.properties.name)}: ${JSON.stringify(updated, null, 2)}`
    .split("\n")
    .map((line) => `    ${line}`)
    .join("\n");
  source = source.slice(0, range.start) + replacement + source.slice(range.end);
}

source = source.replace(/"generatedAt": "[^"]+"/, `"generatedAt": "${approvedAt}T00:00:00.000+08:00"`);
source = source.replace(
  /"qualityCounts": \{\n\s+"human-reviewed-hypothesis": \d+(?:,\n\s+"human-reviewed-reference-map": \d+)?\n\s+\}/,
  `"qualityCounts": {\n    "human-reviewed-hypothesis": 94,\n    "human-reviewed-reference-map": 3\n  }`
);
await writeFile(boundaryUrl, source);
console.log(`Promoted ${selected.map((feature) => feature.properties.name).join("、")} to data/location-boundaries.js`);
