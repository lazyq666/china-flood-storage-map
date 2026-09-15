(function () {
  "use strict";

  const zones = window.FLOOD_STORAGE_ZONES || [];
  const basins = window.FLOOD_STORAGE_BASINS || [];
  const locationHints = window.FLOOD_STORAGE_LOCATION_HINTS || {};
  const locationCache = window.FLOOD_STORAGE_LOCATION_CACHE?.zones || {};
  const amapDLocations = window.FLOOD_STORAGE_AMAP_D_LOCATIONS?.zones || {};
  const dLocationEstimates = window.FLOOD_STORAGE_D_LOCATION_ESTIMATES?.zones || {};
  const locationEvidencePayload = window.FLOOD_STORAGE_LOCATION_EVIDENCE || {};
  const locationEvidence = locationEvidencePayload.zones || {};
  const locationBoundaries = window.FLOOD_STORAGE_LOCATION_BOUNDARIES?.zones || {};
  const mapConfig = window.FLOOD_STORAGE_MAP_CONFIG || {};
  const PROVINCE_BOUNDARY_STORAGE_PREFIX = "flood-storage-province-boundary:v2:";
  const PROVINCE_BOUNDARY_DB_NAME = "flood-storage-province-boundaries";
  const PROVINCE_BOUNDARY_DB_STORE = "boundaries";
  const PROVINCE_ADCODES = Object.freeze({
    "北京市": "110000", "天津市": "120000", "河北省": "130000",
    "吉林省": "220000", "黑龙江省": "230000", "江苏省": "320000",
    "安徽省": "340000", "江西省": "360000", "山东省": "370000",
    "河南省": "410000", "湖北省": "420000", "湖南省": "430000",
    "广东省": "440000"
  });
  const MAP_INTERACTIVE_COLOR = colorToken("--color-interactive", "#007ef1");
  const MAP_INFERRED_COLOR = colorToken("--color-spatial-inferred", "#079b89");
  const MAP_ADMINISTRATIVE_COLOR = colorToken("--color-spatial-administrative", "#6e8ca1");
  const ZONE_MARKER_SCALE = Object.freeze({
    minZoom: 3,
    expandedZoom: 9,
    minSize: 8,
    maxSize: 26
  });
  const BASIN_SLUGS = Object.freeze({
    "长江流域": "changjiang",
    "黄河流域": "huanghe",
    "淮河流域": "huaihe",
    "海河流域": "haihe",
    "松花江流域": "songhuajiang",
    "珠江流域": "zhujiang"
  });
  const DEFAULT_PAGE_TITLE = "全国蓄滞洪区地图｜97处名录、位置与公开证据";
  const DEFAULT_PAGE_DESCRIPTION = "查询全国97处国家蓄滞洪区的名称、所属流域、所在省份、资料推定范围、位置证据与公开来源。地图不代表法定边界，仅供位置理解。";
  const CANONICAL_SITE_ROOT = document.head.querySelector('link[rel="canonical"]')?.href || "";
  const LIMITATION_ICONS = Object.freeze({
    officialMap: '<svg class="limitation-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 6 5-3 8 3 5-3v15l-5 3-8-3-5 3V6Z"/><path d="M8 3v15M16 6v15M4 4l16 16"/></svg>',
    fieldVerification: '<svg class="limitation-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><path d="M12 7v4M12 15h.01"/></svg>',
    legalBoundary: '<svg class="limitation-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.3 3.6 2.2 18a2 2 0 0 0 1.8 3h16a2 2 0 0 0 1.8-3L13.7 3.6a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></svg>',
    displaySeparation: '<svg class="limitation-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h6a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h6M17 16l3 3-3 3"/><path d="M17 2l3 3-3 3"/></svg>'
  });
  const defaultMapStyle = mapConfig.mapStyle || "amap://styles/whitesmoke";
  const {
    normalizeName,
    coordinateBounds,
    fallbackTargets,
    osmLookupId,
    selectionFitPadding,
    wgs84ToGcj02,
    wgs84GeoJSONToGcj02
  } = window.FloodStorageCore;

  const provinceCache = new Map();
  const provinces = [...new Set(zones.flatMap((zone) => zoneProvinces(zone)))];
  const provinceDistrictCache = new Map();
  const provinceDistrictJobs = new Map();
  const provinceDistrictQueue = [];
  const PROVINCE_DISTRICT_CONCURRENCY = 3;
  let provinceDistrictActiveCount = 0;
  let provinceBoundaryDatabasePromise = null;

  const state = {
    query: "",
    classification: "province",
    category: "全部",
    selectedZoneId: null,
    map: null,
    approximateLayers: [],
    overviewLayerByZone: new Map(),
    labelLayerByZone: new Map(),
    provinceFocusLayers: [],
    provincePreviewLayers: [],
    basinFocusLayers: [],
    hoverLayers: [],
    focusLayers: [],
    hiddenOverviewLayer: null,
    locationRequestId: 0,
    provinceRequestId: 0
  };

  function colorToken(name, fallback) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  }

  const els = {
    searchInput: document.getElementById("searchInput"),
    searchCount: document.getElementById("searchCount"),
    classificationSwitch: document.getElementById("classificationSwitch"),
    categoryFilters: document.getElementById("categoryFilters"),
    zoneList: document.getElementById("zoneList"),
    zoneScrollbar: document.getElementById("zoneScrollbar"),
    zoneScrollbarThumb: document.getElementById("zoneScrollbarThumb"),
    coordinateReadout: document.getElementById("coordinateReadout"),
    mapError: document.getElementById("mapError"),
    mapErrorTitle: document.getElementById("mapErrorTitle"),
    mapErrorText: document.getElementById("mapErrorText"),
    detailPanel: document.getElementById("detailPanel"),
    detailBody: document.getElementById("detailBody"),
    detailClose: document.getElementById("detailClose"),
    detailName: document.getElementById("detailName"),
    detailBadges: document.getElementById("detailBadges"),
    detailSummary: document.getElementById("detailSummary"),
    detailKeyFacts: document.getElementById("detailKeyFacts"),
    detailLimitations: document.getElementById("detailLimitations"),
    detailOfficialMap: document.getElementById("detailOfficialMap"),
    detailAmapCandidates: document.getElementById("detailAmapCandidates"),
    detailApproximateBoundary: document.getElementById("detailApproximateBoundary"),
    detailReferenceCluesRow: document.getElementById("detailReferenceCluesRow"),
    detailReferenceClues: document.getElementById("detailReferenceClues"),
    detailGovernmentSources: document.getElementById("detailGovernmentSources"),
    detailEvidenceConclusion: document.getElementById("detailEvidenceConclusion"),
    detailUpdatedAt: document.getElementById("detailUpdatedAt"),
    sourceButton: document.getElementById("sourceButton"),
    sourceDialog: document.getElementById("sourceDialog"),
    aboutZoneButton: document.getElementById("aboutZoneButton"),
    aboutZoneDialog: document.getElementById("aboutZoneDialog"),
    toast: document.getElementById("toast")
  };

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[char]);
  }

  function zoneSlug(zone) {
    const index = String(zone.id || "").match(/(\d+)$/)?.[1] || "00";
    return `${BASIN_SLUGS[zone.basin] || "zone"}-${index}`;
  }

  function setMetaContent(selector, content) {
    document.head.querySelector(selector)?.setAttribute("content", content);
  }

  function updateDocumentMetadata(zone) {
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (!zone) {
      document.title = DEFAULT_PAGE_TITLE;
      setMetaContent('meta[name="description"]', DEFAULT_PAGE_DESCRIPTION);
      setMetaContent('meta[property="og:title"]', DEFAULT_PAGE_TITLE);
      setMetaContent('meta[property="og:description"]', DEFAULT_PAGE_DESCRIPTION);
      setMetaContent('meta[name="twitter:title"]', DEFAULT_PAGE_TITLE);
      setMetaContent('meta[name="twitter:description"]', DEFAULT_PAGE_DESCRIPTION);
      if (canonical && CANONICAL_SITE_ROOT) {
        canonical.href = CANONICAL_SITE_ROOT;
        setMetaContent('meta[property="og:url"]', CANONICAL_SITE_ROOT);
      }
      return;
    }

    const evidence = evidenceEntry(zone.name);
    const hint = locationHints[zone.name] || {};
    const position = String(evidence.conclusion?.positionText || hint.rawLocation || "相关行政区域")
      .replace(/[。；;\s]+$/, "");
    const title = `${zone.name}在哪里？位置与公开证据｜全国蓄滞洪区地图`;
    const description = `${zone.name}是${zone.basin}国家蓄滞洪区名录对象。查看其${position}的位置资料、地图表达、证据来源与不确定性说明。`;
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    if (canonical && CANONICAL_SITE_ROOT) {
      const zoneUrl = new URL(`zones/${zoneSlug(zone)}/`, CANONICAL_SITE_ROOT);
      canonical.href = zoneUrl.href;
      setMetaContent('meta[property="og:url"]', zoneUrl.href);
    }
  }

  function syncSelectedZoneUrl(zone) {
    const url = new URL(window.location.href);
    if (zone) url.searchParams.set("zone", zone.id);
    else url.searchParams.delete("zone");
    window.history.replaceState(null, "", url);
    updateDocumentMetadata(zone);
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2200);
  }

  function showMapError(title, message) {
    els.mapErrorTitle.textContent = title;
    els.mapErrorText.textContent = message;
    els.mapError.hidden = false;
  }

  function screenPoint(point) {
    if (!state.map?.lngLatToContainer) return null;
    const pixel = state.map.lngLatToContainer(point);
    const x = Number(pixel?.x ?? pixel?.getX?.());
    const y = Number(pixel?.y ?? pixel?.getY?.());
    return Number.isFinite(x) && Number.isFinite(y) ? { x, y } : null;
  }

  function formatChineseDate(value) {
    const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
    return match ? `${match[1]}年${match[2]}月${match[3]}日` : "—";
  }

  function provinceFromArea(value) {
    const area = String(value || "").trim();
    const municipality = ["北京市", "天津市", "上海市", "重庆市"].find((name) => area.startsWith(name));
    if (municipality) return municipality;
    return area.match(/^(.+?省)/)?.[1] || area.match(/^(.+?自治区)/)?.[1] || "";
  }

  function zoneProvinces(zone) {
    if (provinceCache.has(zone.name)) return provinceCache.get(zone.name);
    const hint = locationHints[zone.name] || {};
    const values = [...new Set((hint.administrativeAreas || []).map(provinceFromArea).filter(Boolean))];
    provinceCache.set(zone.name, values);
    return values;
  }

  function locationEntry(zoneName) {
    const entry = { ...(locationCache[zoneName] || {}), ...(amapDLocations[zoneName] || {}) };
    if (locationBoundaries[zoneName]) entry.approximateBoundary = locationBoundaries[zoneName];
    const estimate = dLocationEstimates[zoneName];
    if (estimate?.mapTarget && !entry.areaApproximation && !entry.engineeringAnchor) {
      entry.areaApproximation = estimate.mapTarget;
    }
    if (estimate) entry.dEstimate = estimate;
    return entry;
  }

  function evidenceEntry(zoneName) {
    return locationEvidence[zoneName] || {
      confidence: "none",
      confidenceLabel: "暂不判断",
      confidenceReason: "尚未形成可解释的位置证据链。",
      reviewedAt: null,
      fieldVerified: false,
      officialMap: { available: false, usableForLocation: false },
      placeSearch: { status: "none", candidates: [], selectedCandidate: null },
      referenceClues: [],
      governmentSources: [],
      administrativeMatch: { overall: "unavailable", matchedAreas: [] },
      conclusion: { positionText: "", reasoning: "" }
    };
  }

  function publicSpatialMeta(zoneName) {
    const evidence = evidenceEntry(zoneName);
    const boundary = locationBoundaries[zoneName];
    if (evidence.confidence === "none" || !boundary) {
      return { label: "无法找到", kind: "unavailable", color: MAP_ADMINISTRATIVE_COLOR, strokeStyle: "dashed" };
    }
    if (boundary.quality === "conclusion-administrative") {
      return { label: "所在行政区", kind: "administrative", color: MAP_ADMINISTRATIVE_COLOR, strokeStyle: "dashed" };
    }
    return { label: "推定范围", kind: "inferred", color: MAP_INFERRED_COLOR, strokeStyle: "solid" };
  }

  function spatialGeometryStyle(spatial, variant = "selected") {
    const administrative = spatial.kind === "administrative";
    const variants = {
      overview: {
        zIndex: 22,
        strokeWeight: administrative ? 1.2 : 1.45,
        strokeOpacity: administrative ? 0.62 : 0.76,
        inferredFillOpacity: 0.14,
        dasharray: [7, 5]
      },
      selected: {
        zIndex: 84,
        strokeWeight: 2.1,
        strokeOpacity: 1,
        inferredFillOpacity: 0.12,
        dasharray: [20, 12]
      },
      "selected-boundary": {
        zIndex: 86,
        strokeWeight: 2.4,
        strokeOpacity: 1,
        inferredFillOpacity: 0.19,
        dasharray: [20, 12]
      }
    };
    const values = variants[variant] || variants.selected;
    return {
      zIndex: values.zIndex,
      strokeColor: spatial.color,
      strokeWeight: values.strokeWeight,
      strokeOpacity: values.strokeOpacity,
      strokeStyle: spatial.strokeStyle,
      strokeDasharray: administrative ? values.dasharray : undefined,
      fillColor: spatial.color,
      fillOpacity: administrative ? 0.018 : values.inferredFillOpacity
    };
  }

  function interactionHaloStyle(variant = "selected") {
    const hover = variant === "hover";
    return {
      zIndex: hover ? 21 : 82,
      strokeColor: MAP_INTERACTIVE_COLOR,
      strokeWeight: hover ? 6 : 10,
      strokeOpacity: hover ? 0.16 : 0.22,
      strokeStyle: "solid",
      fillColor: MAP_INTERACTIVE_COLOR,
      fillOpacity: 0,
      lineJoin: "round",
      lineCap: "round"
    };
  }

  function spatialPointStyle(spatial) {
    return {
      strokeColor: "#ffffff",
      strokeWeight: 2,
      fillColor: spatial.color,
      fillOpacity: spatial.kind === "administrative" ? 0.45 : 1
    };
  }

  function withoutInternalConfidence(value, replacement = "") {
    return String(value || "")
      .replace(/现有证据[^。]*确信度(?:高|中)[。]?/g, replacement)
      .replace(/确信度(?:高|中)|暂不判断/g, replacement)
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  function categoryOptions() {
    return state.classification === "province" ? provinces : basins;
  }

  function zoneCategoryNames(zone) {
    return state.classification === "province" ? zoneProvinces(zone) : [zone.basin];
  }

  function categoryMatches(zone) {
    return state.category === "全部" || zoneCategoryNames(zone).includes(state.category);
  }

  function zoneCategoryLabel(zone) {
    const names = zoneCategoryNames(zone);
    return state.classification === "basin"
      ? zone.basin
      : names.map((name) => name.replace(/省$|市$/, "")).join(" / ") || "省份待补";
  }

  function filteredZones() {
    const query = normalizeName(state.query);
    return zones.filter((zone) => {
      const hint = locationHints[zone.name];
      const categoryMatch = categoryMatches(zone);
      const queryMatch = !query
        || normalizeName(zone.name).includes(query)
        || normalizeName(zone.basin).includes(query)
        || zoneProvinces(zone).some((province) => normalizeName(province).includes(query))
        || normalizeName(hint?.rawLocation).includes(query)
        || normalizeName(dLocationEstimates[zone.name]?.estimatedArea).includes(query);
      return categoryMatch && queryMatch;
    });
  }

  function renderFilters() {
    els.classificationSwitch.querySelectorAll("[data-classification]").forEach((button) => {
      const selected = button.dataset.classification === state.classification;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    els.categoryFilters.setAttribute("aria-label", state.classification === "province" ? "按省份筛选" : "按流域筛选");
    els.categoryFilters.innerHTML = ["全部", ...categoryOptions()].map((category) =>
      `<button class="filter-chip${state.category === category ? " active" : ""}" data-category="${escapeHtml(category)}" type="button" aria-pressed="${state.category === category}">${escapeHtml(category.replace("流域", "").replace(/省$|市$/, ""))}</button>`
    ).join("");
  }

  let zoneScrollbarFrame = 0;
  let zoneScrollbarDrag = null;

  function updateZoneScrollbar() {
    zoneScrollbarFrame = 0;
    const maxScroll = els.zoneList.scrollHeight - els.zoneList.clientHeight;
    const scrollable = maxScroll > 1;
    els.zoneScrollbar.hidden = !scrollable;
    if (!scrollable) return;
    const trackHeight = els.zoneScrollbar.clientHeight;
    const thumbHeight = Math.max(24, trackHeight * (els.zoneList.clientHeight / els.zoneList.scrollHeight));
    const travel = Math.max(0, trackHeight - thumbHeight);
    const offset = maxScroll ? travel * (els.zoneList.scrollTop / maxScroll) : 0;
    els.zoneScrollbarThumb.style.height = `${thumbHeight}px`;
    els.zoneScrollbarThumb.style.transform = `translateY(${offset}px)`;
  }

  function scheduleZoneScrollbarUpdate() {
    if (zoneScrollbarFrame) return;
    zoneScrollbarFrame = window.requestAnimationFrame(updateZoneScrollbar);
  }

  function renderList() {
    const visible = filteredZones();
    els.searchCount.textContent = `共 ${visible.length} 处`;
    if (!visible.length) {
      els.zoneList.innerHTML = '<div class="empty-list">没有匹配的蓄滞洪区</div>';
      scheduleZoneScrollbarUpdate();
      return;
    }
    els.zoneList.innerHTML = visible.map((zone) => {
      const spatial = publicSpatialMeta(zone.name);
      const boundaryBadge = spatial.kind === "unavailable"
        ? `<span class="boundary-badge spatial-unavailable">${spatial.label}</span>`
        : "";
      return `<button class="zone-row${state.selectedZoneId === zone.id ? " active" : ""}" data-zone-id="${zone.id}" type="button" aria-pressed="${state.selectedZoneId === zone.id}">
        <span class="zone-main">
          <span class="zone-name">${escapeHtml(zone.name)}</span>
          <span class="zone-meta">${escapeHtml(zoneCategoryLabel(zone))} · ${escapeHtml(zone.basin.replace("流域", ""))}</span>
        </span>
        ${boundaryBadge}
      </button>`;
    }).join("");
    scheduleZoneScrollbarUpdate();
  }

  function loadAMap() {
    if (window.AMap) return Promise.resolve(window.AMap);
    if (!mapConfig.key || (!mapConfig.serviceHost && !mapConfig.securityJsCode)) {
      return Promise.reject(new Error("AMAP_CONFIG_MISSING"));
    }
    window._AMapSecurityConfig = mapConfig.serviceHost
      ? { serviceHost: new URL(mapConfig.serviceHost, window.location.origin).href.replace(/\/$/, "") }
      : { securityJsCode: mapConfig.securityJsCode };
    return new Promise((resolve, reject) => {
      const callbackName = `__floodStorageAmapReady_${Date.now()}`;
      const script = document.createElement("script");
      const clean = () => {
        try { delete window[callbackName]; } catch (_) { window[callbackName] = undefined; }
      };
      window[callbackName] = () => {
        clean();
        if (window.AMap) resolve(window.AMap);
        else reject(new Error("AMAP_LOAD_FAILED"));
      };
      script.onerror = () => {
        clean();
        reject(new Error("AMAP_LOAD_FAILED"));
      };
      const params = new URLSearchParams({
        v: "2.0",
        key: mapConfig.key,
        plugin: "AMap.ToolBar,AMap.Scale,AMap.DistrictSearch,AMap.PlaceSearch",
        callback: callbackName
      });
      script.src = `https://webapi.amap.com/maps?${params.toString()}`;
      script.async = true;
      document.head.appendChild(script);
    });
  }

  function gcjPoint(lng, lat) {
    return wgs84ToGcj02([Number(lng), Number(lat)]);
  }

  function targetCenter(target) {
    if (target?.coordinateSystem === "GCJ-02") return [Number(target.lng), Number(target.lat)];
    return gcjPoint(target?.lng, target?.lat);
  }

  function mapContainer() {
    return document.getElementById("map");
  }

  function updateZoneMarkerMode() {
    if (!state.map) return;
    const zoom = Number(state.map.getZoom());
    const zoomRange = ZONE_MARKER_SCALE.expandedZoom - ZONE_MARKER_SCALE.minZoom;
    const zoomProgress = Math.min(1, Math.max(0, (zoom - ZONE_MARKER_SCALE.minZoom) / zoomRange));
    const iconSize = ZONE_MARKER_SCALE.minSize
      + (ZONE_MARKER_SCALE.maxSize - ZONE_MARKER_SCALE.minSize) * zoomProgress;
    const iconPadding = Math.min(5, Math.max(1.5, iconSize * 0.18));
    const shadowProgress = zoomProgress ** 3;
    const boxShadowOffset = 0.5 + 1.5 * shadowProgress;
    const boxShadowBlur = 1.5 + 4.5 * shadowProgress;
    const boxShadowOpacity = 0.05 + 0.06 * shadowProgress;
    const dropShadowOffset = 1 + 6 * shadowProgress;
    const dropShadowBlur = 2 + 10 * shadowProgress;
    const dropShadowOpacity = 0.06 + 0.14 * shadowProgress;
    const container = mapContainer();
    container.dataset.zoneMarkerMode = zoom < ZONE_MARKER_SCALE.expandedZoom ? "compact" : "expanded";
    container.dataset.zoneMarkerZoom = String(zoom);
    container.dataset.zoneMarkerMinZoom = String(ZONE_MARKER_SCALE.minZoom);
    container.dataset.zoneMarkerExpandedZoom = String(ZONE_MARKER_SCALE.expandedZoom);
    container.dataset.zoneMarkerMinSize = String(ZONE_MARKER_SCALE.minSize);
    container.dataset.zoneMarkerMaxSize = String(ZONE_MARKER_SCALE.maxSize);
    container.style.setProperty("--zone-marker-size", `${iconSize.toFixed(2)}px`);
    container.style.setProperty("--zone-marker-padding", `${iconPadding.toFixed(2)}px`);
    container.style.setProperty("--zone-marker-box-shadow-offset", `${boxShadowOffset.toFixed(2)}px`);
    container.style.setProperty("--zone-marker-box-shadow-blur", `${boxShadowBlur.toFixed(2)}px`);
    container.style.setProperty("--zone-marker-box-shadow-opacity", boxShadowOpacity.toFixed(3));
    container.style.setProperty("--zone-marker-drop-shadow-offset", `${dropShadowOffset.toFixed(2)}px`);
    container.style.setProperty("--zone-marker-drop-shadow-blur", `${dropShadowBlur.toFixed(2)}px`);
    container.style.setProperty("--zone-marker-drop-shadow-opacity", dropShadowOpacity.toFixed(3));
  }

  function positionDetailPanel() {
    if (!els.detailPanel.classList.contains("open")) return;
    const compact = window.innerWidth <= 680;
    const margin = compact ? 10 : 18;
    els.detailPanel.classList.remove("is-below");
    els.detailPanel.dataset.placement = "fixed-left";
    els.detailPanel.style.left = `${margin}px`;
    els.detailPanel.style.top = `${margin}px`;
    els.detailPanel.style.bottom = `${margin}px`;
    els.detailPanel.style.removeProperty("height");
    els.detailPanel.style.removeProperty("--detail-arrow-x");
  }

  function scheduleDetailPosition() {
    window.requestAnimationFrame(positionDetailPanel);
  }

  async function initMap() {
    try {
      await loadAMap();
    } catch (error) {
      if (error.message === "AMAP_CONFIG_MISSING") {
        showMapError("需要配置高德地图 Key", "本地请填写 data/map-config.js；线上请检查 AMAP_KEY、AMAP_SECURITY_JS_CODE 和同域代理配置。");
      } else {
        showMapError("高德地图加载失败", "请检查 Key、安全密钥、域名白名单和网络连接。");
      }
      return;
    }

    els.mapError.hidden = true;
    state.map = new AMap.Map("map", {
      viewMode: "2D",
      center: gcjPoint(108.7, 34.3),
      zoom: 4.6,
      zooms: [3, 18],
      mapStyle: defaultMapStyle,
      features: Array.isArray(mapConfig.features) ? mapConfig.features : ["bg", "road", "point"],
      showLabel: true,
      resizeEnable: true,
      WebGLParams: { preserveDrawingBuffer: true }
    });
    try {
      if (AMap.Scale) state.map.addControl(new AMap.Scale());
      if (AMap.ToolBar) state.map.addControl(new AMap.ToolBar({ position: { right: "18px", bottom: "56px" } }));
    } catch (_) { /* 控件不影响地图主体 */ }

    window.FloodAdminBoundaries.mount({ map: state.map, AMap, container: document.getElementById("adminBoundaries") });
    window.FloodLocationSearch.mount({
      map: state.map,
      AMap,
      container: document.getElementById("adminBoundaries"),
      overpassEndpoint: mapConfig.osmServices?.overpassEndpoint
    });

    const container = mapContainer();
    container.dataset.mapProvider = "amap";
    container.dataset.coordinateSystem = "GCJ-02";
    state.map.on("complete", () => {
      container.dataset.mapReady = "true";
      warmProvinceDistrictCache();
    });
    state.map.on("mousemove", (event) => {
      const lng = event.lnglat?.getLng ? event.lnglat.getLng() : event.lnglat?.lng;
      const lat = event.lnglat?.getLat ? event.lnglat.getLat() : event.lnglat?.lat;
      if (Number.isFinite(lng) && Number.isFinite(lat)) {
        els.coordinateReadout.textContent = `高德经度 ${lng.toFixed(4)}　纬度 ${lat.toFixed(4)}`;
      }
    });
    state.map.on("mouseout", () => { els.coordinateReadout.textContent = "高德经度 —　纬度 —"; });
    state.map.on("resize", scheduleDetailPosition);
    state.map.on("zoomchange", updateZoneMarkerMode);
    state.map.on("click", () => {
      if (els.detailPanel.classList.contains("open")) closeDetailPanel();
    });
    updateZoneMarkerMode();
    renderApproximateLocations();
    const selectedZone = zones.find((zone) => zone.id === state.selectedZoneId);
    if (selectedZone) focusLocation(selectedZone);
    if (state.classification === "province" && state.category !== "全部") {
      focusProvince(state.category);
    } else if (state.classification === "basin" && state.category !== "全部") {
      focusBasin(state.category);
    }
  }

  function haversineMeters(first, second) {
    const rad = (value) => value * Math.PI / 180;
    const lat1 = rad(first[1]);
    const lat2 = rad(second[1]);
    const deltaLat = lat2 - lat1;
    const deltaLng = rad(second[0] - first[0]);
    const value = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
    return 6371008.8 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
  }

  function bboxCorners(place) {
    const box = place?.boundingBox;
    if (!Array.isArray(box) || box.length !== 4) return null;
    return {
      southwest: gcjPoint(box[2], box[0]),
      northeast: gcjPoint(box[3], box[1])
    };
  }

  function targetRangeRadius(target) {
    if (Number.isFinite(Number(target?.radiusKm))) return Number(target.radiusKm) * 1000;
    const box = target?.boundingBox;
    if (!Array.isArray(box) || box.length !== 4) return 1800;
    const center = [target.lng, target.lat];
    const radius = Math.max(
      haversineMeters(center, [box[3], box[1]]),
      haversineMeters(center, [box[2], box[0]])
    );
    return Math.min(12000, Math.max(900, radius));
  }

  function approximateDescriptor(zone) {
    const evidence = evidenceEntry(zone.name);
    if (evidence.confidence === "none") return null;
    const entry = locationEntry(zone.name);
    const spatial = publicSpatialMeta(zone.name);
    const shared = { confidence: evidence.confidence, spatial };
    if (entry?.approximateBoundary) return { ...shared, kind: "approximate-boundary", target: entry.approximateBoundary };
    if (entry?.water) return { ...shared, kind: "water", target: entry.water };
    if (entry?.landmark) return { ...shared, kind: "landmark", target: entry.landmark };
    if (entry?.areaApproximation) return { ...shared, kind: "approximate-area", target: entry.areaApproximation };
    if (entry?.engineeringAnchor) return { ...shared, kind: "engineering-anchor", target: entry.engineeringAnchor };
    if (entry?.approximate) return { ...shared, kind: "admin", target: entry.approximate };
    return null;
  }

  function isPreciseDescriptor(descriptor) {
    return ["water", "landmark"].includes(descriptor?.kind);
  }

  function clearMapHover() {
    if (state.map && state.hoverLayers.length) state.map.remove(state.hoverLayers);
    state.hoverLayers = [];
  }

  function showMapHover(layers, zone) {
    clearMapHover();
    if (!state.map || state.selectedZoneId === zone.id || !layers.length) return;
    state.hoverLayers = layers;
    state.map.add(layers);
  }

  function bindZoneOverlay(overlay, zone, hoverLayers = []) {
    overlay.on("click", () => selectZone(zone.id));
    if (!hoverLayers.length) return;
    overlay.on("mouseover", () => showMapHover(hoverLayers, zone));
    overlay.on("mouseout", clearMapHover);
  }

  function updateMapLabelSelection() {
    document.querySelectorAll(".map-zone-label[data-zone-id]").forEach((label) => {
      const selected = label.dataset.zoneId === state.selectedZoneId;
      label.classList.toggle("is-selection-hidden", selected);
    });
  }

  function clearApproximateLocations() {
    if (!state.map) return;
    clearMapHover();
    if (state.approximateLayers.length) state.map.remove(state.approximateLayers);
    state.approximateLayers = [];
    state.overviewLayerByZone = new Map();
    state.labelLayerByZone = new Map();
    mapContainer().dataset.approximateCount = "0";
  }

  function acceptedBoundaryPaths(target) {
    // Preserve detached floodplain components and permanent-water exclusions.
    if (target.polygonsGCJ02?.length) return target.polygonsGCJ02.map(polygon => polygon.length === 1 ? polygon[0] : polygon);
    const geometry = target.samplingGeometry;
    if (geometry?.type === "MultiPolygon") {
      return geometry.coordinates.map((polygon, index) => index === 0
        ? target.path
        : polygon[0].map(point => window.FloodStorageCore.wgs84ToGcj02(point)));
    }
    return [target.path];
  }

  function renderApproximateLocations() {
    if (!state.map) return;
    clearApproximateLocations();
    const layers = [];
    let renderedZoneCount = 0;
    zones.filter(categoryMatches).forEach((zone) => {
      const descriptor = approximateDescriptor(zone);
      if (!descriptor) return;
      if (isPreciseDescriptor(descriptor)) return;
      renderedZoneCount += 1;
      const target = descriptor.target;
      const center = targetCenter(target);
      if (descriptor.kind === "approximate-boundary" && Array.isArray(target.path) && target.path.length >= 3) {
        const spatial = descriptor.spatial;
        const partLayers = acceptedBoundaryPaths(target).map(polygonPath => {
          const hoverHalo = new AMap.Polygon({
            path: polygonPath, ...interactionHaloStyle("hover"), bubble: false,
            extData: { hoverSpatialHalo: true, zoneId: zone.id }
          });
          const region = new AMap.Polygon({
            path: polygonPath, ...spatialGeometryStyle(spatial, "overview"),
            cursor: "pointer", bubble: false,
            extData: { zoneId: zone.id, locationKind: descriptor.kind, spatialKind: spatial.kind }
          });
          return { region, hoverHalo };
        });
        const label = new AMap.Marker({
          position: center,
          zooms: [3, 20],
          zIndex: 30,
          content: zoneMarkerHtml(zone.name, { zoneId: zone.id, spatialKind: spatial.kind }),
          offset: AMap.Pixel ? new AMap.Pixel(0, 0) : undefined,
          cursor: "pointer",
          bubble: false,
          extData: { zoneId: zone.id, mapLabel: true }
        });
        const halos = partLayers.map(part => part.hoverHalo);
        partLayers.forEach(part => bindZoneOverlay(part.region, zone, halos));
        bindZoneOverlay(label, zone, halos);
        layers.push(...partLayers.map(part => part.region), label);
        state.overviewLayerByZone.set(zone.id, partLayers.map((part) => part.region));
        state.labelLayerByZone.set(zone.id, label);
        return;
      }
      const spatial = descriptor.spatial;
      const hoverHalo = new AMap.CircleMarker({
        center, radius: 9, ...interactionHaloStyle("hover"), bubble: false,
        extData: { hoverSpatialHalo: true, zoneId: zone.id }
      });
      const marker = new AMap.CircleMarker({
        center, radius: 5, zIndex: 24, ...spatialPointStyle(spatial), cursor: "pointer", bubble: false,
        extData: { zoneId: zone.id, locationKind: descriptor.kind }
      });
      bindZoneOverlay(marker, zone, [hoverHalo]);
      layers.push(marker);
    });
    state.approximateLayers = layers;
    state.map.add(layers);
    const container = mapContainer();
    container.dataset.approximateCount = String(renderedZoneCount);
    delete container.dataset.locationGroupCount;
    delete container.dataset.coincidentGroupCount;
    updateMapLabelSelection();
  }

  function clearFocus() {
    state.locationRequestId += 1;
    clearMapHover();
    window.SelectionAnimationPrototype?.clear?.();
    if (state.map && state.focusLayers.length) state.map.remove(state.focusLayers);
    state.focusLayers = [];
    if (state.hiddenOverviewLayer) {
      state.hiddenOverviewLayer.forEach(({ layer, options }) => layer.setOptions?.(options));
      state.hiddenOverviewLayer = null;
    }
    if (state.map) {
      const container = mapContainer();
      delete container.dataset.locationMode;
      delete container.dataset.locationLevel;
      delete container.dataset.locationConfidence;
      delete container.dataset.locationPublicState;
      delete container.dataset.locationTargets;
      delete container.dataset.locationZoom;
      delete container.dataset.locationMaxZoom;
      delete container.dataset.locationTopPadding;
      delete container.dataset.locationRightPadding;
      delete container.dataset.locationBottomPadding;
      delete container.dataset.locationLeftPadding;
      delete container.dataset.locationPanelWidth;
      delete container.dataset.locationAvailableLeft;
      delete container.dataset.locationAvailableWidth;
      delete container.dataset.locationAvailableHeight;
      delete container.dataset.locationTargetFraction;
      delete container.dataset.locationShape;
      delete container.dataset.selectionMarker;
      delete container.dataset.locationPanCorrection;
    }
    updateMapLabelSelection();
  }

  function clearProvinceFocus() {
    state.provinceRequestId += 1;
    if (state.map && state.provinceFocusLayers.length) {
      state.map.remove(state.provinceFocusLayers);
    }
    if (state.map && state.provincePreviewLayers.length) {
      state.map.remove(state.provincePreviewLayers);
    }
    state.provinceFocusLayers = [];
    state.provincePreviewLayers = [];
    const container = mapContainer();
    delete container.dataset.provinceFocus;
    delete container.dataset.provinceBoundaryCount;
    delete container.dataset.provinceBoundaryRawPointCount;
    delete container.dataset.provinceBoundaryDisplayPointCount;
    delete container.dataset.provinceBoundarySource;
    delete container.dataset.provinceZoom;
    delete container.dataset.provincePreviewCount;
    delete container.dataset.provinceTransition;
  }

  function clearBasinFocus() {
    if (state.map && state.basinFocusLayers.length) {
      state.map.remove(state.basinFocusLayers);
    }
    state.basinFocusLayers = [];
    const container = mapContainer();
    delete container.dataset.basinFocus;
    delete container.dataset.basinFocusPointCount;
    delete container.dataset.basinZoom;
  }

  function focusBasin(basin) {
    clearBasinFocus();
    if (!state.map || state.classification !== "basin" || !basin || basin === "全部") return;
    const points = zones
      .filter((zone) => zone.basin === basin)
      .map(approximateDescriptor)
      .filter(Boolean)
      .map((descriptor) => targetCenter(descriptor.target));
    const bounds = coordinateBounds(points);
    if (!bounds) {
      showToast(`${basin.replace("流域", "")}暂时没有可用于聚焦的位置`);
      return;
    }
    const corners = [bounds.southwest, bounds.northeast]
      .filter((point, index, values) => index === 0 || point[0] !== values[0][0] || point[1] !== values[0][1]);
    const layers = corners.map((center) => new AMap.CircleMarker({
      center,
      radius: 1,
      strokeOpacity: 0,
      fillOpacity: 0,
      bubble: true,
      extData: { basinFocusAnchor: true }
    }));
    state.basinFocusLayers = layers;
    state.map.add(layers);
    const container = mapContainer();
    container.dataset.basinFocus = basin;
    container.dataset.basinFocusPointCount = String(bounds.count);
    try {
      state.map.setFitView(layers, false, [56, 56, 56, 56], 8);
    } catch (_) { /* 地标图层仍保留在当前视图 */ }
    window.setTimeout(() => {
      if (state.map && state.classification === "basin" && state.category === basin) {
        container.dataset.basinZoom = String(state.map.getZoom());
        positionDetailPanel();
      }
    }, 0);
  }

  function loadDistrictSearch() {
    if (window.AMap?.DistrictSearch) return Promise.resolve(window.AMap.DistrictSearch);
    if (!window.AMap?.plugin) return Promise.reject(new Error("DISTRICT_SEARCH_UNAVAILABLE"));
    return new Promise((resolve, reject) => {
      window.AMap.plugin("AMap.DistrictSearch", () => {
        if (window.AMap?.DistrictSearch) resolve(window.AMap.DistrictSearch);
        else reject(new Error("DISTRICT_SEARCH_UNAVAILABLE"));
      });
    });
  }

  function provinceBoundaryStorageKey(province) {
    return `${PROVINCE_BOUNDARY_STORAGE_PREFIX}${province}`;
  }

  function serializableBoundaryPoint(point) {
    const lng = Number(Array.isArray(point) ? point[0] : point?.lng ?? point?.getLng?.());
    const lat = Number(Array.isArray(point) ? point[1] : point?.lat ?? point?.getLat?.());
    return Number.isFinite(lng) && Number.isFinite(lat) ? [lng, lat] : null;
  }

  function normalizedProvinceDistrict(province, district) {
    const boundaries = (district?.boundaries || [])
      .map((path) => (path || []).map(serializableBoundaryPoint).filter(Boolean))
      .filter((path) => path.length >= 3);
    return boundaries.length ? {
      name: province,
      adcode: String(district?.adcode || PROVINCE_ADCODES[province] || ""),
      boundaries
    } : null;
  }

  function readLegacyProvinceDistrict(province) {
    try {
      const stored = JSON.parse(window.localStorage.getItem(provinceBoundaryStorageKey(province)) || "null");
      const expectedAdcode = PROVINCE_ADCODES[province];
      if (expectedAdcode && String(stored?.adcode || "") !== expectedAdcode) return null;
      const district = normalizedProvinceDistrict(province, stored);
      return district ? { ...district, source: "local" } : null;
    } catch (_) {
      return null;
    }
  }

  function writeLegacyProvinceDistrict(province, district) {
    try {
      window.localStorage.setItem(provinceBoundaryStorageKey(province), JSON.stringify({
        name: district.name,
        adcode: district.adcode,
        boundaries: district.boundaries
      }));
    } catch (_) { /* 存储受限时保留当前会话内存缓存 */ }
  }

  function openProvinceBoundaryDatabase() {
    if (!window.indexedDB) return Promise.reject(new Error("INDEXED_DB_UNAVAILABLE"));
    if (provinceBoundaryDatabasePromise) return provinceBoundaryDatabasePromise;
    provinceBoundaryDatabasePromise = new Promise((resolve, reject) => {
      const request = window.indexedDB.open(PROVINCE_BOUNDARY_DB_NAME, 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(PROVINCE_BOUNDARY_DB_STORE)) {
          request.result.createObjectStore(PROVINCE_BOUNDARY_DB_STORE, { keyPath: "province" });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("INDEXED_DB_OPEN_FAILED"));
    }).catch((error) => {
      provinceBoundaryDatabasePromise = null;
      throw error;
    });
    return provinceBoundaryDatabasePromise;
  }

  async function readStoredProvinceDistrict(province) {
    try {
      const database = await openProvinceBoundaryDatabase();
      const stored = await new Promise((resolve, reject) => {
        const request = database.transaction(PROVINCE_BOUNDARY_DB_STORE, "readonly")
          .objectStore(PROVINCE_BOUNDARY_DB_STORE)
          .get(province);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error || new Error("INDEXED_DB_READ_FAILED"));
      });
      const district = normalizedProvinceDistrict(province, stored);
      if (district && String(stored?.adcode || "") === PROVINCE_ADCODES[province]) {
        return { ...district, source: "local" };
      }
    } catch (_) { /* 继续尝试迁移旧缓存 */ }
    const legacy = readLegacyProvinceDistrict(province);
    if (!legacy) return null;
    await writeStoredProvinceDistrict(province, legacy);
    try { window.localStorage.removeItem(provinceBoundaryStorageKey(province)); }
    catch (_) { /* 旧缓存保留不影响读取 */ }
    return legacy;
  }

  async function writeStoredProvinceDistrict(province, district) {
    const record = {
      province,
      name: district.name,
      adcode: district.adcode,
      boundaries: district.boundaries
    };
    try {
      const database = await openProvinceBoundaryDatabase();
      await new Promise((resolve, reject) => {
        const transaction = database.transaction(PROVINCE_BOUNDARY_DB_STORE, "readwrite");
        transaction.objectStore(PROVINCE_BOUNDARY_DB_STORE).put(record);
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error || new Error("INDEXED_DB_WRITE_FAILED"));
        transaction.onabort = () => reject(transaction.error || new Error("INDEXED_DB_WRITE_ABORTED"));
      });
      try { window.localStorage.removeItem(provinceBoundaryStorageKey(province)); }
      catch (_) { /* 不影响 IndexedDB 缓存 */ }
    } catch (_) {
      writeLegacyProvinceDistrict(province, district);
    }
  }

  function fetchProvinceDistrict(province) {
    return loadDistrictSearch().then((DistrictSearch) => {
      const searchDistrict = (keyword) => new Promise((resolve, reject) => {
        const search = new DistrictSearch({
          level: "province",
          extensions: "all",
          subdistrict: 0,
          showbiz: false
        });
        const timeout = window.setTimeout(() => {
          reject(new Error(`PROVINCE_BOUNDARY_TIMEOUT:${keyword}`));
        }, 8000);
        search.search(keyword, (status, result) => {
          window.clearTimeout(timeout);
          const match = result?.districtList?.[0];
          const district = normalizedProvinceDistrict(province, match);
          if (status === "complete" && district) {
            resolve(district);
          } else reject(new Error(result?.info || "PROVINCE_BOUNDARY_NOT_FOUND"));
        });
      });
      const adcode = PROVINCE_ADCODES[province];
      return searchDistrict(adcode || province)
        .catch(() => adcode ? searchDistrict(province) : Promise.reject(new Error("PROVINCE_BOUNDARY_NOT_FOUND")))
        .then(async (district) => {
          await writeStoredProvinceDistrict(province, district);
          return { ...district, source: "network" };
        });
    });
  }

  function prioritizeProvinceDistrictJob(province) {
    const job = provinceDistrictJobs.get(province);
    if (!job || job.state !== "queued") return;
    const index = provinceDistrictQueue.indexOf(job);
    if (index <= 0) return;
    provinceDistrictQueue.splice(index, 1);
    provinceDistrictQueue.unshift(job);
  }

  function drainProvinceDistrictQueue() {
    while (provinceDistrictActiveCount < PROVINCE_DISTRICT_CONCURRENCY && provinceDistrictQueue.length) {
      const job = provinceDistrictQueue.shift();
      job.state = "active";
      provinceDistrictActiveCount += 1;
      readStoredProvinceDistrict(job.province)
        .then((stored) => stored || fetchProvinceDistrict(job.province))
        .then(job.resolve)
        .catch((error) => {
          provinceDistrictCache.delete(job.province);
          job.reject(error);
        })
        .finally(() => {
          provinceDistrictJobs.delete(job.province);
          provinceDistrictActiveCount -= 1;
          drainProvinceDistrictQueue();
        });
    }
  }

  function requestProvinceDistrict(province, { priority = false } = {}) {
    if (provinceDistrictCache.has(province)) {
      if (priority) prioritizeProvinceDistrictJob(province);
      return provinceDistrictCache.get(province);
    }
    let resolveRequest;
    let rejectRequest;
    const request = new Promise((resolve, reject) => {
      resolveRequest = resolve;
      rejectRequest = reject;
    });
    const job = {
      province,
      state: "queued",
      resolve: resolveRequest,
      reject: rejectRequest
    };
    provinceDistrictCache.set(province, request);
    provinceDistrictJobs.set(province, job);
    if (priority) provinceDistrictQueue.unshift(job);
    else provinceDistrictQueue.push(job);
    drainProvinceDistrictQueue();
    return request;
  }

  function warmProvinceDistrictCache() {
    provinces.forEach((province) => {
      requestProvinceDistrict(province).catch(() => { /* 用户选择时会重新入队 */ });
    });
  }

  function highlightCoordinate(point) {
    if (Array.isArray(point) && point.length >= 2 && Number.isFinite(Number(point[0]))) {
      return [Number(point[0]), Number(point[1])];
    }
    const lng = typeof point?.getLng === "function" ? point.getLng() : point?.lng;
    const lat = typeof point?.getLat === "function" ? point.getLat() : point?.lat;
    return Number.isFinite(Number(lng)) && Number.isFinite(Number(lat)) ? [Number(lng), Number(lat)] : null;
  }

  function highlightDistanceToSegment(point, start, end) {
    const dx = end[0] - start[0];
    const dy = end[1] - start[1];
    if (!dx && !dy) return Math.hypot(point[0] - start[0], point[1] - start[1]);
    const ratio = Math.max(0, Math.min(1, ((point[0] - start[0]) * dx + (point[1] - start[1]) * dy) / (dx * dx + dy * dy)));
    return Math.hypot(point[0] - (start[0] + dx * ratio), point[1] - (start[1] + dy * ratio));
  }

  function simplifyHighlightArc(points, tolerance) {
    if (points.length <= 2) return points;
    let furthestIndex = 0;
    let furthestDistance = 0;
    for (let index = 1; index < points.length - 1; index += 1) {
      const distance = highlightDistanceToSegment(points[index], points[0], points[points.length - 1]);
      if (distance > furthestDistance) {
        furthestDistance = distance;
        furthestIndex = index;
      }
    }
    if (furthestDistance <= tolerance) return [points[0], points[points.length - 1]];
    const before = simplifyHighlightArc(points.slice(0, furthestIndex + 1), tolerance);
    const after = simplifyHighlightArc(points.slice(furthestIndex), tolerance);
    return [...before.slice(0, -1), ...after];
  }

  function highlightCircularArc(points, start, end) {
    const arc = [points[start]];
    let index = start;
    while (index !== end) {
      index = (index + 1) % points.length;
      arc.push(points[index]);
    }
    return arc;
  }

  function smoothProvinceHighlightPath(path) {
    const points = Array.isArray(path) ? path.map(highlightCoordinate).filter(Boolean) : [];
    if (points.length < 8) return path;
    const closed = points[0][0] === points[points.length - 1][0] && points[0][1] === points[points.length - 1][1];
    const ring = closed ? points.slice(0, -1) : points;
    const bounds = ring.reduce((value, point) => ({
      minLng: Math.min(value.minLng, point[0]),
      maxLng: Math.max(value.maxLng, point[0]),
      minLat: Math.min(value.minLat, point[1]),
      maxLat: Math.max(value.maxLat, point[1])
    }), { minLng: Infinity, maxLng: -Infinity, minLat: Infinity, maxLat: -Infinity });
    const diagonal = Math.hypot(bounds.maxLng - bounds.minLng, bounds.maxLat - bounds.minLat);
    const tolerance = Math.min(.02, Math.max(.004, diagonal * .0018));
    const start = ring.reduce((best, point, index) => point[0] < ring[best][0] ? index : best, 0);
    const end = ring.reduce((best, point, index) => point[0] > ring[best][0] ? index : best, 0);
    if (start === end) return path;
    const simplified = [
      ...simplifyHighlightArc(highlightCircularArc(ring, start, end), tolerance).slice(0, -1),
      ...simplifyHighlightArc(highlightCircularArc(ring, end, start), tolerance).slice(0, -1)
    ];
    if (simplified.length < 4) return path;
    const rounded = simplified.flatMap((point, index) => {
      const next = simplified[(index + 1) % simplified.length];
      return [
        [point[0] * .84 + next[0] * .16, point[1] * .84 + next[1] * .16],
        [point[0] * .16 + next[0] * .84, point[1] * .16 + next[1] * .84]
      ];
    });
    return [...rounded, rounded[0]];
  }

  function highlightPathPointCount(path) {
    if (!Array.isArray(path)) return 0;
    if (path.length && highlightCoordinate(path[0])) return path.length;
    return path.reduce((count, item) => count + highlightPathPointCount(item), 0);
  }

  function previewProvinceFocus(province) {
    if (!state.map) return;
    const points = zones
      .filter((zone) => zoneProvinces(zone).includes(province))
      .flatMap((zone) => locationBoundaries[zone.name] ? acceptedBoundaryPaths(locationBoundaries[zone.name]).flatMap(polygon => Array.isArray(polygon[0]?.[0]) ? polygon.flat() : polygon) : [])
      .filter((point) => Array.isArray(point) && Number.isFinite(Number(point[0])) && Number.isFinite(Number(point[1])));
    if (!points.length) return;
    const lngs = points.map((point) => Number(point[0]));
    const lats = points.map((point) => Number(point[1]));
    const corners = [
      [Math.min(...lngs), Math.min(...lats)],
      [Math.max(...lngs), Math.max(...lats)]
    ];
    const layers = corners.map((center) => new AMap.CircleMarker({
      center,
      radius: 1,
      strokeOpacity: 0,
      fillOpacity: 0,
      bubble: true,
      extData: { provincePreview: true }
    }));
    state.provincePreviewLayers = layers;
    state.map.add(layers);
    const container = mapContainer();
    container.dataset.provincePreviewCount = String(points.length);
    container.dataset.provinceTransition = "preview";
    try {
      state.map.setFitView(layers, false, [56, 56, 56, 56], 7);
    } catch (_) { /* 精确省界返回后仍会完成聚焦 */ }
  }

  async function focusProvince(province) {
    clearProvinceFocus();
    if (!state.map || state.classification !== "province" || !province || province === "全部") return;
    const requestId = state.provinceRequestId;
    previewProvinceFocus(province);
    try {
      const district = await requestProvinceDistrict(province, { priority: true });
      if (requestId !== state.provinceRequestId
        || state.classification !== "province"
        || state.category !== province) return;
      if (state.provincePreviewLayers.length) state.map.remove(state.provincePreviewLayers);
      state.provincePreviewLayers = [];
      clearApproximateLocations();
      const displayBoundaries = district.boundaries.map(smoothProvinceHighlightPath);
      const layers = displayBoundaries.flatMap((path) => [
        new AMap.Polygon({
          path,
          zIndex: 9,
          strokeColor: MAP_INTERACTIVE_COLOR,
          strokeWeight: 6,
          strokeOpacity: 0.12,
          strokeStyle: "solid",
          fillColor: MAP_INTERACTIVE_COLOR,
          fillOpacity: 0,
          lineJoin: "round",
          lineCap: "round",
          bubble: true,
          extData: { provinceFocusGlow: true }
        }),
        new AMap.Polygon({
          path,
          zIndex: 10,
          strokeColor: MAP_INTERACTIVE_COLOR,
          strokeWeight: 1.75,
          strokeOpacity: 0.86,
          strokeStyle: "solid",
          fillColor: MAP_INTERACTIVE_COLOR,
          fillOpacity: 0,
          lineJoin: "round",
          lineCap: "round",
          bubble: true,
          extData: { provinceFocus: true }
        })
      ]);
      state.provinceFocusLayers = layers;
      state.map.add(layers);
      const container = mapContainer();
      container.dataset.provinceFocus = province;
      container.dataset.provinceBoundaryCount = String(district.boundaries.length);
      container.dataset.provinceBoundaryRawPointCount = String(district.boundaries.reduce((count, path) => count + highlightPathPointCount(path), 0));
      container.dataset.provinceBoundaryDisplayPointCount = String(displayBoundaries.reduce((count, path) => count + highlightPathPointCount(path), 0));
      container.dataset.provinceBoundarySource = district.source;
      container.dataset.provinceTransition = "boundary";
      try {
        state.map.setFitView(layers, false, [48, 48, 48, 48], 8);
      } catch (_) { /* 省域高亮仍保留在当前视图 */ }
      renderApproximateLocations();
      window.setTimeout(() => {
        if (state.map && requestId === state.provinceRequestId) {
          container.dataset.provinceZoom = String(state.map.getZoom());
          positionDetailPanel();
        }
      }, 0);
    } catch (error) {
      if (requestId !== state.provinceRequestId) return;
      console.warn(`无法加载${province}行政边界`, error);
      showToast(`暂时无法加载${province.replace(/省$|市$/, "")}省域边界`);
      renderApproximateLocations();
    }
  }

  function markerPinSvg() {
    return `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M12 21s6-5.15 6-11a6 6 0 1 0-12 0c0 5.85 6 11 6 11Z"/>
      <circle cx="12" cy="10" r="2.35"/>
    </svg>`;
  }

  function zoneMarkerHtml(zoneName, options = {}) {
    const name = escapeHtml(zoneName);
    const zoneId = options.zoneId ? ` data-zone-id="${escapeHtml(options.zoneId)}"` : "";
    const spatialKind = options.spatialKind ? ` data-spatial-kind="${escapeHtml(options.spatialKind)}"` : "";
    const markerClass = options.selected ? "flood-selection-marker" : "map-zone-label";
    return `<span class="flood-zone-marker ${markerClass}"${zoneId}${spatialKind} role="img" aria-label="${name}的位置">
      <span class="flood-zone-marker-icon">${markerPinSvg()}</span><strong class="flood-zone-marker-name">${name}</strong><i class="flood-zone-marker-tail" aria-hidden="true"></i>
    </span>`;
  }

  function selectionMarkerHtml(zoneName, spatial) {
    const label = spatial?.kind === "administrative" ? `${zoneName}-行政范围` : zoneName;
    return zoneMarkerHtml(label, { selected: true });
  }

  function selectionPin(center, zone) {
    const spatial = publicSpatialMeta(zone.name);
    return new AMap.Marker({
      position: center,
      zIndex: 120,
      content: selectionMarkerHtml(zone.name, spatial),
      offset: AMap.Pixel ? new AMap.Pixel(0, 0) : undefined,
      bubble: false,
      extData: { selectionCenter: true }
    });
  }

  function rectangleLayers(target, spatial, zone) {
    const corners = bboxCorners(target);
    if (!corners) return [];
    const bounds = new AMap.Bounds(corners.southwest, corners.northeast);
    const center = targetCenter(target);
    return [
      new AMap.Rectangle({
        bounds, ...interactionHaloStyle(), bubble: false,
        extData: { selectedSpatialHalo: true, spatialKind: spatial.kind }
      }),
      new AMap.Rectangle({
        bounds, ...spatialGeometryStyle(spatial), bubble: false,
        extData: { selectedSpatialGeometry: true, spatialKind: spatial.kind }
      }),
      selectionPin(center, zone)
    ];
  }

  function selectedRangeLayers(target, spatial, zone) {
    const kind = target.__locationKind;
    const center = targetCenter(target);
    if (kind === "approximate-boundary" && Array.isArray(target.path) && target.path.length >= 3) {
      return [
        ...acceptedBoundaryPaths(target).flatMap(polygonPath => [
          new AMap.Polygon({
            path: polygonPath, ...interactionHaloStyle(), bubble: false,
            extData: { selectedSpatialHalo: true, spatialKind: spatial.kind }
          }),
          new AMap.Polygon({
            path: polygonPath, ...spatialGeometryStyle(spatial, "selected-boundary"), bubble: false,
            extData: { selectedSpatialGeometry: true, spatialKind: spatial.kind }
          })
        ]),
        selectionPin(center, zone)
      ];
    }
    const isCircularTarget = (kind === "landmark" && target.osmType === "node")
      || kind === "approximate-area"
      || kind === "engineering-anchor";
    if (isCircularTarget) {
      const radius = targetRangeRadius(target);
      return [
        new AMap.Circle({
          center, radius, ...interactionHaloStyle(), bubble: false,
          extData: { selectedSpatialHalo: true, spatialKind: spatial.kind }
        }),
        new AMap.Circle({
          center, radius, ...spatialGeometryStyle(spatial), bubble: false,
          extData: { selectedSpatialGeometry: true, spatialKind: spatial.kind }
        }),
        selectionPin(center, zone)
      ];
    }

    const rectangles = rectangleLayers(target, spatial, zone);
    if (rectangles.length) return rectangles;
    return [selectionPin(center, zone)];
  }

  function fitLayers(layers) {
    if (!state.map || !layers.length) return;
    const stage = mapContainer().parentElement;
    const compact = window.innerWidth <= 680;
    const panelWidth = els.detailPanel.classList.contains("open") ? els.detailPanel.offsetWidth : 0;
    let topPadding = 24;
    let rightPadding = 20;
    let bottomPadding = 24;
    let leftPadding = Math.round(Math.min(panelWidth + 24, stage.clientWidth * 0.64));
    let availableLeft = leftPadding;
    let availableWidth = Math.max(1, stage.clientWidth - leftPadding - rightPadding);
    let availableHeight = Math.max(1, stage.clientHeight - topPadding - bottomPadding);
    let avoid = [topPadding, bottomPadding, leftPadding, rightPadding];
    if (!compact) {
      availableLeft = Math.max(0, Math.min(stage.clientWidth, els.detailPanel.offsetLeft + panelWidth));
      const fit = selectionFitPadding({
        mapWidth: stage.clientWidth,
        mapHeight: stage.clientHeight,
        availableLeft,
        fraction: 0.5
      });
      topPadding = fit.top;
      rightPadding = fit.right;
      bottomPadding = fit.bottom;
      leftPadding = fit.left;
      availableLeft = fit.availableLeft;
      availableWidth = fit.availableWidth;
      availableHeight = fit.availableHeight;
      avoid = fit.avoid;
    }
    const markerClearance = compact ? 64 : 76;
    topPadding = Math.max(topPadding, compact ? 56 : 64);
    rightPadding = Math.max(rightPadding, markerClearance);
    availableWidth = Math.max(1, stage.clientWidth - leftPadding - rightPadding);
    availableHeight = Math.max(1, stage.clientHeight - topPadding - bottomPadding);
    avoid = [topPadding, bottomPadding, leftPadding, rightPadding];
    const container = mapContainer();
    delete container.dataset.locationMaxZoom;
    delete container.dataset.locationPanCorrection;
    container.dataset.locationTopPadding = String(topPadding);
    container.dataset.locationRightPadding = String(rightPadding);
    container.dataset.locationBottomPadding = String(bottomPadding);
    container.dataset.locationLeftPadding = String(leftPadding);
    container.dataset.locationPanelWidth = String(panelWidth);
    container.dataset.locationAvailableLeft = String(Math.round(availableLeft));
    container.dataset.locationAvailableWidth = String(Math.round(availableWidth));
    container.dataset.locationAvailableHeight = String(Math.round(availableHeight));
    container.dataset.locationTargetFraction = "0.5";
    try {
      // One native smooth transition per selection. The documented setFitView
      // API has no duration argument; remote refinement must not refit below.
      state.map.setFitView(layers, false, avoid);
    } catch (_) { /* 仍保留当前视图 */ }
    window.setTimeout(() => {
      if (state.map) {
        mapContainer().dataset.locationZoom = String(state.map.getZoom());
        positionDetailPanel();
      }
    }, 0);
  }

  function renderSelectedFallback(targets, confidence, zone) {
    clearFocus();
    const spatial = publicSpatialMeta(zone.name);
    const overviewLayer = state.overviewLayerByZone.get(zone.id);
    if (overviewLayer) {
      state.hiddenOverviewLayer = overviewLayer.map((layer) => {
        const options = layer.getOptions?.() || layer.options || {};
        layer.setOptions?.({ strokeOpacity: 0, fillOpacity: 0 });
        return { layer, options: { strokeOpacity: options.strokeOpacity, fillOpacity: options.fillOpacity } };
      });
    }
    const layers = targets.flatMap((target) => selectedRangeLayers(target, spatial, zone));
    state.focusLayers = layers;
    state.map.add(layers);
    window.SelectionAnimationPrototype?.setLayers?.(layers, state.map);
    const kind = targets[0]?.__locationKind || "admin";
    const container = mapContainer();
    container.dataset.locationMode = kind;
    container.dataset.locationConfidence = confidence;
    container.dataset.locationPublicState = spatial.label;
    container.dataset.locationTargets = String(targets.length);
    container.dataset.selectionMarker = layers.some((layer) => layer instanceof AMap.Marker) ? "center-pin" : "none";
    container.dataset.locationShape = (kind === "landmark" && targets[0]?.osmType === "node") || kind === "approximate-area"
      ? "area-circle"
      : kind === "approximate-boundary"
        ? "approximate-polygon"
      : kind === "engineering-anchor"
        ? "anchor-halo"
        : "bounding-range";
    fitLayers(overviewLayer && kind === "approximate-boundary" ? [...overviewLayer, ...layers] : layers);
    updateMapLabelSelection();
  }

  function readGeometryCache(key) {
    try { return JSON.parse(window.localStorage.getItem(key) || "null"); }
    catch (_) { return null; }
  }

  function writeGeometryCache(key, value) {
    try { window.localStorage.setItem(key, JSON.stringify(value)); }
    catch (_) { /* 包围范围兜底仍可使用 */ }
  }

  async function fetchTargetGeometries(targets) {
    const endpoint = String(mapConfig.osmServices?.nominatimEndpoint || "").trim();
    if (!endpoint) return null;
    const polygonTargets = targets.filter((target) =>
      !(["approximate-boundary", "approximate-area", "engineering-anchor"].includes(target.__locationKind)
        || (target.__locationKind === "landmark" && target.osmType === "node"))
    );
    const ids = polygonTargets.map(osmLookupId).filter(Boolean);
    if (!ids.length) return null;
    const cacheKey = `flood-storage-osm-geometry:v3:${ids.slice().sort().join(",")}`;
    const cached = readGeometryCache(cacheKey);
    if (cached) return cached;
    const requestUrl = new URL(endpoint, window.location.href);
    requestUrl.search = new URLSearchParams({
      format: "jsonv2", polygon_geojson: "1", "accept-language": "zh-CN", osm_ids: ids.join(",")
    }).toString();
    const response = await fetch(requestUrl, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`位置服务返回 ${response.status}`);
    const results = await response.json();
    const features = results.filter((item) => item.geojson).map((item) => ({
      type: "Feature",
      properties: { name: item.name, displayName: item.display_name },
      geometry: item.geojson
    }));
    if (!features.length) return null;
    const collection = { type: "FeatureCollection", features };
    writeGeometryCache(cacheKey, collection);
    return collection;
  }

  function geometryOverlays(geometry, style) {
    if (!geometry) return [];
    const common = {
      zIndex: style.zIndex,
      strokeColor: style.strokeColor,
      strokeWeight: style.strokeWeight,
      strokeOpacity: style.strokeOpacity,
      strokeStyle: style.strokeStyle,
      strokeDasharray: style.strokeDasharray,
      fillColor: style.fillColor,
      fillOpacity: style.fillOpacity,
      lineJoin: "round",
      lineCap: "round",
      bubble: false,
      extData: style.extData
    };
    if (geometry.type === "Polygon") {
      return [new AMap.Polygon({ ...common, path: geometry.coordinates })];
    }
    if (geometry.type === "MultiPolygon") {
      return geometry.coordinates.map((coordinates) => new AMap.Polygon({ ...common, path: coordinates }));
    }
    if (geometry.type === "LineString") {
      return [new AMap.Polyline({ ...common, path: geometry.coordinates })];
    }
    if (geometry.type === "MultiLineString") {
      return geometry.coordinates.map((coordinates) => new AMap.Polyline({ ...common, path: coordinates }));
    }
    if (geometry.type === "Point") {
      return [new AMap.CircleMarker({
        center: geometry.coordinates,
        radius: style.strokeWeight > 5 ? 11 : 7,
        ...common
      })];
    }
    if (geometry.type === "GeometryCollection") {
      return geometry.geometries.flatMap((item) => geometryOverlays(item, style));
    }
    return [];
  }

  function createGeometryLayers(geojson, kind, zone) {
    const spatial = publicSpatialMeta(zone.name);
    const layers = [];
    geojson.features.forEach((feature) => {
      const halo = geometryOverlays(feature.geometry, {
        ...interactionHaloStyle(),
        extData: { selectedSpatialHalo: true, spatialKind: spatial.kind }
      });
      const main = geometryOverlays(feature.geometry, {
        ...spatialGeometryStyle(spatial),
        extData: { selectedSpatialGeometry: true, spatialKind: spatial.kind }
      });
      halo.forEach((overlay) => bindZoneOverlay(overlay, zone));
      main.forEach((overlay) => bindZoneOverlay(overlay, zone));
      layers.push(...halo, ...main);
    });
    return layers;
  }

  async function focusLocation(zone) {
    const evidence = evidenceEntry(zone.name);
    if (evidence.confidence === "none") return showToast("公开证据不足，暂不显示位置判断");
    const entry = locationEntry(zone.name);
    const targets = fallbackTargets(entry);
    if (!targets.length) return showToast("这处区域暂时没有位置参考");
    if (!state.map) return showToast("请先配置高德地图 Key");
    renderSelectedFallback(targets, evidence.confidence, zone);
    if (["approximate-boundary", "approximate-area", "engineering-anchor"].includes(targets[0].__locationKind)
      || (targets[0].__locationKind === "landmark" && targets[0].osmType === "node")) return;
    const requestId = state.locationRequestId;
    try {
      const sourceGeoJSON = await fetchTargetGeometries(targets);
      if (!sourceGeoJSON || requestId !== state.locationRequestId || state.selectedZoneId !== zone.id) return;
      const geojson = wgs84GeoJSONToGcj02(sourceGeoJSON);
      const kind = targets[0].__locationKind;
      const layers = createGeometryLayers(geojson, kind, zone);
      if (!layers.length) return;
      layers.push(selectionPin(targetCenter(targets[0]), zone));
      window.SelectionAnimationPrototype?.clear?.();
      if (state.focusLayers.length) state.map.remove(state.focusLayers);
      state.focusLayers = layers;
      state.map.add(layers);
      window.SelectionAnimationPrototype?.setLayers?.(layers, state.map);
      const container = mapContainer();
      container.dataset.locationShape = "osm-geometry";
      // The fallback already framed this selection. A late geometry response
      // must not start a second camera move or undo the user's subsequent pan.
    } catch (error) {
      console.warn("无法细化同名位置，继续使用缓存范围", error);
    }
  }

  function compactAdministrativeText(candidate) {
    return [...new Set([
      candidate?.province,
      candidate?.city,
      candidate?.district
    ].filter(Boolean))].join("");
  }

  function uniqueSourcesByUrl(sources, seenUrls) {
    return sources.filter((source) => {
      const url = String(source?.url || "").trim();
      if (!url || seenUrls.has(url)) return false;
      seenUrls.add(url);
      return true;
    });
  }

  function renderEvidenceDetails(zone, evidence, boundary) {
    const spatial = publicSpatialMeta(zone.name);
    const officialMap = evidence.officialMap || {};
    const candidates = evidence.placeSearch?.candidates || [];
    const contextAnchors = (evidence.placeSearch?.contextAnchors || [])
      .filter((anchor) => !candidates.some((candidate) => candidate.id === anchor.id));
    const displayedCandidates = [
      ...candidates.map((candidate) => ({ ...candidate, displayRole: candidate.id === evidence.placeSearch.selectedCandidateId ? "采用" : "同名地物" })),
      ...contextAnchors.map((candidate) => ({ ...candidate, displayRole: "位置侧证" }))
    ];
    if (displayedCandidates.length) {
      els.detailAmapCandidates.innerHTML = displayedCandidates.map((candidate) => {
        const selected = candidate.id === evidence.placeSearch.selectedCandidateId;
        const area = compactAdministrativeText(candidate);
        return `<div class="evidence-candidate${selected ? " is-selected" : ""}">
          <span>${escapeHtml(candidate.name)}${area ? `（${escapeHtml(area)}）` : ""}</span>
          <i>${escapeHtml(candidate.displayRole)}</i>
        </div>`;
      }).join("");
    } else {
      els.detailAmapCandidates.innerHTML = '<p>未找到可用于定位的同名地物或相关地标。</p>';
    }

    if (boundary) {
      const areaText = boundary.referenceAreaSqKm
        ? `资料面积约 ${escapeHtml(boundary.referenceAreaSqKm)} km² · 图示面积约 ${escapeHtml(Number(Number(boundary.geometryAreaSqKm).toFixed(2)))} km²`
        : `${boundary.areaReferenceType === "reference-area-unknown" ? "资料面积未知 · " : ""}图示范围约 ${escapeHtml(boundary.areaSqKm)} km²`;
      els.detailApproximateBoundary.innerHTML = `
        <p>${spatial.label} · ${boundary.anchors?.length || 0} 个范围参考点 · ${areaText}</p>
        <small>${escapeHtml(boundary.basis || "依据公开资料和地图地标生成。")}</small>
      `;
    } else {
      els.detailApproximateBoundary.innerHTML = '<p>暂无足够证据绘制位置范围。</p>';
    }

    const seenReferenceUrls = new Set();
    const hasOfficialMapReference = officialMap.available && officialMap.usableForLocation && officialMap.url;
    if (hasOfficialMapReference) seenReferenceUrls.add(String(officialMap.url).trim());
    const referenceClues = uniqueSourcesByUrl(evidence.referenceClues || [], seenReferenceUrls);
    const supportingSources = uniqueSourcesByUrl(
      (evidence.governmentSources || []).filter((source) => source.supportsLocation === true),
      seenReferenceUrls
    );
    const referenceLabelByUrl = new Map(
      (evidence.conclusion?.reasoningSteps || []).flatMap((step) => step.references || [])
        .filter((reference) => reference.url && reference.label)
        .map((reference) => [String(reference.url).trim(), reference.label])
    );
    const referenceLink = (source, fallbackLabel) => {
      const label = referenceLabelByUrl.get(String(source.url || "").trim()) || fallbackLabel;
      return `<a class="evidence-link" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer"><span class="evidence-source-prefix">${escapeHtml(label)}</span><span>${escapeHtml(source.title)} ↗</span></a>`;
    };
    els.detailReferenceCluesRow.hidden = referenceClues.length === 0;
    els.detailOfficialMap.innerHTML = hasOfficialMapReference
      ? `<article class="evidence-source">${referenceLink({ ...officialMap, title: officialMap.title || "官方地图文件" }, "官方图件")}</article>`
      : "";
    if (referenceClues.length) {
      els.detailReferenceClues.innerHTML = referenceClues.map((source, index) => `
        <article class="evidence-source">
          ${referenceLink(source, `线索 ${index + 1}`)}
        </article>
      `).join("");
    } else {
      els.detailReferenceClues.innerHTML = "";
    }

    if (supportingSources.length) {
      els.detailGovernmentSources.innerHTML = supportingSources.map((source, index) => `
        <article class="evidence-source">
          ${referenceLink(source, `引用 ${index + 1}`)}
        </article>
      `).join("");
    } else {
      els.detailGovernmentSources.innerHTML = "<p>没有找到足以支持位置判断的政府公文或新闻。</p>";
    }

    const reasoningSteps = evidence.conclusion?.reasoningSteps || [];
    if (reasoningSteps.length) {
      els.detailEvidenceConclusion.innerHTML = `
        <ol class="evidence-reasoning">
          ${reasoningSteps.map((step) => {
            const publicOutcome = /确信度/.test(step.outcome) ? spatial.label : step.outcome;
            const publicDetail = step.title === "位置结论"
              ? `上述公开资料支持这一位置结论；地图以“${spatial.label}”表达。`
              : withoutInternalConfidence(step.detail, `地图以“${spatial.label}”表达。`);
            return `
            <li>
              <div class="evidence-reasoning-heading">
                <b>${escapeHtml(step.title)}</b>
                <i>${escapeHtml(publicOutcome)}</i>
              </div>
              <p>${escapeHtml(publicDetail)}</p>
              ${(step.references || []).length ? `
                <div class="evidence-citations" aria-label="引用标记">
                  ${step.references.map((reference) => `<span class="evidence-citation">[${escapeHtml(reference.label)}]</span>`).join("")}
                </div>
              ` : ""}
            </li>
          `; }).join("")}
        </ol>
      `;
    } else {
      const matchLabels = {
        matched: "行政区交叉验证一致",
        partial: "公开资料可确认到行政区或模糊范围",
        mismatch: "地图候选与公开资料不一致",
        unavailable: "暂无可交叉验证的行政区信息"
      };
      els.detailEvidenceConclusion.innerHTML = `
        <p>${escapeHtml(matchLabels[evidence.administrativeMatch?.overall] || matchLabels.unavailable)}。${escapeHtml(withoutInternalConfidence(evidence.confidenceReason || evidence.conclusion?.reasoning || ""))}</p>
      `;
    }

    const limitations = [
      ...(!(officialMap.available && officialMap.usableForLocation) ? [{ icon: "officialMap", text: "未找到可用于定位的官方地图或图件" }] : []),
      ...(!evidence.fieldVerified ? [{ icon: "fieldVerification", text: "位置结论未经实地核验" }] : []),
      ["所在行政区", "推定范围"].includes(spatial.label)
        ? { icon: "legalBoundary", text: `地图展示的是${spatial.label}，不是主管部门发布的法定边界` }
        : { icon: "legalBoundary", text: "公开证据不足时不生成地图几何" },
      ...(boundary?.displayDeconflictedWith?.length
        ? [{ icon: "displaySeparation", text: "相邻资料范围为避免视觉重叠做过显示分隔，分隔线不代表法定界线" }]
        : [])
    ];
    els.detailLimitations.innerHTML = limitations.map((item) => `
      <li>${LIMITATION_ICONS[item.icon]}<span>${escapeHtml(item.text)}</span></li>
    `).join("");

    const areaFact = boundary?.referenceAreaSqKm
      ? `${boundary.referenceAreaSqKm} km²（资料）`
      : boundary?.areaSqKm
        ? `${boundary.areaSqKm} km²（图示${boundary.areaReferenceType === "reference-area-unknown" ? "；资料面积未知" : ""}）`
        : "暂无";
    els.detailKeyFacts.innerHTML = [
      ["面积信息", areaFact],
      ["可追溯资料", `${referenceClues.length + supportingSources.length + (officialMap.url ? 1 : 0)} 条`]
    ].map(([label, value]) => `<div class="key-fact"><span>${escapeHtml(label)}</span><b>${escapeHtml(value)}</b></div>`).join("");
  }

  function selectZone(zoneId, shouldFit = true) {
    const zone = zones.find((item) => item.id === zoneId);
    if (!zone) return;
    clearMapHover();
    state.selectedZoneId = zoneId;
    syncSelectedZoneUrl(zone);
    renderList();
    const entry = locationEntry(zone.name);
    const hint = locationHints[zone.name];
    const estimate = dLocationEstimates[zone.name];
    const evidence = evidenceEntry(zone.name);
    const spatial = publicSpatialMeta(zone.name);
    const targets = evidence.confidence === "none" ? [] : fallbackTargets(entry);
    const primary = targets[0];
    els.detailPanel.dataset.anchorPlacement = "fixed-left";
    const locationDescription = String(evidence.conclusion?.positionText || hint?.rawLocation || estimate?.estimatedArea || primary?.name || "相关行政区域")
      .replace(/[。；;]+$/, "");
    const summaryPrefix = (/^(自|以|跨|位于)/.test(locationDescription) || locationDescription.includes("位于")) ? "" : "约位于";
    els.detailName.textContent = zone.name;
    els.detailBadges.innerHTML = [
      `<span class="detail-badge detail-badge-basin"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M2 7.5c2 0 2-1.6 4-1.6s2 1.6 4 1.6 2-1.6 4-1.6 2 1.6 4 1.6 2-1.6 4-1.6M2 12c2 0 2-1.6 4-1.6s2 1.6 4 1.6 2-1.6 4-1.6 2 1.6 4 1.6 2-1.6 4-1.6M2 16.5c2 0 2-1.6 4-1.6s2 1.6 4 1.6 2-1.6 4-1.6 2 1.6 4 1.6 2-1.6 4-1.6"/></svg>${escapeHtml(zone.basin)}</span>`,
      `<span class="detail-badge detail-badge-spatial spatial-${spatial.kind}">${spatial.label}</span>`
    ].join("");
    els.detailSummary.textContent = `${summaryPrefix}${locationDescription.replace(/[。\s]+$/, "")}。`;
    renderEvidenceDetails(zone, evidence, locationBoundaries[zone.name]);
    els.detailUpdatedAt.textContent = formatChineseDate(evidence.reviewedAt || estimate?.checkedAt || primary?.checkedAt || zone.source.checkedAt);
    els.detailPanel.classList.add("open");
    els.detailPanel.setAttribute("aria-hidden", "false");
    els.detailBody.scrollTop = 0;
    updateMapLabelSelection();
    scheduleDetailPosition();
    if (shouldFit) focusLocation(zone);
  }

  function closeDetailPanel(restoreFocus = false) {
    const previousZoneId = state.selectedZoneId;
    els.detailPanel.classList.remove("open");
    els.detailPanel.setAttribute("aria-hidden", "true");
    state.selectedZoneId = null;
    syncSelectedZoneUrl(null);
    clearFocus();
    renderList();
    updateMapLabelSelection();
    if (restoreFocus && previousZoneId) {
      window.requestAnimationFrame(() => els.zoneList.querySelector(`[data-zone-id="${CSS.escape(previousZoneId)}"]`)?.focus());
    }
  }

  function bindEvents() {
    window.addEventListener("resize", () => {
      scheduleDetailPosition();
      scheduleZoneScrollbarUpdate();
    });
    els.zoneList.addEventListener("scroll", scheduleZoneScrollbarUpdate, { passive: true });
    if (window.ResizeObserver) {
      new ResizeObserver(scheduleZoneScrollbarUpdate).observe(els.zoneList);
    }
    els.zoneScrollbar.addEventListener("pointerdown", (event) => {
      const trackRect = els.zoneScrollbar.getBoundingClientRect();
      const thumbHeight = els.zoneScrollbarThumb.offsetHeight;
      if (event.target === els.zoneScrollbarThumb) {
        zoneScrollbarDrag = { pointerId: event.pointerId, startY: event.clientY, startScrollTop: els.zoneList.scrollTop };
        els.zoneScrollbar.classList.add("is-dragging");
        els.zoneScrollbar.setPointerCapture(event.pointerId);
        return;
      }
      const travel = Math.max(1, trackRect.height - thumbHeight);
      const ratio = Math.max(0, Math.min(1, (event.clientY - trackRect.top - thumbHeight / 2) / travel));
      els.zoneList.scrollTop = ratio * (els.zoneList.scrollHeight - els.zoneList.clientHeight);
    });
    els.zoneScrollbar.addEventListener("pointermove", (event) => {
      if (!zoneScrollbarDrag || zoneScrollbarDrag.pointerId !== event.pointerId) return;
      const travel = Math.max(1, els.zoneScrollbar.clientHeight - els.zoneScrollbarThumb.offsetHeight);
      const maxScroll = Math.max(0, els.zoneList.scrollHeight - els.zoneList.clientHeight);
      els.zoneList.scrollTop = zoneScrollbarDrag.startScrollTop + (event.clientY - zoneScrollbarDrag.startY) * (maxScroll / travel);
    });
    const endZoneScrollbarDrag = (event) => {
      if (!zoneScrollbarDrag || zoneScrollbarDrag.pointerId !== event.pointerId) return;
      zoneScrollbarDrag = null;
      els.zoneScrollbar.classList.remove("is-dragging");
    };
    els.zoneScrollbar.addEventListener("pointerup", endZoneScrollbarDrag);
    els.zoneScrollbar.addEventListener("pointercancel", endZoneScrollbarDrag);
    els.searchInput.addEventListener("input", (event) => { state.query = event.target.value; renderList(); });
    els.classificationSwitch.addEventListener("click", (event) => {
      const button = event.target.closest("[data-classification]");
      if (!button) return;
      state.classification = button.dataset.classification;
      state.category = "全部";
      clearProvinceFocus();
      clearBasinFocus();
      renderFilters();
      renderList();
      els.zoneList.scrollTop = 0;
      renderApproximateLocations();
    });
    els.categoryFilters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      state.category = button.dataset.category;
      const selectedZone = zones.find((zone) => zone.id === state.selectedZoneId);
      if (selectedZone && !categoryMatches(selectedZone)) {
        closeDetailPanel();
      }
      renderFilters();
      renderList();
      els.zoneList.scrollTop = 0;
      if (state.classification === "province" && state.category !== "全部") {
        clearBasinFocus();
        focusProvince(state.category);
      } else if (state.classification === "basin" && state.category !== "全部") {
        clearProvinceFocus();
        renderApproximateLocations();
        focusBasin(state.category);
      } else {
        clearProvinceFocus();
        clearBasinFocus();
        renderApproximateLocations();
      }
    });
    const warmProvinceFromFilter = (event) => {
      const province = event.target.closest("[data-category]")?.dataset.category;
      if (provinces.includes(province)) {
        requestProvinceDistrict(province, { priority: true }).catch(() => { /* 正式点击时会重试 */ });
      }
    };
    els.categoryFilters.addEventListener("pointerover", warmProvinceFromFilter);
    els.categoryFilters.addEventListener("focusin", warmProvinceFromFilter);
    els.zoneList.addEventListener("click", (event) => {
      const row = event.target.closest("[data-zone-id]");
      if (row) selectZone(row.dataset.zoneId);
    });
    els.detailClose.addEventListener("click", () => closeDetailPanel(true));
    els.sourceButton.addEventListener("click", () => els.sourceDialog.showModal());
    els.aboutZoneButton.addEventListener("click", () => els.aboutZoneDialog.showModal());
    let adminRevealSpaceCount = 0;
    window.addEventListener("blur", () => { adminRevealSpaceCount = 0; });
    document.addEventListener("keydown", (event) => {
      const adminBoundaries = document.getElementById("adminBoundaries");
      if (adminBoundaries?.hidden) {
        const editing = event.target instanceof Element &&
          (event.target.closest("input, textarea, select") || event.target.isContentEditable);
        if (editing || event.isComposing || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey ||
            (event.code !== "Space" && event.key !== " ")) {
          adminRevealSpaceCount = 0;
        } else {
          event.preventDefault();
          if (!event.repeat && ++adminRevealSpaceCount === 5) {
            adminBoundaries.hidden = false;
            adminRevealSpaceCount = 0;
          }
        }
      }
      if (event.key === "Escape" && els.detailPanel.classList.contains("open")) {
        closeDetailPanel(true);
      }
    });
  }

  function init() {
    if (zones.length !== 97) console.warn(`名录数量异常：期望 97，实际 ${zones.length}`);
    renderFilters();
    renderList();
    bindEvents();
    const requestedZoneId = new URLSearchParams(window.location.search).get("zone");
    if (requestedZoneId && zones.some((zone) => zone.id === requestedZoneId)) {
      selectZone(requestedZoneId, false);
    }
    initMap();
  }

  init();
})();
