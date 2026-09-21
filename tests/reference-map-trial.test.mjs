import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("records automatic trial failures independently from later human approval", async () => {
  const report = JSON.parse(
    await readFile(new URL("review/reference-map-boundary-trial-2026-09-16/report.json", root), "utf8")
  );
  const candidates = JSON.parse(
    await readFile(new URL("review/reference-map-boundary-trial-2026-09-16/candidates.geojson", root), "utf8")
  );
  const publicBoundaries = await readFile(new URL("data/location-boundaries.js", root), "utf8");

  assert.equal(report.decision.promoteToPublicBoundaryData, false);
  assert.equal(report.georeference.passed, false);
  assert.ok(report.georeference.leaveOneOutRmsKm > report.georeference.thresholdRmsKm);
  assert.ok(report.georeference.leaveOneOutMaxKm > report.georeference.thresholdMaxKm);
  assert.equal(candidates.features.length, 3);

  for (const feature of candidates.features) {
    assert.equal(feature.properties.status, "review-only-checks-failed");
    assert.equal(
      feature.properties.areaAdjustmentPassed,
      feature.properties.zoneId === "长江-25",
      feature.properties.name
    );
    assert.equal(feature.properties.legalBoundary, false);
    assert.equal(feature.properties.fieldVerified, false);
    const relativeAreaError = Math.abs(
      feature.properties.constrainedAreaSqKm - feature.properties.referenceAreaSqKm
    ) / feature.properties.referenceAreaSqKm;
    assert.ok(relativeAreaError < 0.001, feature.properties.name);
    const firstRing = feature.geometry.type === "MultiPolygon"
      ? feature.geometry.coordinates[0][0]
      : feature.geometry.coordinates[0];
    assert.deepEqual(firstRing[0], firstRing.at(-1));
    assert.match(publicBoundaries, new RegExp(`"${feature.properties.name}"`));
  }

  const jingjiang = candidates.features.find((feature) => feature.properties.zoneId === "长江-25");
  assert.match(jingjiang.properties.visibleBoundarySource, /#A64F61/);
  assert.ok(jingjiang.properties.rawTracedAreaSqKm > 900);
  assert.ok(jingjiang.properties.rawTracedAreaSqKm < 950);

  const dujiatai = candidates.features.find((feature) => feature.properties.zoneId === "长江-30");
  assert.match(dujiatai.properties.visibleBoundarySource, /#C57C5B/);
  assert.equal(dujiatai.properties.areaAdjustmentPassed, false);
  assert.ok(dujiatai.properties.rawTracedAreaSqKm > 1100);
  assert.ok(dujiatai.properties.rawTracedAreaSqKm < 1150);

  const kangshan = candidates.features.find((feature) => feature.properties.zoneId === "长江-36");
  assert.match(kangshan.properties.visibleBoundarySource, /user-confirmed orange scan reference/);
  assert.equal(kangshan.geometry.type, "MultiPolygon");
  assert.equal(kangshan.properties.areaMeasurementIndependent, false);
  assert.equal(report.source.kangshanCleanReferenceUsed, true);
});
