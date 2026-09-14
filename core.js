(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.FloodStorageCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function normalizeName(value) {
    return String(value || "")
      .trim()
      .replace(/[\s·•]/g, "")
      .replace(/[（(]含鲍集圩[）)]/g, "含鲍集圩")
      .replace(/[()（）]/g, "")
      .replace(/蓄滞洪区|蓄洪区|滞洪区$/g, "")
      .replace(/涨渡湖/g, "张渡湖");
  }

  function outOfChina(lng, lat) {
    return lng < 72.004 || lng > 137.8347 || lat < 0.8293 || lat > 55.8271;
  }

  function transformLatitude(lng, lat) {
    let value = -100 + 2 * lng + 3 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
    value += (20 * Math.sin(6 * lng * Math.PI) + 20 * Math.sin(2 * lng * Math.PI)) * 2 / 3;
    value += (20 * Math.sin(lat * Math.PI) + 40 * Math.sin(lat / 3 * Math.PI)) * 2 / 3;
    value += (160 * Math.sin(lat / 12 * Math.PI) + 320 * Math.sin(lat * Math.PI / 30)) * 2 / 3;
    return value;
  }

  function transformLongitude(lng, lat) {
    let value = 300 + lng + 2 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
    value += (20 * Math.sin(6 * lng * Math.PI) + 20 * Math.sin(2 * lng * Math.PI)) * 2 / 3;
    value += (20 * Math.sin(lng * Math.PI) + 40 * Math.sin(lng / 3 * Math.PI)) * 2 / 3;
    value += (150 * Math.sin(lng / 12 * Math.PI) + 300 * Math.sin(lng / 30 * Math.PI)) * 2 / 3;
    return value;
  }

  function wgs84ToGcj02(position) {
    const lng = Number(position?.[0]);
    const lat = Number(position?.[1]);
    if (!Number.isFinite(lng) || !Number.isFinite(lat) || outOfChina(lng, lat)) return [lng, lat];
    const axis = 6378245;
    const eccentricity = 0.006693421622965943;
    let deltaLat = transformLatitude(lng - 105, lat - 35);
    let deltaLng = transformLongitude(lng - 105, lat - 35);
    const radLat = lat / 180 * Math.PI;
    let magic = Math.sin(radLat);
    magic = 1 - eccentricity * magic * magic;
    const sqrtMagic = Math.sqrt(magic);
    deltaLat = deltaLat * 180 / ((axis * (1 - eccentricity)) / (magic * sqrtMagic) * Math.PI);
    deltaLng = deltaLng * 180 / (axis / sqrtMagic * Math.cos(radLat) * Math.PI);
    return [lng + deltaLng, lat + deltaLat];
  }

  function gcj02ToWgs84(position) {
    const targetLng = Number(position?.[0]);
    const targetLat = Number(position?.[1]);
    if (!Number.isFinite(targetLng) || !Number.isFinite(targetLat) || outOfChina(targetLng, targetLat)) {
      return [targetLng, targetLat];
    }
    let lng = targetLng;
    let lat = targetLat;
    for (let iteration = 0; iteration < 10; iteration += 1) {
      const shifted = wgs84ToGcj02([lng, lat]);
      const deltaLng = shifted[0] - targetLng;
      const deltaLat = shifted[1] - targetLat;
      lng -= deltaLng;
      lat -= deltaLat;
      if (Math.max(Math.abs(deltaLng), Math.abs(deltaLat)) < 1e-9) break;
    }
    return [lng, lat];
  }

  function transformCoordinateTree(coordinates) {
    if (!Array.isArray(coordinates)) return coordinates;
    if (coordinates.length >= 2 && typeof coordinates[0] === "number" && typeof coordinates[1] === "number") {
      const converted = wgs84ToGcj02(coordinates);
      return [...converted, ...coordinates.slice(2)];
    }
    return coordinates.map(transformCoordinateTree);
  }

  function wgs84GeoJSONToGcj02(value) {
    if (!value || typeof value !== "object") return value;
    if (Array.isArray(value)) return value.map(wgs84GeoJSONToGcj02);
    const transformed = { ...value };
    if (Object.prototype.hasOwnProperty.call(value, "coordinates")) {
      transformed.coordinates = transformCoordinateTree(value.coordinates);
    }
    if (value.geometry) transformed.geometry = wgs84GeoJSONToGcj02(value.geometry);
    if (Array.isArray(value.geometries)) transformed.geometries = value.geometries.map(wgs84GeoJSONToGcj02);
    if (Array.isArray(value.features)) transformed.features = value.features.map(wgs84GeoJSONToGcj02);
    return transformed;
  }

  function fallbackTargets(entry) {
    if (!entry) return [];
    if (entry.approximateBoundary) return [{ ...entry.approximateBoundary, __locationKind: "approximate-boundary" }];
    if (entry.water) return [{ ...entry.water, __locationKind: "water" }];
    if (entry.landmark) return [{ ...entry.landmark, __locationKind: "landmark" }];
    if (entry.areaApproximation) return [{ ...entry.areaApproximation, __locationKind: "approximate-area" }];
    if (entry.engineeringAnchor) return [{ ...entry.engineeringAnchor, __locationKind: "engineering-anchor" }];
    return (entry.admins || []).map((place) => ({ ...place, __locationKind: "admin" }));
  }

  function mergePlaceBounds(places) {
    const bounds = (places || [])
      .map((place) => place?.boundingBox)
      .filter((box) => Array.isArray(box) && box.length === 4 && box.every(Number.isFinite));
    if (!bounds.length) return null;
    return [
      Math.min(...bounds.map((box) => box[0])),
      Math.max(...bounds.map((box) => box[1])),
      Math.min(...bounds.map((box) => box[2])),
      Math.max(...bounds.map((box) => box[3]))
    ];
  }

  function coordinateBounds(points) {
    const valid = (points || [])
      .map((point) => [Number(point?.[0]), Number(point?.[1])])
      .filter(([lng, lat]) => Number.isFinite(lng) && Number.isFinite(lat));
    if (!valid.length) return null;
    return {
      southwest: [
        Math.min(...valid.map(([lng]) => lng)),
        Math.min(...valid.map(([, lat]) => lat))
      ],
      northeast: [
        Math.max(...valid.map(([lng]) => lng)),
        Math.max(...valid.map(([, lat]) => lat))
      ],
      count: valid.length
    };
  }

  function osmLookupId(place) {
    const prefixes = { node: "N", way: "W", relation: "R" };
    const prefix = prefixes[place?.osmType];
    return prefix && place?.osmId ? `${prefix}${place.osmId}` : "";
  }

  function selectionFitPadding({
    mapWidth,
    mapHeight,
    availableLeft = 0,
    fraction = 0.5
  }) {
    const width = Math.max(1, Number(mapWidth) || 0);
    const height = Math.max(1, Number(mapHeight) || 0);
    const leftEdge = Math.max(0, Math.min(width, Number(availableLeft) || 0));
    const targetFraction = Math.max(0.01, Math.min(1, Number(fraction) || 0.5));
    const availableWidth = Math.max(1, width - leftEdge);
    const availableHeight = height;
    const targetWidth = availableWidth * targetFraction;
    const targetHeight = availableHeight * targetFraction;
    const left = Math.round(leftEdge + (availableWidth - targetWidth) / 2);
    const right = Math.round(width - left - targetWidth);
    const top = Math.round((availableHeight - targetHeight) / 2);
    const bottom = Math.round(height - top - targetHeight);
    return {
      avoid: [top, bottom, left, right],
      top,
      bottom,
      left,
      right,
      availableLeft: leftEdge,
      availableWidth,
      availableHeight,
      fitCenterX: left + (width - left - right) / 2,
      fitCenterY: top + (height - top - bottom) / 2
    };
  }

  function calculateLocationConfidence(evidence) {
    const officialMap = evidence?.officialMap || {};
    const placeSearch = evidence?.placeSearch || {};
    const administrativeMatch = evidence?.administrativeMatch || {};
    const sources = Array.isArray(evidence?.governmentSources) ? evidence.governmentSources : [];
    const supportingSources = sources.filter((source) =>
      source
      && source.supportsLocation === true
      && ["official-document", "government-news", "mainstream-news"].includes(source.sourceType)
    );
    const adminMatched = administrativeMatch.overall === "matched";
    const selectedCandidate = placeSearch.selectedCandidateId
      || placeSearch.selectedCandidate?.id
      || null;

    if (officialMap.available === true && officialMap.usableForLocation === true) {
      return {
        confidence: "high",
        ruleId: "H1",
        label: "确信度高",
        reason: "官方文件附有可用于定位的地图，直接采用官方地图信息。"
      };
    }

    if (placeSearch.status === "unique"
      && selectedCandidate
      && supportingSources.length
      && adminMatched) {
      return {
        confidence: "high",
        ruleId: "H2",
        label: "确信度高",
        reason: "唯一同名地物与政府公文或新闻所述行政区域一致。"
      };
    }

    if (placeSearch.status === "multiple-resolved"
      && selectedCandidate
      && supportingSources.length
      && adminMatched) {
      return {
        confidence: "high",
        ruleId: "H3",
        label: "确信度高",
        reason: "多个同名候选经政府公文或新闻排查后保留唯一地址，且行政区域一致。"
      };
    }

    if (placeSearch.status === "none"
      && supportingSources.length
      && evidence?.conclusion?.hasFuzzyLocation === true
      && administrativeMatch.overall !== "mismatch") {
      return {
        confidence: "medium",
        ruleId: "M1",
        label: "确信度中",
        reason: "未找到可用同名地物，但政府公文或新闻能够支持一个模糊位置。"
      };
    }

    return {
      confidence: "none",
      ruleId: "N1",
      label: "暂不判断",
      reason: "现有地图候选与公开资料不足以形成唯一或可解释的位置结论。"
    };
  }

  return Object.freeze({
    normalizeName,
    calculateLocationConfidence,
    fallbackTargets,
    coordinateBounds,
    mergePlaceBounds,
    osmLookupId,
    selectionFitPadding,
    gcj02ToWgs84,
    wgs84ToGcj02,
    wgs84GeoJSONToGcj02
  });
});
