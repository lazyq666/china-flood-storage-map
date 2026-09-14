import assert from "node:assert/strict";
import { cp, mkdtemp, readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { buildSeoPages, normalizeSiteUrl, zoneSlug } from "../scripts/seo.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));

test("normalizes the production URL and creates stable ASCII zone slugs", () => {
  assert.equal(normalizeSiteUrl("https://example.test/map/"), "https://example.test/map");
  assert.equal(zoneSlug({ id: "长江-01", basin: "长江流域" }), "changjiang-01");
  assert.equal(zoneSlug({ id: "松花江-02", basin: "松花江流域" }), "songhuajiang-02");
  assert.throws(() => normalizeSiteUrl("javascript:alert(1)"), /http 或 https/);
});

test("preserves a deployment subpath in generated canonical URLs", async () => {
  const output = await mkdtemp(path.join(os.tmpdir(), "flood-map-seo-subpath-"));
  await cp(path.join(root, "index.html"), path.join(output, "index.html"));
  await buildSeoPages({ root, output, siteUrl: "https://example.test/flood-map/" });
  const home = await readFile(path.join(output, "index.html"), "utf8");
  const detail = await readFile(path.join(output, "zones/changjiang-01/index.html"), "utf8");
  assert.match(home, /rel="canonical" href="https:\/\/example\.test\/flood-map\/"/);
  assert.match(detail, /rel="canonical" href="https:\/\/example\.test\/flood-map\/zones\/changjiang-01\/"/);
});

test("builds a crawlable directory, 97 detail pages, robots and sitemap", async () => {
  const output = await mkdtemp(path.join(os.tmpdir(), "flood-map-seo-"));
  await cp(path.join(root, "index.html"), path.join(output, "index.html"));
  const result = await buildSeoPages({ root, output, siteUrl: "https://map.example.test" });

  assert.equal(result.zoneCount, 97);
  const [home, directory, detail, sitemap, robots] = await Promise.all([
    readFile(path.join(output, "index.html"), "utf8"),
    readFile(path.join(output, "zones/index.html"), "utf8"),
    readFile(path.join(output, "zones/changjiang-01/index.html"), "utf8"),
    readFile(path.join(output, "sitemap.xml"), "utf8"),
    readFile(path.join(output, "robots.txt"), "utf8")
  ]);

  assert.match(home, /rel="canonical" href="https:\/\/map\.example\.test\/"/);
  assert.match(home, /全国97处完整名录/);
  assert.match(directory, /全国97处国家蓄滞洪区名录/);
  assert.match(detail, /围堤湖在哪里？/);
  assert.match(detail, /href="\.\.\/\.\.\/\?zone=%E9%95%BF%E6%B1%9F-01"/);
  assert.equal((sitemap.match(/<url>/g) || []).length, 99);
  assert.match(robots, /Sitemap: https:\/\/map\.example\.test\/sitemap\.xml/);
});
