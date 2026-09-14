import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
const key = process.env.AMAP_KEY?.trim();
const securityJsCode = process.env.AMAP_SECURITY_JS_CODE?.trim();

if (!key || !securityJsCode) {
  throw new Error("请在部署平台设置 AMAP_KEY 和 AMAP_SECURITY_JS_CODE 环境变量。");
}

await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, "data"), { recursive: true });

// 只发布页面资源，不复制 Git 历史、本地配置、说明和启动脚本。
for (const entry of await readdir(root, { withFileTypes: true })) {
  if (entry.isFile() && /\.(html|css|js|svg)$/.test(entry.name)) {
    await cp(path.join(root, entry.name), path.join(output, entry.name));
  }
}
await cp(path.join(root, "assets"), path.join(output, "assets"), { recursive: true });
for (const entry of await readdir(path.join(root, "data"), { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".js") && !entry.name.startsWith("map-config.")) {
    await cp(path.join(root, "data", entry.name), path.join(output, "data", entry.name));
  }
}
await writeFile(
  path.join(output, "data/map-config.js"),
  `window.FLOOD_STORAGE_MAP_CONFIG = ${JSON.stringify({ key, securityJsCode }, null, 2)};\n`
);
console.log("站点已生成到 dist/。");
