#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";

const target = new URL("../data/location-boundaries.js", import.meta.url);
const privateKeys = new Set([
  "candidatePath",
  "reviewPath",
  "referenceImage",
  "tracePath",
  "reportPath",
  "issueId",
  "linearAttachmentId",
  "linearAttachmentIds",
  "attachmentPath",
  "approval"
]);

function readPayload(source) {
  const startMarker = "const payload = ";
  const start = source.indexOf(startMarker);
  const end = source.indexOf(";\n  window.FLOOD_STORAGE_LOCATION_BOUNDARIES", start);
  if (start < 0 || end < 0) throw new Error("无法定位边界数据");
  return JSON.parse(source.slice(start + startMarker.length, end));
}

function sanitize(value, removed) {
  if (Array.isArray(value)) return value.map((item) => sanitize(item, removed));
  if (!value || typeof value !== "object") return value;

  const clean = {};
  for (const [key, item] of Object.entries(value)) {
    const privateLocalReference = typeof item === "string" && /^(?:review|automation)\//.test(item);
    if (privateKeys.has(key) || /Path$/.test(key) || privateLocalReference) {
      removed.set(key, (removed.get(key) || 0) + 1);
      continue;
    }
    clean[key] = sanitize(item, removed);
  }
  return clean;
}

const source = await readFile(target, "utf8");
const removed = new Map();
const payload = sanitize(readPayload(source), removed);
const output = `(function () {\n  "use strict";\n  const payload = ${JSON.stringify(payload, null, 2)};\n  window.FLOOD_STORAGE_LOCATION_BOUNDARIES = Object.freeze({ ...payload, zones: Object.freeze(payload.zones) });\n})();\n`;

if (/uploads\.linear\.app|\/Users\/|C:\\Users\\/i.test(output)) {
  throw new Error("净化后的边界数据仍包含内部附件或本机路径");
}

await writeFile(target, output, "utf8");
console.log(`已移除 ${[...removed.values()].reduce((sum, count) => sum + count, 0)} 个私有审阅字段。`);
