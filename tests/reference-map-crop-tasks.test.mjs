import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const pack = new URL("review/reference-map-boundary-trial-2026-09-16/crop-tasks/", root);

test("ships one traceable crop task for every labeled reference-map zone", async () => {
  const manifest = JSON.parse(await readFile(new URL("manifest.json", pack), "utf8"));
  assert.equal(manifest.sourceSize.join("x"), "2048x1152");
  assert.equal(manifest.taskCount, 9);
  assert.equal(new Set(manifest.tasks.map((task) => task.id)).size, 9);
  assert.deepEqual(
    manifest.tasks.find((task) => task.name === "洪湖分洪区").parts,
    ["洪湖（西块）", "洪湖（中块）", "洪湖（东块）"]
  );
  for (const task of manifest.tasks) {
    assert.equal(task.crop.length, 4);
    assert.ok(task.crop[0] >= 0 && task.crop[1] >= 0);
    assert.ok(task.crop[2] <= 2048 && task.crop[3] <= 1152);
    assert.ok((await stat(new URL(task.input, pack))).size > 1000, task.name);
  }
});
