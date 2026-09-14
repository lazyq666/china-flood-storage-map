const SERVICE_PREFIX = "/_AMapService";

function upstreamFor(pathname) {
  return pathname.startsWith("/v4/map/styles")
    ? "https://webapi.amap.com"
    : "https://restapi.amap.com";
}

export async function onRequest(context) {
  const securityJsCode = String(context.env.AMAP_SECURITY_JS_CODE || "").trim();
  if (!securityJsCode) {
    return new Response("AMap proxy is not configured.", { status: 503 });
  }

  const incoming = new URL(context.request.url);
  const upstreamPath = incoming.pathname.startsWith(SERVICE_PREFIX)
    ? incoming.pathname.slice(SERVICE_PREFIX.length) || "/"
    : incoming.pathname;
  const target = new URL(upstreamPath, upstreamFor(upstreamPath));
  target.search = incoming.search;
  target.searchParams.set("jscode", securityJsCode);

  const headers = new Headers();
  for (const name of ["accept", "accept-language", "content-type"]) {
    const value = context.request.headers.get(name);
    if (value) headers.set(name, value);
  }

  const upstreamResponse = await fetch(target, {
    method: context.request.method,
    headers,
    body: ["GET", "HEAD"].includes(context.request.method)
      ? undefined
      : context.request.body,
    redirect: "follow"
  });
  const responseHeaders = new Headers();
  for (const name of ["content-type", "cache-control", "expires", "last-modified"]) {
    const value = upstreamResponse.headers.get(name);
    if (value) responseHeaders.set(name, value);
  }
  responseHeaders.set("x-content-type-options", "nosniff");
  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    headers: responseHeaders
  });
}
