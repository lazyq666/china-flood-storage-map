#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";

const args = process.argv.slice(2);
const baseIndex = args.indexOf("--base");
const requestedBase = baseIndex >= 0 ? args[baseIndex + 1] : "origin/main";
const maxBuffer = 128 * 1024 * 1024;
const runGit = (...gitArgs) => execFileSync("git", gitArgs, { encoding: "utf8", maxBuffer });
const splitZero = (value) => value.split("\0").filter(Boolean);
const findings = [];

let base = requestedBase;
if (!base || /^0+$/.test(base)) base = "HEAD^";
runGit("rev-parse", "--verify", base);

const changedPaths = splitZero(runGit("diff", "--name-only", "-z", "--diff-filter=ACMR", `${base}...HEAD`));
const addedPaths = new Set(splitZero(runGit("diff", "--name-only", "-z", "--diff-filter=A", `${base}...HEAD`)));
const changedSet = new Set(changedPaths);
const contentExemptPaths = new Set([
  "scripts/check-publication-safety.mjs",
  "scripts/sanitize-public-boundaries.mjs",
  "tests/public-data.test.mjs"
]);

const forbiddenPathRules = [
  [/^review\//i, "公开仓库不接收审阅原件或中间产物"],
  [/(^|\/)HANDOFF[^/]*\.md$/i, "跨会话交接文档应保存在私有空间"],
  [/(^|\/)\.env(?:\.|$)/i, "环境配置文件可能包含凭据"],
  [/^data\/map-config\.js$/i, "本机地图配置不得提交"],
  [/\.(?:pem|p12|pfx)$/i, "证书或私钥文件不得提交"]
];

for (const path of changedPaths) {
  for (const [pattern, message] of forbiddenPathRules) {
    if (pattern.test(path)) findings.push(`${path}: ${message}`);
  }
}

const contentRules = [
  [/https?:\/\/chatgpt\.com\/(?:g\/[^\s"'<>]*\/c\/|c\/)/i, "私有会话直链"],
  [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/i, "疑似私钥"],
  [/AKIA[0-9A-Z]{16}/, "疑似 AWS Access Key"],
  [/AIza[0-9A-Za-z_-]{30,}/, "疑似 Google API Key"],
  [/ghp_[0-9A-Za-z]{20,}|github_pat_[0-9A-Za-z_]{20,}/, "疑似 GitHub 令牌"],
  [/sk-[0-9A-Za-z_-]{16,}/, "疑似 API 令牌"],
  [/xox[baprs]-[0-9A-Za-z-]{10,}/, "疑似 Slack 令牌"],
  [/uploads\.linear\.app/i, "内部附件直链"],
  [/linearAttachmentIds?\b/i, "内部附件标识"],
  [/https?:\/\/linear\.app\/[^\s"'<>]+/i, "内部工单链接"],
  [/\/Users\/(?!<name>\/)[^/\s"']+\//i, "本机用户目录"],
  [/[A-Za-z]:\\Users\\(?!<name>\\)[^\\\s"']+\\/i, "本机用户目录"],
  [/codex-clipboard-[0-9a-f-]{16,}/i, "内部剪贴板附件标识"],
  [/reroll-ai-canvas/i, "无关私有项目名"]
];

function scanText(path, text, context) {
  const lines = text.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    for (const [pattern, message] of contentRules) {
      if (pattern.test(lines[index])) findings.push(`${path}:${index + 1}: ${message}${context}`);
    }
  }
}

for (const path of changedPaths) {
  if (contentExemptPaths.has(path)) continue;
  try {
    const data = readFileSync(path);
    if (!data.includes(0)) scanText(path, data.toString("utf8"), "");
  } catch {
    // 删除或重命名后的旧路径无需扫描当前内容。
  }
}

const commits = runGit("rev-list", "--reverse", `${base}..HEAD`).trim().split("\n").filter(Boolean);
for (const commit of commits) {
  const paths = splitZero(runGit("diff-tree", "--no-commit-id", "--name-only", "-r", "-z", commit));
  for (const path of paths) {
    if (!changedSet.has(path) || contentExemptPaths.has(path)) continue;
    try {
      const blob = execFileSync("git", ["show", `${commit}:${path}`], { maxBuffer });
      if (!blob.includes(0)) scanText(path, blob.toString("utf8"), `（提交 ${commit.slice(0, 8)}）`);
    } catch {
      // 当前提交中不存在该路径。
    }
  }
}

let addedBytes = 0;
for (const path of addedPaths) {
  try {
    const bytes = statSync(path).size;
    addedBytes += bytes;
    if (bytes > 1024 * 1024) findings.push(`${path}: 新增文件超过 1 MiB（${(bytes / 1048576).toFixed(2)} MiB）`);
  } catch {
    // 删除或重命名后的旧路径无需统计。
  }
}
if (addedBytes > 10 * 1024 * 1024) {
  findings.push(`新增文件合计超过 10 MiB（${(addedBytes / 1048576).toFixed(2)} MiB）`);
}

if (findings.length) {
  console.error("发布安全检查失败：");
  for (const finding of [...new Set(findings)]) console.error(`- ${finding}`);
  process.exit(1);
}

console.log(`发布安全检查通过：${changedPaths.length} 个文件，新增 ${(addedBytes / 1048576).toFixed(2)} MiB。`);
