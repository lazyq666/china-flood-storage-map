import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const root = new URL("../", import.meta.url);

test("promotes the three explicitly approved reference-map boundaries", async () => {
  const candidates = JSON.parse(await readFile(
    new URL("review/reference-map-boundary-trial-2026-09-16/candidates.geojson", root),
    "utf8"
  ));
  const jingjiangCorrection = JSON.parse(await readFile(
    new URL("review/laz-5-batch-2026-09-21/laz-24/jingjiang-river-aligned-context.geojson", root),
    "utf8"
  ));
  const source = await readFile(new URL("data/location-boundaries.js", root), "utf8");
  const context = { window: {} };
  vm.runInNewContext(source, context);
  const boundaries = context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES.zones;

  assert.equal(context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES.qualityCounts["human-reviewed-hypothesis"], 89);
  assert.equal(context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES.qualityCounts["human-reviewed-reference-map"], 3);
  assert.equal(context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES.qualityCounts["human-reviewed-user-approved"], 5);

  for (const feature of candidates.features) {
    const boundary = boundaries[feature.properties.name];
    assert.ok(boundary, feature.properties.name);
    assert.equal(boundary.humanReviewStatus, "accepted");
    assert.equal(boundary.reviewedAt, "2026-09-21");
    assert.equal(boundary.geometryType, feature.geometry.type);
    assert.equal(boundary.samplingGeometry.type, feature.geometry.type);
    const expectedGeometry = feature.properties.name === "荆江分洪区"
      ? jingjiangCorrection.geometry
      : feature.geometry;
    assert.deepEqual(
      JSON.parse(JSON.stringify(boundary.samplingGeometry.coordinates)),
      expectedGeometry.coordinates,
      feature.properties.name
    );
    assert.equal(boundary.referenceMapPromotion.promotionReason, "explicit-user-acceptance");
    assert.equal(boundary.referenceMapPromotion.automaticChecksPassed, false);
    assert.equal(boundary.legalBoundary, false);
    assert.equal(boundary.fieldVerified, false);
    assert.ok(boundary.polygonsGCJ02.length >= 1);
  }

  assert.equal(boundaries["荆江分洪区"].geometryType, "Polygon");
  assert.equal(boundaries["杜家台"].geometryType, "Polygon");
  assert.equal(boundaries["康山圩"].geometryType, "MultiPolygon");
  assert.equal(boundaries["康山圩"].polygonsGCJ02.length, 7);
});
