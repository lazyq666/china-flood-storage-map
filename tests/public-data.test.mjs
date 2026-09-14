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

test("keeps all catalog entries while exposing only supported spatial records", async () => {
  const window = await loadData();
  const zones = window.FLOOD_STORAGE_ZONES;
  const evidence = window.FLOOD_STORAGE_LOCATION_EVIDENCE;
  const boundaries = window.FLOOD_STORAGE_LOCATION_BOUNDARIES;

  assert.equal(zones.length, 97);
  assert.equal(Object.keys(evidence.zones).length, 97);
  assert.equal(Object.keys(boundaries.zones).length, 72);
  assert.deepEqual(
    { ...evidence.summary.confidenceCounts },
    { none: 25, medium: 69, high: 3 }
  );
  assert.equal(evidence.summary.fieldVerified, 0);
  assert.equal(evidence.summary.removedThirdPartyBoundaryCount, 25);

  for (const zone of zones) {
    const hasBoundary = Boolean(boundaries.zones[zone.name]);
    assert.equal(evidence.zones[zone.name].confidence !== "none", hasBoundary, zone.name);
    assert.equal(evidence.zones[zone.name].fieldVerified, false, zone.name);
  }
});

test("publishable data contains no stored AMap response fields or AMap-derived records", async () => {
  const window = await loadData();
  const evidence = JSON.stringify(window.FLOOD_STORAGE_LOCATION_EVIDENCE.zones);
  const boundaries = JSON.stringify(window.FLOOD_STORAGE_LOCATION_BOUNDARIES.zones);

  assert.doesNotMatch(evidence, /placeSearch|ChatGPT引用|须结合原文核对/);
  assert.doesNotMatch(evidence, /高德|amap\.com/i);
  assert.doesNotMatch(boundaries, /高德|amap\.com/i);
  assert.doesNotMatch(evidence, /automation\/|chatgptExtractionPath/);
  assert.doesNotMatch(boundaries, /automation\/|candidatePath|reviewPath|runId/);
  await assert.rejects(access(new URL("data/amap-d-locations.js", root)));
});

test("confidence calculation cannot approve a record without publishable geometry", async () => {
  const module = { exports: {} };
  const context = vm.createContext({ globalThis: {}, module });
  vm.runInContext(await readFile(new URL("core.js", root), "utf8"), context, { filename: "core.js" });
  const evidence = {
    officialMap: { available: true, usableForLocation: true },
    governmentSources: [],
    administrativeMatch: { overall: "matched" },
    conclusion: { hasFuzzyLocation: true }
  };

  assert.equal(module.exports.calculateLocationConfidence(evidence).confidence, "high");
  assert.equal(module.exports.calculateLocationConfidence(evidence, { hasPublishableBoundary: false }).confidence, "none");
});

test("removed network-sourced images are not referenced or present", async () => {
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
});

test("ships an explicit 404 page so normalized unsafe paths cannot fall back to the app shell", async () => {
  const notFoundPage = await readFile(new URL("404.html", root), "utf8");
  assert.match(notFoundPage, /<title>页面不存在/);
  assert.doesNotMatch(notFoundPage, /<script\b/i);
});
