import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

const BASIN_SLUGS = Object.freeze({
  "长江流域": "changjiang",
  "黄河流域": "huanghe",
  "淮河流域": "huaihe",
  "海河流域": "haihe",
  "松花江流域": "songhuajiang",
  "珠江流域": "zhujiang"
});

const DEFAULT_DESCRIPTION = "查询全国97处国家蓄滞洪区的名称、所属流域、所在省份、资料推定范围、位置证据与公开来源。地图不代表法定边界，仅供位置理解。";

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
}

function jsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function normalizeSiteUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const url = new URL(raw);
  if (!/^https?:$/.test(url.protocol)) throw new Error("SITE_URL 必须是 http 或 https 地址。");
  url.pathname = url.pathname.replace(/\/+$/, "");
  url.search = "";
  url.hash = "";
  return url.href.replace(/\/$/, "");
}

function absoluteUrl(siteUrl, pathname = "/") {
  if (!siteUrl) return "";
  const base = new URL(`${siteUrl}/`);
  const suffix = pathname === "/" ? "/" : `/${String(pathname).replace(/^\/+/, "")}`;
  base.pathname = `${base.pathname.replace(/\/+$/, "")}${suffix}`;
  return base.href;
}

function provinceFromArea(value) {
  const area = String(value || "").trim();
  const municipality = ["北京市", "天津市", "上海市", "重庆市"].find((name) => area.startsWith(name));
  return municipality || area.match(/^(.+?省)/)?.[1] || area.match(/^(.+?自治区)/)?.[1] || "";
}

function zoneSlug(zone) {
  const index = String(zone.id || "").match(/(\d+)$/)?.[1] || "00";
  return `${BASIN_SLUGS[zone.basin] || "zone"}-${index}`;
}

function cleanSentence(value, fallback) {
  return String(value || fallback || "")
    .replace(/\s+/g, " ")
    .replace(/[。；;\s]+$/, "")
    .trim();
}

function uniqueSources(evidence) {
  const official = evidence.officialMap?.available && evidence.officialMap?.usableForLocation && evidence.officialMap?.url
    ? [{ title: evidence.officialMap.title || "官方地图文件", url: evidence.officialMap.url, publisher: evidence.officialMap.publisher || "" }]
    : [];
  const supporting = (evidence.governmentSources || [])
    .filter((source) => source.supportsLocation === true && source.url);
  const seen = new Set();
  return [...official, ...supporting].filter((source) => {
    const url = String(source.url).trim();
    if (!url || seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}

async function loadPublicData(root) {
  const context = vm.createContext({ window: {} });
  for (const filename of ["data/zones.js", "data/zone-locations.js", "data/location-evidence.js", "data/location-boundaries.js"]) {
    vm.runInContext(await readFile(path.join(root, filename), "utf8"), context, { filename });
  }
  return {
    zones: context.window.FLOOD_STORAGE_ZONES || [],
    hints: context.window.FLOOD_STORAGE_LOCATION_HINTS || {},
    evidence: context.window.FLOOD_STORAGE_LOCATION_EVIDENCE || { zones: {} },
    boundaries: context.window.FLOOD_STORAGE_LOCATION_BOUNDARIES?.zones || {}
  };
}

function canonicalMarkup(siteUrl, pathname) {
  const url = absoluteUrl(siteUrl, pathname);
  return url
    ? `<link rel="canonical" href="${escapeHtml(url)}" />\n    <meta property="og:url" content="${escapeHtml(url)}" />`
    : "";
}

function pageShell({ title, description, canonical, stylesheet, body, structuredData }) {
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <meta name="theme-color" content="#f4f9fc" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
    <meta property="og:locale" content="zh_CN" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="全国蓄滞洪区地图" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    ${canonical}
    <link rel="icon" type="image/svg+xml" href="${stylesheet.includes("../../") ? "../../logo.svg" : "../logo.svg"}" />
    <link rel="stylesheet" href="${stylesheet}" />
    <title>${escapeHtml(title)}</title>
    <script type="application/ld+json">${jsonLd(structuredData)}</script>
  </head>
  <body>
    ${body}
  </body>
</html>
`;
}

function directoryPage(data, siteUrl) {
  const title = "全国97处国家蓄滞洪区名录｜按流域与省份查询";
  const description = "全国97处国家蓄滞洪区完整名录，按长江、黄河、淮河、海河、松花江和珠江流域整理，并提供所在省份、位置证据与地图入口。";
  const groups = Object.groupBy
    ? Object.groupBy(data.zones, (zone) => zone.basin)
    : data.zones.reduce((result, zone) => ((result[zone.basin] ||= []).push(zone), result), {});
  const groupSections = Object.entries(groups).map(([basin, zones]) => `
        <section class="seo-section" aria-labelledby="${BASIN_SLUGS[basin]}">
          <h2 id="${BASIN_SLUGS[basin]}">${escapeHtml(basin)} <small>${zones.length}处</small></h2>
          <ul class="zone-directory">
            ${zones.map((zone) => {
              const provinces = [...new Set((data.hints[zone.name]?.administrativeAreas || []).map(provinceFromArea).filter(Boolean))];
              return `<li><a href="./${zoneSlug(zone)}/"><strong>${escapeHtml(zone.name)}</strong><span>${escapeHtml(provinces.join("、") || "省份待核")}</span></a></li>`;
            }).join("\n            ")}
          </ul>
        </section>`).join("");
  const itemList = data.zones.map((zone, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: zone.name,
    ...(siteUrl ? { url: absoluteUrl(siteUrl, `/zones/${zoneSlug(zone)}/`) } : {})
  }));
  return pageShell({
    title,
    description,
    canonical: canonicalMarkup(siteUrl, "/zones/"),
    stylesheet: "../seo-pages.css",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "全国97处国家蓄滞洪区名录",
      numberOfItems: data.zones.length,
      itemListElement: itemList
    },
    body: `<header class="site-header"><a class="site-brand" href="../"><img src="../logo.svg" alt="" /><span>全国蓄滞洪区地图</span></a><a class="map-link" href="../">打开交互地图</a></header>
    <main class="seo-main">
      <nav class="breadcrumbs" aria-label="面包屑"><a href="../">地图首页</a><span aria-hidden="true">/</span><span>完整名录</span></nav>
      <div class="seo-hero">
        <p class="eyebrow">国家蓄滞洪区公开资料索引</p>
        <h1>全国97处国家蓄滞洪区名录</h1>
        <p>按六大流域整理名称、所在省份和位置资料。点击具体名称可查看公开证据、地图表达方式与不确定性。</p>
      </div>
      <aside class="notice"><strong>使用提醒</strong><span>本目录保留名录对象，但地图中的范围不是主管部门发布的法定边界，不能用于防洪调度、土地审批、保险、选址或人身安全决策。</span></aside>
      ${groupSections}
      <section class="seo-section prose">
        <h2>什么是蓄滞洪区？</h2>
        <p>蓄滞洪区是防洪体系的一部分。在达到法定条件并由有权部门统一调度后，部分洪水可临时进入指定区域，以分担洪峰、减轻下游防洪压力。实际启用范围、时机和人员转移，应以主管部门发布的信息为准。</p>
      </section>
    </main>
    <footer class="site-footer"><span>资料仅供位置理解，不替代主管部门法定边界。</span><a href="../">返回交互地图</a></footer>`
  });
}

function zonePage(zone, index, data, siteUrl) {
  const evidence = data.evidence.zones[zone.name] || {};
  const hint = data.hints[zone.name] || {};
  const boundary = data.boundaries[zone.name];
  const location = cleanSentence(evidence.conclusion?.positionText || hint.rawLocation, "相关行政区域");
  const provinces = [...new Set((hint.administrativeAreas || []).map(provinceFromArea).filter(Boolean))];
  const spatialLabel = !boundary || evidence.confidence === "none"
    ? "暂无足够证据绘制位置范围"
    : boundary.quality === "conclusion-administrative" ? "所在行政区" : "资料推定范围";
  const title = `${zone.name}在哪里？位置与公开证据｜全国蓄滞洪区地图`;
  const description = `${zone.name}是${zone.basin}国家蓄滞洪区名录对象。查看${location}的位置资料、${spatialLabel}、公开证据与不确定性说明。`;
  const sources = uniqueSources(evidence);
  const reviewedAt = String(evidence.reviewedAt || data.evidence.generatedAt || "").slice(0, 10);
  const area = boundary?.referenceAreaSqKm
    ? `资料面积约${boundary.referenceAreaSqKm}平方公里`
    : boundary?.areaSqKm ? `图示范围约${boundary.areaSqKm}平方公里` : "暂无可核对的面积信息";
  const previous = data.zones[index - 1];
  const next = data.zones[index + 1];
  const url = absoluteUrl(siteUrl, `/zones/${zoneSlug(zone)}/`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        description,
        inLanguage: "zh-CN",
        dateModified: reviewedAt || undefined,
        ...(url ? { url } : {}),
        about: { "@type": "Thing", name: zone.name, description: `${zone.basin}国家蓄滞洪区名录对象` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "全国蓄滞洪区地图", ...(siteUrl ? { item: absoluteUrl(siteUrl, "/") } : {}) },
          { "@type": "ListItem", position: 2, name: "国家蓄滞洪区名录", ...(siteUrl ? { item: absoluteUrl(siteUrl, "/zones/") } : {}) },
          { "@type": "ListItem", position: 3, name: zone.name, ...(url ? { item: url } : {}) }
        ]
      }
    ]
  };
  const sourceMarkup = sources.length
    ? `<ul class="source-list">${sources.map((source) => `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer"><strong>${escapeHtml(source.title || source.publisher || "公开资料")}</strong>${source.publisher ? `<span>${escapeHtml(source.publisher)}</span>` : ""}</a></li>`).join("")}</ul>`
    : "<p>目前没有找到足以支持位置判断的政府公文或官方图件；该对象仍保留在国家名录索引中。</p>";
  return pageShell({
    title,
    description,
    canonical: canonicalMarkup(siteUrl, `/zones/${zoneSlug(zone)}/`),
    stylesheet: "../../seo-pages.css",
    structuredData,
    body: `<header class="site-header"><a class="site-brand" href="../../"><img src="../../logo.svg" alt="" /><span>全国蓄滞洪区地图</span></a><a class="map-link" href="../../?zone=${encodeURIComponent(zone.id)}">在地图中查看</a></header>
    <main class="seo-main">
      <nav class="breadcrumbs" aria-label="面包屑"><a href="../../">地图首页</a><span aria-hidden="true">/</span><a href="../">完整名录</a><span aria-hidden="true">/</span><span>${escapeHtml(zone.name)}</span></nav>
      <article>
        <div class="seo-hero">
          <p class="eyebrow">${escapeHtml(zone.basin)} · 国家级</p>
          <h1>${escapeHtml(zone.name)}在哪里？</h1>
          <p>${escapeHtml(location)}。</p>
          <a class="primary-action" href="../../?zone=${encodeURIComponent(zone.id)}">打开交互地图查看</a>
        </div>
        <aside class="notice"><strong>边界说明</strong><span>当前状态：${escapeHtml(spatialLabel)}。所有位置均未经实地核验，不代表主管部门发布的法定边界。</span></aside>
        <section class="seo-section">
          <h2>${escapeHtml(zone.name)}位置资料</h2>
          <dl class="fact-grid">
            <div><dt>所属流域</dt><dd>${escapeHtml(zone.basin)}</dd></div>
            <div><dt>涉及省份</dt><dd>${escapeHtml(provinces.join("、") || "待进一步核对")}</dd></div>
            <div><dt>地图表达</dt><dd>${escapeHtml(spatialLabel)}</dd></div>
            <div><dt>面积信息</dt><dd>${escapeHtml(area)}</dd></div>
            <div class="wide"><dt>位置结论</dt><dd>${escapeHtml(location)}</dd></div>
          </dl>
        </section>
        <section class="seo-section prose">
          <h2>证据与不确定性</h2>
          <p>${escapeHtml(cleanSentence(evidence.confidenceReason || evidence.conclusion?.reasoning, "目前只能确认其名录身份，具体位置仍待更多公开资料核验"))}。</p>
          <p>本项目区分“名录存在性”和“地图空间表达”：收录名称不表示已经获得法定边界；公开证据不足时，不生成地图几何。</p>
          ${reviewedAt ? `<p class="review-date">资料复核日期：<time datetime="${escapeHtml(reviewedAt)}">${escapeHtml(reviewedAt)}</time></p>` : ""}
        </section>
        <section class="seo-section">
          <h2>公开资料来源</h2>
          ${sourceMarkup}
        </section>
        <nav class="adjacent" aria-label="相邻名录">
          ${previous ? `<a href="../${zoneSlug(previous)}/"><span>上一处</span><strong>${escapeHtml(previous.name)}</strong></a>` : "<span></span>"}
          ${next ? `<a href="../${zoneSlug(next)}/"><span>下一处</span><strong>${escapeHtml(next.name)}</strong></a>` : "<span></span>"}
        </nav>
      </article>
    </main>
    <footer class="site-footer"><span>资料仅供位置理解，不替代主管部门法定边界。</span><a href="../">查看完整名录</a></footer>`
  });
}

export async function buildSeoPages({ root, output, siteUrl: rawSiteUrl }) {
  const siteUrl = normalizeSiteUrl(rawSiteUrl);
  const data = await loadPublicData(root);
  const zonesOutput = path.join(output, "zones");
  await mkdir(zonesOutput, { recursive: true });
  await writeFile(path.join(zonesOutput, "index.html"), directoryPage(data, siteUrl));
  for (const [index, zone] of data.zones.entries()) {
    const destination = path.join(zonesOutput, zoneSlug(zone));
    await mkdir(destination, { recursive: true });
    await writeFile(path.join(destination, "index.html"), zonePage(zone, index, data, siteUrl));
  }

  const indexPath = path.join(output, "index.html");
  let indexHtml = await readFile(indexPath, "utf8");
  const rootUrlMarkup = canonicalMarkup(siteUrl, "/");
  indexHtml = indexHtml
    .replace("<!-- SEO_BUILD_URLS -->", rootUrlMarkup)
    .replace("<!-- SEO_DIRECTORY_LINK -->", '<a href="./zones/">全国97处完整名录</a>');
  await writeFile(indexPath, indexHtml);

  const robots = ["User-agent: *", "Allow: /", siteUrl ? `Sitemap: ${absoluteUrl(siteUrl, "/sitemap.xml")}` : ""]
    .filter(Boolean).join("\n") + "\n";
  await writeFile(path.join(output, "robots.txt"), robots);

  if (siteUrl) {
    const lastModified = String(data.evidence.generatedAt || "").slice(0, 10);
    const paths = ["/", "/zones/", ...data.zones.map((zone) => `/zones/${zoneSlug(zone)}/`)];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((pathname) => `  <url><loc>${escapeHtml(absoluteUrl(siteUrl, pathname))}</loc>${lastModified ? `<lastmod>${lastModified}</lastmod>` : ""}</url>`).join("\n")}\n</urlset>\n`;
    await writeFile(path.join(output, "sitemap.xml"), sitemap);
  }

  return { zoneCount: data.zones.length, siteUrl };
}

export { normalizeSiteUrl, zoneSlug };
