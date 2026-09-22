import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const root = new URL("../", import.meta.url);

async function loadData() {
  const context = vm.createContext({ window: {} });
  for (const path of ["data/zones.js", "data/location-evidence.js", "data/location-boundaries.js"]) {
    vm.runInContext(await readFile(new URL(path, root), "utf8"), context, { filename: path });
  }
  return context.window;
}

test("keeps all catalog entries and their restored spatial records", async () => {
  const window = await loadData();
  const zones = window.FLOOD_STORAGE_ZONES;
  const evidence = window.FLOOD_STORAGE_LOCATION_EVIDENCE;
  const boundaries = window.FLOOD_STORAGE_LOCATION_BOUNDARIES;

  assert.equal(zones.length, 97);
  assert.equal(Object.keys(evidence.zones).length, 97);
  assert.equal(Object.keys(boundaries.zones).length, 97);
  assert.equal(boundaries.qualityCounts["human-reviewed-user-approved"], 30);
  assert.equal(boundaries.qualityCounts["human-reviewed-hypothesis"], 64);
  assert.deepEqual(
    { ...evidence.summary.confidenceCounts },
    { high: 30, medium: 67 }
  );
  assert.equal(evidence.summary.fieldVerified, 0);

  for (const zone of zones) {
    const hasBoundary = Boolean(boundaries.zones[zone.name]);
    assert.equal(hasBoundary, true, zone.name);
    assert.notEqual(evidence.zones[zone.name].confidence, "none", zone.name);
    assert.equal(evidence.zones[zone.name].fieldVerified, false, zone.name);
  }

  for (const name of ["华阳河", "洪湖分洪区", "西凉湖"]) {
    const boundary = boundaries.zones[name];
    assert.equal(boundary.humanReviewStatus, "accepted", name);
    assert.equal(boundary.method, "user-approved-laz5-three-regions-boundary", name);
    assert.equal(boundary.legalBoundary, false, name);
    assert.equal(boundary.fieldVerified, false, name);
  }
});

test("keeps private review metadata out of the public boundary payload", async () => {
  const source = await readFile(new URL("data/location-boundaries.js", root), "utf8");
  for (const privateKey of [
    "candidatePath",
    "reviewPath",
    "referenceImage",
    "tracePath",
    "reportPath",
    "issueId",
    "linearAttachmentId",
    "attachmentPath"
  ]) {
    assert.doesNotMatch(source, new RegExp(`"${privateKey}"\\s*:`), privateKey);
  }
  assert.doesNotMatch(source, /"[A-Za-z][A-Za-z0-9]*Path"\s*:/);
  assert.doesNotMatch(source, /"(?:review|automation)\//);
  assert.doesNotMatch(source, /uploads\.linear\.app|\/Users\/|C:\\Users\\/i);
});

test("restores stored location candidates and D-level location cache", async () => {
  const window = await loadData();
  const evidence = JSON.stringify(window.FLOOD_STORAGE_LOCATION_EVIDENCE.zones);
  const boundaries = JSON.stringify(window.FLOOD_STORAGE_LOCATION_BOUNDARIES.zones);

  assert.match(evidence, /placeSearch/);
  assert.match(boundaries, /human-reviewed-hypothesis/);
  await access(new URL("data/amap-d-locations.js", root));
});

test("confidence calculation accepts a unique, corroborated place candidate", async () => {
  const module = { exports: {} };
  const context = vm.createContext({ globalThis: {}, module });
  vm.runInContext(await readFile(new URL("core.js", root), "utf8"), context, { filename: "core.js" });
  const evidence = {
    officialMap: { available: false, usableForLocation: false },
    placeSearch: { status: "unique", selectedCandidateId: "candidate-1" },
    governmentSources: [{ supportsLocation: true, sourceType: "official-document" }],
    administrativeMatch: { overall: "matched" },
    conclusion: { hasFuzzyLocation: false }
  };

  assert.equal(module.exports.calculateLocationConfidence(evidence).confidence, "high");
});

test("uses the optimized SVG brand logo while legacy PNG assets stay absent", async () => {
  const removedAssets = [
    "about-flood-zone-infographic.png",
    "bg_deail.png",
    "logo.png",
    "zone-row-selected.png"
  ];
  const interfaceSource = [
    await readFile(new URL("index.html", root), "utf8"),
    await readFile(new URL("styles.css", root), "utf8")
  ].join("\n");

  for (const asset of removedAssets) {
    assert.doesNotMatch(interfaceSource, new RegExp(asset.replace(".", "\\.")));
    await assert.rejects(access(new URL(`assets/${asset}`, root)));
  }
  assert.match(interfaceSource, /assets\/logo\.svg/);
  await access(new URL("assets/logo.svg", root));
});

test("ships an explicit 404 page so normalized unsafe paths cannot fall back to the app shell", async () => {
  const notFoundPage = await readFile(new URL("404.html", root), "utf8");
  assert.match(notFoundPage, /<title>页面不存在/);
  assert.doesNotMatch(notFoundPage, /<script\b/i);
});
