(() => {
  "use strict";

  const candidates = window.FLOOD_STORAGE_REFERENCE_MAP_CANDIDATES.features;
  const boundaries = window.FLOOD_STORAGE_LOCATION_BOUNDARIES.zones;
  const zones = [
    { id: "长江-25", name: "荆江分洪区", crop: [250, 390, 390, 720] },
    { id: "长江-30", name: "杜家台", crop: [710, 316, 1015, 478] },
    { id: "长江-36", name: "康山圩", crop: [1705, 865, 1860, 1020] }
  ];
  const variants = [
    { key: "A", name: "双栏证据对照" },
    { key: "B", name: "地图优先审查" },
    { key: "C", name: "批量审计表" }
  ];
  const state = { zoneIndex: 0, showBefore: true, showAfter: true, decisions: {}, map: null, mapRequestId: 0 };
  const mapConfig = window.FLOOD_STORAGE_MAP_CONFIG || {};
  let amapPromise = null;
  const params = new URLSearchParams(location.search);
  const variantKey = variants.some((item) => item.key === params.get("variant")) ? params.get("variant") : "A";

  function candidateFor(zone) {
    return candidates.find((feature) => feature.properties.zoneId === zone.id);
  }

  function currentRing(zone) {
    const geometry = boundaries[zone.name].samplingGeometry;
    if (geometry.type === "MultiPolygon") return geometry.coordinates[0][0];
    return geometry.coordinates[0];
  }

  function candidateRing(zone) {
    return candidateFor(zone).geometry.coordinates[0];
  }

  function loadAMap() {
    if (window.AMap) return Promise.resolve(window.AMap);
    if (amapPromise) return amapPromise;
    if (!mapConfig.key || (!mapConfig.serviceHost && !mapConfig.securityJsCode)) {
      return Promise.reject(new Error("AMAP_CONFIG_MISSING"));
    }
    window._AMapSecurityConfig = mapConfig.serviceHost
      ? { serviceHost: new URL(mapConfig.serviceHost, window.location.origin).href.replace(/\/$/, "") }
      : { securityJsCode: mapConfig.securityJsCode };
    amapPromise = new Promise((resolve, reject) => {
      const callbackName = `__boundaryReviewAmapReady_${Date.now()}`;
      const script = document.createElement("script");
      const cleanup = () => {
        try { delete window[callbackName]; } catch (_) { window[callbackName] = undefined; }
      };
      window[callbackName] = () => {
        cleanup();
        if (window.AMap) resolve(window.AMap);
        else reject(new Error("AMAP_LOAD_FAILED"));
      };
      script.onerror = () => {
        cleanup();
        amapPromise = null;
        reject(new Error("AMAP_LOAD_FAILED"));
      };
      const query = new URLSearchParams({
        v: "2.0",
        key: mapConfig.key,
        plugin: "AMap.ToolBar,AMap.Scale",
        callback: callbackName
      });
      script.src = `https://webapi.amap.com/maps?${query.toString()}`;
      script.async = true;
      document.head.appendChild(script);
    });
    return amapPromise;
  }

  function polygonParts(geometry) {
    if (geometry.type === "MultiPolygon") return geometry.coordinates;
    return [geometry.coordinates];
  }

  function polygonLayers(AMap, geometry, style) {
    return polygonParts(geometry).map((polygon) => new AMap.Polygon({
      path: polygon.length === 1 ? polygon[0] : polygon,
      bubble: false,
      ...style
    }));
  }

  async function mountAMap(zone) {
    const requestId = ++state.mapRequestId;
    const container = document.getElementById("amapReviewMap");
    const status = document.getElementById("amapReviewStatus");
    if (!container) return;
    if (state.map?.destroy) state.map.destroy();
    state.map = null;
    try {
      const AMap = await loadAMap();
      if (requestId !== state.mapRequestId || !document.body.contains(container)) return;
      const currentGeometry = window.FloodStorageCore.wgs84GeoJSONToGcj02(boundaries[zone.name].samplingGeometry);
      const proposedGeometry = window.FloodStorageCore.wgs84GeoJSONToGcj02(candidateFor(zone).geometry);
      const map = new AMap.Map(container, {
        viewMode: "2D",
        zoom: 9,
        mapStyle: mapConfig.mapStyle || "amap://styles/whitesmoke",
        features: Array.isArray(mapConfig.features) ? mapConfig.features : ["bg", "road", "point"],
        showLabel: true,
        resizeEnable: true
      });
      state.map = map;
      const beforeLayers = polygonLayers(AMap, currentGeometry, {
        strokeColor: "#bd675f", strokeWeight: 4, strokeOpacity: .95,
        fillColor: "#bd675f", fillOpacity: .20, zIndex: 20
      });
      const afterLayers = polygonLayers(AMap, proposedGeometry, {
        strokeColor: "#087f86", strokeWeight: 4, strokeOpacity: 1,
        strokeStyle: "dashed", fillColor: "#20a4a8", fillOpacity: .24, zIndex: 24
      });
      const visibleLayers = [
        ...(state.showBefore ? beforeLayers : []),
        ...(state.showAfter ? afterLayers : [])
      ];
      if (visibleLayers.length) map.add(visibleLayers);
      map.on("complete", () => {
        if (requestId !== state.mapRequestId) return;
        container.dataset.mapReady = "true";
        status.hidden = true;
        const fittingLayers = visibleLayers.length ? visibleLayers : [...beforeLayers, ...afterLayers];
        map.setFitView(fittingLayers, false, [46, 46, 46, 46], 12);
      });
      try {
        if (AMap.Scale) map.addControl(new AMap.Scale());
        if (AMap.ToolBar) map.addControl(new AMap.ToolBar({ position: { right: "14px", bottom: "38px" } }));
      } catch (_) { /* Controls do not affect review geometry. */ }
    } catch (error) {
      if (requestId !== state.mapRequestId) return;
      status.textContent = error.message === "AMAP_CONFIG_MISSING"
        ? "缺少高德地图配置，请检查 data/map-config.js"
        : "高德地图加载失败，请检查网络、Key 和域名白名单";
      status.hidden = false;
      container.dataset.mapError = error.message;
    }
  }

  function sourceCrop(zone) {
    const [x1, y1, x2, y2] = zone.crop;
    const confirmedColors = { "长江-25": "#A64F61", "长江-30": "#C57C5B" };
    const caption = confirmedColors[zone.id]
      ? `半透明色层＝从用户确认的 ${confirmedColors[zone.id]} 无标签区域提取；未使用旧版文字缺口闭合。`
      : "半透明色层＝从带标签总图自动提取；标签遮挡部分仍属于推断连接。";
    if (zone.id === "长江-30") {
      return `<div class="source-view">
        <img src="review/reference-map-boundary-trial-2026-09-16/dujiatai-clean-reference.jpg?v=20260916-dujiatai-reference" alt="杜家台 #C57C5B 无标签参考区域">
        <div class="source-caption">用户原图中的 #C57C5B 连通区域＝杜家台；本页候选直接由该区域提取。</div>
      </div>`;
    }
    if (zone.id === "长江-36") {
      return `<div class="source-view">
        <img src="review/reference-map-boundary-trial-2026-09-16/kangshan-clean-reference.jpg?v=20260916-kangshan-reference" alt="康山圩橙褐色无标签参考区域">
        <div class="source-caption">附件中的橙褐色区域＝康山圩；7 个分离部分均已保留。附件无比例尺，位置仍按旧图锚点估算。</div>
      </div>`;
    }
    return `<div class="source-view">
      <svg viewBox="${x1} ${y1} ${x2 - x1} ${y2 - y1}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${zone.name}参考图色块提取">
        <image href="review/reference-map-boundary-trial-2026-09-16/extraction-preview.jpg" width="2048" height="1152"/>
      </svg>
      <div class="source-caption">${caption}</div>
    </div>`;
  }

  function legendControls() {
    return `<div class="legend">
      <label><input type="checkbox" data-layer="before" ${state.showBefore ? "checked" : ""}><span class="swatch before"></span>现有边界</label>
      <label><input type="checkbox" data-layer="after" ${state.showAfter ? "checked" : ""}><span class="swatch after"></span>参考图候选</label>
    </div>`;
  }

  function metrics(zone) {
    const current = boundaries[zone.name];
    const candidate = candidateFor(zone).properties;
    const adjustment = Math.abs((candidate.uniformScaleFactor - 1) * 100).toFixed(1);
    const tracedLabel = candidate.areaMeasurementIndependent === false ? "锚点归一化面积" : "图片原始描摹";
    return `<div class="metric-grid">
      <div class="metric"><span>资料参考面积</span><strong>${candidate.referenceAreaSqKm.toFixed(2)}</strong> km²</div>
      <div class="metric"><span>现有图形面积</span><strong>${current.geometryAreaSqKm.toFixed(2)}</strong> km²</div>
      <div class="metric"><span>${tracedLabel}</span><strong>${candidate.rawTracedAreaSqKm.toFixed(2)}</strong> km²</div>
      <div class="metric fail"><span>匹配面积所需线性缩放</span><strong>${adjustment}%</strong></div>
    </div>`;
  }

  function decisionControls(zone) {
    const decision = state.decisions[zone.id] || "待补资料";
    return `<div class="decision-row">
      ${["通过", "退回修改", "待补资料"].map((label) => `<button class="${decision === label ? "active" : ""}" data-decision="${label}">${label}</button>`).join("")}
      <span class="decision-state">当前原型状态：${decision}（仅保存在本页内存）</span>
    </div>`;
  }

  function mapPanel(zone, title = "地理边界叠加") {
    return `<section class="panel map-panel">
      <div class="panel-head"><div><h2>${title}</h2><span class="panel-kicker">高德地图 · WGS84 候选已转换为 GCJ-02 展示坐标</span></div>${legendControls()}</div>
      <div class="map-stage"><div class="amap-review-map" id="amapReviewMap" aria-label="${zone.name}高德地图边界对比"></div><div class="map-status" id="amapReviewStatus">正在加载高德地图…</div></div>
    </section>`;
  }

  function sourcePanel(zone) {
    return `<section class="panel"><div class="panel-head"><div><h2>参考图片提取</h2><span class="panel-kicker">原图局部 · 标签未进行生成式补绘</span></div></div>${sourceCrop(zone)}</section>`;
  }

  function verdict(zone) {
    const candidate = candidateFor(zone).properties;
    const adjustment = (Math.abs(candidate.uniformScaleFactor - 1) * 100).toFixed(1);
    const areaMessage = candidate.areaMeasurementIndependent === false
      ? `附件没有比例尺或坐标网格，因此保留图形形状，并以旧图可见残片的中心定位，再按 ${candidate.referenceAreaSqKm.toFixed(1)} km² 参考面积归一化；该面积不能作为独立通过项。`
      : candidate.areaAdjustmentPassed
      ? `本区使用用户确认的色块后，面积修正仅需 ${adjustment}% 的线性缩放，面积检查已通过。`
      : `本区面积修正还需要 ${adjustment}% 的线性缩放，超过 10% 小样检查线。`;
    return `<div class="explanation"><strong>自动结论：仍需补充位置证据。</strong> ${areaMessage} 全图配准留出误差仍为 3.6 km / 7.8 km，因此候选保留用于比对，但暂不替换公开地图。</div>`;
  }

  function variantA(zone) {
    return `<main class="shell variant-a">${header(zone)}${tabs()}<div class="workspace">
      ${sourcePanel(zone)}${mapPanel(zone)}
      <section class="panel metrics-panel"><div class="panel-head"><h2>面积与验收判断</h2><span class="status-chip">未达到上线门槛</span></div>${metrics(zone)}${verdict(zone)}${decisionControls(zone)}</section>
    </div></main>`;
  }

  function variantB(zone) {
    return `<main class="shell variant-b">${header(zone)}${tabs()}<div class="workspace">
      ${mapPanel(zone, "边界差异主视图")}
      <aside class="evidence-rail">${sourcePanel(zone)}<section class="panel"><div class="panel-head"><h3>检查摘要</h3><span class="status-chip">暂缓</span></div>${metrics(zone)}${verdict(zone)}${decisionControls(zone)}</section></aside>
    </div></main>`;
  }

  function auditRows() {
    return zones.map((zone, index) => {
      const current = boundaries[zone.name];
      const item = candidateFor(zone).properties;
      const adjustment = Math.abs((item.uniformScaleFactor - 1) * 100).toFixed(1);
      return `<tr class="${index === state.zoneIndex ? "selected" : ""}">
        <td><strong>${zone.name}</strong><br><span class="panel-kicker">${zone.id}</span></td>
        <td>${item.referenceAreaSqKm.toFixed(2)}</td><td>${current.geometryAreaSqKm.toFixed(2)}</td><td>${item.rawTracedAreaSqKm.toFixed(2)}</td>
        <td><strong style="color:#a85039">${adjustment}%</strong></td><td>待补资料</td><td><button data-zone-index="${index}">查看对比</button></td>
      </tr>`;
    }).join("");
  }

  function variantC(zone) {
    return `<main class="shell variant-c">${header(zone)}<div class="workspace">
      <section class="panel"><div class="panel-head"><div><h2>三处候选批量审计</h2><span class="panel-kicker">先看异常，再进入单区证据</span></div><span class="status-chip">0 / 3 通过</span></div>
        <div class="audit-wrap"><table class="audit-table"><thead><tr><th>洪区</th><th>参考面积</th><th>现有面积</th><th>描摹面积</th><th>线性缩放</th><th>状态</th><th></th></tr></thead><tbody>${auditRows()}</tbody></table></div>
      </section>
      <div class="support-grid">${mapPanel(zone, `${zone.name} · 边界证据`)}${sourcePanel(zone)}</div>
      <section class="panel" style="margin-top:16px">${verdict(zone)}${decisionControls(zone)}</section>
    </div></main>`;
  }

  function header(zone) {
    return `<div class="masthead"><div><div class="eyebrow">Boundary review · throwaway prototype</div><h1>${zone.name}边界验收</h1><p class="subtitle">把“旧边界”“参考图色块”和“面积约束候选”放在同一条审查链路中。当前候选均未通过精度门槛，本页用于判断还缺什么证据，不代表正式地图更新。</p></div><span class="status-chip">审查结论：待补资料</span></div>`;
  }

  function tabs() {
    return `<nav class="zone-tabs" aria-label="选择洪区">${zones.map((zone, index) => `<button class="zone-tab" data-zone-index="${index}" aria-selected="${index === state.zoneIndex}">${zone.name}</button>`).join("")}</nav>`;
  }

  function switcher() {
    const current = variants.find((item) => item.key === variantKey);
    return `<div class="prototype-switcher" aria-label="原型方案切换"><button data-variant-step="-1" aria-label="上一个方案">←</button><span>${current.key} · ${current.name}</span><button data-variant-step="1" aria-label="下一个方案">→</button></div>`;
  }

  function render() {
    const zone = zones[state.zoneIndex];
    const renderer = variantKey === "B" ? variantB : variantKey === "C" ? variantC : variantA;
    document.getElementById("app").innerHTML = `<div class="prototype-ribbon"><strong>临时验收原型</strong><span>不写入主地图 · 方向键切换布局</span></div>${renderer(zone)}${switcher()}`;
    bind();
    mountAMap(zone);
  }

  function changeVariant(step) {
    const currentIndex = variants.findIndex((item) => item.key === variantKey);
    const next = variants[(currentIndex + step + variants.length) % variants.length];
    const nextParams = new URLSearchParams(location.search);
    nextParams.set("variant", next.key);
    location.search = nextParams.toString();
  }

  function bind() {
    document.querySelectorAll("[data-zone-index]").forEach((button) => button.addEventListener("click", () => {
      state.zoneIndex = Number(button.dataset.zoneIndex); render();
    }));
    document.querySelectorAll("[data-layer]").forEach((input) => input.addEventListener("change", () => {
      if (input.dataset.layer === "before") state.showBefore = input.checked;
      if (input.dataset.layer === "after") state.showAfter = input.checked;
      render();
    }));
    document.querySelectorAll("[data-decision]").forEach((button) => button.addEventListener("click", () => {
      state.decisions[zones[state.zoneIndex].id] = button.dataset.decision; render();
    }));
    document.querySelectorAll("[data-variant-step]").forEach((button) => button.addEventListener("click", () => changeVariant(Number(button.dataset.variantStep))));
  }

  window.addEventListener("keydown", (event) => {
    const target = event.target;
    if (target.matches("input, textarea, [contenteditable]")) return;
    if (event.key === "ArrowLeft") changeVariant(-1);
    if (event.key === "ArrowRight") changeVariant(1);
  });

  render();
})();
