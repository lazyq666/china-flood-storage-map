const SERVICE_PREFIX = "/_AMapService";
const ALLOWED_PATHS = new Set([
  "/v3/config/district",
  "/v3/place/polygon",
  "/v3/place/text",
  "/v4/map/styles"
]);

function rejected(message, status = 400, extraHeaders = {}) {
  return new Response(message, {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "text/plain; charset=utf-8",
      "x-content-type-options": "nosniff",
      ...extraHeaders
    }
  });
}

function validatedUpstreamPath(pathname) {
  if (!pathname.startsWith(`${SERVICE_PREFIX}/`)) return null;
  const path = pathname.slice(SERVICE_PREFIX.length);
  if (path.includes("\\") || /%(?:2e|2f|5c)/i.test(path)) return null;
  try {
    if (decodeURIComponent(path) !== path) return null;
  } catch (_) {
    return null;
  }
  return ALLOWED_PATHS.has(path) ? path : null;
}

function upstreamFor(pathname) {
  return pathname.startsWith("/v4/map/styles")
    ? "https://webapi.amap.com"
    : "https://restapi.amap.com";
}

export async function onRequest(context) {
  const method = String(context.request.method || "GET").toUpperCase();
  if (!new Set(["GET", "HEAD"]).has(method)) {
    return rejected("Method not allowed.", 405, { allow: "GET, HEAD" });
  }

  const securityJsCode = String(context.env.AMAP_SECURITY_JS_CODE || "").trim();
  if (!securityJsCode) {
    return rejected("AMap proxy is not configured.", 503);
  }

  const incoming = new URL(context.request.url);
  const upstreamPath = validatedUpstreamPath(incoming.pathname);
  if (!upstreamPath) return rejected("Unsupported AMap proxy path.");

  const upstreamOrigin = upstreamFor(upstreamPath);
  const target = new URL(upstreamOrigin);
  target.pathname = upstreamPath;
  target.search = incoming.search;
  target.searchParams.set("jscode", securityJsCode);
  if (target.origin !== upstreamOrigin || target.pathname !== upstreamPath) {
    return rejected("Invalid AMap proxy target.");
  }

  const headers = new Headers();
  for (const name of ["accept", "accept-language", "content-type"]) {
    const value = context.request.headers.get(name);
    if (value) headers.set(name, value);
  }

  const upstreamResponse = await fetch(target, {
    method,
    headers,
    redirect: "manual"
  });
  if (upstreamResponse.status >= 300 && upstreamResponse.status < 400) {
    return rejected("Unexpected redirect from AMap upstream.", 502);
  }
  const responseHeaders = new Headers();
  for (const name of ["content-type", "cache-control", "expires", "last-modified"]) {
    const value = upstreamResponse.headers.get(name);
    if (value) responseHeaders.set(name, value);
  }
  responseHeaders.set("x-content-type-options", "nosniff");
  return new Response(method === "HEAD" ? null : upstreamResponse.body, {
    status: upstreamResponse.status,
    headers: responseHeaders
  });
}
