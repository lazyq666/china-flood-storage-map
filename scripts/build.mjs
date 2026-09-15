import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { buildSeoPages } from "./seo.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
const key = process.env.AMAP_KEY?.trim();
const serviceHost = process.env.AMAP_SERVICE_HOST?.trim() || "/_AMapService";
const nominatimEndpoint = process.env.OSM_NOMINATIM_ENDPOINT?.trim() || "";
const overpassEndpoint = process.env.OSM_OVERPASS_ENDPOINT?.trim() || "";
const siteUrl = process.env.SITE_URL?.trim() || "https://hongqu.wayout.top/";

if (!key) {
  throw new Error("请在部署平台设置 AMAP_KEY 环境变量。");
}

await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, "data"), { recursive: true });
await mkdir(path.join(output, "assets"), { recursive: true });

// 只发布页面资源，不复制 Git 历史、本地配置、说明和启动脚本。
for (const entry of await readdir(root, { withFileTypes: true })) {
  if (entry.isFile() && /\.(html|css|js|svg)$/.test(entry.name)) {
    await cp(path.join(root, entry.name), path.join(output, entry.name));
  }
}
await cp(path.join(root, "assets/logo.svg"), path.join(output, "assets/logo.svg"));
for (const entry of await readdir(path.join(root, "data"), { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".js") && !entry.name.startsWith("map-config.")) {
    await cp(path.join(root, "data", entry.name), path.join(output, "data", entry.name));
  }
}
await writeFile(
  path.join(output, "data/map-config.js"),
  `window.FLOOD_STORAGE_MAP_CONFIG = ${JSON.stringify({
    key,
    serviceHost,
    osmServices: { nominatimEndpoint, overpassEndpoint }
  }, null, 2)};\n`
);
await writeFile(
  path.join(output, "_routes.json"),
  `${JSON.stringify({ version: 1, include: ["/_AMapService/*"], exclude: [] }, null, 2)}\n`
);
const seo = await buildSeoPages({ root, output, siteUrl });
console.log(`站点已生成到 dist/，包含 ${seo.zoneCount} 个可索引的蓄滞洪区详情页。`);
