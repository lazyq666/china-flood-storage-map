import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const batch = new URL("review/laz-5-batch-2026-09-21/", root);

test("ships traceable evidence for the first five active LAZ-5 subtasks", async () => {
  const report = JSON.parse(await readFile(new URL("report.json", batch), "utf8"));
  assert.equal(report.taskCount, 5);
  assert.equal(report.mapCandidateCount, 5);
  assert.equal(report.mainMapUpdated, true);
  assert.deepEqual(report.tasks.map((item) => item.issueId), ["LAZ-20", "LAZ-24", "LAZ-25", "LAZ-29", "LAZ-27"]);

  for (const item of report.tasks) {
    assert.match(item.sourceSha256, /^[a-f0-9]{64}$/);
    assert.ok(item.pixelCount > 1000);
    assert.equal(item.legalBoundary, false);
    assert.equal(item.fieldVerified, false);
    assert.equal(item.georeference.passed, false);
    assert.ok(item.promotionBlockedBy.length >= 2);

    const rings = JSON.parse(await readFile(new URL(item.pixelRings, batch), "utf8"));
    assert.equal(rings.issueId, item.issueId);
    const outerRing = rings.rings?.[0] || rings.ring;
    assert.deepEqual(outerRing[0], outerRing.at(-1));
    assert.ok(rings.sourceImageSize[0] > 700);
    assert.ok(rings.sourceImageSize[1] > 700);
    await readFile(new URL(item.targetMask, batch));
    await readFile(new URL(item.preview, batch));
    await readFile(new URL(item.workingCopy, batch));
    await readFile(new URL(`${item.issueId.toLowerCase()}/task-report.json`, batch));
    if (item.status.startsWith("candidate-ready-for-map-review") || item.status.startsWith("promoted-to-main-map")) {
      const candidate = JSON.parse(await readFile(new URL(`${item.issueId.toLowerCase()}/candidate.geojson`, batch), "utf8"));
      assert.equal(candidate.properties.issueId, item.issueId);
    }
  }
});

test("all five owner-reviewed shapes receive review-only WGS84 candidates", async () => {
  const collection = JSON.parse(await readFile(new URL("candidates.geojson", batch), "utf8"));
  assert.deepEqual(collection.features.map((feature) => feature.properties.issueId), ["LAZ-20", "LAZ-24", "LAZ-25", "LAZ-29", "LAZ-27"]);
  for (const feature of collection.features) {
    assert.equal(feature.properties.status, "promoted-to-main-map-user-approved");
    assert.equal(feature.properties.boundaryBasis, "basemap-geographic-features");
    assert.equal(feature.properties.pixelOutlineUsedAsBoundary, false);
    if (feature.properties.issueId !== "LAZ-25") assert.equal(feature.properties.areaMeasurementIndependent, false);
    assert.equal(feature.properties.legalBoundary, false);
    assert.equal(feature.properties.fieldVerified, false);
    assert.equal(feature.geometry.type, "Polygon");
    assert.ok(feature.geometry.coordinates[0].length >= 4);
    assert.deepEqual(feature.geometry.coordinates[0][0], feature.geometry.coordinates[0].at(-1));
  }
});

test("review page explains unavailable candidates and does not offer promotion", async () => {
  const [html, script, reportScript, readme] = await Promise.all([
    readFile(new URL("index.html", batch), "utf8"),
    readFile(new URL("review.js", batch), "utf8"),
    readFile(new URL("report.js", batch), "utf8"),
    readFile(new URL("README.md", batch), "utf8"),
  ]);
  assert.match(html, /location-boundaries\.js/);
  assert.match(html, /report\.js/);
  assert.match(reportScript, /FLOOD_STORAGE_LAZ5_BATCH_REPORT/);
  assert.match(script, /已按项目方确认写入主图/);
  assert.match(script, /非法律边界、未经实地核验/);
  assert.match(script, /strokeStyle: "solid"/);
  assert.doesNotMatch(script, /strokeStyle: "dashed"/);
  assert.doesNotMatch(script, /验收通过/);
  assert.match(readme, /主图写入流程/);
});

test("uses the owner references for location and naturalizes the review boundaries", async () => {
  const report = JSON.parse(await readFile(new URL("report.json", batch), "utf8"));
  const renmin = report.tasks.find((item) => item.issueId === "LAZ-20");
  const linnan = report.tasks.find((item) => item.issueId === "LAZ-25");
  assert.equal(renmin.status, "promoted-to-main-map-user-approved");
  assert.equal(renmin.sourceImage, "source/renmin-dayuan-clean.png");
  assert.ok(renmin.pixelCount > 1_000_000);
  assert.equal(renmin.westBoundarySnappedTo, "riverbank");
  assert.equal(linnan.status, "promoted-to-main-map-user-approved");
  assert.equal(linnan.sourceImage, "source/linnan-redline.png");
  assert.ok(linnan.rawTracedAreaSqKm > 40);
  assert.equal(linnan.areaAdjustmentPassed, false);
  await readFile(new URL("laz-25/redline-mask.png", batch));
  await readFile(new URL("laz-25/redline-pixel-ring.json", batch));
});
