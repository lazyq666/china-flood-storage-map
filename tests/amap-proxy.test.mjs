import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const handlerPath = new URL("../functions/_AMapService/[[path]].js", import.meta.url);

async function loadHandler() {
  const source = await readFile(handlerPath, "utf8");
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
  return import(`${moduleUrl}#${Date.now()}-${Math.random()}`);
}

async function withMockFetch(callback, responseFactory = () => new Response("ok")) {
  const originalFetch = globalThis.fetch;
  const requests = [];
  globalThis.fetch = async (target, init) => {
    requests.push({ target: String(target), init });
    return responseFactory(target, init);
  };

  try {
    const { onRequest } = await loadHandler();
    await callback({ onRequest, requests });
  } finally {
    globalThis.fetch = originalFetch;
  }
}

function context(path, method = "GET", code = "test-only-secret") {
  return {
    env: { AMAP_SECURITY_JS_CODE: code },
    request: {
      url: `https://hongqu.wayout.top${path}`,
      method,
      headers: new Headers({ accept: "application/json" })
    }
  };
}

test("forwards only a recognized endpoint to its fixed AMap origin", async () => {
  await withMockFetch(async ({ onRequest, requests }) => {
    const response = await onRequest(context("/_AMapService/v3/place/polygon?keywords=river&jscode=caller-value"));

    assert.equal(response.status, 200);
    assert.equal(requests.length, 1);
    const target = new URL(requests[0].target);
    assert.equal(target.origin, "https://restapi.amap.com");
    assert.equal(target.pathname, "/v3/place/polygon");
    assert.equal(target.searchParams.get("keywords"), "river");
    assert.equal(target.searchParams.get("jscode"), "test-only-secret");
    assert.equal(requests[0].init.headers.get("origin"), "https://hongqu.wayout.top");
    assert.equal(requests[0].init.headers.get("referer"), "https://hongqu.wayout.top/");
    assert.equal(requests[0].init.redirect, "manual");
  });
});

test("rejects requests from origins outside the production allowlist", async () => {
  await withMockFetch(async ({ onRequest, requests }) => {
    const untrusted = context("/_AMapService/v3/place/text");
    untrusted.request.url = "https://preview.attacker.invalid/_AMapService/v3/place/text";
    const response = await onRequest(untrusted);

    assert.equal(response.status, 403);
    assert.equal(requests.length, 0);
  });
});

test("uses the fixed web API origin for the map-style endpoint", async () => {
  await withMockFetch(async ({ onRequest, requests }) => {
    const response = await onRequest(context("/_AMapService/v4/map/styles"));

    assert.equal(response.status, 200);
    assert.equal(new URL(requests[0].target).origin, "https://webapi.amap.com");
  });
});

test("rejects protocol-relative, absolute, encoded, malformed, traversal, and unknown paths", async () => {
  const unsafePaths = [
    "/_AMapService//attacker.invalid/collect",
    "/_AMapService/https://attacker.invalid/collect",
    "/_AMapService/%2F%2Fattacker.invalid/collect",
    "/_AMapService/%5C%5Cattacker.invalid/collect",
    "/_AMapService/v3/%2e%2e/place/text",
    "/_AMapService/v3/%ZZ/place/text",
    "/_AMapService/v3/place/text/extra",
    "/outside/v3/place/text"
  ];

  await withMockFetch(async ({ onRequest, requests }) => {
    for (const path of unsafePaths) {
      const response = await onRequest(context(path));
      assert.equal(response.status, 400, path);
    }
    assert.equal(requests.length, 0);
  });
});

test("rejects methods other than GET and HEAD without calling upstream", async () => {
  await withMockFetch(async ({ onRequest, requests }) => {
    for (const method of ["POST", "PUT", "PATCH", "DELETE", "OPTIONS"]) {
      const response = await onRequest(context("/_AMapService/v3/place/text", method));
      assert.equal(response.status, 405, method);
      assert.equal(response.headers.get("allow"), "GET, HEAD");
    }
    assert.equal(requests.length, 0);
  });
});

test("does not follow an upstream redirect", async () => {
  await withMockFetch(async ({ onRequest, requests }) => {
    const response = await onRequest(context("/_AMapService/v3/config/district"));

    assert.equal(response.status, 502);
    assert.equal(requests.length, 1);
  }, () => new Response(null, {
    status: 302,
    headers: { location: "https://attacker.invalid/collect" }
  }));
});

test("rejects requests when the proxy secret is missing", async () => {
  await withMockFetch(async ({ onRequest, requests }) => {
    const response = await onRequest(context("/_AMapService/v3/place/text", "GET", ""));

    assert.equal(response.status, 503);
    assert.equal(requests.length, 0);
  });
});
