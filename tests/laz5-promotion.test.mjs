import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const batch = path.join(root, 'review/laz-5-batch-2026-09-21');

function loadBoundaries() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'data/location-boundaries.js'), 'utf8'), context);
  return context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES;
}

test('promotes the five accepted LAZ-5 candidates to the main map', () => {
  const collection = JSON.parse(fs.readFileSync(path.join(batch, 'candidates.geojson'), 'utf8'));
  const boundaries = loadBoundaries();

  assert.equal(boundaries.qualityCounts['human-reviewed-hypothesis'], 89);
  assert.equal(boundaries.qualityCounts['human-reviewed-reference-map'], 3);
  assert.equal(boundaries.qualityCounts['human-reviewed-user-approved'], 5);

  for (const feature of collection.features) {
    const boundary = boundaries.zones[feature.properties.name];
    assert.equal(boundary.humanReviewStatus, 'accepted');
    assert.equal(boundary.reviewedAt, '2026-09-21');
    assert.equal(boundary.userAcceptedBoundaryPromotion.promotionReason, 'explicit-user-acceptance');
    assert.equal(boundary.userAcceptedBoundaryPromotion.automaticChecksPassed, true);
    assert.deepEqual(
      JSON.parse(JSON.stringify(boundary.samplingGeometry.coordinates)),
      feature.geometry.coordinates,
      feature.properties.name,
    );
  }
});

test('promotes the river-aligned Jingjiang context with its 921 km² reference area', () => {
  const contextFeature = JSON.parse(fs.readFileSync(
    path.join(batch, 'laz-24/jingjiang-river-aligned-context.geojson'),
    'utf8',
  ));
  const jingjiang = loadBoundaries().zones['荆江分洪区'];

  assert.deepEqual(
    JSON.parse(JSON.stringify(jingjiang.samplingGeometry.coordinates)),
    contextFeature.geometry.coordinates,
  );
  assert.equal(jingjiang.referenceAreaSqKm, 921);
  assert.ok(Math.abs(jingjiang.geometryAreaSqKm - 921) < 0.1);
  assert.equal(jingjiang.riverBoundaryCorrection.sharedSeparator, '虎渡河');
  assert.equal(jingjiang.riverBoundaryCorrection.contextFor, 'LAZ-24');
});
