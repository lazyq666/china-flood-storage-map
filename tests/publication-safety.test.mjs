import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(new URL("../scripts/check-publication-safety.mjs", import.meta.url));
function fixture(t) {
  const cwd = mkdtempSync(join(tmpdir(), "publication-safety-"));
  t.after(() => rmSync(cwd, { recursive: true, force: true }));
  const git = (...args) => execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  git("init", "-q");
  git("config", "user.name", "Publication test");
  git("config", "user.email", "test@example.invalid");
  const commit = (file, content) => {
    writeFileSync(join(cwd, file), content);
    git("add", file);
    git("commit", "-qm", "Fixture snapshot");
    return git("rev-parse", "HEAD");
  };
  const audit = (base) => spawnSync(process.execPath, [script, "--base", base], { cwd, encoding: "utf8" });
  return { git, commit, audit };
}

test("publication audit scans replacement history when the old push is unavailable", (t) => {
  const f = fixture(t);
  f.commit("README.md", "Public content\n");
  const result = f.audit("1".repeat(40));
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /全量检查 1 个当前文件及 1 个提交/);
});

test("replacement-history audit catches a private path in a deleted historical file", (t) => {
  const f = fixture(t);
  f.commit("old.md", ["/", "Users", "/", "fixture", "/", "private"].join(""));
  f.git("rm", "old.md");
  f.commit("README.md", "Clean tip\n");
  const result = f.audit("1".repeat(40));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /old\.md:1: 本机用户目录/);
});

test("unrelated old and new roots trigger a full audit even when both commits exist", (t) => {
  const f = fixture(t);
  const oldBase = f.commit("README.md", "Old root\n");
  f.git("checkout", "--orphan", "rewritten");
  f.commit("README.md", "New root\n");
  const result = f.audit(oldBase);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /全量检查/);
});

test("ordinary publication still enforces the new-file size limit", (t) => {
  const f = fixture(t);
  const base = f.commit("README.md", "Baseline\n");
  f.commit("oversized.bin", Buffer.alloc(1024 * 1024 + 1));
  const result = f.audit(base);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /新增文件超过 1 MiB/);
});
