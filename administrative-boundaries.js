/* Shared map reference controls for the main map and review pages. */
(function () {
  "use strict";

  const STORAGE_KEY = "flood-storage-admin-layers:v2";
  const COUNTY_ZOOM = 8;
  const PROVINCES = [110000,120000,130000,140000,150000,210000,220000,230000,
    310000,320000,330000,340000,350000,360000,370000,410000,420000,430000,
    440000,450000,460000,500000,510000,520000,530000,540000,610000,620000,
    630000,640000,650000,710000,810000,820000];

  function mount({ map, AMap, container }) {
    if (!container || container.dataset.adminMounted) return;
    container.dataset.adminMounted = "true";
    const originalMapStyle = map.getMapStyle();
    const waterMapStyle = "amap://styles/normal";
    let appliedWater = false;
    let preferences = { province: false, county: false, names: false, water: false };
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      for (const key of Object.keys(preferences)) {
        if (typeof saved?.[key] === "boolean") preferences[key] = saved[key];
      }
    } catch (_) { /* Storage may be unavailable; controls still work. */ }

    container.classList.add("admin-boundaries");
    container.innerHTML = '<fieldset><legend>行政区参考</legend><div class="admin-options">'
      + '<label><input type="checkbox" data-admin="province"><i class="admin-province-swatch" aria-hidden="true"></i>省界</label>'
      + '<label><input type="checkbox" data-admin="county"><i class="admin-county-swatch" aria-hidden="true"></i>县界</label>'
      + '<label><input type="checkbox" data-admin="names">行政区名称</label>'
      + '</div></fieldset><p class="admin-status" role="status" aria-live="polite"></p>'
      + '<button class="admin-retry" type="button" hidden>重试行政区图层</button>'
      + '<fieldset class="water-options"><legend class="water-legend">底图水系</legend>'
      + '<label><input type="checkbox" data-admin="water"><i class="water-swatch" aria-hidden="true"></i>水系增强</label>'
      + '<p class="water-status" role="status" aria-live="polite"></p></fieldset>';
    const status = container.querySelector(".admin-status");
    const waterStatus = container.querySelector(".water-status");
    const retry = container.querySelector(".admin-retry");
    const inputs = [...container.querySelectorAll("input")];
    let provinceLayer, countyLayer, labelsLayer;
    let labelState = "idle";
    let labelError = false;
    let loading = false;
    let layerError = false;
    let pluginAttempt = 0;
    let destroyed = false;
    let labelAttempt = 0;
    let queryTimer;

    function describe() {
      const countyHidden = preferences.county && map.getZoom() < COUNTY_ZOOM;
      status.textContent = layerError ? "行政区图层暂时无法加载，请重试。"
        : labelError && preferences.names
        ? "行政区名称加载失败，可重试；边界开关仍可使用。"
        : !provinceLayer ? "正在加载行政区图层…"
        : countyHidden ? "紫色粗线为省界；放大后显示县界与县名。"
        : preferences.names && labelState === "loading" ? "正在加载行政区名称…"
        : "紫色粗线为省界，细线为县界；名称开关控制紫色标注。";
      retry.hidden = !layerError && !(labelError && preferences.names);
    }

    function apply() {
      if (destroyed) return;
      inputs.forEach(input => { input.checked = preferences[input.dataset.admin]; });
      applyWater();
      if (provinceLayer) provinceLayer[preferences.province ? "show" : "hide"]();
      if (countyLayer) countyLayer[preferences.county && map.getZoom() >= COUNTY_ZOOM ? "show" : "hide"]();
      if (labelsLayer) labelsLayer[preferences.names ? "show" : "hide"]();
      if (preferences.names && provinceLayer && labelState === "idle") loadNames();
      describe();
    }

    function applyWater() {
      try {
        // Switch the base style only; preserve the view, reference layers and user markers.
        // Avoid reloading style tiles on zoom or when unrelated controls change.
        if (appliedWater !== preferences.water) {
          map.setMapStyle(preferences.water ? waterMapStyle : originalMapStyle);
          appliedWater = preferences.water;
        }
        waterStatus.textContent = preferences.water
          ? "蓝色河湖与彩色底图；河名随缩放显示，可放大查看。"
          : "当前为原底图；开启后增强河湖与底图标注的辨识度。";
      } catch (_) {
        waterStatus.textContent = "水系底图切换失败，请重新切换开关。";
      }
    }

    function loadNames() {
      labelState = "loading";
      labelError = false;
      const attempt = ++labelAttempt;
      // One hierarchy request contains centers/names only, never national boundary geometry.
      const fail = () => {
        if (destroyed || attempt !== labelAttempt) return;
        ++labelAttempt;
        labelState = "error";
        labelError = true;
        describe();
      };
      queryTimer = setTimeout(fail, 15000);
      try {
        const search = new AMap.DistrictSearch({ level: "country", subdistrict: 3, extensions: "base" });
        search.search("中国", (resultStatus, result) => {
          if (destroyed || attempt !== labelAttempt) return;
          clearTimeout(queryTimer);
          if (resultStatus !== "complete" || !result?.districtList?.length) return fail();
          try {
            const labels = [];
            const seen = new Set();
            function visit(district) {
              const level = district.level;
              if (["province", "city", "district"].includes(level) && district.center && !seen.has(district.adcode)) {
                seen.add(district.adcode);
                labels.push(new AMap.LabelMarker({
                  name: district.adcode,
                  position: district.center,
                  zooms: level === "province" ? [3, 7.99] : level === "city" ? [7, 7.99] : [COUNTY_ZOOM, 20],
                  rank: level === "province" ? 3 : level === "city" ? 2 : 1,
                  text: { content: district.name, direction: "center", style: {
                    fontSize: level === "province" ? 15 : 12,
                    fontWeight: "bold", fillColor: "#62458a", strokeColor: "#ffffff", strokeWidth: 3
                  } }
                }));
              }
              (district.districtList || []).forEach(visit);
            }
            result.districtList.forEach(visit);
            if (!labels.length) return fail();
            labelsLayer.add(labels);
            labelState = "ready";
            apply();
          } catch (_) { fail(); }
        });
      } catch (_) { clearTimeout(queryTimer); fail(); }
    }

    function initialize() {
      if (loading || destroyed) return;
      loading = true;
      layerError = false;
      retry.hidden = true;
      status.textContent = "正在加载行政区图层…";
      const attempt = ++pluginAttempt;
      const fail = () => {
        if (destroyed || attempt !== pluginAttempt) return;
        ++pluginAttempt;
        loading = false;
        layerError = true;
        status.textContent = "行政区图层暂时无法加载，请重试。";
        retry.hidden = false;
      };
      const timer = setTimeout(fail, 15000);
      try {
        AMap.plugin(["AMap.DistrictLayer", "AMap.DistrictSearch"], () => {
          if (destroyed || attempt !== pluginAttempt) return;
          clearTimeout(timer);
          try {
            provinceLayer = new AMap.DistrictLayer.Country({
              SOC: "CHN", depth: 1, zIndex: 4, zooms: [3, 20],
              styles: { fill: "rgba(0,0,0,0)", "province-stroke": "#7952a3",
                "nation-stroke": "#7952a3", "stroke-width": 2 }
            });
            countyLayer = new AMap.DistrictLayer.Province({
              adcode: PROVINCES, depth: 2, zIndex: 3, zooms: [COUNTY_ZOOM, 20],
              styles: { fill: "rgba(0,0,0,0)", "province-stroke": "rgba(0,0,0,0)",
                "city-stroke": "#9b83b4", "county-stroke": "#9b83b4", "stroke-width": 1 }
            });
            labelsLayer = new AMap.LabelsLayer({ zIndex: 5, collision: true, allowCollision: false });
            map.add([countyLayer, provinceLayer, labelsLayer]);
            loading = false;
            apply();
          } catch (_) {
            [provinceLayer, countyLayer, labelsLayer].filter(Boolean).forEach(layer => map.remove(layer));
            provinceLayer = countyLayer = labelsLayer = undefined;
            fail();
          }
        });
      } catch (_) { clearTimeout(timer); fail(); }
    }

    inputs.forEach(input => {
      input.checked = preferences[input.dataset.admin];
      input.addEventListener("change", () => {
        preferences[input.dataset.admin] = input.checked;
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences)); } catch (_) { /* optional persistence */ }
        apply();
      });
    });
    retry.addEventListener("click", () => {
      if (!provinceLayer) initialize();
      else { labelState = "idle"; labelError = false; apply(); }
    });
    const sync = event => {
      if (event.key !== STORAGE_KEY) return;
      try {
        const next = JSON.parse(event.newValue);
        for (const key of Object.keys(preferences)) {
          if (typeof next?.[key] === "boolean") preferences[key] = next[key];
        }
        apply();
      } catch (_) { /* Ignore malformed external values. */ }
    };
    window.addEventListener("storage", sync);
    map.on("zoomend", apply);
    map.on("destroy", () => {
      destroyed = true;
      clearTimeout(queryTimer);
      window.removeEventListener("storage", sync);
      map.off("zoomend", apply);
    });
    // Water styling does not depend on successful administrative plugin loading.
    applyWater();
    initialize();
  }

  window.FloodAdminBoundaries = { mount };
})();
