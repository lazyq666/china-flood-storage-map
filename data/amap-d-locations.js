(function () {
  "use strict";

  // 高德 GCJ-02 位置增强：仅用于 D 级定位和模糊显示，不代表蓄滞洪区法定边界。
  // areaApproximation 为同名自然 AOI 或同名地物聚类形成的近似圆；engineeringAnchor 为工程/地名锚点光晕。
  const zones = {
    "六角山": {
      engineeringAnchor: {
        name: "六角山村附近", lng: 112.255870, lat: 28.824439, radiusKm: 0.8,
        sourceUrl: "https://m.voc.com.cn/rmt/article/12304035.html",
        sourceTitle: "新湖南：汉寿县水利局顺利完成两蓄洪垸堤防加固"
      },
      areaApproximation: {
        name: "六角山·蒋家嘴镇—百禄桥镇交界一带", lng: 112.255870, lat: 28.824439, radiusKm: 2.500,
        method: "user-specified-amap-local-area", evidenceCount: 1, confidence: "user-specified",
        sourceUrl: "https://m.voc.com.cn/rmt/article/12304035.html",
        sourceTitle: "新湖南：汉寿县水利局顺利完成两蓄洪垸堤防加固"
      }
    },
    "民主垸": {
      engineeringAnchor: { name: "沙头镇民主垸中心水利管理站", lng: 112.467338, lat: 28.648318, radiusKm: 0.8 }
    },
    "共双茶": {
      engineeringAnchor: { name: "沅江市共双茶垸分洪闸管理所", lng: 112.682867, lat: 28.901298, radiusKm: 0.8 }
    },
    "北湖垸": {
      engineeringAnchor: { name: "中共北湖垸村支部委员会", lng: 113.238456, lat: 30.415035, radiusKm: 0.8 }
    },
    "钱粮湖": {
      engineeringAnchor: { name: "钱粮湖镇人民政府", lng: 112.689189, lat: 29.450800, radiusKm: 0.8 }
    },
    "建新农场": {
      engineeringAnchor: { name: "建新农场", lng: 112.855809, lat: 29.505634, radiusKm: 0.8 },
      areaApproximation: {
        name: "建新农场同名地物聚类", lng: 112.840236, lat: 29.522895, radiusKm: 2.740,
        method: "amap-place-cluster", evidenceCount: 3, confidence: "medium"
      }
    },
    "君山农场": {
      engineeringAnchor: { name: "君山农场", lng: 112.967273, lat: 29.455309, radiusKm: 0.8 },
      areaApproximation: {
        name: "君山农场同名地物聚类", lng: 112.997475, lat: 29.453946, radiusKm: 3.228,
        method: "amap-place-cluster", evidenceCount: 4, confidence: "medium"
      }
    },
    "杜家台": {
      engineeringAnchor: { name: "杜家台分洪闸管理分局", lng: 113.495070, lat: 30.373931, radiusKm: 0.8 }
    },
    "北金堤": {
      engineeringAnchor: { name: "北金堤滞洪大桥", lng: 115.603300, lat: 35.910074, radiusKm: 0.8 }
    },
    "老汪湖": {
      engineeringAnchor: { name: "宿州市河道管理中心老汪湖管理室", lng: 117.423844, lat: 33.835593, radiusKm: 0.8 }
    },
    "泥河洼": {
      engineeringAnchor: { name: "漯河市泥河洼滞洪区运行保障中心", lng: 113.760795, lat: 33.604915, radiusKm: 0.8 }
    },
    "老王坡": {
      engineeringAnchor: { name: "老王坡·村西花田", lng: 114.063295, lat: 33.414982, radiusKm: 0.8 },
      areaApproximation: {
        name: "老王坡同名地物聚类", lng: 114.077139, lat: 33.429840, radiusKm: 2.393,
        method: "amap-place-cluster", evidenceCount: 3, confidence: "medium"
      }
    },
    "蛟停湖": {
      engineeringAnchor: { name: "蛟停湖大草原", lng: 114.685280, lat: 32.726949, radiusKm: 0.8 },
      areaApproximation: {
        name: "蛟停湖大草原附近", lng: 114.685280, lat: 32.726949, radiusKm: 1.500,
        method: "amap-place-type-radius", evidenceCount: 1, confidence: "medium"
      }
    },
    "姜唐湖": {
      engineeringAnchor: { name: "姜唐湖退水闸", lng: 116.503807, lat: 32.481120, radiusKm: 0.8 }
    },
    "寿西湖": {
      engineeringAnchor: { name: "寿西湖农场", lng: 116.753925, lat: 32.544475, radiusKm: 0.8 },
      areaApproximation: {
        name: "寿西湖农场同名地物聚类", lng: 116.755558, lat: 32.560708, radiusKm: 2.112,
        method: "amap-place-cluster", evidenceCount: 3, confidence: "medium"
      }
    },
    "兰沟洼": {
      engineeringAnchor: { name: "兰沟洼-琉璃河特大桥", lng: 115.866306, lat: 39.169601, radiusKm: 0.8 }
    },
    "宁晋泊": {
      engineeringAnchor: { name: "大陆泽宁晋泊蓄滞洪区防洪工程与安全建设指挥部", lng: 114.794534, lat: 37.379207, radiusKm: 0.8 },
      areaApproximation: {
        name: "宁晋泊生态湿地示范区", lng: 115.054005, lat: 37.501586, radiusKm: 2.500,
        method: "amap-place-type-radius", evidenceCount: 1, confidence: "medium"
      }
    },
    "大陆泽": {
      engineeringAnchor: { name: "大陆泽国家湿地公园", lng: 114.631984, lat: 37.107065, radiusKm: 0.8 },
      areaApproximation: {
        name: "大陆泽国家湿地公园", lng: 114.631984, lat: 37.107065, radiusKm: 0.234,
        method: "amap-aoi-equivalent-circle", areaSqm: 171327, confidence: "medium"
      }
    },
    "柳围坡": {
      engineeringAnchor: { name: "柳围坡泄洪桥", lng: 114.222019, lat: 35.494397, radiusKm: 0.8 }
    },
    "白寺坡": {
      engineeringAnchor: { name: "白寺坡分洪闸", lng: 114.452275, lat: 35.674428, radiusKm: 0.8 }
    },
    "恩县洼": {
      engineeringAnchor: { name: "武城县恩县洼滞洪区", lng: 116.066459, lat: 37.233696, radiusKm: 0.8 }
    },
    "大黄铺洼": {
      engineeringAnchor: { name: "大黄堡湿地自然保护区", lng: 117.249411, lat: 39.467946, radiusKm: 0.8 },
      areaApproximation: {
        name: "大黄堡湿地自然保护区", lng: 117.249411, lat: 39.467946, radiusKm: 4.661,
        method: "amap-aoi-equivalent-circle", areaSqm: 68247218, confidence: "medium"
      }
    },
    "崔家桥": {
      engineeringAnchor: { name: "崔家桥镇人民政府", lng: 114.476148, lat: 36.138916, radiusKm: 0.8 }
    }
  };

  Object.values(zones).forEach((entry) => {
    [entry.engineeringAnchor, entry.areaApproximation].filter(Boolean).forEach((target) => {
      target.coordinateSystem = "GCJ-02";
      target.source = "高德地图 JavaScript API 2.0";
      target.checkedAt = "2026-07-17";
    });
  });

  window.FLOOD_STORAGE_AMAP_D_LOCATIONS = Object.freeze({
    generatedAt: "2026-07-17T07:33:38.952Z",
    coordinateSystem: "GCJ-02",
    zones: Object.freeze(zones)
  });
})();
