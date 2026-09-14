(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FloodLocationSearch = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const cache = new Map();
  function queryFor(keyword, bbox) {
    if (!keyword.trim() || keyword.length > 80) throw new Error('请输入 1–80 个字符的名称。');
    if (bbox.length !== 4 || !bbox.every(Number.isFinite)) throw new Error('地图范围无效。');
    const [south, west, north, east] = bbox;
    if (south >= north || west >= east || north - south > 2 || east - west > 2) {
      throw new Error('请先放大到附近县市，再搜索当前视野内的河流。');
    }
    const name = JSON.stringify(keyword.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const box = bbox.map(n => n.toFixed(6)).join(',');
    return '[out:json][timeout:20][maxsize:16777216];way["waterway"~"^(river|stream|canal|drain)$"]'
      + '[~"^(name|name:zh|alt_name|old_name)$"~' + name + '](' + box + ');out geom(' + box + ');';
  }
  function riverResults(data, core) {
    if (data.remark) throw new Error('河流服务未能完成查询，请稍后重试。');
    if (!Array.isArray(data.elements)) throw new Error('河流服务返回的数据无效。');
    const groups = new Map();
    const seen = new Set();
    for (const way of data.elements) {
      if (way.type !== 'way' || seen.has(way.id)) continue;
      seen.add(way.id);
      const name = way.tags?.['name:zh'] || way.tags?.name || way.tags?.alt_name || way.tags?.old_name;
      if (!name || !Array.isArray(way.geometry)) continue;
      const paths = [];
      let part = [];
      const flush = () => { if (part.length > 1) paths.push(part); part = []; };
      for (const point of way.geometry) {
        // Cropped Overpass geometries contain nulls; never bridge missing sections.
        if (!point || !Number.isFinite(point.lon) || !Number.isFinite(point.lat)) { flush(); continue; }
        part.push(core.wgs84ToGcj02([point.lon, point.lat]));
      }
      flush();
      if (!paths.length) continue;
      if (!groups.has(name)) groups.set(name, { name, paths: [], ids: [] });
      groups.get(name).paths.push(...paths);
      groups.get(name).ids.push(way.id);
    }
    return [...groups.values()];
  }
  async function searchRivers(keyword, bbox, { core, signal, fetcher = fetch } = {}) {
    const query = queryFor(keyword, bbox);
    if (cache.has(query)) return cache.get(query);
    const response = await fetcher('https://overpass-api.de/api/interpreter', {
      method: 'POST', body: new URLSearchParams({ data: query }), signal
    });
    if (!response.ok) throw new Error('河流服务暂不可用（' + response.status + '），请稍后重试。');
    const results = riverResults(await response.json(), core);
    if (cache.size >= 20) cache.delete(cache.keys().next().value);
    cache.set(query, results);
    return results;
  }
  function searchPlaces(AMap, keyword, bounds) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('地点查询超时，请重试。')), 15000);
      const service = new AMap.PlaceSearch({ pageSize: 10, pageIndex: 1, citylimit: false });
      service.searchInBounds(keyword, bounds, (status, result) => {
        clearTimeout(timer);
        if (status === 'no_data') return resolve([]);
        if (status !== 'complete' || result?.info !== 'OK') return reject(new Error('地点服务查询失败，请重试。'));
        resolve(result.poiList?.pois || []);
      });
    });
  }
  function mount({ map, AMap, container, core = window.FloodStorageCore }) {
    let form = document.getElementById('place-search-form');
    if (!form && container) {
      const details = document.createElement('details');
      details.className = 'location-search-details';
      details.innerHTML = '<summary>查找附近地点 / 河流</summary><form id="place-search-form" class="location-search-form">'
        + '<input id="place-search-input" type="search" maxlength="80" aria-label="搜索地图地点或河流" placeholder="输入地点或河流名称">'
        + '<button type="submit">搜索</button></form><p id="place-search-status" role="status" aria-live="polite"></p>'
        + '<div id="place-search-results"></div>';
      container.append(details);
      form = details.querySelector('form');
    }
    if (!form || form.dataset.locationSearchMounted) return;
    form.dataset.locationSearchMounted = 'true';
    const input = document.getElementById('place-search-input');
    input.placeholder = '搜索附近地点或河流，如淮河';
    input.maxLength = 80;
    const status = document.getElementById('place-search-status');
    const panel = document.getElementById('place-search-results');
    panel.classList.add('location-search-results');
    const options = document.createElement('div');
    options.className = 'location-search-options';
    options.innerHTML = '<label>搜索类型 <select aria-label="搜索类型"><option value="auto">自动</option>'
      + '<option value="place">地点</option><option value="river">河流</option></select></label>'
      + '<button type="button" class="clear-location-search" hidden>清除搜索结果</button>';
    form.after(options);
    const mode = options.querySelector('select');
    const clear = options.querySelector('button');
    let generation = 0, controller, overlays = [], timer;
    function message(text, tone = '') { status.textContent = text; status.dataset.tone = tone; }
    function removeOverlays() { if (overlays.length) map.remove(overlays); overlays = []; }
    function reset() {
      ++generation; controller?.abort(); clearTimeout(timer);
      removeOverlays(); panel.replaceChildren(); clear.hidden = true;
      document.getElementById('map').dataset.searchResultCount = '0';
    }
    function showRiver(river, fit) {
      removeOverlays();
      overlays = river.paths.map(path => new AMap.Polyline({ path, strokeColor: '#007fae', strokeWeight: 6,
        strokeOpacity: .9, outlineColor: '#fff', isOutline: true, borderWeight: 1, zIndex: 45, bubble: true }));
      const path = river.paths.reduce((a, b) => a.length > b.length ? a : b);
      overlays.push(new AMap.Text({ text: river.name, position: path[Math.floor(path.length / 2)],
        zIndex: 46, bubble: true, style: { color: '#006786', background: '#fff', padding: '3px 7px', border: '1px solid #2185ac', 'border-radius': '4px', 'font-size': '13px' } }));
      map.add(overlays);
      if (fit) map.setFitView(overlays, false, [90, 60, 70, 60], 14);
    }
    function resultButton(name, detail, action) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'location-search-result';
      const strong = document.createElement('strong'); strong.textContent = name;
      const small = document.createElement('small'); small.textContent = detail;
      button.append(strong, small); button.addEventListener('click', action); panel.append(button);
    }
    clear.addEventListener('click', () => { reset(); message('已清除搜索结果；搜索范围为当前视野。'); });
    mode.addEventListener('change', () => { reset(); message('搜索当前视野；河流可按名称查找附近河段。'); });
    form.addEventListener('submit', async event => {
      event.preventDefault(); reset();
      const keyword = input.value.trim();
      if (!keyword) { message('请输入地点或河流名称。', 'error'); input.focus(); return; }
      const current = generation;
      controller = new AbortController();
      const requestController = controller;
      timer = setTimeout(() => requestController.abort(), 25000);
      clear.hidden = false;
      const bounds = map.getBounds();
      const river = mode.value === 'river' || (mode.value === 'auto' && /(?:河|江|溪|渠|沟|水|分洪道)$/.test(keyword));
      const places = mode.value !== 'river';
      message('正在搜索当前视野内的“' + keyword + '”…');
      const jobs = [];
      if (river) {
        jobs.push((async () => {
          const sw = bounds.getSouthWest(), ne = bounds.getNorthEast();
          const a = core.gcj02ToWgs84([sw.lng, sw.lat]), b = core.gcj02ToWgs84([ne.lng, ne.lat]);
          // Pad for conversion nonlinearity near the corners (roughly 1 km).
          return searchRivers(keyword, [a[1] - .01, a[0] - .01, b[1] + .01, b[0] + .01], { core, signal: requestController.signal });
        })());
      }
      if (places) jobs.push(searchPlaces(AMap, keyword, bounds));
      const results = await Promise.allSettled(jobs);
      if (current !== generation) return;
      clearTimeout(timer);
      let count = 0;
      const summaries = [];
      function consume(result, kind, render) {
        if (result.status === 'rejected') {
          const error = result.reason;
          summaries.push(kind + '：' + (error?.name === 'AbortError' ? '查询超时，请重试。' : error.message));
          return;
        }
        count += result.value.length;
        if (!result.value.length) summaries.push(kind === '河流' ? '当前视野暂无匹配的已收录河道，可调整视野或名称重试；不表示这里没有河流。' : '当前视野没有匹配地点。');
        else { summaries.push(kind + ' ' + result.value.length + ' 个'); render(result.value); }
      }
      if (river) consume(results.shift(), '河流', rivers => {
        const heading = document.createElement('h3'); heading.textContent = '河流 · 当前视野附近河段'; panel.append(heading);
        rivers.forEach(item => resultButton(item.name, item.paths.length + ' 段河道 · 点击高亮并定位', () => showRiver(item, true)));
        const attribution = document.createElement('p');
        attribution.innerHTML = '河道线来源：<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap 贡献者</a>；仅作位置参考，并非完整水域边界。';
        panel.append(attribution);
        if (rivers.length === 1) showRiver(rivers[0], false);
      });
      if (places) consume(results.shift(), '地点', pois => {
        const heading = document.createElement('h3'); heading.textContent = '地点 · 高德 · 当前视野'; panel.append(heading);
        pois.filter(poi => poi.location).forEach(poi => resultButton(poi.name, [poi.pname, poi.cityname, poi.adname, poi.address].filter(Boolean).join(' · '), () => {
          removeOverlays();
          const marker = new AMap.Marker({ position: poi.location, title: poi.name, bubble: true });
          overlays = [marker]; map.add(marker); map.setZoomAndCenter(Math.max(map.getZoom(), 14), poi.location);
        }));
      });
      document.getElementById('map').dataset.searchResultCount = String(count);
      message(summaries.join('；'), count ? 'success' : 'error');
    });
    map.on('destroy', reset);
    message('搜索当前视野；输入“淮河”等河名可查找并高亮附近河段。');
  }
  return { mount, queryFor, riverResults, searchRivers, searchPlaces };
});
