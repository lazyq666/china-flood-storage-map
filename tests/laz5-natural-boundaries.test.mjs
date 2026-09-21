import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const candidatesPath = path.join(
  root,
  'review/laz-5-batch-2026-09-21/candidates.geojson',
);

function ringMetrics(ring) {
  const segments = [];
  let axisAligned = 0;

  for (let index = 1; index < ring.length; index += 1) {
    const [previousX, previousY] = ring[index - 1];
    const [currentX, currentY] = ring[index];
    const deltaX = currentX - previousX;
    const deltaY = currentY - previousY;
    segments.push(Math.hypot(deltaX, deltaY));

    if (Math.abs(deltaX) < 1e-10 || Math.abs(deltaY) < 1e-10) {
      axisAligned += 1;
    }
  }

  return {
    pointCount: ring.length,
    axisAlignedRatio: axisAligned / segments.length,
    shortSegmentRatio:
      segments.filter((length) => length < 0.002).length / segments.length,
  };
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

function pointInPolygon(point, ring) {
  let inside = false;
  for (let index = 0, previous = ring.length - 1; index < ring.length; previous = index, index += 1) {
    const [x1, y1] = ring[index];
    const [x2, y2] = ring[previous];
    if ((y1 > point[1]) !== (y2 > point[1])
      && point[0] < ((x2 - x1) * (point[1] - y1)) / (y2 - y1) + x1) {
      inside = !inside;
    }
  }
  return inside;
}

function segmentsCross(first, second, third, fourth) {
  const cross = ([ax, ay], [bx, by]) => ax * by - ay * bx;
  const subtract = ([ax, ay], [bx, by]) => [ax - bx, ay - by];
  const firstVector = subtract(second, first);
  const secondVector = subtract(fourth, third);
  const offset = subtract(third, first);
  const denominator = cross(firstVector, secondVector);
  if (Math.abs(denominator) < 1e-12) return false;
  const firstRatio = cross(offset, secondVector) / denominator;
  const secondRatio = cross(offset, firstVector) / denominator;
  return firstRatio > 1e-9 && firstRatio < 1 - 1e-9
    && secondRatio > 1e-9 && secondRatio < 1 - 1e-9;
}

function polygonsOverlap(first, second) {
  if (first.slice(0, -1).some((point) => pointInPolygon(point, second))) return true;
  if (second.slice(0, -1).some((point) => pointInPolygon(point, first))) return true;
  for (let firstIndex = 1; firstIndex < first.length; firstIndex += 1) {
    for (let secondIndex = 1; secondIndex < second.length; secondIndex += 1) {
      if (segmentsCross(first[firstIndex - 1], first[firstIndex], second[secondIndex - 1], second[secondIndex])) return true;
    }
  }
  return false;
}

function pointSegmentDistanceKm(point, start, end) {
  const latitude = ((point[1] + start[1] + end[1]) / 3) * Math.PI / 180;
  const scaleX = 111.320 * Math.cos(latitude);
  const scaleY = 110.574;
  const projectedPoint = [point[0] * scaleX, point[1] * scaleY];
  const projectedStart = [start[0] * scaleX, start[1] * scaleY];
  const projectedEnd = [end[0] * scaleX, end[1] * scaleY];
  const delta = [projectedEnd[0] - projectedStart[0], projectedEnd[1] - projectedStart[1]];
  const squaredLength = delta[0] ** 2 + delta[1] ** 2;
  const ratio = squaredLength === 0 ? 0 : Math.max(0, Math.min(1,
    ((projectedPoint[0] - projectedStart[0]) * delta[0]
      + (projectedPoint[1] - projectedStart[1]) * delta[1]) / squaredLength));
  return Math.hypot(
    projectedPoint[0] - projectedStart[0] - ratio * delta[0],
    projectedPoint[1] - projectedStart[1] - ratio * delta[1],
  );
}

function minimumRingDistanceKm(first, second) {
  let minimum = Number.POSITIVE_INFINITY;
  for (const point of first.slice(0, -1)) {
    for (let index = 1; index < second.length; index += 1) {
      minimum = Math.min(minimum, pointSegmentDistanceKm(point, second[index - 1], second[index]));
    }
  }
  for (const point of second.slice(0, -1)) {
    for (let index = 1; index < first.length; index += 1) {
      minimum = Math.min(minimum, pointSegmentDistanceKm(point, first[index - 1], first[index]));
    }
  }
  return minimum;
}

function pointToRingDistanceKm(point, ring) {
  let minimum = Number.POSITIVE_INFINITY;
  for (let index = 1; index < ring.length; index += 1) {
    minimum = Math.min(minimum, pointSegmentDistanceKm(point, ring[index - 1], ring[index]));
  }
  return minimum;
}

test('review candidates use natural geographic boundaries instead of traced pixel stairs', () => {
  const collection = JSON.parse(fs.readFileSync(candidatesPath, 'utf8'));

  for (const feature of collection.features) {
    const metrics = ringMetrics(feature.geometry.coordinates[0]);
    assert.ok(
      metrics.pointCount <= 120,
      `${feature.properties.issueId} has ${metrics.pointCount} points; the boundary is over-traced`,
    );
    assert.ok(
      metrics.axisAlignedRatio < 0.12,
      `${feature.properties.issueId} has pixel-stair axis ratio ${metrics.axisAlignedRatio.toFixed(3)}`,
    );
    const maximumShortSegmentRatio = feature.properties.issueId === 'LAZ-24' ? 0.35 : 0.25;
    assert.ok(
      metrics.shortSegmentRatio < maximumShortSegmentRatio,
      `${feature.properties.issueId} has short-segment ratio ${metrics.shortSegmentRatio.toFixed(3)}`,
    );
    assert.equal(feature.properties.boundaryBasis, 'basemap-geographic-features');
  }
});

test('LAZ-20 explicitly snaps its western boundary to the riverbank', () => {
  const collection = JSON.parse(fs.readFileSync(candidatesPath, 'utf8'));
  const renmin = collection.features.find(
    (feature) => feature.properties.issueId === 'LAZ-20',
  );

  assert.ok(renmin, 'LAZ-20 candidate is missing');
  assert.equal(renmin.properties.westBoundarySnappedTo, 'riverbank');
  assert.equal(renmin.properties.scaleAnchor, 'west-edge-aligned');
  assert.ok(renmin.properties.preScaleAreaSqKm > 450);
  assert.ok(renmin.properties.westAlignedScaleFactor > 0.86);
  assert.ok(renmin.properties.westAlignedScaleFactor < 0.87);
  assert.ok(Math.abs(renmin.properties.rawTracedAreaSqKm - 341) < 0.1);
  assert.match(renmin.properties.placementMethod, /basemap riverbank/i);
});

test('LAZ-29 and LAZ-27 review candidates have no overlapping interior', () => {
  const collection = JSON.parse(fs.readFileSync(candidatesPath, 'utf8'));
  const jiuyuan = collection.features.find((feature) => feature.properties.issueId === 'LAZ-29');
  const xiguan = collection.features.find((feature) => feature.properties.issueId === 'LAZ-27');

  assert.ok(jiuyuan && xiguan, 'the two adjacent candidates must both exist');
  assert.equal(polygonsOverlap(
    jiuyuan.geometry.coordinates[0],
    xiguan.geometry.coordinates[0],
  ), false);
  assert.equal(jiuyuan.properties.nonOverlapWith, 'LAZ-27');
  assert.equal(xiguan.properties.nonOverlapWith, 'LAZ-29');
  assert.ok(jiuyuan.properties.minimumGapKm > 0);
});

test('LAZ-24 follows the green reference shape, keeps the Hudu River anchor, and stays near 96 km²', () => {
  const collection = JSON.parse(fs.readFileSync(candidatesPath, 'utf8'));
  const wanshi = collection.features.find((feature) => feature.properties.issueId === 'LAZ-24');
  assert.ok(wanshi, 'LAZ-24 candidate is missing');

  const candidateRing = wanshi.geometry.coordinates[0];

  assert.ok(Math.abs(sphericalArea(candidateRing) - 96) < 0.1);
  assert.equal(wanshi.properties.shapeReferenceColor, '#739E88');
  assert.equal(wanshi.properties.adjacencyPlacementPreserved, '荆江分洪区');
  assert.equal(wanshi.properties.scaleAnchor, 'hudu-river-west-bank');
  assert.equal(wanshi.properties.riverBoundaryName, '虎渡河');
  assert.ok(wanshi.properties.riverBoundaryPointCount >= 30);
  assert.equal(wanshi.properties.northBoundarySnappedTo, 'upper-river-south-bank');
});

test('LAZ-24 and the Jingjiang review context are separated only by the Hudu River', () => {
  const collection = JSON.parse(fs.readFileSync(candidatesPath, 'utf8'));
  const wanshi = collection.features.find((feature) => feature.properties.issueId === 'LAZ-24');
  const context = JSON.parse(fs.readFileSync(
    path.join(root, 'review/laz-5-batch-2026-09-21/laz-24/jingjiang-river-aligned-context.geojson'),
    'utf8',
  ));
  const gap = minimumRingDistanceKm(
    wanshi.geometry.coordinates[0],
    context.geometry.coordinates[0],
  );

  assert.equal(context.properties.contextFor, 'LAZ-24');
  assert.equal(context.properties.sharedSeparator, '虎渡河');
  assert.ok(Math.abs(sphericalArea(context.geometry.coordinates[0]) - 921) < 0.1);
  assert.ok(gap >= 0.1 && gap <= 0.3, `expected river-width gap, received ${gap.toFixed(3)} km`);
  assert.equal(polygonsOverlap(
    wanshi.geometry.coordinates[0],
    context.geometry.coordinates[0],
  ), false);
});
