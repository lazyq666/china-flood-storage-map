#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { gcj02ToWgs84, wgs84GeoJSONToGcj02, wgs84ToGcj02 } = require('../core.js');

const root = new URL('../', import.meta.url);
const boundaryUrl = new URL('data/location-boundaries.js', root);
const batchPath = 'review/laz-5-batch-2026-09-21';
const candidateUrl = new URL(`${batchPath}/candidates.geojson`, root);
const jingjiangUrl = new URL(`${batchPath}/laz-24/jingjiang-river-aligned-context.geojson`, root);
const reportUrl = new URL(`${batchPath}/report.json`, root);
const approvedAt = '2026-09-21';

function readPayload(source) {
  const startMarker = 'const payload = ';
  const start = source.indexOf(startMarker) + startMarker.length;
  const end = source.indexOf(';\n  window.FLOOD_STORAGE_LOCATION_BOUNDARIES', start);
  return JSON.parse(source.slice(start, end));
}

function pointInRing(point, ring) {
  let inside = false;
  for (let index = 0, previous = ring.length - 1; index < ring.length; previous = index, index += 1) {
    const first = ring[index];
    const second = ring[previous];
    if (((first[1] > point[1]) !== (second[1] > point[1]))
      && point[0] < (second[0] - first[0]) * (point[1] - first[1]) / (second[1] - first[1]) + first[0]) {
      inside = !inside;
    }
  }
  return inside;
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
  return { area: Math.abs(twiceArea / 2), centroid: [weightedX / (3 * twiceArea), weightedY / (3 * twiceArea)] };
}

function representativePoint(geometry, previousGcjPoint) {
  const polygon = geometry.coordinates;
  const previousWgsPoint = gcj02ToWgs84(previousGcjPoint);
  if (pointInRing(previousWgsPoint, polygon[0])) return previousWgsPoint;
  const { centroid } = ringAreaAndCentroid(polygon[0]);
  return pointInRing(centroid, polygon[0]) ? centroid : polygon[0][0];
}

function sphericalArea(ring) {
  const radius = 6371.0088;
  let total = 0;
  for (let index = 1; index < ring.length; index += 1) {
    const [lon1, lat1] = ring[index - 1].map((value) => value * Math.PI / 180);
    const [lon2, lat2] = ring[index].map((value) => value * Math.PI / 180);
    total += (lon2 - lon1) * (2 + Math.sin(lat1) + Math.sin(lat2));
  }
  return Math.abs(total) * radius * radius / 2;
}

function haversineKm(first, second) {
  const radians = (value) => value * Math.PI / 180;
  const latitude1 = radians(first[1]);
  const latitude2 = radians(second[1]);
  const latitudeDelta = latitude2 - latitude1;
  const longitudeDelta = radians(second[0] - first[0]);
  const value = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(latitude1) * Math.cos(latitude2) * Math.sin(longitudeDelta / 2) ** 2;
  return 6371.0088 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function updateGeometry(boundary, feature, options = {}) {
  const geometry = structuredClone(feature.geometry);
  const displayGeometry = wgs84GeoJSONToGcj02(geometry);
  const displayPolygons = displayGeometry.type === 'MultiPolygon' ? displayGeometry.coordinates : [displayGeometry.coordinates];
  const labelWgs = representativePoint(geometry, [boundary.lng, boundary.lat]);
  const labelGcj = wgs84ToGcj02(labelWgs);
  const geometryArea = sphericalArea(geometry.coordinates[0]);
  const referenceArea = Number(options.referenceArea ?? feature.properties.referenceAreaSqKm);
  const ratio = geometryArea / referenceArea;

  Object.assign(boundary, {
    name: options.name ?? `${feature.properties.name}用户验收边界`,
    coordinateSystem: 'GCJ-02',
    lng: labelGcj[0],
    lat: labelGcj[1],
    labelPointMethod: 'previous-point-if-inside-else-polygon-centroid',
    radiusKm: Math.max(...geometry.coordinates[0].map((point) => haversineKm(labelWgs, point))),
    areaSqKm: Number(geometryArea.toFixed(3)),
    geometryAreaSqKm: Number(geometryArea.toFixed(3)),
    referenceAreaSqKm: referenceArea,
    areaRatio: Number(ratio.toFixed(6)),
    areaValidation: Math.abs(ratio - 1) <= 0.02
      ? 'user-approved-reference-area'
      : 'user-approved-geographic-boundary-reference-area-conflict',
    referenceAreaConflict: Math.abs(ratio - 1) <= 0.02 ? null : {
      geometryAreaSqKm: Number(geometryArea.toFixed(2)),
      referenceAreaSqKm: referenceArea,
      reason: 'explicit owner-drawn geographic boundary takes precedence over forced area scaling',
    },
    path: displayPolygons[0][0],
    polygonsGCJ02: displayPolygons,
    method: options.method ?? 'user-approved-natural-boundary',
    quality: options.quality ?? 'human-reviewed-user-approved',
    geometryType: geometry.type,
    constraintMode: options.constraintMode ?? 'user-approved-geographic-boundary-with-reference-area-check',
    basis: options.basis ?? `采用项目方于 ${approvedAt} 验收通过的自然边界候选；用于主图展示，不代表法定边界或实地核验结果。`,
    estimatedLocation: true,
    estimatedBoundary: true,
    fieldVerified: false,
    legalBoundary: false,
    samplingGeometry: { ...geometry, coordinateSystem: 'WGS84', derivation: options.derivation ?? 'user-approved-laz5-review-candidate' },
    humanReviewStatus: 'accepted',
    reviewedAt: approvedAt,
    reviewer: 'project-owner',
    boundaryClass: options.boundaryClass ?? 'user-approved-boundary-for-display',
    hypothesisBoundary: true,
    candidatePath: options.candidatePath ?? `${batchPath}/candidates.geojson`,
    reviewPath: `${batchPath}/index.html`,
    userAcceptedBoundaryPromotion: {
      approvedAt,
      approvedBy: 'project-owner',
      promotionReason: 'explicit-user-acceptance',
      automaticChecksPassed: true,
      limitations: ['not-a-legal-boundary', 'not-field-verified'],
    },
  });
}

const source = await readFile(boundaryUrl, 'utf8');
const payload = readPayload(source);
const candidates = JSON.parse(await readFile(candidateUrl, 'utf8'));
const jingjiang = JSON.parse(await readFile(jingjiangUrl, 'utf8'));

for (const feature of candidates.features) {
  const boundary = payload.zones[feature.properties.name];
  if (!boundary) throw new Error(`Boundary not found: ${feature.properties.name}`);
  updateGeometry(boundary, feature);
}

updateGeometry(payload.zones['荆江分洪区'], jingjiang, {
  name: '荆江分洪区参考图验收边界（虎渡河岸修正）',
  referenceArea: 921,
  method: 'user-approved-river-aligned-reference-boundary',
  quality: 'human-reviewed-reference-map',
  constraintMode: 'user-approved-hudu-river-bank-and-reference-area',
  derivation: 'user-approved-laz24-jingjiang-river-context',
  boundaryClass: 'user-approved-reference-map-boundary-for-display',
  candidatePath: `${batchPath}/laz-24/jingjiang-river-aligned-context.geojson`,
  basis: `采用项目方于 ${approvedAt} 验收通过的虎渡河岸关系，并保持 921 km² 参考面积；用于主图展示，不代表法定边界或实地核验结果。`,
});
payload.zones['荆江分洪区'].riverBoundaryCorrection = {
  approvedAt,
  sharedSeparator: '虎渡河',
  contextFor: 'LAZ-24',
  riverGapKm: 0.173,
};

payload.generatedAt = `${approvedAt}T00:00:00.000+08:00`;
payload.qualityCounts = {
  'human-reviewed-hypothesis': 89,
  'human-reviewed-reference-map': 3,
  'human-reviewed-user-approved': 5,
};

await writeFile(
  boundaryUrl,
  `(function () {\n  "use strict";\n  const payload = ${JSON.stringify(payload, null, 2)};\n  window.FLOOD_STORAGE_LOCATION_BOUNDARIES = Object.freeze({ ...payload, zones: Object.freeze(payload.zones) });\n})();\n`,
  'utf8',
);

for (const feature of candidates.features) {
  feature.properties.status = 'promoted-to-main-map-user-approved';
  feature.properties.promotedAt = approvedAt;
  const issueId = feature.properties.issueId.toLowerCase();
  await writeFile(
    new URL(`${batchPath}/${issueId}/candidate.geojson`, root),
    `${JSON.stringify(feature, null, 2)}\n`,
    'utf8',
  );
}
await writeFile(candidateUrl, `${JSON.stringify(candidates, null, 2)}\n`, 'utf8');
await writeFile(
  new URL(`${batchPath}/candidates.js`, root),
  `window.FLOOD_STORAGE_LAZ5_BATCH_CANDIDATES = ${JSON.stringify(candidates)};\n`,
  'utf8',
);

const report = JSON.parse(await readFile(reportUrl, 'utf8'));
report.mainMapUpdated = true;
report.promotedAt = approvedAt;
for (const task of report.tasks) {
  task.status = 'promoted-to-main-map-user-approved';
  task.promotedAt = approvedAt;
  await writeFile(
    new URL(`${batchPath}/${task.issueId.toLowerCase()}/task-report.json`, root),
    `${JSON.stringify(task, null, 2)}\n`,
    'utf8',
  );
}
await writeFile(reportUrl, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
await writeFile(
  new URL(`${batchPath}/report.js`, root),
  `window.FLOOD_STORAGE_LAZ5_BATCH_REPORT = ${JSON.stringify(report)};\n`,
  'utf8',
);

console.log(`Promoted ${candidates.features.map((feature) => feature.properties.name).join('、')} and the Jingjiang river correction.`);
