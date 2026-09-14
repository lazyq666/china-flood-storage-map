// Default selected-boundary animation. Local ?variant=1..4 URLs retain the comparison controls.
(function selectionAnimationPrototype() {
  const variants = [
    { id: "1", name: "单层呼吸光晕", description: "推定范围以 2.4 秒柔和呼吸；行政范围始终使用顺时针移动虚线。" },
    { id: "2", name: "绿色双层潮汐", description: "推定范围保留双层扩散波；行政范围改用顺时针移动的圆角虚线。" },
    { id: "3", name: "沿边巡航高光", description: "推定范围使用沿边巡航高光；行政范围始终使用顺时针移动虚线。" },
    { id: "4", name: "水波填充", description: "推定范围填充缓慢涨落；行政范围始终使用顺时针移动虚线。" }
  ];
  const localPreview = location.protocol === "file:"
    || ["127.0.0.1", "localhost"].includes(location.hostname);
  const params = new URLSearchParams(location.search);
  const requestedVariant = params.get("variant");
  const previewVariant = localPreview && variants.some((item) => item.id === requestedVariant)
    ? requestedVariant
    : null;
  const initialVariant = previewVariant || "2";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const controller = {
    variant: initialVariant,
    map: null,
    layers: [],
    halos: [],
    geometries: [],
    inferredHalos: [],
    inferredGeometries: [],
    administrativeHalos: [],
    administrativeGeometries: [],
    auxiliaries: [],
    runners: [],
    baselines: new WeakMap(),
    paths: new WeakMap(),
    frame: 0,
    lastPaint: 0,
    startedAt: 0,
    panel: null
  };

  function extData(layer) {
    try {
      return layer?.getExtData?.() || layer?.getOptions?.()?.extData || layer?.options?.extData || {};
    } catch (_) {
      return layer?.options?.extData || {};
    }
  }

  function currentOptions(layer) {
    try { return layer?.getOptions?.() || layer?.options || {}; }
    catch (_) { return layer?.options || {}; }
  }

  function setOptions(layer, options) {
    if (typeof layer?.setOptions === "function") layer.setOptions(options);
  }

  function baselineFor(layer) {
    if (controller.baselines.has(layer)) return controller.baselines.get(layer);
    const data = extData(layer);
    const options = currentOptions(layer);
    const halo = data.selectedSpatialHalo === true;
    const administrative = data.spatialKind === "administrative";
    const baseline = halo ? {
      strokeWeight: Number(options.strokeWeight ?? 10),
      strokeOpacity: Number(options.strokeOpacity ?? .22),
      fillOpacity: Number(options.fillOpacity ?? 0),
      strokeColor: options.strokeColor || "#007ef1",
      fillColor: options.fillColor || "#007ef1"
    } : {
      strokeWeight: Number(options.strokeWeight ?? 2.1),
      strokeOpacity: Number(options.strokeOpacity ?? 1),
      strokeDasharray: options.strokeDasharray,
      fillOpacity: Number(options.fillOpacity ?? (administrative ? .018 : .12)),
      strokeColor: options.strokeColor,
      fillColor: options.fillColor
    };
    controller.baselines.set(layer, baseline);
    return baseline;
  }

  function restoreLayers() {
    controller.layers.forEach((layer) => {
      const path = controller.paths.get(layer);
      if (path && typeof layer?.setPath === "function") layer.setPath(path);
      setOptions(layer, baselineFor(layer));
    });
  }

  function removeAuxiliaries() {
    if (controller.map && controller.auxiliaries.length) {
      controller.map.remove(controller.auxiliaries);
    }
    controller.auxiliaries = [];
    controller.runners = [];
  }

  function stopAnimation(restore = true) {
    if (controller.frame) window.cancelAnimationFrame(controller.frame);
    controller.frame = 0;
    removeAuxiliaries();
    if (restore) restoreLayers();
  }

  function pointValue(point) {
    if (Array.isArray(point) && point.length >= 2 && Number.isFinite(Number(point[0]))) {
      return [Number(point[0]), Number(point[1])];
    }
    const lng = typeof point?.getLng === "function" ? point.getLng() : point?.lng;
    const lat = typeof point?.getLat === "function" ? point.getLat() : point?.lat;
    return Number.isFinite(Number(lng)) && Number.isFinite(Number(lat)) ? [Number(lng), Number(lat)] : null;
  }

  function layerPath(layer) {
    let path;
    try { path = layer?.getPath?.() || currentOptions(layer).path; }
    catch (_) { path = currentOptions(layer).path; }
    while (Array.isArray(path) && path.length && !pointValue(path[0])) path = path[0];
    let points = Array.isArray(path) ? path.map(pointValue).filter(Boolean) : [];
    if (points.length >= 2) return closePath(points);

    let bounds;
    try { bounds = layer?.getBounds?.() || currentOptions(layer).bounds; }
    catch (_) { bounds = currentOptions(layer).bounds; }
    const southwest = pointValue(bounds?.getSouthWest?.() || bounds?.southwest);
    const northeast = pointValue(bounds?.getNorthEast?.() || bounds?.northeast);
    if (southwest && northeast) {
      return closePath([
        southwest,
        [northeast[0], southwest[1]],
        northeast,
        [southwest[0], northeast[1]]
      ]);
    }

    let center;
    let radius;
    try {
      center = pointValue(layer?.getCenter?.() || currentOptions(layer).center);
      radius = Number(layer?.getRadius?.() ?? currentOptions(layer).radius);
    } catch (_) {
      center = pointValue(currentOptions(layer).center);
      radius = Number(currentOptions(layer).radius);
    }
    if (!center || !Number.isFinite(radius) || radius <= 0) return [];
    const latScale = radius / 111320;
    const lngScale = radius / (111320 * Math.max(.2, Math.cos(center[1] * Math.PI / 180)));
    points = Array.from({ length: 96 }, (_, index) => {
      const angle = index / 96 * Math.PI * 2;
      return [center[0] + Math.cos(angle) * lngScale, center[1] + Math.sin(angle) * latScale];
    });
    return closePath(points);
  }

  function closePath(points) {
    if (points.length < 2) return points;
    const first = points[0];
    const last = points[points.length - 1];
    return first[0] === last[0] && first[1] === last[1] ? points : [...points, first];
  }

  function distanceToSegment(point, start, end) {
    const dx = end[0] - start[0];
    const dy = end[1] - start[1];
    if (!dx && !dy) return Math.hypot(point[0] - start[0], point[1] - start[1]);
    const ratio = Math.max(0, Math.min(1, ((point[0] - start[0]) * dx + (point[1] - start[1]) * dy) / (dx * dx + dy * dy)));
    return Math.hypot(point[0] - (start[0] + dx * ratio), point[1] - (start[1] + dy * ratio));
  }

  function simplifyOpenPath(points, tolerance) {
    if (points.length <= 2) return points;
    let furthestIndex = 0;
    let furthestDistance = 0;
    for (let index = 1; index < points.length - 1; index += 1) {
      const distance = distanceToSegment(points[index], points[0], points[points.length - 1]);
      if (distance > furthestDistance) {
        furthestDistance = distance;
        furthestIndex = index;
      }
    }
    if (furthestDistance <= tolerance) return [points[0], points[points.length - 1]];
    const before = simplifyOpenPath(points.slice(0, furthestIndex + 1), tolerance);
    const after = simplifyOpenPath(points.slice(furthestIndex), tolerance);
    return [...before.slice(0, -1), ...after];
  }

  function circularArc(points, start, end) {
    const arc = [points[start]];
    let index = start;
    while (index !== end) {
      index = (index + 1) % points.length;
      arc.push(points[index]);
    }
    return arc;
  }

  function smoothDisplayPath(points) {
    const closed = closePath(points);
    const ring = closed.slice(0, -1).filter((point, index, values) => index === 0 || point[0] !== values[index - 1][0] || point[1] !== values[index - 1][1]);
    if (ring.length < 8) return closed;
    const bounds = ring.reduce((value, point) => ({
      minLng: Math.min(value.minLng, point[0]),
      maxLng: Math.max(value.maxLng, point[0]),
      minLat: Math.min(value.minLat, point[1]),
      maxLat: Math.max(value.maxLat, point[1])
    }), { minLng: Infinity, maxLng: -Infinity, minLat: Infinity, maxLat: -Infinity });
    const diagonal = Math.hypot(bounds.maxLng - bounds.minLng, bounds.maxLat - bounds.minLat);
    const tolerance = Math.min(.008, Math.max(.0007, diagonal * .0018));
    const start = ring.reduce((best, point, index) => point[0] < ring[best][0] ? index : best, 0);
    const end = ring.reduce((best, point, index) => point[0] > ring[best][0] ? index : best, 0);
    if (start === end) return closed;
    const simplified = [
      ...simplifyOpenPath(circularArc(ring, start, end), tolerance).slice(0, -1),
      ...simplifyOpenPath(circularArc(ring, end, start), tolerance).slice(0, -1)
    ];
    if (simplified.length < 4) return closed;
    const rounded = simplified.flatMap((point, index) => {
      const next = simplified[(index + 1) % simplified.length];
      return [
        [point[0] * .86 + next[0] * .14, point[1] * .86 + next[1] * .14],
        [point[0] * .14 + next[0] * .86, point[1] * .14 + next[1] * .86]
      ];
    });
    return closePath(rounded);
  }

  function segmentMetrics(points) {
    const lengths = [];
    let total = 0;
    for (let index = 1; index < points.length; index += 1) {
      const a = points[index - 1];
      const b = points[index];
      const x = (b[0] - a[0]) * Math.cos((a[1] + b[1]) * Math.PI / 360);
      const y = b[1] - a[1];
      const length = Math.hypot(x, y);
      total += length;
      lengths.push(total);
    }
    return { points, lengths, total };
  }

  function pointAt(metrics, distance) {
    const target = ((distance % metrics.total) + metrics.total) % metrics.total;
    const index = metrics.lengths.findIndex((value) => value >= target);
    const segmentIndex = index < 0 ? metrics.lengths.length - 1 : index;
    const before = segmentIndex === 0 ? 0 : metrics.lengths[segmentIndex - 1];
    const segmentLength = Math.max(Number.EPSILON, metrics.lengths[segmentIndex] - before);
    const progress = (target - before) / segmentLength;
    const a = metrics.points[segmentIndex];
    const b = metrics.points[segmentIndex + 1];
    return [a[0] + (b[0] - a[0]) * progress, a[1] + (b[1] - a[1]) * progress];
  }

  function runnerSegment(metrics, progress) {
    const start = progress * metrics.total;
    const span = metrics.total * .14;
    return Array.from({ length: 19 }, (_, index) => pointAt(metrics, start + span * index / 18));
  }

  function clockwisePath(points) {
    const closed = closePath(points);
    const ring = closed.slice(0, -1);
    if (ring.length < 3) return closed;
    const signedArea = ring.reduce((area, point, index) => {
      const next = ring[(index + 1) % ring.length];
      return area + point[0] * next[1] - next[0] * point[1];
    }, 0);
    return signedArea > 0 ? closePath([...ring].reverse()) : closed;
  }

  function dashSegment(metrics, progress, span) {
    const start = progress * metrics.total;
    return Array.from({ length: 7 }, (_, index) => pointAt(metrics, start + span * metrics.total * index / 6));
  }

  function haloShapeOptions(layer) {
    const path = layerPath(layer);
    if (path.length >= 3) return { kind: "path", path };
    return null;
  }

  function cloneHalo(layer, color) {
    const AMap = window.AMap;
    if (!AMap) return null;
    const options = currentOptions(layer);
    const common = {
      zIndex: 81,
      strokeColor: color,
      strokeWeight: 6,
      strokeOpacity: .2,
      strokeStyle: "solid",
      fillColor: color,
      fillOpacity: 0,
      lineJoin: "round",
      lineCap: "round",
      bubble: false,
      extData: { selectionAnimationPrototypeAuxiliary: true }
    };
    try {
      if (AMap.Polygon && layer instanceof AMap.Polygon) return new AMap.Polygon({ ...common, path: layer.getPath?.() || options.path });
      if (AMap.Polyline && layer instanceof AMap.Polyline) return new AMap.Polyline({ ...common, path: layer.getPath?.() || options.path });
      if (AMap.Rectangle && layer instanceof AMap.Rectangle) return new AMap.Rectangle({ ...common, bounds: layer.getBounds?.() || options.bounds });
      if (AMap.Circle && layer instanceof AMap.Circle) return new AMap.Circle({ ...common, center: layer.getCenter?.() || options.center, radius: layer.getRadius?.() ?? options.radius });
      if (AMap.CircleMarker && layer instanceof AMap.CircleMarker) return new AMap.CircleMarker({ ...common, center: layer.getCenter?.() || options.center, radius: options.radius || 11 });
    } catch (_) { /* unsupported mock or provider shape */ }
    return null;
  }

  function buildTides() {
    const created = [];
    controller.inferredHalos.forEach((halo, index) => {
      const geometryColor = currentOptions(controller.inferredGeometries[index]).strokeColor;
      const color = geometryColor || getComputedStyle(document.documentElement).getPropertyValue("--color-spatial-inferred").trim() || "#079b89";
      if (controller.panel) controller.panel.dataset.prototypeStrokeColor = color;
      const originalPath = layerPath(halo);
      if (originalPath.length >= 3 && typeof halo?.setPath === "function") {
        if (!controller.paths.has(halo)) controller.paths.set(halo, halo.getPath?.() || currentOptions(halo).path);
        halo.setPath(smoothDisplayPath(originalPath));
      }
      setOptions(halo, { strokeColor: color, fillColor: color, strokeWeight: 6, strokeOpacity: .24 });
      [0, 1].forEach((phase) => {
        const clone = cloneHalo(halo, color);
        if (!clone) return;
        controller.auxiliaries.push(clone);
        created.push(clone);
        controller.runners.push({ type: "tide", overlay: clone, phase });
      });
    });
    if (created.length) controller.map.add(created);
  }

  function buildBoundaryRunners() {
    const AMap = window.AMap;
    if (!AMap?.Polyline) return;
    const created = [];
    controller.inferredHalos.forEach((halo) => {
      const shape = haloShapeOptions(halo);
      if (!shape) return;
      const metrics = segmentMetrics(shape.path);
      if (!metrics.total) return;
      const path = runnerSegment(metrics, 0);
      const glow = new AMap.Polyline({
        path, zIndex: 88, strokeColor: "#007ef1", strokeWeight: 11,
        strokeOpacity: .24, lineJoin: "round", lineCap: "round", bubble: false,
        extData: { selectionAnimationPrototypeAuxiliary: true }
      });
      const core = new AMap.Polyline({
        path, zIndex: 89, strokeColor: "#bfe9ff", strokeWeight: 4.5,
        strokeOpacity: .95, lineJoin: "round", lineCap: "round", bubble: false,
        extData: { selectionAnimationPrototypeAuxiliary: true }
      });
      controller.auxiliaries.push(glow, core);
      created.push(glow, core);
      controller.runners.push({ type: "runner", metrics, overlays: [glow, core] });
    });
    if (created.length) controller.map.add(created);
  }

  function buildAdministrativeDashes() {
    const AMap = window.AMap;
    if (!AMap?.Polyline) return;
    const created = [];
    controller.administrativeHalos.forEach((halo) => {
      setOptions(halo, { strokeWeight: 0, strokeOpacity: 0, fillOpacity: 0 });
    });
    controller.administrativeGeometries.forEach((geometry) => {
      const baseline = baselineFor(geometry);
      setOptions(geometry, { strokeOpacity: 0 });
      const path = clockwisePath(layerPath(geometry));
      if (path.length < 3) return;
      const metrics = segmentMetrics(path);
      if (!metrics.total) return;
      const dashCount = 22;
      const dashSpan = .018;
      const overlays = Array.from({ length: dashCount }, (_, index) => new AMap.Polyline({
        path: dashSegment(metrics, index / dashCount, dashSpan),
        zIndex: 89,
        strokeColor: baseline.strokeColor,
        strokeWeight: baseline.strokeWeight,
        strokeOpacity: baseline.strokeOpacity,
        lineJoin: "round",
        lineCap: "round",
        bubble: false,
        extData: { selectionAnimationPrototypeAuxiliary: true, administrativeMarchingDash: true, dashIndex: index }
      }));
      controller.auxiliaries.push(...overlays);
      created.push(...overlays);
      controller.runners.push({ type: "administrative-dashes", metrics, overlays, dashCount, dashSpan });
    });
    if (created.length) controller.map.add(created);
  }

  function paintAdministrativeDashes(progress) {
    controller.runners.filter((item) => item.type === "administrative-dashes").forEach((item) => {
      item.overlays.forEach((overlay, index) => {
        overlay.setPath?.(dashSegment(item.metrics, progress + index / item.dashCount, item.dashSpan));
      });
    });
  }

  function setupVariant() {
    removeAuxiliaries();
    restoreLayers();
    controller.startedAt = performance.now();
    controller.lastPaint = 0;
    buildAdministrativeDashes();
    if (controller.variant === "2") buildTides();
    if (controller.variant === "3") buildBoundaryRunners();
    updatePanel();
  }

  function paint(now) {
    if (document.hidden || now - controller.lastPaint < 34) return;
    controller.lastPaint = now;
    const elapsed = now - controller.startedAt;
    const administrativeProgress = (elapsed % 19200) / 19200;
    paintAdministrativeDashes(administrativeProgress);
    if (controller.panel) controller.panel.dataset.prototypeAdministrativeMotionSample = administrativeProgress.toFixed(3);
    if (controller.variant === "1") {
      const wave = (Math.sin(elapsed / 2400 * Math.PI * 2 - Math.PI / 2) + 1) / 2;
      if (controller.panel) controller.panel.dataset.prototypeMotionSample = `${(8 + 4 * wave).toFixed(2)}|${(.12 + .16 * wave).toFixed(3)}`;
      controller.inferredHalos.forEach((halo) => setOptions(halo, {
        strokeWeight: 8 + 4 * wave,
        strokeOpacity: .12 + .16 * wave
      }));
    } else if (controller.variant === "2") {
      if (controller.panel) controller.panel.dataset.prototypeMotionSample = ((elapsed % 2800) / 2800).toFixed(3);
      controller.runners.filter((item) => item.type === "tide").forEach((item) => {
        const progress = ((elapsed + item.phase * 1400) % 2800) / 2800;
        const spread = 1 - ((1 - progress) ** 3);
        setOptions(item.overlay, {
          strokeWeight: 6 + 9 * spread,
          strokeOpacity: .2 * ((1 - progress) ** 1.55)
        });
      });
    } else if (controller.variant === "3") {
      const progress = (elapsed % 4500) / 4500;
      if (controller.panel) controller.panel.dataset.prototypeMotionSample = progress.toFixed(3);
      controller.runners.filter((item) => item.type === "runner").forEach((item) => {
        const path = runnerSegment(item.metrics, progress);
        item.overlays.forEach((overlay) => overlay.setPath?.(path));
      });
    } else if (controller.variant === "4") {
      const wave = (Math.sin(elapsed / 3200 * Math.PI * 2 - Math.PI / 2) + 1) / 2;
      if (controller.panel) controller.panel.dataset.prototypeMotionSample = (.06 + .11 * wave).toFixed(3);
      controller.inferredHalos.forEach((halo) => setOptions(halo, { strokeOpacity: .13 + .11 * wave }));
      controller.inferredGeometries.forEach((geometry) => setOptions(geometry, { fillOpacity: .06 + .11 * wave }));
    }
  }

  function animate(now) {
    paint(now);
    controller.frame = window.requestAnimationFrame(animate);
  }

  function applyReducedMotionFrame() {
    paintAdministrativeDashes(.12);
    if (controller.variant === "1") {
      controller.inferredHalos.forEach((halo) => setOptions(halo, { strokeWeight: 10, strokeOpacity: .22 }));
    } else if (controller.variant === "2") {
      controller.runners.filter((item) => item.type === "tide").forEach((item, index) => setOptions(item.overlay, {
        strokeWeight: index % 2 ? 15 : 11,
        strokeOpacity: index % 2 ? .05 : .1
      }));
    } else if (controller.variant === "3") {
      controller.runners.filter((item) => item.type === "runner").forEach((item) => {
        const path = runnerSegment(item.metrics, .18);
        item.overlays.forEach((overlay) => overlay.setPath?.(path));
      });
    } else if (controller.variant === "4") {
      controller.inferredGeometries.forEach((geometry) => setOptions(geometry, { fillOpacity: .12 }));
    }
  }

  function startAnimation() {
    if (!controller.map || !controller.layers.length) return;
    setupVariant();
    if (reducedMotion.matches) {
      applyReducedMotionFrame();
      return;
    }
    controller.frame = window.requestAnimationFrame(animate);
  }

  function setLayers(layers, map) {
    stopAnimation(true);
    controller.map = map || null;
    controller.layers = Array.isArray(layers) ? layers.filter(Boolean) : [];
    controller.halos = controller.layers.filter((layer) => extData(layer).selectedSpatialHalo === true);
    controller.geometries = controller.layers.filter((layer) => extData(layer).selectedSpatialGeometry === true);
    controller.inferredHalos = controller.halos.filter((layer) => extData(layer).spatialKind !== "administrative");
    controller.inferredGeometries = controller.geometries.filter((layer) => extData(layer).spatialKind !== "administrative");
    controller.administrativeHalos = controller.halos.filter((layer) => extData(layer).spatialKind === "administrative");
    controller.administrativeGeometries = controller.geometries.filter((layer) => extData(layer).spatialKind === "administrative");
    controller.layers.forEach(baselineFor);
    startAnimation();
    updatePanel();
  }

  function clear() {
    stopAnimation(true);
    controller.layers = [];
    controller.halos = [];
    controller.geometries = [];
    controller.inferredHalos = [];
    controller.inferredGeometries = [];
    controller.administrativeHalos = [];
    controller.administrativeGeometries = [];
    updatePanel();
  }

  function inspect() {
    return {
      variant: controller.variant,
      haloCount: controller.halos.length,
      geometryCount: controller.geometries.length,
      auxiliaryCount: controller.auxiliaries.length,
      administrativeDashCount: controller.runners
        .filter((item) => item.type === "administrative-dashes")
        .reduce((count, item) => count + item.overlays.length, 0),
      administrativeBorderCount: controller.runners.filter((item) => item.type === "administrative-border").length,
      haloOptions: controller.halos.map((layer) => {
        const options = currentOptions(layer);
        return { strokeColor: options.strokeColor, strokeWeight: options.strokeWeight, strokeOpacity: options.strokeOpacity };
      }),
      geometryOptions: controller.geometries.map((layer) => {
        const options = currentOptions(layer);
        return { fillOpacity: options.fillOpacity, spatialKind: extData(layer).spatialKind };
      }),
      administrativeDashOptions: controller.runners
        .filter((item) => item.type === "administrative-dashes")
        .flatMap((item) => item.overlays.slice(0, 1).map((overlay) => {
          const options = currentOptions(overlay);
          return {
            strokeColor: options.strokeColor,
            strokeWeight: options.strokeWeight,
            strokeOpacity: options.strokeOpacity,
            strokeDasharray: options.strokeDasharray,
            lineCap: options.lineCap,
            lineJoin: options.lineJoin,
            path: options.path
          };
        }))
    };
  }

  function applyVariant(id) {
    if (!variants.some((item) => item.id === id) || id === controller.variant) return;
    stopAnimation(true);
    controller.variant = id;
    document.documentElement.dataset.selectionAnimationPrototype = id;
    const url = new URL(location.href);
    url.searchParams.set("variant", id);
    history.replaceState(null, "", url);
    startAnimation();
    updatePanel();
  }

  function cycle(direction) {
    const current = variants.findIndex((item) => item.id === controller.variant);
    const next = (current + direction + variants.length) % variants.length;
    applyVariant(variants[next].id);
  }

  function updatePanel() {
    if (!controller.panel) return;
    const active = variants.find((item) => item.id === controller.variant) || variants[0];
    controller.panel.dataset.prototypeVariant = active.id;
    controller.panel.dataset.prototypeHaloCount = String(controller.halos.length);
    controller.panel.dataset.prototypeGeometryCount = String(controller.geometries.length);
    controller.panel.dataset.prototypeAuxiliaryCount = String(controller.auxiliaries.length);
    controller.panel.dataset.prototypeAdministrativeDashCount = String(controller.runners
      .filter((item) => item.type === "administrative-dashes")
      .reduce((count, item) => count + item.overlays.length, 0));
    controller.panel.querySelector("[data-prototype-title]").innerHTML = `<strong>${active.id}</strong><span>${active.name}</span>`;
    controller.panel.querySelector("[data-prototype-description]").textContent = active.description;
    controller.panel.querySelector("[data-prototype-status]").textContent = controller.halos.length
      ? controller.administrativeHalos.length
        ? `行政范围：圆角虚线顺时针缓慢移动${reducedMotion.matches ? " · 系统已减少动态" : ""}`
        : `${controller.halos.length} 个推定范围边界正在预览${reducedMotion.matches ? " · 系统已减少动态" : ""}`
      : "请在地图或左侧目录选择一个蓄滞洪区";
    controller.panel.querySelectorAll("[data-prototype-variant]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.prototypeVariant === active.id));
    });
  }

  function mountPanel() {
    document.documentElement.dataset.selectionAnimationPrototype = controller.variant;
    const panel = document.createElement("aside");
    panel.className = "selection-animation-prototype-panel";
    panel.setAttribute("aria-label", "选中态动画原型切换器");
    panel.innerHTML = `<div class="selection-animation-prototype-card">
      <div class="selection-animation-prototype-copy">
        <div class="selection-animation-prototype-kicker">临时原型 · 选中态动画</div>
        <h2 class="selection-animation-prototype-title" data-prototype-title></h2>
        <p class="selection-animation-prototype-description" data-prototype-description></p>
      </div>
      <div>
        <div class="selection-animation-prototype-controls">
          <button class="selection-animation-prototype-arrow" type="button" data-prototype-previous aria-label="上一个方案">←</button>
          ${variants.map((item) => `<button type="button" data-prototype-variant="${item.id}" aria-label="方案 ${item.id}：${item.name}">${item.id}</button>`).join("")}
          <button class="selection-animation-prototype-arrow" type="button" data-prototype-next aria-label="下一个方案">→</button>
        </div>
        <div class="selection-animation-prototype-status" data-prototype-status></div>
      </div>
    </div>`;
    panel.querySelector("[data-prototype-previous]").addEventListener("click", () => cycle(-1));
    panel.querySelector("[data-prototype-next]").addEventListener("click", () => cycle(1));
    panel.querySelectorAll("[data-prototype-variant]").forEach((button) => {
      button.addEventListener("click", () => applyVariant(button.dataset.prototypeVariant));
    });
    document.body.appendChild(panel);
    controller.panel = panel;
    updatePanel();
  }

  if (previewVariant) {
    window.addEventListener("keydown", (event) => {
      const target = event.target;
      if (target?.matches?.("input, textarea, [contenteditable]")) return;
      if (event.key === "ArrowLeft") cycle(-1);
      if (event.key === "ArrowRight") cycle(1);
    });
  }
  reducedMotion.addEventListener?.("change", () => {
    stopAnimation(true);
    startAnimation();
  });

  if (previewVariant) mountPanel();
  window.SelectionAnimationPrototype = Object.freeze({ setLayers, clear, applyVariant, inspect });
}());
