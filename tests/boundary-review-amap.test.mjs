import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("boundary review overlays current and candidate geometry on AMap", async () => {
  const html = await readFile(new URL("prototype-boundary-review.html", root), "utf8");
  const script = await readFile(new URL("prototype-boundary-review.js", root), "utf8");

  assert.match(html, /data\/map-config\.js/);
  assert.match(html, /core\.js/);
  assert.match(script, /new AMap\.Map/);
  assert.match(script, /wgs84GeoJSONToGcj02/);
  assert.match(script, /class="amap-review-map"/);
  assert.match(script, /new AMap\.Polygon/);
});
