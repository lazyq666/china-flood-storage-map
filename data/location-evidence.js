(function () {
  "use strict";
  const payload = {
  "schemaVersion": 4,
  "generatedAt": "2026-09-22",
  "methodology": "automation/location-confidence-methodology.md",
  "reasoningMethod": "compact-three-stage-evidence-chain",
  "referenceCluePolicy": {
    "confidenceEligible": false,
    "purpose": "百科资料只用于发现历史地名、别名、相邻地物和地理关系；不能单独提高位置确信度。",
    "boundaryRule": "百科内嵌地图坐标不得直接作为蓄滞洪区边界。只有经官方资料或行政区交叉核验的检索词，且出现在最终位置结论中，才可继续用于高德地物检索和边界约束。"
  },
  "summary": {
    "total": 97,
    "confidenceCounts": {
      "high": 30,
      "medium": 67
    },
    "fieldVerified": 0,
    "supportingSourceCounts": {
      "2": 5,
      "3": 9,
      "4": 24,
      "5": 22,
      "6": 18,
      "7": 6,
      "8": 4,
      "9": 3,
      "10": 2,
      "11": 1,
      "12": 1,
      "13": 1,
      "14": 1
    },
    "referenceClueCount": 8
  },
  "zones": {
    "围堤湖": {
      "id": "长江-01",
      "name": "围堤湖",
      "basin": "长江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T08:03:02.403Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "汉寿县围堤湖分洪闸管理所",
            "location": "111.94484816,28.97242887",
            "anchorKind": "engineering"
          },
          {
            "id": "1",
            "name": "北拐村村民委员会",
            "location": "111.91639976,28.95716666",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "围堤湖",
            "location": "111.94612384,28.96389858",
            "anchorKind": "place-name"
          },
          {
            "id": "3",
            "name": "围堤湖村",
            "location": "111.96823935,28.9423154",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [
        {
          "title": "百度百科：围堤湖",
          "publisher": "百度百科",
          "url": "https://baike.baidu.com/item/%E5%9B%B4%E5%A0%A4%E6%B9%96/3757010",
          "sourceType": "encyclopedia",
          "supportsLocation": false,
          "confidenceEligible": false,
          "role": "search-expansion",
          "checkedAt": "2026-07-24",
          "locationSummary": "词条称围堤湖乡位于汉寿县北部、洞庭湖平原，并提到围堤湖分洪闸、围堤湖垸和沅水尾闾南岸；这些线索已由政府文件核对，只用于扩展地名检索。",
          "searchTerms": [
            "围堤湖乡",
            "围堤湖分洪闸",
            "围堤湖垸"
          ],
          "locationRelations": [
            "汉寿县北部",
            "洞庭湖平原",
            "沅水尾闾南岸"
          ],
          "crossValidation": {
            "status": "matched",
            "matchedAdministrativeAreas": [
              "湖南省常德市汉寿县"
            ],
            "matchedRelations": [
              "汉寿县境内沅水尾闾南岸"
            ],
            "supportingSourceUrls": [
              "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html",
              "https://sthjj.changde.gov.cn/group1/M00/04/7C/ClADFGhPjAeAQ1HMAA6m-mL8W8I198.pdf"
            ],
            "boundaryEligible": false
          }
        }
      ],
      "governmentSources": [
        {
          "title": "湖南主体功能区规划附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "沅南垸工程环评隔堤关系",
          "publisher": "",
          "url": "https://sthjj.changde.gov.cn/group1/M00/04/7C/ClADFGhPjAeAQ1HMAA6m-mL8W8I198.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "常德水利局围堤湖图页",
          "publisher": "",
          "url": "https://slj.changde.gov.cn/zhdt/ztzl1/hzzgz/content_1093818",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "围堤湖官方图",
          "publisher": "",
          "url": "https://slj.changde.gov.cn/upload/sslj/contentmanage/article/image/2024/11/13/3a9eda3c8e49430f8e37e5b99fbe3a9c.png",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省常德市汉寿县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "湖南省常德市汉寿县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南常德汉寿，沅水南岸、沅南大圈北侧",
        "reasoning": "旧椭圆横切沅水及附近低地；新候选北侧沿真实沅水折转，南侧明确以围堤湖—沅南垸隔堤方向推测闭合。没有把旧推断的东界说成政府明示。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：围堤湖垸、围堤湖蓄洪垸。省级规划表面积，未证明净扣安全区 36.7 km²：",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "沅南垸工程环评隔堤关系",
                "url": "https://sthjj.changde.gov.cn/group1/M00/04/7C/ClADFGhPjAeAQ1HMAA6m-mL8W8I198.pdf"
              },
              {
                "label": "常德水利局围堤湖图页",
                "url": "https://slj.changde.gov.cn/zhdt/ztzl1/hzzgz/content_1093818"
              },
              {
                "label": "围堤湖官方图",
                "url": "https://slj.changde.gov.cn/upload/sslj/contentmanage/article/image/2024/11/13/3a9eda3c8e49430f8e37e5b99fbe3a9c.png"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "北：沅水水侧及围堤湖分洪闸方向（资料记载）；南：沅南大圈与围堤湖隔堤26+455—35+966，9.511km（资料记载）；东：隔堤至一线堤接点未知（绘图推断）；西：隔堤至一线堤接点未知（绘图推断）",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "沅南垸工程环评隔堤关系",
                "url": "https://sthjj.changde.gov.cn/group1/M00/04/7C/ClADFGhPjAeAQ1HMAA6m-mL8W8I198.pdf"
              },
              {
                "label": "常德水利局围堤湖图页",
                "url": "https://slj.changde.gov.cn/zhdt/ztzl1/hzzgz/content_1093818"
              },
              {
                "label": "围堤湖官方图",
                "url": "https://slj.changde.gov.cn/upload/sslj/contentmanage/article/image/2024/11/13/3a9eda3c8e49430f8e37e5b99fbe3a9c.png"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧椭圆横切沅水及附近低地；新候选北侧沿真实沅水折转，南侧明确以围堤湖—沅南垸隔堤方向推测闭合。没有把旧推断的东界说成政府明示。；隔堤精确GIS轴线和东西闭合接点未取得；安全区台具体内部轮廓未取得，不声称已净扣；同名湖面不能替代总垸；南侧9.511km隔堤缺逐点坐标，南西折点为推测；旧override路径也是推断，不是官方界址。；东、西界及北拐—马家铺堤段具体对应边界未知，北侧河线端点也属推测选择。；36.67为5.5万亩换算的垸内总面积，非已证明的保护面积；未面积缩放。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "围堤湖垸",
        "围堤湖蓄洪垸"
      ],
      "chatgptExtractionPath": "automation/output/remaining-chatgpt-2026-09-13/publications/2026-09-13T08-03-02-403Z-长江-01/extraction.json"
    },
    "六角山": {
      "id": "长江-02",
      "name": "六角山",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T08:03:10.366Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "六角山·蒋家嘴镇—百禄桥镇交界一带",
            "location": "112.25587,28.824439",
            "anchorKind": "area-estimate"
          },
          {
            "id": "1",
            "name": "六角山村附近",
            "location": "112.25587,28.824439",
            "anchorKind": "engineering"
          },
          {
            "id": "2",
            "name": "湖南省常德市汉寿县蒋家嘴镇",
            "location": "112.20676,28.822488",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "湖南省常德市汉寿县百禄桥镇",
            "location": "112.279231,28.78857",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南主体功能区规划附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "汉寿水利局两蓄洪垸加固验收",
          "publisher": "",
          "url": "https://m.voc.com.cn/rmt/article/12304035.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "已有2026-08-30研究直接工程证据，比新回答道路同名推论强"
        },
        {
          "title": "益阳政府环评孔家湖居民坐标",
          "publisher": "",
          "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202009/20200901173543873.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "已有研究实际26页，基准未声明"
        },
        {
          "title": "常德益阳交界水域巡查",
          "publisher": "",
          "url": "https://slj.changde.gov.cn/zhdt/sldt/content_795335",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "2020农村道路计划",
          "publisher": "",
          "url": "https://www.hengyang.gov.cn/bcms/DFS/file/2020/06/29/20200629103338769gi8at5.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "仅道路同名，不证明全垸定位"
        },
        {
          "title": "沅南水利会巡察资料",
          "publisher": "",
          "url": "https://www.hsxjwjcw.gov.cn/xxgk/xsxc/bjxsxcqk/content_3152054",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "六角山水利组2.18km与国家蓄洪垸同一性未证实"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省常德市汉寿县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南常德汉寿；直接工程报道关联百禄桥镇孔家湖村。蒋家嘴鹿角山道路与沅南水利会六角山组同名关系未证实，不以其替代强锚。",
        "reasoning": "旧图围绕已被排除的商户坐标偏向蒋家嘴；新候选向孔家湖直接工程线索及北侧沅水—西洞庭交界纠偏。整个围堤尚无完整图，不能将邻近道路或水利组同名当垸界。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：六角山垸、六角山蓄洪垸。省级规划表面积，表头未定义保护/蓄洪净面积 29.6 km²：",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "汉寿水利局两蓄洪垸加固验收",
                "url": "https://m.voc.com.cn/rmt/article/12304035.html"
              },
              {
                "label": "益阳政府环评孔家湖居民坐标",
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202009/20200901173543873.pdf"
              },
              {
                "label": "常德益阳交界水域巡查",
                "url": "https://slj.changde.gov.cn/zhdt/sldt/content_795335"
              },
              {
                "label": "2020农村道路计划",
                "url": "https://www.hengyang.gov.cn/bcms/DFS/file/2020/06/29/20200629103338769gi8at5.pdf"
              },
              {
                "label": "沅南水利会巡察资料",
                "url": "https://www.hsxjwjcw.gov.cn/xxgk/xsxc/bjxsxcqk/content_3152054"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "waterSide：沅水—西洞庭湖交界水域巡航经过六角山；为水域方位非围堤（方位参照）；landSide：直接加固验收报道联系百禄桥孔家湖村；仅居民区定位不是界址（方位参照）；北：完整外围未知（绘图推断）；南：完整外围未知（绘图推断）；东：完整外围未知（绘图推断）；西：完整外围未知（绘图推断）",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "汉寿水利局两蓄洪垸加固验收",
                "url": "https://m.voc.com.cn/rmt/article/12304035.html"
              },
              {
                "label": "益阳政府环评孔家湖居民坐标",
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202009/20200901173543873.pdf"
              },
              {
                "label": "常德益阳交界水域巡查",
                "url": "https://slj.changde.gov.cn/zhdt/sldt/content_795335"
              },
              {
                "label": "2020农村道路计划",
                "url": "https://www.hengyang.gov.cn/bcms/DFS/file/2020/06/29/20200629103338769gi8at5.pdf"
              },
              {
                "label": "沅南水利会巡察资料",
                "url": "https://www.hsxjwjcw.gov.cn/xxgk/xsxc/bjxsxcqk/content_3152054"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧图围绕已被排除的商户坐标偏向蒋家嘴；新候选向孔家湖直接工程线索及北侧沅水—西洞庭交界纠偏。整个围堤尚无完整图，不能将邻近道路或水利组同名当垸界。；新ChatGPT答建议收紧蒋家嘴证据不足：道路同名不证明工程对象，保留冲突；旧商户点112.255870,28.824439为GCJ02低置信噪声，不作定界锚；完整四至与堤线未取得；仅纠正孔家湖/水域方向的推定范围；孔家湖居民点基准未知，任何坐标采用假设须显式；29.6不可用于反推轮廓；百禄桥与蒋家嘴是否跨镇未知；不把沅南水利组2.18km当全六角山堤长；无完整垸界图，采用的沿河段也未被官方证明就是垸外堤；全部外界线均为明确推测，仅区位得到纠偏。；孔家湖居民坐标基准未知且不是界址点，不把它标作WGS84实测；手工几何为WGS84显示假设。；新回答道路同名/沅南水利组锚与既有直接工程证据冲突，不采用为强锚；旧112.25587商户点排除。；29.6为省规划表面积，未证明是保护面积；不按29.6反推边界。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "六角山垸",
        "六角山蓄洪垸"
      ],
      "chatgptExtractionPath": "automation/output/remaining-chatgpt-2026-09-13/publications/2026-09-13T08-03-10-366Z-长江-02/extraction.json"
    },
    "九垸": {
      "id": "长江-03",
      "name": "九垸",
      "basin": "长江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T08:28:48.893Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 64,
        "contextAnchors": [
          {
            "id": "0",
            "name": "九垸",
            "location": "111.92749277,29.56163826",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "澧水",
            "location": "111.72517602,29.61805366",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "澧水",
            "location": "111.95936406,29.53669236",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "澧水",
            "location": "111.91042687,29.60786939",
            "anchorKind": "natural"
          },
          {
            "id": "4",
            "name": "澧水",
            "location": "111.95385606,29.47896754",
            "anchorKind": "natural"
          },
          {
            "id": "5",
            "name": "澧水",
            "location": "111.8762718,29.57681883",
            "anchorKind": "natural"
          },
          {
            "id": "6",
            "name": "澧水",
            "location": "111.80226301,29.60340518",
            "anchorKind": "natural"
          },
          {
            "id": "7",
            "name": "澧县九垸乡公共卫生管理办",
            "location": "111.9279733,29.56281212",
            "anchorKind": "engineering"
          },
          {
            "id": "8",
            "name": "甘家湾村村民委员会",
            "location": "111.92778199,29.56115836",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "甘家湾村退役军人服务中心",
            "location": "111.927693,29.56223466",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "毕黄村村民委员会",
            "location": "111.91714966,29.5898968",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [
        {
          "title": "百度百科：九垸",
          "publisher": "百度百科",
          "url": "https://baike.baidu.com/item/%E4%B9%9D%E5%9E%B8/63269539",
          "sourceType": "encyclopedia",
          "supportsLocation": false,
          "confidenceEligible": false,
          "role": "search-expansion",
          "checkedAt": "2026-07-24",
          "locationSummary": "用户提供的词条用于发现“九垸”及原九垸乡线索；具体四至、行政归属和面积已另由湖南省政府项目公告交叉核验。",
          "searchTerms": [
            "九垸乡",
            "甘家湾村",
            "毕黄村",
            "夹堤口村"
          ],
          "locationRelations": [
            "原九垸乡片区",
            "现属小渡口镇"
          ],
          "crossValidation": {
            "status": "matched",
            "matchedAdministrativeAreas": [
              "湖南省常德市澧县"
            ],
            "matchedRelations": [
              "东临西官垸",
              "西临津市",
              "北临淞澧大垸",
              "南临安保垸"
            ],
            "supportingSourceUrls": [
              "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html",
              "https://www.li-xian.gov.cn/zwgk/public/6616363/1168639651.html"
            ],
            "boundaryEligible": false
          }
        },
        {
          "title": "搜狗百科：九垸乡",
          "publisher": "搜狗百科",
          "url": "https://baike.sogou.com/m/fullLemma?g_ut=3&lid=66207941",
          "sourceType": "encyclopedia",
          "supportsLocation": false,
          "confidenceEligible": false,
          "role": "search-expansion",
          "checkedAt": "2026-07-24",
          "locationSummary": "词条补充了原九垸乡内滋水、澧水、鲢鱼头村、集中村、团结村、彭家港和七里湖等水系及聚落关系；未被官方资料逐项确认的关系只保留为检索线索。",
          "searchTerms": [
            "鲢鱼头村",
            "集中村",
            "团结村",
            "彭家港",
            "七里湖",
            "滋水",
            "澧水"
          ],
          "locationRelations": [
            "滋水自鲢鱼头村入境",
            "澧水自集中村入境",
            "两水在团结村彭家港一带交汇后经七里湖流向洞庭湖"
          ],
          "crossValidation": {
            "status": "partially-matched",
            "matchedAdministrativeAreas": [
              "湖南省常德市澧县原九垸乡"
            ],
            "matchedRelations": [],
            "supportingSourceUrls": [
              "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
            ],
            "boundaryEligible": false
          }
        }
      ],
      "governmentSources": [
        {
          "title": "湖南省政府2015年度堤防加固公告",
          "publisher": "",
          "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南省主体功能区规划（2012；2016公开）附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南水利厅西官垸环评",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3325432.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南民政厅小渡口镇与九垸乡撤并资料（2017）",
          "publisher": "",
          "url": "https://mzt.hunan.gov.cn/mzt/xxgk/gzdt/ttxw/ttxw4/201705/t20170523_4228041.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南水利厅松滋河系工程答复",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/xxgk/jyta/rdjy/201510/t20151015_3434720.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "九垸补查：常德港规划甘家湾澧水防洪堤",
          "publisher": "",
          "url": "https://cdjkq.changde.gov.cn/upload/cdjkq/application/2025/11/20/%E5%B8%B8%E5%BE%B7%E6%B8%AF%E6%80%BB%E4%BD%93%E8%A7%84%E5%88%92%EF%BC%882021-2035%E5%B9%B4%EF%BC%89.pdf?t=1763603658868&utm_source=chatgpt.com",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "第122页表序4，候选归属待证"
        },
        {
          "title": "常德日报2023-06-28第4版转载：澧淞与九垸隔堤",
          "publisher": "",
          "url": "https://www.sohu.com/a/692223129_121106908",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "二手转载"
        },
        {
          "title": "长江委三不管水位站资料",
          "publisher": "",
          "url": "https://zy.cjh.com.cn/article_2161_259435.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "省水利厅2017洪水风险图编制答复",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/slt/xxgk/jyta/zxta/201709/t20170908_7641306.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "澧县公开卫生机构定位",
          "publisher": "",
          "url": "https://www.li-xian.gov.cn/zwgk/public/6616363/1168639651.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，原坐标基准未注明"
        },
        {
          "title": "湖南生态环境厅甘家湾水源关系",
          "publisher": "",
          "url": "https://sthjt.hunan.gov.cn/sthjt/xxgk/tzgg/gg/202206/t20220609_25441853.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "澧淞毛家岔堤排除依据",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/xxgk/slxw/slxw_1/201010/t20101018_3332366.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省常德市澧县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "湖南省常德市澧县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省常德市澧县，现小渡口镇内的原九垸乡片区，松滋河系与澧水下游交汇区域西侧邻近地带；不能以现小渡口镇整镇替代。",
        "reasoning": "旧椭圆横跨澧水与故道且围入西侧对岸；新候选取甘家湾、毕黄村一侧的真实河道围合低地，北隔堤未定处用推测短接，排除毛家岔等其他垸工程混用。 与保留西官垸旧显示图重合19.5343km²；西官旧图曾按九垸旧椭圆剪切，非真实隔堤。这是未解决显示冲突，不能认定双方实际堤界相交，也未自动裁改任何主图。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "垸内面积 53.64 km²：；国家级蓄滞洪区规划表面积 53.6 km²：2016年公开，原表只写面积",
            "references": [
              {
                "label": "湖南省政府2015年度堤防加固公告",
                "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
              },
              {
                "label": "湖南省主体功能区规划（2012；2016公开）附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南水利厅西官垸环评",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3325432.html"
              },
              {
                "label": "湖南民政厅小渡口镇与九垸乡撤并资料（2017）",
                "url": "https://mzt.hunan.gov.cn/mzt/xxgk/gzdt/ttxw/ttxw4/201705/t20170523_4228041.html"
              },
              {
                "label": "湖南水利厅松滋河系工程答复",
                "url": "https://slt.hunan.gov.cn/xxgk/jyta/rdjy/201510/t20151015_3434720.html"
              },
              {
                "label": "九垸补查：常德港规划甘家湾澧水防洪堤",
                "url": "https://cdjkq.changde.gov.cn/upload/cdjkq/application/2025/11/20/%E5%B8%B8%E5%BE%B7%E6%B8%AF%E6%80%BB%E4%BD%93%E8%A7%84%E5%88%92%EF%BC%882021-2035%E5%B9%B4%EF%BC%89.pdf?t=1763603658868&utm_source=chatgpt.com"
              },
              {
                "label": "常德日报2023-06-28第4版转载：澧淞与九垸隔堤",
                "url": "https://www.sohu.com/a/692223129_121106908"
              },
              {
                "label": "长江委三不管水位站资料",
                "url": "https://zy.cjh.com.cn/article_2161_259435.html"
              },
              {
                "label": "省水利厅2017洪水风险图编制答复",
                "url": "https://slt.hunan.gov.cn/slt/xxgk/jyta/zxta/201709/t20170908_7641306.html"
              },
              {
                "label": "澧县公开卫生机构定位",
                "url": "https://www.li-xian.gov.cn/zwgk/public/6616363/1168639651.html"
              },
              {
                "label": "湖南生态环境厅甘家湾水源关系",
                "url": "https://sthjt.hunan.gov.cn/sthjt/xxgk/tzgg/gg/202206/t20220609_25441853.html"
              },
              {
                "label": "澧淞毛家岔堤排除依据",
                "url": "https://slt.hunan.gov.cn/xxgk/slxw/slxw_1/201010/t20101018_3332366.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：东邻西官垸；相互反向记载，具体河、堤或隔堤未知。（方位参照）；西：西邻津市，具体实体分界线未知。（方位参照）；北：澧淞垸与九垸之间存在8.07km隔堤，信息来自常德日报转载；端点、桩号与精确线位仍未知。（资料记载）；南：南邻安保。甘家湾澧水主汊左岸实际存在防洪大堤，可作为南/西南重点候选，但原文未证明属九垸外缘，具体连续闭合线仍未知。（方位参照）；其他：护坡桩号1+800～2+150、水平盖重4+300～4+800未对应方位，不能据此恢复外轮廓。（方位参照）",
            "references": [
              {
                "label": "湖南省政府2015年度堤防加固公告",
                "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
              },
              {
                "label": "湖南省主体功能区规划（2012；2016公开）附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南水利厅西官垸环评",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3325432.html"
              },
              {
                "label": "湖南民政厅小渡口镇与九垸乡撤并资料（2017）",
                "url": "https://mzt.hunan.gov.cn/mzt/xxgk/gzdt/ttxw/ttxw4/201705/t20170523_4228041.html"
              },
              {
                "label": "湖南水利厅松滋河系工程答复",
                "url": "https://slt.hunan.gov.cn/xxgk/jyta/rdjy/201510/t20151015_3434720.html"
              },
              {
                "label": "九垸补查：常德港规划甘家湾澧水防洪堤",
                "url": "https://cdjkq.changde.gov.cn/upload/cdjkq/application/2025/11/20/%E5%B8%B8%E5%BE%B7%E6%B8%AF%E6%80%BB%E4%BD%93%E8%A7%84%E5%88%92%EF%BC%882021-2035%E5%B9%B4%EF%BC%89.pdf?t=1763603658868&utm_source=chatgpt.com"
              },
              {
                "label": "常德日报2023-06-28第4版转载：澧淞与九垸隔堤",
                "url": "https://www.sohu.com/a/692223129_121106908"
              },
              {
                "label": "长江委三不管水位站资料",
                "url": "https://zy.cjh.com.cn/article_2161_259435.html"
              },
              {
                "label": "省水利厅2017洪水风险图编制答复",
                "url": "https://slt.hunan.gov.cn/slt/xxgk/jyta/zxta/201709/t20170908_7641306.html"
              },
              {
                "label": "澧县公开卫生机构定位",
                "url": "https://www.li-xian.gov.cn/zwgk/public/6616363/1168639651.html"
              },
              {
                "label": "湖南生态环境厅甘家湾水源关系",
                "url": "https://sthjt.hunan.gov.cn/sthjt/xxgk/tzgg/gg/202206/t20220609_25441853.html"
              },
              {
                "label": "澧淞毛家岔堤排除依据",
                "url": "https://slt.hunan.gov.cn/xxgk/slxw/slxw_1/201010/t20101018_3332366.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧椭圆横跨澧水与故道且围入西侧对岸；新候选取甘家湾、毕黄村一侧的真实河道围合低地，北隔堤未定处用推测短接，排除毛家岔等其他垸工程混用。 与保留西官垸旧显示图重合19.5343km²；西官旧图曾按九垸旧椭圆剪切，非真实隔堤。这是未解决显示冲突，不能认定双方实际堤界相交，也未自动裁改任何主图。；四侧实际河道/堤轴/闭合轮廓；关键转折点和左右岸；单列蓄洪/保护/集雨面积；8.07km澧淞—九垸隔堤起止点及准确线位；甘家湾澧水左岸堤属于九垸外缘的直接工程证明；C6施工/竣工图与九垸洪水风险图公开下载未找到；新卫生院坐标基准未知，采用近似WGS显示假设须注明；北隔堤8.07无端点不可按长度匹配，甘家湾堤归属仍候选；与保留西官垸旧显示图重合19.5343km²；西官旧图曾按九垸旧椭圆剪切，非真实隔堤。这是未解决显示冲突，不能认定双方实际堤界相交，也未自动裁改任何主图。；北部8.07km隔堤端点和连续轴线未测，北部短接线为推测。；河心不等于堤顶，甘家湾左岸堤与完整九垸外缘的对应尚无连续工程图；东南河段同样是位置代理。；东临西官、西临津市、南临安保仅邻接关系；不把邻区全部河道自动认定为官方九垸界。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [],
      "chatgptExtractionPath": "automation/output/hunan-revisit-chatgpt-2026-09-13/publications/2026-09-13T08-28-48-893Z-长江-03/extraction.json"
    },
    "西官垸": {
      "id": "长江-04",
      "name": "西官垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-14T02:03:50.699Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 24,
        "contextAnchors": [
          {
            "id": "0",
            "name": "官垸镇人民政府",
            "location": "112.016325,29.555389",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "2015省政府工程公告",
          "publisher": "",
          "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "2010西官环评",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3325432.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "官垸镇地处松滋中西支之间",
          "publisher": "",
          "url": "https://www.li-xian.gov.cn/xwzx/zjdt/content_99391",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "官垸水文站",
          "publisher": "",
          "url": "https://zy.cjh.com.cn/sqall.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "综合页面，未独立读取具体站点原文"
        },
        {
          "title": "毛家岔环评横向水系关系",
          "publisher": "",
          "url": "https://www.li-xian.gov.cn/Upload/main/ContentManage/Article/File/2024/07/24/202407241746059622.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "入河排污口论证附图9水系图",
          "publisher": "",
          "url": "https://www.li-xian.gov.cn/upload/lixian/contentmanage/article/file/2022/11/01/202211011658572465.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "新答称91页附图9，但未成功打开图页，未依图描摹"
        },
        {
          "title": "OpenStreetMap原始水系参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "众包河心线；非官方堤界"
        },
        {
          "title": "湖南省主体功能区规划（既有主图面积参照来源）",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "继承旧主图69.6km²规模参考，本轮未重核原表"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省常德市澧县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南常德澧县官垸镇一带，松滋河中支和西支之间",
        "reasoning": "旧西官按九垸旧椭圆扣邻，九垸重绘后遗留19.534317km²重叠。本候选从原始河网重建官垸一侧、九垸东与安澧西之间范围，保留官垸政府定位点，西东临河线均替换旧椭圆裁线；北封口及南汇口堤段明确推测。九垸与其他已确认范围完全不改。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "既有主图省级规划规模参考（本轮未重新核面积） 69.6 km²：继承旧参考口径；并非本次68.226km²绘图面积或面积拟合目标",
            "references": [
              {
                "label": "2015省政府工程公告",
                "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
              },
              {
                "label": "2010西官环评",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3325432.html"
              },
              {
                "label": "官垸镇地处松滋中西支之间",
                "url": "https://www.li-xian.gov.cn/xwzx/zjdt/content_99391"
              },
              {
                "label": "官垸水文站",
                "url": "https://zy.cjh.com.cn/sqall.html"
              },
              {
                "label": "毛家岔环评横向水系关系",
                "url": "https://www.li-xian.gov.cn/Upload/main/ContentManage/Article/File/2024/07/24/202407241746059622.pdf"
              },
              {
                "label": "入河排污口论证附图9水系图",
                "url": "https://www.li-xian.gov.cn/upload/lixian/contentmanage/article/file/2022/11/01/202211011658572465.pdf"
              },
              {
                "label": "OpenStreetMap原始水系参考",
                "url": "https://www.openstreetmap.org/copyright"
              },
              {
                "label": "湖南省主体功能区规划（既有主图面积参照来源）",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "西：西官西临九垸、七里湖农场、松澧添围；官垸码头位于文献所称松滋河西支。推定西官在该河东侧，九垸在该河西侧；西官明确在九垸以东。（documented-location-inferred-boundary）；东：东邻安澧；官垸镇在松滋中西支之间，东侧中支方向（documented-location）；南：七里湖入口附近具体堤闸洲滩闭合未知；南安保为用户及既有邻接（方位参照）；北：永湘荆湘仅用户提供待独立核；北截线未知（unverified-user-context）",
            "references": [
              {
                "label": "2015省政府工程公告",
                "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
              },
              {
                "label": "2010西官环评",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3325432.html"
              },
              {
                "label": "官垸镇地处松滋中西支之间",
                "url": "https://www.li-xian.gov.cn/xwzx/zjdt/content_99391"
              },
              {
                "label": "官垸水文站",
                "url": "https://zy.cjh.com.cn/sqall.html"
              },
              {
                "label": "毛家岔环评横向水系关系",
                "url": "https://www.li-xian.gov.cn/Upload/main/ContentManage/Article/File/2024/07/24/202407241746059622.pdf"
              },
              {
                "label": "入河排污口论证附图9水系图",
                "url": "https://www.li-xian.gov.cn/upload/lixian/contentmanage/article/file/2022/11/01/202211011658572465.pdf"
              },
              {
                "label": "OpenStreetMap原始水系参考",
                "url": "https://www.openstreetmap.org/copyright"
              },
              {
                "label": "湖南省主体功能区规划（既有主图面积参照来源）",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "用户聊天确认验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧西官按九垸旧椭圆扣邻，九垸重绘后遗留19.534317km²重叠。本候选从原始河网重建官垸一侧、九垸东与安澧西之间范围，保留官垸政府定位点，西东临河线均替换旧椭圆裁线；北封口及南汇口堤段明确推测。九垸与其他已确认范围完全不改。；官方共有堤完整轴线与南端接点未取得；OSM官窑河与官方松滋西支是否同一条需现存河形/码头位置对照，不能仅名推定；北河/哑河位于小渡口一侧，不宜冒认为两垸主分界；北截线未定位；永湘荆湘本轮未独立核；旧西官按九垸旧椭圆扣邻，只是显示裁线，不能固守其错误线；新答建议九垸收缩是方向性建议，不能据此自动改已确认九垸；北侧永湘/荆湘方向未定位连续隔堤；北界沿用旧图北端纬度作推测直线，不能称已核实北隔堤。；西侧采用OSM官窑河几何代理；文献称官垸位于松滋中/西支之间，官窑河与西支的全程同名对应尚未逐段测定。；南端沿现存无名河段汇口闭合，七里湖/安保垸一侧具体堤线与端点未核定，全部作为临河位置代理。；西侧七里湖农场、九垸、松澧添围及北永湘/荆湘只约束邻接方向，未取得这些分区的法定界线，不将其假设为同一整条分隔堤。；新候选消除显示面积重合，不能据此证明共享河心就是实际堤顶；河宽、堤线和完整外围仍待核验。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [],
      "chatgptExtractionPath": "automation/output/xiguan-jiuyuan-review-2026-09-14/publications/2026-09-14T02-03-50-699Z-长江-04/extraction.json"
    },
    "安澧垸": {
      "id": "长江-05",
      "name": "安澧垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T04:25:34.332Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "大湖口镇潭子口村村委会",
            "location": "112.09136552,29.61777836",
            "anchorKind": "locality"
          },
          {
            "id": "1",
            "name": "大湖口镇大湖口社区退役军人服务站",
            "location": "112.10578349,29.5698168",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "大湖口镇新剅社区居民委员会",
            "location": "112.07323683,29.51000976",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "安乡县大湖口镇荆湘种养专业合作社",
            "location": "112.09306213,29.51196314",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "人社服务窗口(安乡县大湖口镇政务服务中心)",
            "location": "112.10994899,29.57128063",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "大湖口镇天福村退役军人服务站",
            "location": "112.09144336,29.49889074",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "黄山头镇人民政府",
            "location": "112.16917838,29.65573809",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "黄山头镇公共卫生管理办公室",
            "location": "112.16321413,29.59750393",
            "anchorKind": "engineering"
          },
          {
            "id": "8",
            "name": "安乡县黄山头镇委员会",
            "location": "112.16974707,29.65594608",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "安乡县黄山头镇供销社",
            "location": "112.17056213,29.65551645",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "黄山头镇人民代表大会",
            "location": "112.16973508,29.65565803",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南省政府2015年度堤防加固公告",
          "publisher": "",
          "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南省主体功能区规划附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南水利厅安澧西线巡查（2019）",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/ztzl/fxzsxcp/201907/t20190711_5390396.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南交通运输厅张九台大桥",
          "publisher": "",
          "url": "https://jtt.hunan.gov.cn/jtt/xxgk/gzdt/szdt1/202309/t20230901_29474373.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "岳阳档案典型堤垸兴废录",
          "publisher": "",
          "url": "https://daj.yueyang.gov.cn/6658/6667/content_572808.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "红网新码头防汛报道（2020）",
          "publisher": "",
          "url": "https://cd.rednet.cn/content/2020/07/27/7785745.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "地方新闻段落岸别佐证"
        },
        {
          "title": "OSM河道位置参照 49401614",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/49401614",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 49401635",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/49401635",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 49401638",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/49401638",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 652425209",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/652425209",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 652425211",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/652425211",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 1242181548",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/1242181548",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省常德市安乡县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省常德市安乡县，大湖口镇为主要行政定位；原焦圻、安福、安凝片区。位于淞滋河中支东侧与东支西侧之间。",
        "reasoning": "将围绕大湖口/黄山头行政点的椭圆改为淞滋河中支、东支之间的河网围合候选，纠正旧圈跨向东支以东的问题。北端用河流分汊点闭合属于假设，真实端堤未知。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "垸内面积 122.73 km²：；国家级蓄滞洪区规划表面积 122.7 km²：2016公开，非明称蓄洪面积",
            "references": [
              {
                "label": "湖南省政府2015年度堤防加固公告",
                "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
              },
              {
                "label": "湖南省主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南水利厅安澧西线巡查（2019）",
                "url": "https://slt.hunan.gov.cn/ztzl/fxzsxcp/201907/t20190711_5390396.html"
              },
              {
                "label": "湖南交通运输厅张九台大桥",
                "url": "https://jtt.hunan.gov.cn/jtt/xxgk/gzdt/szdt1/202309/t20230901_29474373.html"
              },
              {
                "label": "岳阳档案典型堤垸兴废录",
                "url": "https://daj.yueyang.gov.cn/6658/6667/content_572808.html"
              },
              {
                "label": "红网新码头防汛报道（2020）",
                "url": "https://cd.rednet.cn/content/2020/07/27/7785745.html"
              },
              {
                "label": "OSM河道位置参照 49401614",
                "url": "https://www.openstreetmap.org/way/49401614"
              },
              {
                "label": "OSM河道位置参照 49401635",
                "url": "https://www.openstreetmap.org/way/49401635"
              },
              {
                "label": "OSM河道位置参照 49401638",
                "url": "https://www.openstreetmap.org/way/49401638"
              },
              {
                "label": "OSM河道位置参照 652425209",
                "url": "https://www.openstreetmap.org/way/652425209"
              },
              {
                "label": "OSM河道位置参照 652425211",
                "url": "https://www.openstreetmap.org/way/652425211"
              },
              {
                "label": "OSM河道位置参照 1242181548",
                "url": "https://www.openstreetmap.org/way/1242181548"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：淞滋河东支，垸在其西侧；对岸完整相邻垸名及法定岸别未明。（资料记载）；西：淞滋河中支；新码头段地方报道为安澧垸、中支左岸，不能直接推断整线岸别。（资料记载）；南：南西方向隔淞滋河中支与安保垸相邻，南端精确转折未知。（资料记载）；北：北端由哪条横河、隔堤、高地或闸口闭合未知。（尚未核实）；其他：西线巡查参照：安慈高速澧水大桥建设点、张九台电排、同福外洲、谢家铺、马坡湖、大湖口防指；不是已证实的转折点。（方位参照）",
            "references": [
              {
                "label": "湖南省政府2015年度堤防加固公告",
                "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
              },
              {
                "label": "湖南省主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南水利厅安澧西线巡查（2019）",
                "url": "https://slt.hunan.gov.cn/ztzl/fxzsxcp/201907/t20190711_5390396.html"
              },
              {
                "label": "湖南交通运输厅张九台大桥",
                "url": "https://jtt.hunan.gov.cn/jtt/xxgk/gzdt/szdt1/202309/t20230901_29474373.html"
              },
              {
                "label": "岳阳档案典型堤垸兴废录",
                "url": "https://daj.yueyang.gov.cn/6658/6667/content_572808.html"
              },
              {
                "label": "红网新码头防汛报道（2020）",
                "url": "https://cd.rednet.cn/content/2020/07/27/7785745.html"
              },
              {
                "label": "OSM河道位置参照 49401614",
                "url": "https://www.openstreetmap.org/way/49401614"
              },
              {
                "label": "OSM河道位置参照 49401635",
                "url": "https://www.openstreetmap.org/way/49401635"
              },
              {
                "label": "OSM河道位置参照 49401638",
                "url": "https://www.openstreetmap.org/way/49401638"
              },
              {
                "label": "OSM河道位置参照 652425209",
                "url": "https://www.openstreetmap.org/way/652425209"
              },
              {
                "label": "OSM河道位置参照 652425211",
                "url": "https://www.openstreetmap.org/way/652425211"
              },
              {
                "label": "OSM河道位置参照 1242181548",
                "url": "https://www.openstreetmap.org/way/1242181548"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "将围绕大湖口/黄山头行政点的椭圆改为淞滋河中支、东支之间的河网围合候选，纠正旧圈跨向东支以东的问题。北端用河流分汊点闭合属于假设，真实端堤未知。；北端精确界线；南端转折；东支对岸全部邻接对象和岸别；单列蓄洪/保护/集雨面积；与非本轮西官垸旧版猜测圈在淞滋中支附近约0.2894km²交叠，未为消除交叠裁剪；需要核对两岸实际堤线。；候选为资料推定范围，非法定边界，未经实地核验。；使用河道中心线作为外围堤线的位置代理；河心、岸线、堤顶不是同一条线。",
            "references": []
          }
        ]
      },
      "aliases": [],
      "chatgptExtractionPath": "automation/output/hunan-chatgpt-2026-09-13/publications/2026-09-13T04-25-34-332Z-长江-05/extraction.json"
    },
    "澧南垸": {
      "id": "长江-06",
      "name": "澧南垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "道水",
            "location": "111.81484744,29.58784064",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "道水",
            "location": "111.77090852,29.57147946",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "道水",
            "location": "111.73309398,29.54340968",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "澧南镇人民政府",
            "location": "111.72885259,29.5940703",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "中共澧县澧南镇委员会",
            "location": "111.72888665,29.59435042",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "澧县澧南镇财政所",
            "location": "111.72886262,29.59429338",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "澧南镇退役军人服务站",
            "location": "111.72888966,29.59438243",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "澧南镇双荷村村委会",
            "location": "111.73737702,29.59250097",
            "anchorKind": "locality"
          },
          {
            "id": "8",
            "name": "澧县澧南镇回龙村退役军人服务站",
            "location": "111.74468218,29.58318708",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "澧南镇栗木村退役军人服务站",
            "location": "111.73873166,29.58716317",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "澧南镇松林村退役军人服务站",
            "location": "111.69865697,29.5812538",
            "anchorKind": "administrative"
          },
          {
            "id": "11",
            "name": "澧县澧南镇刘市社区退役军人服务站",
            "location": "111.72485387,29.59741115",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南省政府：垸，人与水的棋局",
          "url": "https://www.hunan.gov.cn/hnszf/hnyw/zwdt/202408/t20240801_33418250.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府报道和水利研究资料明确垸内乡镇、村及河流边界"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“澧南垸”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖南省洞庭湖蓄洪区安全与建设管理办法",
          "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府规章逐一列出洞庭湖区24处蓄洪区，交叉确认这些名称均属于湖南洞庭湖区。"
        },
        {
          "title": "湖南省主体功能区规划",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划表列洞庭湖区蓄洪垸名称、面积与蓄洪容积，用于核对区名和规模。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省常德市澧县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "位于湖南省常德市澧县，北临澧水，东濒道水，三面环水、一面靠山，与县城隔河相望。该垸又名泰和垸。",
        "reasoning": "独立读取澧南垸证据包；先锁定湖南省常德市澧县及“位于湖南省常德市澧县，北临澧水，东濒道水，三面环水、一面靠山，与县城隔河相望。该垸又名泰和垸。”，再以本区地图锚点定中心与方向，用本区34.3km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "省政府报道和水利研究资料明确垸内乡镇、村及河流边界；另有3条官方资料交叉核对",
            "references": [
              {
                "url": "https://www.hunan.gov.cn/hnszf/hnyw/zwdt/202408/t20240801_33418250.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
                "label": "引用 3"
              },
              {
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖南省常德市澧县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：位于湖南省常德市澧县，北临澧水，东濒道水，三面环水、一面靠山，与县城隔河相望。该垸又名泰和垸。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "安昌垸": {
      "id": "长江-07",
      "name": "安昌垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T04:25:36.582Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 56,
        "contextAnchors": [
          {
            "id": "0",
            "name": "三岔河镇人民政府",
            "location": "112.28972758,29.414326",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "安乡县三岔河镇政务服务中心",
            "location": "112.28748474,29.41282455",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "三岔河镇驿码头村村部",
            "location": "112.26476806,29.47124853",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "安乡县三岔河镇观音塘",
            "location": "112.2418082,29.3937695",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "安乡县三岔河镇政协",
            "location": "112.28963542,29.41386864",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "三岔河镇国土资源所",
            "location": "112.28788728,29.41357142",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "三岔河镇三多社区退役军人服务站",
            "location": "112.26994272,29.42017849",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "安乡县三岔河镇沙包洲",
            "location": "112.21952769,29.48981253",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "官垱镇人民政府",
            "location": "112.23837136,29.58962174",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "安乡县官垱镇胡家村村民委员会",
            "location": "112.2788123,29.58421793",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "中共安乡县官垱镇委员会",
            "location": "112.23843935,29.59022289",
            "anchorKind": "administrative"
          },
          {
            "id": "11",
            "name": "官垱镇便民服务中心",
            "location": "112.23842436,29.59009986",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南省政府2015年度堤防加固公告",
          "publisher": "",
          "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南水利厅安化垸环评（2010）",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南省主体功能区规划附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南水利厅2025安澧安昌安化分别列名答复",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/slt/xxgk/jyta/zxta/202508/t20250819_33776902.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南红网2015安乡区划调整",
          "publisher": "",
          "url": "https://hn.rednet.cn/c/2015/11/18/1086203.htm",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "现行乡镇定位参照"
        },
        {
          "title": "OSM河道位置参照 49402644",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/49402644",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 70809710",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809710",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 652425244",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/652425244",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "DataV公开县界参考（仅约束未实测的分区连接段）",
          "publisher": "",
          "url": "https://geo.datav.aliyun.com/areas_v3/bound/430700_full.json",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "GCJ-02转WGS84；不是蓄滞洪区图；与实际隔堤/分区线是否重合待核"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省常德市安乡县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省常德市安乡县城以东，位于虎渡河（陆家渡河）东侧、藕池河西支（官垱河）西侧；现官垱镇、三岔河镇相关片区，原安生、安昌、安宏三乡，不能以现镇面代替。",
        "reasoning": "从与安化重叠的乡镇椭圆改为虎渡河以东、藕池西支以西的狭长河道围合候选。北接荆江、南接南汉的实体分界线未知，以公开县界连接代理标出。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "垸内面积 115.1 km²：；国家级蓄滞洪区规划表面积 115.1 km²：2016公开",
            "references": [
              {
                "label": "湖南省政府2015年度堤防加固公告",
                "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
              },
              {
                "label": "湖南水利厅安化垸环评（2010）",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html"
              },
              {
                "label": "湖南省主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南水利厅2025安澧安昌安化分别列名答复",
                "url": "https://slt.hunan.gov.cn/slt/xxgk/jyta/zxta/202508/t20250819_33776902.html"
              },
              {
                "label": "湖南红网2015安乡区划调整",
                "url": "https://hn.rednet.cn/c/2015/11/18/1086203.htm"
              },
              {
                "label": "OSM河道位置参照 49402644",
                "url": "https://www.openstreetmap.org/way/49402644"
              },
              {
                "label": "OSM河道位置参照 70809710",
                "url": "https://www.openstreetmap.org/way/70809710"
              },
              {
                "label": "OSM河道位置参照 652425244",
                "url": "https://www.openstreetmap.org/way/652425244"
              },
              {
                "label": "DataV公开县界参考（仅约束未实测的分区连接段）",
                "url": "https://geo.datav.aliyun.com/areas_v3/bound/430700_full.json"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：藕池河西支（官垱河），河东为安化垸，是安昌与安化的明确分隔。（资料记载）；西：虎渡河（陆家渡河），河西安造大垸。（资料记载）；北：北接荆江分洪区，横向实体接界线未知。（方位参照）；南：南接南县南汉垸，二者共为一个防洪大圈；内部接合段精确堤线未知。（方位参照）；其他：防洪大堤84.247km，分东、西线；不能按长度直接补齐闭合端线。（方位参照）",
            "references": [
              {
                "label": "湖南省政府2015年度堤防加固公告",
                "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
              },
              {
                "label": "湖南水利厅安化垸环评（2010）",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html"
              },
              {
                "label": "湖南省主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南水利厅2025安澧安昌安化分别列名答复",
                "url": "https://slt.hunan.gov.cn/slt/xxgk/jyta/zxta/202508/t20250819_33776902.html"
              },
              {
                "label": "湖南红网2015安乡区划调整",
                "url": "https://hn.rednet.cn/c/2015/11/18/1086203.htm"
              },
              {
                "label": "OSM河道位置参照 49402644",
                "url": "https://www.openstreetmap.org/way/49402644"
              },
              {
                "label": "OSM河道位置参照 70809710",
                "url": "https://www.openstreetmap.org/way/70809710"
              },
              {
                "label": "OSM河道位置参照 652425244",
                "url": "https://www.openstreetmap.org/way/652425244"
              },
              {
                "label": "DataV公开县界参考（仅约束未实测的分区连接段）",
                "url": "https://geo.datav.aliyun.com/areas_v3/bound/430700_full.json"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "从与安化重叠的乡镇椭圆改为虎渡河以东、藕池西支以西的狭长河道围合候选。北接荆江、南接南汉的实体分界线未知，以公开县界连接代理标出。；北接荆江分洪区实体堤轴；南接南汉垸内部接合线；正式左右岸属性；单列保护/集雨/蓄洪面积；安昌与南汉同属防洪大圈；二者之间现用公开县界连接代理，不代表已查明防洪分区隔堤。北端荆江方向也只到县界代理，需总平面图。；相接候选的县界代理来自不同市级概化数据，存在小面积缝隙/交叠（安昌—南汉约0.009km²、安化—和康约0.094km²）；这是未实测分界的残余误差，不能据此认定两垸重叠。；候选为资料推定范围，非法定边界，未经实地核验。；使用河道中心线作为外围堤线的位置代理；河心、岸线、堤顶不是同一条线。",
            "references": []
          }
        ]
      },
      "aliases": [],
      "chatgptExtractionPath": "automation/output/hunan-chatgpt-2026-09-13/publications/2026-09-13T04-25-36-582Z-长江-07/extraction.json"
    },
    "安化垸": {
      "id": "长江-08",
      "name": "安化垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T04:25:38.399Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 46,
        "contextAnchors": [
          {
            "id": "0",
            "name": "藕池河西支",
            "location": "112.2685186,29.45040915",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "藕池河西支",
            "location": "112.23507144,29.61249203",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "三岔河镇人民政府",
            "location": "112.28972758,29.414326",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "安乡县三岔河镇政务服务中心",
            "location": "112.28748474,29.41282455",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "三岔河镇驿码头村村部",
            "location": "112.26476806,29.47124853",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "安乡县三岔河镇观音塘",
            "location": "112.2418082,29.3937695",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "安乡县三岔河镇政协",
            "location": "112.28963542,29.41386864",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "三岔河镇国土资源所",
            "location": "112.28788728,29.41357142",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "三岔河镇三多社区退役军人服务站",
            "location": "112.26994272,29.42017849",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "安乡县三岔河镇沙包洲",
            "location": "112.21952769,29.48981253",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "新口村村民委员会",
            "location": "112.27609298,29.49833811",
            "anchorKind": "administrative"
          },
          {
            "id": "11",
            "name": "三岔河镇新口村退役军人服务站",
            "location": "112.27761198,29.49641748",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南省主体功能区规划（2012）附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南省水利厅安化垸堤防加固环评公告（2010）",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南省政府2015年度蓄洪垸工程公告",
          "publisher": "",
          "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OSM河道位置参照 70809710",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809710",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；与官方命名的对应依赖水系拓扑，不是法定堤线"
        },
        {
          "title": "OSM河道位置参照 70809929",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809929",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；与官方命名的对应依赖水系拓扑，不是法定堤线"
        },
        {
          "title": "DataV公开县界参考（仅作为未实测分界段连接代理）",
          "publisher": "",
          "url": "https://geo.datav.aliyun.com/areas_v3/bound/430700_full.json",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "GCJ-02转WGS84；不是蓄滞洪区范围，未取得堤轴时的粗略连接假设"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省常德市安乡县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省常德市安乡县东北部、西洞庭湖水系，位于藕池河西支东侧、藕池河中支西侧；三岔河镇、官垱镇为乡镇定位参照，完整现行乡镇覆盖未知。",
        "reasoning": "由三岔河驻地周边椭圆改为藕池西支以东、中支以西的河网围合候选。栗林哑河与南隔堤未取得实测轴线，部分采用县界连接代理；保留实际计算面积。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "国家级蓄滞洪区规划表面积 78.5 km²：原表只写面积，未明称蓄洪/保护/集雨",
            "references": [
              {
                "label": "湖南省主体功能区规划（2012）附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南省水利厅安化垸堤防加固环评公告（2010）",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html"
              },
              {
                "label": "湖南省政府2015年度蓄洪垸工程公告",
                "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
              },
              {
                "label": "OSM河道位置参照 70809710",
                "url": "https://www.openstreetmap.org/way/70809710"
              },
              {
                "label": "OSM河道位置参照 70809929",
                "url": "https://www.openstreetmap.org/way/70809929"
              },
              {
                "label": "DataV公开县界参考（仅作为未实测分界段连接代理）",
                "url": "https://geo.datav.aliyun.com/areas_v3/bound/430700_full.json"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：藕池河中支，河东为南县南顶垸；新口→三岔河→沿中支下游→和康垸，堤线10.855km。（资料记载）；西：藕池河西支（官垱河），河西为安昌垸；兴隆→官当→丁家渡→曹家铺→和康，堤线31.632km。（资料记载）；北：栗林哑河，外侧为湖北石首团山垸。（资料记载）；南：与南县和康垸以隔堤相间；原文隔堤在和康垸范围内，精确堤轴坐标未知。（资料记载）；其他：安昌在西支西侧，安化在东侧，不得重合。河道法定左右岸未直接记载。（资料记载）",
            "references": [
              {
                "label": "湖南省主体功能区规划（2012）附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南省水利厅安化垸堤防加固环评公告（2010）",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html"
              },
              {
                "label": "湖南省政府2015年度蓄洪垸工程公告",
                "url": "https://www.hunan.gov.cn/topic/hnzfxxgk2015/zdjsxm/ztbxx/201510/t20151013_1893604.html"
              },
              {
                "label": "OSM河道位置参照 70809710",
                "url": "https://www.openstreetmap.org/way/70809710"
              },
              {
                "label": "OSM河道位置参照 70809929",
                "url": "https://www.openstreetmap.org/way/70809929"
              },
              {
                "label": "DataV公开县界参考（仅作为未实测分界段连接代理）",
                "url": "https://geo.datav.aliyun.com/areas_v3/bound/430700_full.json"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "由三岔河驻地周边椭圆改为藕池西支以东、中支以西的河网围合候选。栗林哑河与南隔堤未取得实测轴线，部分采用县界连接代理；保留实际计算面积。；堤轴和转折点精确坐标；全部现行乡镇覆盖；河道法定左右岸属性；行政县界只在缺测的南北连接段充当低精度代理；未证明县界逐点等于栗林哑河或隔堤，不可用于工程定位。；相接候选的县界代理来自不同市级概化数据，存在小面积缝隙/交叠（安昌—南汉约0.009km²、安化—和康约0.094km²）；这是未实测分界的残余误差，不能据此认定两垸重叠。；候选为资料推定范围，非法定边界，未经实地核验。；使用河道中心线作为外围堤线的位置代理；河心、岸线、堤顶不是同一条线。",
            "references": []
          }
        ]
      },
      "aliases": [],
      "chatgptExtractionPath": "automation/output/hunan-chatgpt-2026-09-13/publications/2026-09-13T04-25-38-399Z-长江-08/extraction.json"
    },
    "南顶垸": {
      "id": "长江-09",
      "name": "南顶垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T04:25:40.321Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 10,
        "contextAnchors": [
          {
            "id": "0",
            "name": "浪拔湖镇两太垸（今泰来村一带）",
            "location": "112.35525304,29.41872452",
            "anchorKind": "location-clue"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南省主体功能区规划（2012）附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "南县育乐垸涝区治理工程（二期）环评（2024）",
          "publisher": "",
          "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202412/2024121316291598700.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "安化垸堤防环评（2010）",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "益阳村级行政地名",
          "publisher": "",
          "url": "https://www.yiyang.gov.cn/yiyang/2/134/38756/38759/content_1902266.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "仅定位参照"
        },
        {
          "title": "OSM河道位置参照 70809512",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809512",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；与官方命名的对应依赖水系拓扑，不是法定堤线"
        },
        {
          "title": "OSM河道位置参照 70809614",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809614",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；与官方命名的对应依赖水系拓扑，不是法定堤线"
        },
        {
          "title": "OSM河道位置参照 70809929",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809929",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；与官方命名的对应依赖水系拓扑，不是法定堤线"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省益阳市南县浪拔湖镇"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省益阳市南县西北部，距县城约10km，浪拔湖镇一带，藕池河中支环抱，东施家渡河、西陈家岭河。",
        "reasoning": "由浪拔湖行政位置圆圈改为藕池中支两汊间的长条河网围合候选，主体移至陈家岭河—施家渡河之间。南北端采用两汊汇分点代理，仍需实际外堤轴核对。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：南鼎垸。国家级蓄滞洪区规划表面积 46.7 km²：原表只写面积，未明称蓄洪面积",
            "references": [
              {
                "label": "湖南省主体功能区规划（2012）附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "南县育乐垸涝区治理工程（二期）环评（2024）",
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202412/2024121316291598700.pdf"
              },
              {
                "label": "安化垸堤防环评（2010）",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html"
              },
              {
                "label": "益阳村级行政地名",
                "url": "https://www.yiyang.gov.cn/yiyang/2/134/38756/38759/content_1902266.html"
              },
              {
                "label": "OSM河道位置参照 70809512",
                "url": "https://www.openstreetmap.org/way/70809512"
              },
              {
                "label": "OSM河道位置参照 70809614",
                "url": "https://www.openstreetmap.org/way/70809614"
              },
              {
                "label": "OSM河道位置参照 70809929",
                "url": "https://www.openstreetmap.org/way/70809929"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：藕池河中支东侧分汊施家渡河，河外为育乐大垸。（资料记载）；西：藕池河中支西侧分汊陈家岭河，河外安化垸方向。（资料记载）；北：北与湖北省谦吉垸接壤；具体河槽、堤轴未知。（方位参照）；南：正南独立界线及转折点未知，不能从四面环水推定某沟渠为边界。（尚未核实）；其他：西南隔河与安化、和康相望。（资料记载）",
            "references": [
              {
                "label": "湖南省主体功能区规划（2012）附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "南县育乐垸涝区治理工程（二期）环评（2024）",
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202412/2024121316291598700.pdf"
              },
              {
                "label": "安化垸堤防环评（2010）",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html"
              },
              {
                "label": "益阳村级行政地名",
                "url": "https://www.yiyang.gov.cn/yiyang/2/134/38756/38759/content_1902266.html"
              },
              {
                "label": "OSM河道位置参照 70809512",
                "url": "https://www.openstreetmap.org/way/70809512"
              },
              {
                "label": "OSM河道位置参照 70809614",
                "url": "https://www.openstreetmap.org/way/70809614"
              },
              {
                "label": "OSM河道位置参照 70809929",
                "url": "https://www.openstreetmap.org/way/70809929"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "由浪拔湖行政位置圆圈改为藕池中支两汊间的长条河网围合候选，主体移至陈家岭河—施家渡河之间。南北端采用两汊汇分点代理，仍需实际外堤轴核对。；北界具体堤轴；正南界及转折点；完整左右岸属性；南顶与南鼎的官方显式同名说明；候选为资料推定范围，非法定边界，未经实地核验。；使用河道中心线作为外围堤线的位置代理；河心、岸线、堤顶不是同一条线。",
            "references": []
          }
        ]
      },
      "aliases": [
        "南鼎垸"
      ],
      "chatgptExtractionPath": "automation/output/hunan-chatgpt-2026-09-13/publications/2026-09-13T04-25-40-321Z-长江-09/extraction.json"
    },
    "和康垸": {
      "id": "长江-10",
      "name": "和康垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T04:25:42.110Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 23,
        "contextAnchors": [
          {
            "id": "0",
            "name": "南县麻河口镇财政所",
            "location": "112.27402262,29.294744",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "南县麻河口镇农业综合服务中心",
            "location": "112.26919625,29.29806426",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "南县麻河口镇人民代表大会",
            "location": "112.27324819,29.29547096",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "南县麻河口镇上洲村村委会",
            "location": "112.27955002,29.33327222",
            "anchorKind": "locality"
          },
          {
            "id": "4",
            "name": "南县麻河口镇应急救援队",
            "location": "112.27397862,29.29499214",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "南县麻河口镇官正垸村村民委员会",
            "location": "112.3213336,29.31649826",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "南县麻河口镇经济发展办公室",
            "location": "112.2744489,29.29468726",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "和康垸1号特大桥",
            "location": "112.32292954,29.38506478",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南省主体功能区规划（2012）附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "南县育乐垸涝区治理工程（二期）环评（2024）",
          "publisher": "",
          "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202412/2024121316291598700.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "安化垸堤防环评（2010）",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "益阳公共资源交易2023实施方案",
          "publisher": "",
          "url": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202312/J1081/952b025f-7ca9-437a-aa4a-517e976b74ea/5f71b2d0-f77a-4aa3-968b-bb2af5dcc451.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "总集面积文本存在OCR风险"
        },
        {
          "title": "益阳村级行政地名",
          "publisher": "",
          "url": "https://www.yiyang.gov.cn/yiyang/2/134/38756/38759/content_1902266.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "仅定位参照"
        },
        {
          "title": "OSM河道位置参照 70809614",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809614",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；与官方命名的对应依赖水系拓扑，不是法定堤线"
        },
        {
          "title": "OSM河道位置参照 70809710",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809710",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；与官方命名的对应依赖水系拓扑，不是法定堤线"
        },
        {
          "title": "OSM河道位置参照 70809929",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809929",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；与官方命名的对应依赖水系拓扑，不是法定堤线"
        },
        {
          "title": "DataV公开县界参考（仅作为未实测分界段连接代理）",
          "publisher": "",
          "url": "https://geo.datav.aliyun.com/areas_v3/bound/430900_full.json",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "GCJ-02转WGS84；不是蓄滞洪区范围，未取得堤轴时的粗略连接假设"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省益阳市南县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省益阳市南县西部，距县城约10km，麻河口镇一带，藕池河西支和中支之间，北接安化垸，三面环水。",
        "reasoning": "由麻河口行政点周边椭圆改为藕池河西支、中支之间且位于安化以南的河网围合候选。北界县界仅代理未知隔堤；保留三面环水与北接安化拓扑。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "国家级蓄滞洪区规划表面积 97 km²：原表只写面积；总集面积（原文术语，OCR待核） 96.82 km²：不得自行改为集雨面积；耕地面积 51.933 km²：由7.79万亩换算，非蓄洪范围",
            "references": [
              {
                "label": "湖南省主体功能区规划（2012）附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "南县育乐垸涝区治理工程（二期）环评（2024）",
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202412/2024121316291598700.pdf"
              },
              {
                "label": "安化垸堤防环评（2010）",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html"
              },
              {
                "label": "益阳公共资源交易2023实施方案",
                "url": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202312/J1081/952b025f-7ca9-437a-aa4a-517e976b74ea/5f71b2d0-f77a-4aa3-968b-bb2af5dcc451.pdf"
              },
              {
                "label": "益阳村级行政地名",
                "url": "https://www.yiyang.gov.cn/yiyang/2/134/38756/38759/content_1902266.html"
              },
              {
                "label": "OSM河道位置参照 70809614",
                "url": "https://www.openstreetmap.org/way/70809614"
              },
              {
                "label": "OSM河道位置参照 70809710",
                "url": "https://www.openstreetmap.org/way/70809710"
              },
              {
                "label": "OSM河道位置参照 70809929",
                "url": "https://www.openstreetmap.org/way/70809929"
              },
              {
                "label": "DataV公开县界参考（仅作为未实测分界段连接代理）",
                "url": "https://geo.datav.aliyun.com/areas_v3/bound/430900_full.json"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：藕池河中支体系，东南临育乐垸；具体支汊及东南转折点未知。（资料记载）；西：藕池河西支体系，隔水为南汉垸、安乡安宏垸；二者切换桩号未知。（资料记载）；北：安化、和康隔堤；2010原文隔堤在和康范围内，2024反向记北连安化。（资料记载）；南：正南具体边界和转折点未知。（尚未核实）；其他：一线大堤46.403km、北门堤6.91km是工程长度参照，不足以直接恢复堤轴。（方位参照）",
            "references": [
              {
                "label": "湖南省主体功能区规划（2012）附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "南县育乐垸涝区治理工程（二期）环评（2024）",
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202412/2024121316291598700.pdf"
              },
              {
                "label": "安化垸堤防环评（2010）",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326469.html"
              },
              {
                "label": "益阳公共资源交易2023实施方案",
                "url": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202312/J1081/952b025f-7ca9-437a-aa4a-517e976b74ea/5f71b2d0-f77a-4aa3-968b-bb2af5dcc451.pdf"
              },
              {
                "label": "益阳村级行政地名",
                "url": "https://www.yiyang.gov.cn/yiyang/2/134/38756/38759/content_1902266.html"
              },
              {
                "label": "OSM河道位置参照 70809614",
                "url": "https://www.openstreetmap.org/way/70809614"
              },
              {
                "label": "OSM河道位置参照 70809710",
                "url": "https://www.openstreetmap.org/way/70809710"
              },
              {
                "label": "OSM河道位置参照 70809929",
                "url": "https://www.openstreetmap.org/way/70809929"
              },
              {
                "label": "DataV公开县界参考（仅作为未实测分界段连接代理）",
                "url": "https://geo.datav.aliyun.com/areas_v3/bound/430900_full.json"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "由麻河口行政点周边椭圆改为藕池河西支、中支之间且位于安化以南的河网围合候选。北界县界仅代理未知隔堤；保留三面环水与北接安化拓扑。；正南界；西侧南汉/安宏切换点；东南转折线；法定左右岸；总集面积术语需核对PDF原图；行政县界只在缺测的南北连接段充当低精度代理；未证明县界逐点等于栗林哑河或隔堤，不可用于工程定位。；相接候选的县界代理来自不同市级概化数据，存在小面积缝隙/交叠（安昌—南汉约0.009km²、安化—和康约0.094km²）；这是未实测分界的残余误差，不能据此认定两垸重叠。；候选为资料推定范围，非法定边界，未经实地核验。；使用河道中心线作为外围堤线的位置代理；河心、岸线、堤顶不是同一条线。",
            "references": []
          }
        ]
      },
      "aliases": [],
      "chatgptExtractionPath": "automation/output/hunan-chatgpt-2026-09-13/publications/2026-09-13T04-25-42-110Z-长江-10/extraction.json"
    },
    "南汉垸": {
      "id": "长江-11",
      "name": "南汉垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T04:25:43.660Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 65,
        "contextAnchors": [
          {
            "id": "0",
            "name": "澧水",
            "location": "112.27689706,29.06895869",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "澧水",
            "location": "112.26295717,29.1025488",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "澧水",
            "location": "112.22430448,29.27443737",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "北河口社区居委会",
            "location": "112.31221581,29.37443035",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "麻河口镇北河口社区退役军人服务站",
            "location": "112.31194033,29.37485913",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "麻河口派出所",
            "location": "112.27866011,29.29517989",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "麻河口镇委",
            "location": "112.27434183,29.29471521",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "麻河口政务服务中心",
            "location": "112.27539663,29.29569863",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "南县公安局交通警察大队麻河口中队",
            "location": "112.2736174,29.29523305",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "益阳市2026湖区堤垸基本情况表",
          "publisher": "",
          "url": "https://www.yiyang.gov.cn/yysw/uploadfiles/202603/2026030315342017687.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南主体功能区规划附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "南县育乐垸涝区治理（二期）环评（2024）",
          "publisher": "",
          "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202412/2024121316291598700.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "须使用单垸段落，不能把四垸项目合计套给南汉"
        },
        {
          "title": "南汉堤防加固环评公告（2010）",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326121.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "益阳市水利局水位控制站表（2025）",
          "publisher": "",
          "url": "https://www.yiyang.gov.cn/yysw/6088/6102/content_2077609.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "南汉堤段桩号工程资料（2025）",
          "publisher": "",
          "url": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202509/PDF/dc7e3e5e-4384-47b1-ae99-67601461ce7e/b685266f-52ab-4562-9523-af309a07af6f.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "机器文本有厂窖/垸OCR风险"
        },
        {
          "title": "乡镇水源保护区武圣宫资料",
          "publisher": "",
          "url": "https://www.hnhs.gov.cn/uploadfiles/202512/2025122310462114409.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "仅佐证武圣宫局部岸别"
        },
        {
          "title": "OSM河道位置参照 49402645",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/49402645",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 49402647",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/49402647",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 70809624",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809624",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 70809710",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70809710",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 164927644",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/164927644",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 652425242",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/652425242",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "DataV公开县界参考（仅约束未实测的分区连接段）",
          "publisher": "",
          "url": "https://geo.datav.aliyun.com/areas_v3/bound/430900_full.json",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "GCJ-02转WGS84；不是蓄滞洪区图；与实际隔堤/分区线是否重合待核"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省益阳市南县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省益阳市南县西南部，厂窖镇、武圣宫镇一带，藕池河西支与淞澧洪道之间向目平湖延伸。麻河口镇属和康垸，不属南汉。",
        "reasoning": "撤销麻河口周边旧椭圆，改在藕池西支以西、松澧洪道以东的厂窖—武圣宫方向围合，延伸至南端河湖尾闾。北与安昌共圈分界暂用县界代理。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "保护/蓄洪面积（蓄洪垸行） 97.2 km²：原值14.58万亩换算；保留混合表头，不擅自变为单列保护面积；国家级蓄滞洪区规划表面积 96.6 km²：与2026差0.60km²，原因未明，分别保留",
            "references": [
              {
                "label": "益阳市2026湖区堤垸基本情况表",
                "url": "https://www.yiyang.gov.cn/yysw/uploadfiles/202603/2026030315342017687.pdf"
              },
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "南县育乐垸涝区治理（二期）环评（2024）",
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202412/2024121316291598700.pdf"
              },
              {
                "label": "南汉堤防加固环评公告（2010）",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326121.html"
              },
              {
                "label": "益阳市水利局水位控制站表（2025）",
                "url": "https://www.yiyang.gov.cn/yysw/6088/6102/content_2077609.html"
              },
              {
                "label": "南汉堤段桩号工程资料（2025）",
                "url": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202509/PDF/dc7e3e5e-4384-47b1-ae99-67601461ce7e/b685266f-52ab-4562-9523-af309a07af6f.pdf"
              },
              {
                "label": "乡镇水源保护区武圣宫资料",
                "url": "https://www.hnhs.gov.cn/uploadfiles/202512/2025122310462114409.pdf"
              },
              {
                "label": "OSM河道位置参照 49402645",
                "url": "https://www.openstreetmap.org/way/49402645"
              },
              {
                "label": "OSM河道位置参照 49402647",
                "url": "https://www.openstreetmap.org/way/49402647"
              },
              {
                "label": "OSM河道位置参照 70809624",
                "url": "https://www.openstreetmap.org/way/70809624"
              },
              {
                "label": "OSM河道位置参照 70809710",
                "url": "https://www.openstreetmap.org/way/70809710"
              },
              {
                "label": "OSM河道位置参照 164927644",
                "url": "https://www.openstreetmap.org/way/164927644"
              },
              {
                "label": "OSM河道位置参照 652425242",
                "url": "https://www.openstreetmap.org/way/652425242"
              },
              {
                "label": "DataV公开县界参考（仅约束未实测的分区连接段）",
                "url": "https://geo.datav.aliyun.com/areas_v3/bound/430900_full.json"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：藕池河西支，隔河为和康垸、育乐垸；厂窖水位站佐证。全线法定岸别未知。（资料记载）；西：淞澧洪道，隔水安乡安保大垸；武圣宫段资料指左岸防洪堤，不能外推全线。（资料记载）；北：北接安昌垸，二者共为一个防洪大圈，内部接合线完整堤名、村界和桩号未知。（方位参照）；南：南临目平湖；藕池西支侧与淞澧洪道侧的具名闭合堤线和拐点未知。（资料记载）；其他：厂窖东线35+701—54+601、西线10+511—35+701；武圣宫东线54+601—67+360、西线0—10+511，合计67.36km。龚家港、太白洲属于间堤，不作为外轮廓。（方位参照）",
            "references": [
              {
                "label": "益阳市2026湖区堤垸基本情况表",
                "url": "https://www.yiyang.gov.cn/yysw/uploadfiles/202603/2026030315342017687.pdf"
              },
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "南县育乐垸涝区治理（二期）环评（2024）",
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202412/2024121316291598700.pdf"
              },
              {
                "label": "南汉堤防加固环评公告（2010）",
                "url": "https://slt.hunan.gov.cn/xxgk/tzgg/201010/t20101021_3326121.html"
              },
              {
                "label": "益阳市水利局水位控制站表（2025）",
                "url": "https://www.yiyang.gov.cn/yysw/6088/6102/content_2077609.html"
              },
              {
                "label": "南汉堤段桩号工程资料（2025）",
                "url": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202509/PDF/dc7e3e5e-4384-47b1-ae99-67601461ce7e/b685266f-52ab-4562-9523-af309a07af6f.pdf"
              },
              {
                "label": "乡镇水源保护区武圣宫资料",
                "url": "https://www.hnhs.gov.cn/uploadfiles/202512/2025122310462114409.pdf"
              },
              {
                "label": "OSM河道位置参照 49402645",
                "url": "https://www.openstreetmap.org/way/49402645"
              },
              {
                "label": "OSM河道位置参照 49402647",
                "url": "https://www.openstreetmap.org/way/49402647"
              },
              {
                "label": "OSM河道位置参照 70809624",
                "url": "https://www.openstreetmap.org/way/70809624"
              },
              {
                "label": "OSM河道位置参照 70809710",
                "url": "https://www.openstreetmap.org/way/70809710"
              },
              {
                "label": "OSM河道位置参照 164927644",
                "url": "https://www.openstreetmap.org/way/164927644"
              },
              {
                "label": "OSM河道位置参照 652425242",
                "url": "https://www.openstreetmap.org/way/652425242"
              },
              {
                "label": "DataV公开县界参考（仅约束未实测的分区连接段）",
                "url": "https://geo.datav.aliyun.com/areas_v3/bound/430900_full.json"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "撤销麻河口周边旧椭圆，改在藕池西支以西、松澧洪道以东的厂窖—武圣宫方向围合，延伸至南端河湖尾闾。北与安昌共圈分界暂用县界代理。；北侧与安昌内部接合线；南侧临目平湖准确闭合堤线；藕池西支官方岸别；独立国土/集雨面积；2026与2012面积差异原因；安昌与南汉同属防洪大圈；二者之间现用公开县界连接代理，不代表已查明防洪分区隔堤。北端荆江方向也只到县界代理，需总平面图。；相接候选的县界代理来自不同市级概化数据，存在小面积缝隙/交叠（安昌—南汉约0.009km²、安化—和康约0.094km²）；这是未实测分界的残余误差，不能据此认定两垸重叠。；候选为资料推定范围，非法定边界，未经实地核验。；使用河道中心线作为外围堤线的位置代理；河心、岸线、堤顶不是同一条线。",
            "references": []
          }
        ]
      },
      "aliases": [],
      "chatgptExtractionPath": "automation/output/hunan-chatgpt-2026-09-13/publications/2026-09-13T04-25-43-660Z-长江-11/extraction.json"
    },
    "民主垸": {
      "id": "长江-12",
      "name": "民主垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 4,
        "contextAnchors": [
          {
            "id": "0",
            "name": "沙头镇民主垸中心水利管理站",
            "location": "112.46735373,28.64833399",
            "anchorKind": "engineering"
          },
          {
            "id": "1",
            "name": "民主垸乡贤研究会",
            "location": "112.55088778,28.72653816",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "资阳区2025年度水利工程堤防清单",
          "url": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202509/PDF/b8f425f0-c348-4f2b-818a-180695bf2b57/05be09d4-a724-4307-91e8-4dd12ff487e1.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "区级堤防清单和乡镇资料明确3个乡镇及张家塞—沙头堤段"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“民主垸”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖南省洞庭湖蓄洪区安全与建设管理办法",
          "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府规章逐一列出洞庭湖区24处蓄洪区，交叉确认这些名称均属于湖南洞庭湖区。"
        },
        {
          "title": "湖南省主体功能区规划",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划表列洞庭湖区蓄洪垸名称、面积与蓄洪容积，用于核对区名和规模。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省益阳市资阳区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "益阳市资阳区沙头镇、茈湖口镇、张家塞乡，重点锚点为沙头镇中心水利管理站",
        "reasoning": "独立读取民主垸证据包；先锁定湖南省益阳市资阳区及“益阳市资阳区沙头镇、茈湖口镇、张家塞乡，重点锚点为沙头镇中心水利管理站”，再以本区地图锚点定中心与方向，用本区213.5km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "区级堤防清单和乡镇资料明确3个乡镇及张家塞—沙头堤段；另有3条官方资料交叉核对",
            "references": [
              {
                "url": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202509/PDF/b8f425f0-c348-4f2b-818a-180695bf2b57/05be09d4-a724-4307-91e8-4dd12ff487e1.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
                "label": "引用 3"
              },
              {
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖南省益阳市资阳区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：益阳市资阳区沙头镇、茈湖口镇、张家塞乡，重点锚点为沙头镇中心水利管理站。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "共双茶": {
      "id": "长江-13",
      "name": "共双茶",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 2,
        "contextAnchors": [
          {
            "id": "0",
            "name": "沅江市共双茶垸分洪闸管理所",
            "location": "112.68285405,28.90128965",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "益阳市水务局：共双茶垸分洪闸工程位置",
          "url": "https://www.yiyang.gov.cn/yysw/6077/6176/content_1353495.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "工程招标资料列出4个乡镇场，市水务局明确分洪闸所在村"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“共双茶”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖南省洞庭湖蓄洪区安全与建设管理办法",
          "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府规章逐一列出洞庭湖区24处蓄洪区，交叉确认这些名称均属于湖南洞庭湖区。"
        },
        {
          "title": "湖南省主体功能区规划",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划表列洞庭湖区蓄洪垸名称、面积与蓄洪容积，用于核对区名和规模。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省益阳市沅江市"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "沅江市北部共华镇、泗湖山镇、茶盘洲镇和南洞庭芦苇场，分洪闸位于泗湖山镇石子埂村",
        "reasoning": "独立读取共双茶证据包；先锁定湖南省益阳市沅江市及“沅江市北部共华镇、泗湖山镇、茶盘洲镇和南洞庭芦苇场，分洪闸位于泗湖山镇石子埂村”，再以本区地图锚点定中心与方向，用本区293km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "工程招标资料列出4个乡镇场，市水务局明确分洪闸所在村；另有3条官方资料交叉核对",
            "references": [
              {
                "url": "https://www.yiyang.gov.cn/yysw/6077/6176/content_1353495.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
                "label": "引用 3"
              },
              {
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖南省益阳市沅江市。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：沅江市北部共华镇、泗湖山镇、茶盘洲镇和南洞庭芦苇场，分洪闸位于泗湖山镇石子埂村。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "城西垸": {
      "id": "长江-14",
      "name": "城西垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T04:25:27.370Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 25,
        "contextAnchors": [
          {
            "id": "0",
            "name": "鹤龙湖镇政府",
            "location": "112.85324416,28.66729991",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "湘阴县鹤龙湖镇委",
            "location": "112.85223385,28.66731068",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "鹤龙湖镇保合社区居民委员会",
            "location": "112.86716417,28.68080648",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "湘阴县鹤龙湖镇财政所",
            "location": "112.85105186,28.66741283",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "湘阴县鹤龙湖镇双龙社区居民委员会",
            "location": "112.77770339,28.67569328",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "湘阴县鹤龙湖镇不动产登记所",
            "location": "112.8502173,28.66755539",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "湘阴县鹤龙湖镇龙江社区居民委员会",
            "location": "112.78299846,28.67510722",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南主体功能区规划附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南水利厅城西垸堤防环评（2010）",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/slt/xxgk/tzgg/201010/t20101021_3325965.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "岳阳水利局濠河口工程许可（2025）",
          "publisher": "",
          "url": "https://swj.yueyang.gov.cn/6855/6879/65259/65282/65284/content_2354989.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴防汛预案（2015）",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62789/content_983089.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴河湖概况",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/yyjc/jc_xyx/125/453/content_10425.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "内湖集雨不可直接升级全垸面积"
        },
        {
          "title": "岳阳楼区公开环评（2018）",
          "publisher": "",
          "url": "https://www.yylq.gov.cn/uploadfiles/201808/20180808163739327.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OSM河道位置参照 148207766",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/148207766",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 1059745614",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/1059745614",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市湘阴县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省岳阳市湘阴县鹤龙湖镇一带，湘江东支西侧、西支东侧，北接南洞庭湖横岭湖，四面环水。南部濠河口分汊、北部斗米咀两支汇合是水系定位参照。",
        "reasoning": "由鹤龙湖镇驻地周边椭圆改为湘江东、西两汊之间的河网围合范围，西北侧扩展至资料所指水系范围。北端横岭湖方向采用河汊连接假设，未恢复一线堤顶。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "国家级蓄滞洪区规划表面积 106 km²：；环评汇总蓄滞洪区面积 106 km²：；全垸保护面积 106 km²：2026公开行政许可，原文明确保护面积",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南水利厅城西垸堤防环评（2010）",
                "url": "https://slt.hunan.gov.cn/slt/xxgk/tzgg/201010/t20101021_3325965.html"
              },
              {
                "label": "岳阳水利局濠河口工程许可（2025）",
                "url": "https://swj.yueyang.gov.cn/6855/6879/65259/65282/65284/content_2354989.html"
              },
              {
                "label": "湘阴防汛预案（2015）",
                "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62789/content_983089.html"
              },
              {
                "label": "湘阴河湖概况",
                "url": "https://www.xiangyin.gov.cn/yyjc/jc_xyx/125/453/content_10425.html"
              },
              {
                "label": "岳阳楼区公开环评（2018）",
                "url": "https://www.yylq.gov.cn/uploadfiles/201808/20180808163739327.pdf"
              },
              {
                "label": "OSM河道位置参照 148207766",
                "url": "https://www.openstreetmap.org/way/148207766"
              },
              {
                "label": "OSM河道位置参照 1059745614",
                "url": "https://www.openstreetmap.org/way/1059745614"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：湘江东支及城西垸一线防洪堤，沿东、东南侧。（资料记载）；西：湘江西支及一线防洪堤，沿西、西南侧。（资料记载）；北：南洞庭湖横岭湖水域侧湖堤，斗米咀为两支汇合参照。（资料记载）；南：濠河口（也作浩河口）为湘江东、西两支分汊的南部转折定位，法定堤轴节点未知。（方位参照）；其他：连续水系：濠河口→湘江东支沿东南侧北行→斗米咀→横岭湖沿北侧→湘江西支沿西、南西侧返回濠河口。一线堤51.757km，节点仅辅助校准。（资料记载）",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南水利厅城西垸堤防环评（2010）",
                "url": "https://slt.hunan.gov.cn/slt/xxgk/tzgg/201010/t20101021_3325965.html"
              },
              {
                "label": "岳阳水利局濠河口工程许可（2025）",
                "url": "https://swj.yueyang.gov.cn/6855/6879/65259/65282/65284/content_2354989.html"
              },
              {
                "label": "湘阴防汛预案（2015）",
                "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62789/content_983089.html"
              },
              {
                "label": "湘阴河湖概况",
                "url": "https://www.xiangyin.gov.cn/yyjc/jc_xyx/125/453/content_10425.html"
              },
              {
                "label": "岳阳楼区公开环评（2018）",
                "url": "https://www.yylq.gov.cn/uploadfiles/201808/20180808163739327.pdf"
              },
              {
                "label": "OSM河道位置参照 148207766",
                "url": "https://www.openstreetmap.org/way/148207766"
              },
              {
                "label": "OSM河道位置参照 1059745614",
                "url": "https://www.openstreetmap.org/way/1059745614"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "由鹤龙湖镇驻地周边椭圆改为湘江东、西两汊之间的河网围合范围，西北侧扩展至资料所指水系范围。北端横岭湖方向采用河汊连接假设，未恢复一线堤顶。；法定polygon及逐桩坐标；河岸线与堤轴线中采用何线为正式边界；全垸集雨面积（不能只因65.7+40.3=106而认定）；城西新候选与本轮仍保留旧图的北湖垸交叠约1.304 km²；北湖旧圈已发现偏南定位线索，但东南外围尚不能闭合。这是新候选对未修订旧基线的冲突，未通过裁剪任一圈消除，须结合北湖后续边界资料审阅。；候选为资料推定范围，非法定边界，未经实地核验。；使用河道中心线作为外围堤线的位置代理；河心、岸线、堤顶不是同一条线。",
            "references": []
          }
        ]
      },
      "aliases": [],
      "chatgptExtractionPath": "automation/output/hunan-chatgpt-2026-09-13/publications/2026-09-13T04-25-27-370Z-长江-14/extraction.json"
    },
    "屈原农场": {
      "id": "长江-15",
      "name": "屈原农场",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "屈原农场七分场",
            "location": "112.98610759,28.83469077",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "屈原农场三分场",
            "location": "112.92511406,28.97081354",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "屈原农场四分场",
            "location": "112.94446529,28.91155017",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "屈原农场八分场",
            "location": "112.89455268,28.89019313",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "屈原农场五分场",
            "location": "112.97661669,28.88363139",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "岳阳市屈原管理区志：建置区划",
          "url": "https://www.yysqw.gov.cn/43332/43334/54555/content_1448692.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "地方志说明原屈原农场演变为屈原管理区，并记载其为洞庭湖区蓄洪垸之一；位置可确认到现屈原管理区。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“屈原农场”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖南省洞庭湖蓄洪区安全与建设管理办法",
          "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府规章逐一列出洞庭湖区24处蓄洪区，交叉确认这些名称均属于湖南洞庭湖区。"
        },
        {
          "title": "湖南省主体功能区规划",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划表列洞庭湖区蓄洪垸名称、面积与蓄洪容积，用于核对区名和规模。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市屈原管理区",
        "湖南省岳阳市汨罗市"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "岳阳市屈原管理区，以营田镇为管理与聚落中心，覆盖原屈原农场各分场",
        "reasoning": "独立读取屈原农场证据包；先锁定湖南省岳阳市屈原管理区、湖南省岳阳市汨罗市及“岳阳市屈原管理区，以营田镇为管理与聚落中心，覆盖原屈原农场各分场”，再以本区地图锚点定中心与方向，用本区226.7km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "地方志说明原屈原农场演变为屈原管理区，并记载其为洞庭湖区蓄洪垸之一，位置可确认到现屈原管理区；另有3条官方资料交叉核对",
            "references": [
              {
                "url": "https://www.yysqw.gov.cn/43332/43334/54555/content_1448692.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
                "label": "引用 3"
              },
              {
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖南省岳阳市屈原管理区、湖南省岳阳市汨罗市。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：岳阳市屈原管理区，以营田镇为管理与聚落中心，覆盖原屈原农场各分场。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "义和垸": {
      "id": "长江-16",
      "name": "义和垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T08:28:43.390Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 51,
        "contextAnchors": [
          {
            "id": "0",
            "name": "湘阴县静河镇政府",
            "location": "112.83666173,28.59516372",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "静河镇司法所",
            "location": "112.82168474,28.60323879",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "静河镇退役军人服务站",
            "location": "112.83672163,28.59536671",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "静河镇卫生计生监督管理所",
            "location": "112.86501766,28.60062186",
            "anchorKind": "engineering"
          },
          {
            "id": "4",
            "name": "静河镇计划生育协会",
            "location": "112.86500367,28.60056586",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "麦子村退役军人服务站",
            "location": "112.84195703,28.60715973",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "红旗村退役军人服务站",
            "location": "112.82718136,28.6224314",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "金兴村退役军人服务站",
            "location": "112.8292158,28.587332",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南主体功能区规划附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "岳阳楼区环评蓄滞洪区汇总（2018）",
          "publisher": "",
          "url": "https://www.yylq.gov.cn/uploadfiles/201808/20180808163739327.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴义合金鸡垸哑湖资料",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/yyjc/jc_xyx/125/453/content_10425.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴静河工程批复（2025）",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/31185/32018/32020/32030/66901/content_2262821.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南水利厅义合金鸡旧环评索引（2010）",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/slt/xxgk/tzgg/201010/t20101021_3325581.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原页404，ChatGPT依据搜索索引；不可视为已成功读取原文"
        },
        {
          "title": "湘阴防汛预案",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62789/content_983089.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴2025现行三垸名称说明",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/31203/31208/content_2311358.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴水利划界方案表2.4，PDF22页/印刷18页",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/uploadfiles/202109/20210916173155747.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "直接列义合东湖湘江东支堤和静河义合金鸡一线堤，未附完整图册"
        },
        {
          "title": "湘阴2020防汛预案附山堤段",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62790/content_1675611.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴2019河湖划界公示",
          "publisher": "",
          "url": "https://xiangyin.gov.cn/31176/31954/content_1632207.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "Image16白泥湖及Image18哑湖图为内湖，排除为外缘"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市湘阴县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省岳阳市湘阴县静河镇一带，湘江尾闾东岸。旧水利厅环评索引称湘水尾闾右岸，原页404；县资料记哑湖经三汊河低排闸连接湘水东支。",
        "reasoning": "旧静河地名椭圆切入湘江且忽略东北洋沙湖；新候选沿实际湘江折转向洋沙湖西侧展开，东南与南侧全部推测，不用内部哑湖闭合整个垸。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：义合、义合垸、义合金鸡垸、义和金鸡垸。国家级蓄滞洪区规划表面积 19.9 km²：原名义合；环评汇总蓄滞洪区面积 19.86 km²：原名义合蓄滞洪区；差异原因未明",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "岳阳楼区环评蓄滞洪区汇总（2018）",
                "url": "https://www.yylq.gov.cn/uploadfiles/201808/20180808163739327.pdf"
              },
              {
                "label": "湘阴义合金鸡垸哑湖资料",
                "url": "https://www.xiangyin.gov.cn/yyjc/jc_xyx/125/453/content_10425.html"
              },
              {
                "label": "湘阴静河工程批复（2025）",
                "url": "https://www.xiangyin.gov.cn/31185/32018/32020/32030/66901/content_2262821.html"
              },
              {
                "label": "湖南水利厅义合金鸡旧环评索引（2010）",
                "url": "https://slt.hunan.gov.cn/slt/xxgk/tzgg/201010/t20101021_3325581.html"
              },
              {
                "label": "湘阴防汛预案",
                "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62789/content_983089.html"
              },
              {
                "label": "湘阴2025现行三垸名称说明",
                "url": "https://www.xiangyin.gov.cn/31203/31208/content_2311358.html"
              },
              {
                "label": "湘阴水利划界方案表2.4，PDF22页/印刷18页",
                "url": "https://www.xiangyin.gov.cn/uploadfiles/202109/20210916173155747.pdf"
              },
              {
                "label": "湘阴2020防汛预案附山堤段",
                "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62790/content_1675611.html"
              },
              {
                "label": "湘阴2019河湖划界公示",
                "url": "https://xiangyin.gov.cn/31176/31954/content_1632207.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "西：正式划界方案表2.4（PDF22页/印刷18页）列“义合、东湖垸湘江东支堤防”及静河乡段“义合金鸡垸一线防洪大堤”；可补足原2010失效网页的工程佐证。（资料记载）；北：隔湘江与城西垸相望，实际水系边缘仍需堤轴复核。（资料记载）；东：东、东南没有足以连续闭合的公开堤线描述，未知。（尚未核实）；南：明确南部闭合节点未知。（尚未核实）；其他：三汊河低排闸为垸内哑湖与湘水东支接口；附山堤段为当冲当风浪外围堤。两者正式桩号先后未知，上堵坝/下堵坝及六村仍是内湖岸线，不可拼外围东南界。（方位参照）",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "岳阳楼区环评蓄滞洪区汇总（2018）",
                "url": "https://www.yylq.gov.cn/uploadfiles/201808/20180808163739327.pdf"
              },
              {
                "label": "湘阴义合金鸡垸哑湖资料",
                "url": "https://www.xiangyin.gov.cn/yyjc/jc_xyx/125/453/content_10425.html"
              },
              {
                "label": "湘阴静河工程批复（2025）",
                "url": "https://www.xiangyin.gov.cn/31185/32018/32020/32030/66901/content_2262821.html"
              },
              {
                "label": "湖南水利厅义合金鸡旧环评索引（2010）",
                "url": "https://slt.hunan.gov.cn/slt/xxgk/tzgg/201010/t20101021_3325581.html"
              },
              {
                "label": "湘阴防汛预案",
                "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62789/content_983089.html"
              },
              {
                "label": "湘阴2025现行三垸名称说明",
                "url": "https://www.xiangyin.gov.cn/31203/31208/content_2311358.html"
              },
              {
                "label": "湘阴水利划界方案表2.4，PDF22页/印刷18页",
                "url": "https://www.xiangyin.gov.cn/uploadfiles/202109/20210916173155747.pdf"
              },
              {
                "label": "湘阴2020防汛预案附山堤段",
                "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62790/content_1675611.html"
              },
              {
                "label": "湘阴2019河湖划界公示",
                "url": "https://xiangyin.gov.cn/31176/31954/content_1632207.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧静河地名椭圆切入湘江且忽略东北洋沙湖；新候选沿实际湘江折转向洋沙湖西侧展开，东南与南侧全部推测，不用内部哑湖闭合整个垸。；东、东南闭合线；南界节点；义和与义合金鸡等名称范围显式官方对应文件；旧环评原文失效，西侧对岸垸名标点不能核实；法定边界矢量；附山堤段与三汊河闸正式桩号顺序；公开1:2000图册未提供完整外围线；失败进度中的YHK道路定位缺最终来源，不作为几何约束；哑湖六村节点为内部体系，不能当外围折点；新答实画建议只有实际定位后方可采用；东、东南、南部完整堤线及三汊河闸接口未定位，陆向折点推测。；哑湖为内部湖，不作为外围；洋沙湖只提供东北位置参照，不把其全部湖岸等同垸界。；义和/义合金鸡范围正式完整对应仍有不确定性，19.9不用于面积拟合。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "义合",
        "义合垸",
        "义合金鸡垸",
        "义和金鸡垸"
      ],
      "chatgptExtractionPath": "automation/output/hunan-revisit-chatgpt-2026-09-13/publications/2026-09-13T08-28-43-390Z-长江-16/extraction.json"
    },
    "北湖垸": {
      "id": "长江-17",
      "name": "北湖垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T08:28:35.907Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 9,
        "contextAnchors": [
          {
            "id": "0",
            "name": "湘阴县行政位置代理点",
            "location": "112.90924542,28.69012365",
            "anchorKind": "location-clue"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南主体功能区规划附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南水利厅白泥湖垸灌溉资料（2018）",
          "publisher": "",
          "url": "https://slt.hunan.gov.cn/ztzl/qmtxhzz/201812/t20181217_5239827.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴水利工程管理保护范围划界方案（2021）",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/uploadfiles/202109/20210916173155747.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴河湖概况",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/yyjc/jc_xyx/125/453/content_10425.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴防汛应急预案（2020）",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62790/content_1675611.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "岳阳楼区公开环评（2018）",
          "publisher": "",
          "url": "https://www.yylq.gov.cn/uploadfiles/201808/20180808163739327.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湘阴2025三垸分类说明",
          "publisher": "",
          "url": "https://www.xiangyin.gov.cn/31203/31208/content_2311358.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南交通运输厅2025鸡啼湖堤段答复",
          "publisher": "",
          "url": "https://jtt.hunan.gov.cn/jjzdgz/jytabl/zxta/202505/t20250530_33687864.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "确认白泥湖一线外围堤段"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市湘阴县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省岳阳市湘阴县石塘镇，湘江东支东岸、横岭湖南缘一带。南接湘阴县城，东部低岗丘陵，为湖汊型伴山堤垸。",
        "reasoning": "旧圈只有湘阴县城代理中心，偏南并越过河口；新候选向北移动到白泥湖—湘江东支侧，西北沿实际河弯，东山脚和南封口明确推测，不拿白泥湖乡行政区代替蓄洪区。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：白泥湖垸。国家级蓄滞洪区规划表面积 48.3 km²：；环评汇总面积 48.33 km²：；白泥湖垸堤垸保护总面积 48.3333 km²：原值7.25万亩换算；名称关联证据",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南水利厅白泥湖垸灌溉资料（2018）",
                "url": "https://slt.hunan.gov.cn/ztzl/qmtxhzz/201812/t20181217_5239827.html"
              },
              {
                "label": "湘阴水利工程管理保护范围划界方案（2021）",
                "url": "https://www.xiangyin.gov.cn/uploadfiles/202109/20210916173155747.pdf"
              },
              {
                "label": "湘阴河湖概况",
                "url": "https://www.xiangyin.gov.cn/yyjc/jc_xyx/125/453/content_10425.html"
              },
              {
                "label": "湘阴防汛应急预案（2020）",
                "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62790/content_1675611.html"
              },
              {
                "label": "岳阳楼区公开环评（2018）",
                "url": "https://www.yylq.gov.cn/uploadfiles/201808/20180808163739327.pdf"
              },
              {
                "label": "湘阴2025三垸分类说明",
                "url": "https://www.xiangyin.gov.cn/31203/31208/content_2311358.html"
              },
              {
                "label": "湖南交通运输厅2025鸡啼湖堤段答复",
                "url": "https://jtt.hunan.gov.cn/jjzdgz/jytabl/zxta/202505/t20250530_33687864.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "西：划界表列文星镇段“东湖、白泥湖湘水东支堤防”；鸡啼湖堤段及新建八组可辅助校核，但各节点桩号顺序未公开。（资料记载）；北：划界方案表2.4（PDF第21页/印刷17页）列横岭湖园艺场人工堤和杨家山自然堤；此自然堤仅指横岭湖段，不能外推整个东部伴山界。（资料记载）；东：东部低岗丘陵、伴山地貌，具体山脚/分水线未知。（方位参照）；南：南接湘阴县城为定位关系，具体收口堤线未知。（方位参照）；其他：内湖白泥湖6.6km渍堤不是外界。一线堤2015为10.793km、2020石塘白泥湖段13.98km，范围有差异，不能据长度逆推完整polygon。（方位参照）",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "湖南水利厅白泥湖垸灌溉资料（2018）",
                "url": "https://slt.hunan.gov.cn/ztzl/qmtxhzz/201812/t20181217_5239827.html"
              },
              {
                "label": "湘阴水利工程管理保护范围划界方案（2021）",
                "url": "https://www.xiangyin.gov.cn/uploadfiles/202109/20210916173155747.pdf"
              },
              {
                "label": "湘阴河湖概况",
                "url": "https://www.xiangyin.gov.cn/yyjc/jc_xyx/125/453/content_10425.html"
              },
              {
                "label": "湘阴防汛应急预案（2020）",
                "url": "https://www.xiangyin.gov.cn/31185/31200/62787/62790/content_1675611.html"
              },
              {
                "label": "岳阳楼区公开环评（2018）",
                "url": "https://www.yylq.gov.cn/uploadfiles/201808/20180808163739327.pdf"
              },
              {
                "label": "湘阴2025三垸分类说明",
                "url": "https://www.xiangyin.gov.cn/31203/31208/content_2311358.html"
              },
              {
                "label": "湖南交通运输厅2025鸡啼湖堤段答复",
                "url": "https://jtt.hunan.gov.cn/jjzdgz/jytabl/zxta/202505/t20250530_33687864.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧圈只有湘阴县城代理中心，偏南并越过河口；新候选向北移动到白泥湖—湘江东支侧，西北沿实际河弯，东山脚和南封口明确推测，不拿白泥湖乡行政区代替蓄洪区。；东部精确山脚/分水线；南部收口堤线；公开法定矢量坐标；北湖/白泥湖名称沿革完整正式对照；鸡啼湖、新建八组、杨家山堤段的桩号顺序；湘江东支人工堤南端离江接天然高地的接口；1:2000图册未随公开划界表发布；失败进度中的大坝堤至寺坝4km撇洪堤缺最终可核来源，不作为候选约束；新回答把杨家山与南部回接语句混写，不据此把北部杨家山移到南端；东部山脚分水线、人工堤转自然堤接口及南收口未定位，全部陆向折点推测。；白泥湖是区位线索，不把内湖岸线、旧白泥湖乡界或石塘镇界认定为外堤。；湘江河心是堤线位置代理，具体起止点推测；48.3仅规划资料值，未面积缩放。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "白泥湖垸"
      ],
      "chatgptExtractionPath": "automation/output/hunan-revisit-chatgpt-2026-09-13/publications/2026-09-13T08-28-35-907Z-长江-17/extraction.json"
    },
    "集成安合": {
      "id": "长江-18",
      "name": "集成安合",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T04:25:46.234Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 68,
        "contextAnchors": [
          {
            "id": "0",
            "name": "藕池河",
            "location": "112.46341578,29.43311262",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "藕池河",
            "location": "112.4229721,29.52024247",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "藕池河东支",
            "location": "112.6385177,29.33388436",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "藕池河东支",
            "location": "112.71358796,29.31512918",
            "anchorKind": "natural"
          },
          {
            "id": "4",
            "name": "藕池河东支",
            "location": "112.53931504,29.30560342",
            "anchorKind": "natural"
          },
          {
            "id": "5",
            "name": "藕池河东支",
            "location": "112.49653754,29.31885171",
            "anchorKind": "natural"
          },
          {
            "id": "6",
            "name": "藕池河东支",
            "location": "112.46152156,29.43182526",
            "anchorKind": "natural"
          },
          {
            "id": "7",
            "name": "藕池河东支",
            "location": "112.44021321,29.39216235",
            "anchorKind": "natural"
          },
          {
            "id": "8",
            "name": "藕池河东支",
            "location": "112.43261811,29.50765378",
            "anchorKind": "natural"
          },
          {
            "id": "9",
            "name": "藕池河东支",
            "location": "112.3657322,29.45987038",
            "anchorKind": "natural"
          },
          {
            "id": "10",
            "name": "藕池河东支",
            "location": "112.37259373,29.51664347",
            "anchorKind": "natural"
          },
          {
            "id": "11",
            "name": "华容县操军镇人民政府",
            "location": "112.42563749,29.38750486",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南主体功能区规划附表23",
          "publisher": "",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "华容县蓄滞洪垸名录",
          "publisher": "",
          "url": "https://www.huarong.gov.cn/33159/37006/37007/37024/37159/content_1141484.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "华容水利工程管理保护范围划界方案（2021）",
          "publisher": "",
          "url": "https://huarong.gov.cn/uploadfiles/202111/20211115092246295.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "华容防汛方案（2025）",
          "publisher": "",
          "url": "https://www.huarong.gov.cn/uploadfiles/202512/2025123109472743488.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "益阳水利环境资料水系说明（2025）",
          "publisher": "",
          "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202507/2025070417094430057.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "华容梅田湖镇概况（2023）",
          "publisher": "",
          "url": "https://www.huarong.gov.cn/33159/37006/37007/37019/37114/content_2133450.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖南防汛行政责任名单（2024）",
          "publisher": "",
          "url": "https://yjt.hunan.gov.cn/yjt/tszt/ywzl/aqsczbgjsnxd/202404/t20240430_33294181.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "华容十四五水安全保障规划",
          "publisher": "",
          "url": "https://www.huarong.gov.cn/33159/37006/37008/37038/37268/content_1997103.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OSM河道位置参照 70808144",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70808144",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        },
        {
          "title": "OSM河道位置参照 70808306",
          "publisher": "",
          "url": "https://www.openstreetmap.org/way/70808306",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "河道中心线的位置参照；按官方水系拓扑对应命名，非实测堤线"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市华容县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖南省岳阳市华容县西部至西南部，组合范围涉及操军镇、原新建乡；原新建乡现并入梅田湖镇。集成大垸可定位原新建乡，安合为操军侧管理参照，不能整镇套边界。",
        "reasoning": "由操军驻地附近倾斜椭圆改为藕池东支与鲇鱼须河两支之间的天然围合形状，主体向北延伸至梅田湖方向。未取得县级划界坐标，河轴仅作位置代理。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：集成安合垸。国家级蓄滞洪区规划表面积 123.3 km²：组合总面积；两个组成垸独立面积未知",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "华容县蓄滞洪垸名录",
                "url": "https://www.huarong.gov.cn/33159/37006/37007/37024/37159/content_1141484.html"
              },
              {
                "label": "华容水利工程管理保护范围划界方案（2021）",
                "url": "https://huarong.gov.cn/uploadfiles/202111/20211115092246295.pdf"
              },
              {
                "label": "华容防汛方案（2025）",
                "url": "https://www.huarong.gov.cn/uploadfiles/202512/2025123109472743488.pdf"
              },
              {
                "label": "益阳水利环境资料水系说明（2025）",
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202507/2025070417094430057.pdf"
              },
              {
                "label": "华容梅田湖镇概况（2023）",
                "url": "https://www.huarong.gov.cn/33159/37006/37007/37019/37114/content_2133450.html"
              },
              {
                "label": "湖南防汛行政责任名单（2024）",
                "url": "https://yjt.hunan.gov.cn/yjt/tszt/ywzl/aqsczbgjsnxd/202404/t20240430_33294181.html"
              },
              {
                "label": "华容十四五水安全保障规划",
                "url": "https://www.huarong.gov.cn/33159/37006/37008/37038/37268/content_1997103.html"
              },
              {
                "label": "OSM河道位置参照 70808144",
                "url": "https://www.openstreetmap.org/way/70808144"
              },
              {
                "label": "OSM河道位置参照 70808306",
                "url": "https://www.openstreetmap.org/way/70808306"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：不能将弯曲河道岸别机械等同固定东界；官方确认的外缘之一为鲇鱼须河右岸大堤。具体东方向转折需沿实际堤线复核。（资料记载）；西：官方确认另一外缘为藕池河东支左岸大堤；曲线部分不能机械等同全区固定西界。（资料记载）；北：殷家洲是集成大垸北端及鲇鱼须河分汊强参照；法定北角与闭合堤线未知。（方位参照）；南：九斤麻为鲇鱼须河汇入藕池东支主流参照；外围堤线具体在哪一桩号闭合未知。（方位参照）；其他：内部西来庵东堤，上坷坝至下河坝11.3km，操军镇管理、备注沙河水库；属重点间堤，未证明全线等于集成与安合分界。2021两条外缘管理范围线55.56221/56.05274km不是堤顶长或区周长。（方位参照）",
            "references": [
              {
                "label": "湖南主体功能区规划附表23",
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf"
              },
              {
                "label": "华容县蓄滞洪垸名录",
                "url": "https://www.huarong.gov.cn/33159/37006/37007/37024/37159/content_1141484.html"
              },
              {
                "label": "华容水利工程管理保护范围划界方案（2021）",
                "url": "https://huarong.gov.cn/uploadfiles/202111/20211115092246295.pdf"
              },
              {
                "label": "华容防汛方案（2025）",
                "url": "https://www.huarong.gov.cn/uploadfiles/202512/2025123109472743488.pdf"
              },
              {
                "label": "益阳水利环境资料水系说明（2025）",
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202507/2025070417094430057.pdf"
              },
              {
                "label": "华容梅田湖镇概况（2023）",
                "url": "https://www.huarong.gov.cn/33159/37006/37007/37019/37114/content_2133450.html"
              },
              {
                "label": "湖南防汛行政责任名单（2024）",
                "url": "https://yjt.hunan.gov.cn/yjt/tszt/ywzl/aqsczbgjsnxd/202404/t20240430_33294181.html"
              },
              {
                "label": "华容十四五水安全保障规划",
                "url": "https://www.huarong.gov.cn/33159/37006/37008/37038/37268/content_1997103.html"
              },
              {
                "label": "OSM河道位置参照 70808144",
                "url": "https://www.openstreetmap.org/way/70808144"
              },
              {
                "label": "OSM河道位置参照 70808306",
                "url": "https://www.openstreetmap.org/way/70808306"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "由操军驻地附近倾斜椭圆改为藕池东支与鲇鱼须河两支之间的天然围合形状，主体向北延伸至梅田湖方向。未取得县级划界坐标，河轴仅作位置代理。；两个组成垸各自精确面积；完整内部分界；北南外堤闭合桩号；组合区独立集雨与圩堤保护面积；候选为资料推定范围，非法定边界，未经实地核验。；使用河道中心线作为外围堤线的位置代理；河心、岸线、堤顶不是同一条线。",
            "references": []
          }
        ]
      },
      "aliases": [
        "集成安合垸"
      ],
      "chatgptExtractionPath": "automation/output/hunan-chatgpt-2026-09-13/publications/2026-09-13T04-25-46-234Z-长江-18/extraction.json"
    },
    "钱粮湖": {
      "id": "长江-19",
      "name": "钱粮湖",
      "basin": "长江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 23,
        "contextAnchors": [
          {
            "id": "0",
            "name": "钱粮湖",
            "location": "112.74269636,29.44978487",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "钱粮湖",
            "location": "113.75141927,28.96564788",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "钱粮湖汽车站",
            "location": "112.6939248,29.44908251",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "钱粮湖镇人民政府",
            "location": "112.68917595,29.45079065",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "钱粮湖派出所",
            "location": "112.69186788,29.4467256",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "钱粮湖镇采桑湖渔场",
            "location": "112.79463675,29.49939825",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "岳阳市君山区钱粮湖镇卫生院",
            "location": "112.69258211,29.45377137",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "钱粮湖人民法庭",
            "location": "112.69495849,29.45318638",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "钱粮湖土鸭馆(新枫巷)",
            "location": "113.14493439,29.35747792",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "钱粮湖蓄洪垸安全建设一期工程位置",
          "url": "https://junshan.gov.cn/32415/40825/40826/40843/40845/42921/content_1900512.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "君山区政府项目资料明确安全建设地点和安全区名称"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“钱粮湖”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖南省洞庭湖蓄洪区安全与建设管理办法",
          "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府规章逐一列出洞庭湖区24处蓄洪区，交叉确认这些名称均属于湖南洞庭湖区。"
        },
        {
          "title": "湖南省主体功能区规划",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划表列洞庭湖区蓄洪垸名称、面积与蓄洪容积，用于核对区名和规模。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市君山区"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "湖南省岳阳市君山区"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "君山区钱粮湖镇—良心堡镇，层山、良心堡、方台湖安全区片区",
        "reasoning": "独立读取钱粮湖证据包；先锁定湖南省岳阳市君山区及“君山区钱粮湖镇—良心堡镇，层山、良心堡、方台湖安全区片区”，再以本区地图锚点定中心与方向，用本区454.1km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "君山区政府项目资料明确安全建设地点和安全区名称；另有3条官方资料交叉核对",
            "references": [
              {
                "url": "https://junshan.gov.cn/32415/40825/40826/40843/40845/42921/content_1900512.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
                "label": "引用 3"
              },
              {
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "行政区域一致：湖南省岳阳市君山区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：君山区钱粮湖镇—良心堡镇，层山、良心堡、方台湖安全区片区。现有证据相互印证，确信度高。",
            "references": []
          }
        ]
      }
    },
    "建设垸": {
      "id": "长江-20",
      "name": "建设垸",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 4,
        "contextAnchors": [
          {
            "id": "0",
            "name": "岳阳市君山区建设垸修防委员会",
            "location": "112.92073527,29.5446344",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "君山区水利局机构概况",
          "url": "https://www.junshan.gov.cn/32415/32465/39479/39482/index.htm",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "君山区水利局现设建设垸堤防事务中心并兼管洪水港长江护岸工程"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“建设垸”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖南省洞庭湖蓄洪区安全与建设管理办法",
          "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府规章逐一列出洞庭湖区24处蓄洪区，交叉确认这些名称均属于湖南洞庭湖区。"
        },
        {
          "title": "湖南省主体功能区规划",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划表列洞庭湖区蓄洪垸名称、面积与蓄洪容积，用于核对区名和规模。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市君山区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "君山区北部建设垸堤防—洪水港长江护岸工程管理片区",
        "reasoning": "独立读取建设垸证据包；先锁定湖南省岳阳市君山区及“君山区北部建设垸堤防—洪水港长江护岸工程管理片区”，再以本区地图锚点定中心与方向，用本区104.6km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "君山区水利局现设建设垸堤防事务中心并兼管洪水港长江护岸工程；另有3条官方资料交叉核对",
            "references": [
              {
                "url": "https://www.junshan.gov.cn/32415/32465/39479/39482/index.htm",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
                "label": "引用 3"
              },
              {
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖南省岳阳市君山区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：君山区北部建设垸堤防—洪水港长江护岸工程管理片区。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "建新农场": {
      "id": "长江-21",
      "name": "建新农场",
      "basin": "长江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 21,
        "contextAnchors": [
          {
            "id": "0",
            "name": "建新农场",
            "location": "112.85581764,29.50564429",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "湖南省建新农场综合加工厂",
            "location": "112.85630164,29.50306938",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "建新农场十大队",
            "location": "112.93436712,29.4529571",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "建新农场七大队",
            "location": "112.90009507,29.48068089",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "建新农场五大队",
            "location": "112.86236053,29.49479693",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "建新农场四大队",
            "location": "112.8647649,29.49294841",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "建新农场一大队",
            "location": "112.84042606,29.51145043",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "建新农场二大队",
            "location": "112.84218288,29.5356809",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "建新农场六大队",
            "location": "112.88125305,29.48367809",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "建新农场三大队",
            "location": "112.85243294,29.51375753",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南省岳阳监狱（原建新农场）国土空间规划公示",
          "url": "https://junshan.gov.cn/32415/32440/content_2352545.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "君山区国土空间规划公示明确原建新农场现行名称与管理单位"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“建新农场”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖南省洞庭湖蓄洪区安全与建设管理办法",
          "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府规章逐一列出洞庭湖区24处蓄洪区，交叉确认这些名称均属于湖南洞庭湖区。"
        },
        {
          "title": "湖南省主体功能区规划",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划表列洞庭湖区蓄洪垸名称、面积与蓄洪容积，用于核对区名和规模。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市君山区"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "湖南省岳阳市君山区"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "君山区建新公共事务服务中心、湖南省岳阳监狱（原建新农场）规划范围",
        "reasoning": "独立读取建新农场证据包；先锁定湖南省岳阳市君山区及“君山区建新公共事务服务中心、湖南省岳阳监狱（原建新农场）规划范围”，再以本区地图锚点定中心与方向，用本区40.1km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "君山区国土空间规划公示明确原建新农场现行名称与管理单位；另有3条官方资料交叉核对",
            "references": [
              {
                "url": "https://junshan.gov.cn/32415/32440/content_2352545.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
                "label": "引用 3"
              },
              {
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "行政区域一致：湖南省岳阳市君山区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：君山区建新公共事务服务中心、湖南省岳阳监狱（原建新农场）规划范围。现有证据相互印证，确信度高。",
            "references": []
          }
        ]
      }
    },
    "君山农场": {
      "id": "长江-22",
      "name": "君山农场",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 48,
        "contextAnchors": [
          {
            "id": "0",
            "name": "君山农场",
            "location": "113.00475394,29.44130934",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "柳林洲街道办事处",
            "location": "113.03186747,29.42415309",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "君山区柳林洲街道办事处君山大道办公区",
            "location": "113.00695736,29.45478267",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "中共君山区柳林洲街道办事处委员会",
            "location": "113.03195581,29.4244765",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "中共柳林洲街道纪律检查委员会",
            "location": "113.00504725,29.44384049",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "柳林洲街道办事处旅游路社区工作站",
            "location": "112.99991594,29.43138768",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "岳阳市君山区柳林洲街道办事处柳毅社区工作站",
            "location": "113.00485202,29.4378729",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "君山区柳林洲街道办事处计生协会",
            "location": "113.03157952,29.4245355",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "中共柳林洲街道工作委员会",
            "location": "113.03145506,29.424234",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "柳林洲街道办事处信访办",
            "location": "113.03141191,29.42418785",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "君山区概况",
          "url": "https://www.junshan.gov.cn/index.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "区划沿革明确柳林洲由原君山农场、君山镇及多个分场合并形成"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“君山农场”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖南省洞庭湖蓄洪区安全与建设管理办法",
          "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府规章逐一列出洞庭湖区24处蓄洪区，交叉确认这些名称均属于湖南洞庭湖区。"
        },
        {
          "title": "湖南省主体功能区规划",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划表列洞庭湖区蓄洪垸名称、面积与蓄洪容积，用于核对区名和规模。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市君山区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "君山区柳林洲街道原君山农场各分场片区",
        "reasoning": "独立读取君山农场证据包；先锁定湖南省岳阳市君山区及“君山区柳林洲街道原君山农场各分场片区”，再以本区地图锚点定中心与方向，用本区122km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "区划沿革明确柳林洲由原君山农场、君山镇及多个分场合并形成；另有3条官方资料交叉核对",
            "references": [
              {
                "url": "https://www.junshan.gov.cn/index.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
                "label": "引用 3"
              },
              {
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖南省岳阳市君山区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：君山区柳林洲街道原君山农场各分场片区。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "大通湖东": {
      "id": "长江-23",
      "name": "大通湖东",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "东浃村（人工指定绘图中心）",
            "location": "112.784676,29.24438",
            "anchorKind": "manual-location-center"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "注滋口镇的防洪重器：大通湖东垸分洪闸成为水里风景区与洞庭湖区水文化宣讲基地",
          "url": "https://www.0730news.com/detail?infoid=127835",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "岳阳广电报道将分洪闸定位到华容县注滋口镇东浃村湖堤；服务范围涉及注滋口镇与南县华阁镇，保护面积为220.69平方公里。报道未提供村中心坐标或完整边界。"
        },
        {
          "title": "南县大通湖东涝区治理工程（二期）环境影响报告书",
          "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202507/2025070417080096039.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "报告明确大通湖东垸涉及南县华阁镇，东临东洞庭湖、北隔藕池河东支。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“大通湖东”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖南省洞庭湖蓄洪区安全与建设管理办法",
          "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府规章逐一列出洞庭湖区24处蓄洪区，交叉确认这些名称均属于湖南洞庭湖区。"
        },
        {
          "title": "湖南省主体功能区规划",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划表列洞庭湖区蓄洪垸名称、面积与蓄洪容积，用于核对区名和规模。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市华容县注滋口镇",
        "湖南省益阳市南县华阁镇"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "大通湖东垸涉及华容县注滋口镇、南县华阁镇；分洪闸位于华容县注滋口镇东浃村湖堤。按人工标记，以东浃村（GCJ-02：112.784676, 29.244380）为猜测边界绘制中心。",
        "reasoning": "按用户指定的东浃村GCJ-02坐标112.784676,29.244380为中心，以项目原有230.1平方公里参考面积形成方案C闭合猜测边界。岳阳广电报道用于核对分洪闸所在地；村级标记不是分洪闸精确坐标或官方区域中心。报道保护面积220.69平方公里另记，不替换显示面积口径。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "岳阳广电报道明确分洪闸位于注滋口镇东浃村湖堤，并涉及注滋口镇、华阁镇；用户已定位东浃村并指定其为绘图中心。坐标来自人工地图标记，报道提供地名依据。保护面积220.69平方公里单独记录；显示尺度沿用项目参考面积230.1平方公里",
            "references": [
              {
                "url": "https://www.0730news.com/detail?infoid=127835",
                "label": "引用 1"
              },
              {
                "url": "https://www.yiyang.gov.cn/yyshjbhj/uploadfiles/202507/2025070417080096039.pdf",
                "label": "引用 2"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 3"
              },
              {
                "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
                "label": "引用 4"
              },
              {
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
                "label": "引用 5"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖南省岳阳市华容县注滋口镇、湖南省益阳市南县华阁镇。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：大通湖东垸涉及华容县注滋口镇、南县华阁镇；分洪闸位于华容县注滋口镇东浃村湖堤。按人工标记，以东浃村（GCJ-02：112.784676, 29.244380）为猜测边界绘制中心。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "江南陆城": {
      "id": "长江-24",
      "name": "江南陆城",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 22,
        "contextAnchors": [
          {
            "id": "0",
            "name": "陆城镇人民政府",
            "location": "113.29869205,29.58426647",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "中共岳阳市云溪区陆城镇委员会",
            "location": "113.29918889,29.58416816",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "陆城镇人民代表大会",
            "location": "113.29905467,29.584275",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "岳阳市云溪区陆城镇香铺村村民委员会",
            "location": "113.31122082,29.57938774",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "陆城镇陆城村退役军人服务站",
            "location": "113.29919451,29.57963167",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "陆城镇退役军人服务站",
            "location": "113.29904365,29.58425497",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "岳阳市云溪区陆城镇财政所",
            "location": "113.29936203,29.5823058",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "陆城镇农村集体资源交易中心",
            "location": "113.2994582,29.58232695",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "陆城镇枫桥湖花园管理中心",
            "location": "113.24126054,29.5371471",
            "anchorKind": "engineering"
          },
          {
            "id": "9",
            "name": "云溪区陆城镇陆逊社区居民委员会",
            "location": "113.30038487,29.59459527",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖南人大：洞庭湖区蓄洪垸防洪标准建议",
          "url": "https://www.hnrd.gov.cn/content/2018/01/28/7248843.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "规划和人大建议明确江南垸、陆城垸相连且跨临湘、云溪"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“江南陆城”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖南省洞庭湖蓄洪区安全与建设管理办法",
          "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省政府规章逐一列出洞庭湖区24处蓄洪区，交叉确认这些名称均属于湖南洞庭湖区。"
        },
        {
          "title": "湖南省主体功能区规划",
          "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划表列洞庭湖区蓄洪垸名称、面积与蓄洪容积，用于核对区名和规模。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖南省岳阳市临湘市江南镇",
        "湖南省岳阳市云溪区陆城镇"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "临湘市江南镇与岳阳市云溪区陆城镇，长江南岸狭长平原",
        "reasoning": "独立读取江南陆城证据包；先锁定湖南省岳阳市临湘市江南镇、湖南省岳阳市云溪区陆城镇及“临湘市江南镇与岳阳市云溪区陆城镇，长江南岸狭长平原”，再以本区地图锚点定中心与方向，用本区211km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "规划和人大建议明确江南垸、陆城垸相连且跨临湘、云溪；另有3条官方资料交叉核对",
            "references": [
              {
                "url": "https://www.hnrd.gov.cn/content/2018/01/28/7248843.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.hunan.gov.cn/hnszf/szf/hnzb_18/xxgz/202012/t20201231_14099182.html",
                "label": "引用 3"
              },
              {
                "url": "https://fgw.hunan.gov.cn/xxgk_70899/ghjh/201605/W020160518614311086449.pdf",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖南省岳阳市临湘市江南镇、湖南省岳阳市云溪区陆城镇。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：临湘市江南镇与岳阳市云溪区陆城镇，长江南岸狭长平原。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "荆江分洪区": {
      "id": "长江-25",
      "name": "荆江分洪区",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:43:19.920Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 85,
        "contextAnchors": [
          {
            "id": "0",
            "name": "荆江大道",
            "location": "112.22382045,30.05989565",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "荆江路",
            "location": "112.23574831,30.28812438",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "荆江大道",
            "location": "112.21967886,30.06061255",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "荆江路",
            "location": "112.22573118,30.28591713",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "荆江大堤",
            "location": "112.23309971,30.06253065",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "荆江一路",
            "location": "112.31731421,29.73914173",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "埠河镇太平口村退役军人服务站",
            "location": "112.16558885,30.28074729",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "公安县荆江分洪区总排渠管理段",
            "location": "112.21062368,29.90874547",
            "anchorKind": "engineering"
          },
          {
            "id": "8",
            "name": "荆江分洪区南闸纪念公园",
            "location": "112.17275688,29.66596581",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [
        {
          "title": "维基百科：荆江分洪工程",
          "publisher": "维基百科",
          "url": "https://zh.wikipedia.org/wiki/%E8%8D%86%E6%B1%9F%E5%88%86%E6%B4%AA%E5%B7%A5%E7%A8%8B",
          "sourceType": "encyclopedia",
          "supportsLocation": false,
          "confidenceEligible": false,
          "role": "search-expansion",
          "checkedAt": "2026-07-24",
          "locationSummary": "词条给出荆江分洪区北闸在公安县埠河镇太平口、南闸在黄山头，并列出围堤和相邻分蓄洪区关系，作为工程锚点检索线索。",
          "searchTerms": [
            "埠河镇太平口",
            "荆江分洪北闸",
            "黄山头南闸"
          ],
          "locationRelations": [
            "北端埠河镇太平口",
            "南端黄山头"
          ],
          "crossValidation": {
            "status": "matched",
            "matchedAdministrativeAreas": [
              "湖北省荆州市公安县"
            ],
            "matchedRelations": [
              "长江南岸公安县境内"
            ],
            "supportingSourceUrls": [
              "https://www.hubei.gov.cn/zwgk/hbyw/hbywqb/202007/t20200715_2699497.shtml"
            ],
            "boundaryEligible": false
          }
        }
      ],
      "governmentSources": [
        {
          "title": "湖北省荆江分蓄洪区工程管理局",
          "publisher": "",
          "url": "https://slt.hubei.gov.cn/fbjd/xxgkml/czgk/secpart/jgj/202109/P020250310771279336175.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "2024年湖北省3级及以上河道堤防防汛和安全运行责任人名单",
          "publisher": "",
          "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "荆江分洪区近期重点项目环评批复",
          "publisher": "",
          "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201605/t20160509_337370.htm",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省荆州市公安县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖北荆州市公安县；独立主体，非包括涴市、虎西、人民大垸的荆江分蓄洪区总称",
        "reasoning": "旧椭圆横越长江且漏掉藕池方向低地；新候选以实际长江、虎渡河和藕池河段形成荆江主体，和虎渡河西侧涴市扩大区分开。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "荆江分洪区主体工程面积 921 km²：",
            "references": [
              {
                "label": "湖北省荆江分蓄洪区工程管理局",
                "url": "https://slt.hubei.gov.cn/fbjd/xxgkml/czgk/secpart/jgj/202109/P020250310771279336175.pdf"
              },
              {
                "label": "2024年湖北省3级及以上河道堤防防汛和安全运行责任人名单",
                "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf"
              },
              {
                "label": "荆江分洪区近期重点项目环评批复",
                "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201605/t20160509_337370.htm"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "北：埠河太平口北闸及荆南长江干堤，接角待核（资料记载）；东：东北至东侧长江荆南干堤：埠河、斗湖堤、杨家厂、麻豪口、藕池（资料记载）；西：虎渡河左堤：埠河、夹竹园、闸口、藕池、黄山头（资料记载）；南：藕池至黄山头南线大堤，黄山头南闸（资料记载）",
            "references": [
              {
                "label": "湖北省荆江分蓄洪区工程管理局",
                "url": "https://slt.hubei.gov.cn/fbjd/xxgkml/czgk/secpart/jgj/202109/P020250310771279336175.pdf"
              },
              {
                "label": "2024年湖北省3级及以上河道堤防防汛和安全运行责任人名单",
                "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf"
              },
              {
                "label": "荆江分洪区近期重点项目环评批复",
                "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201605/t20160509_337370.htm"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧椭圆横越长江且漏掉藕池方向低地；新候选以实际长江、虎渡河和藕池河段形成荆江主体，和虎渡河西侧涴市扩大区分开。；完整官方边界坐标及高清范围图未找到；北闸接点与藕池接堤节点未精确定位；河道中心线若用作堤防位置代理须明示并非实测堤线；历史921.34来源链未明确不强制拟合；荆南干堤和虎渡堤实际轴线未取得，河心仅位置代理。；南线藕池至黄山头连续堤线和精确闸址未测，南端折点及连接为推测；不认定已完整恢复全部围堤。；不以道路同名荆江路/大道点作边界；只保留分洪区和太平口定位上下文。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [],
      "chatgptExtractionPath": "automation/output/hubei-chatgpt-2026-09-13/publications/2026-09-13T07-43-19-920Z-长江-25/extraction.json"
    },
    "宛市扩大区": {
      "id": "长江-26",
      "name": "宛市扩大区",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:43:24.175Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 1,
        "contextAnchors": [
          {
            "id": "0",
            "name": "荆州区弥市镇",
            "location": "112.12402123,30.2240939",
            "anchorKind": "location-clue"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "荆江分蓄洪区建设工程可研勘察设计招标",
          "publisher": "",
          "url": "https://www.hbtba.com/pro/pro.php?id=0558d5ab-3eeb-45ec-8b3e-213931ec6a30",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖北2024堤防名单",
          "publisher": "",
          "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "国家蓄滞洪区有哪些",
          "publisher": "",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_007_001.jsp?mindex=2",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "走进荆江分蓄洪区",
          "publisher": "",
          "url": "https://www.cnr.cn/hubei/jiaodian/20200721/t20200721_525174917.shtml",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省荆州市荆州区弥市镇"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖北荆州市荆州区弥市镇、松滋市涴市镇；荆江主体西北独立区",
        "reasoning": "旧弥市小椭圆横跨虎渡河并与荆江主体混叠；新候选退回虎渡河西、长江南的独立扩大区，向松滋涴市方向展开，保留弥市与涴市跨区关联。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：涴市扩大区、涴市扩大分洪区。工程介绍面积 96 km²：",
            "references": [
              {
                "label": "荆江分蓄洪区建设工程可研勘察设计招标",
                "url": "https://www.hbtba.com/pro/pro.php?id=0558d5ab-3eeb-45ec-8b3e-213931ec6a30"
              },
              {
                "label": "湖北2024堤防名单",
                "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf"
              },
              {
                "label": "国家蓄滞洪区有哪些",
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_007_001.jsp?mindex=2"
              },
              {
                "label": "走进荆江分蓄洪区",
                "url": "https://www.cnr.cn/hubei/jiaodian/20200721/t20200721_525174917.shtml"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "北：长江南岸荆南长江干堤，弥市及涴市段（资料记载）；东：虎渡河右岸虎西支堤（资料记载）；南：涴市隔堤收口，精确接桩及线位待核（资料记载）；西：西至西南侧涴市隔堤方向，闭合折点待核（方位参照）",
            "references": [
              {
                "label": "荆江分蓄洪区建设工程可研勘察设计招标",
                "url": "https://www.hbtba.com/pro/pro.php?id=0558d5ab-3eeb-45ec-8b3e-213931ec6a30"
              },
              {
                "label": "湖北2024堤防名单",
                "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf"
              },
              {
                "label": "国家蓄滞洪区有哪些",
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_007_001.jsp?mindex=2"
              },
              {
                "label": "走进荆江分蓄洪区",
                "url": "https://www.cnr.cn/hubei/jiaodian/20200721/t20200721_525174917.shtml"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧弥市小椭圆横跨虎渡河并与荆江主体混叠；新候选退回虎渡河西、长江南的独立扩大区，向松滋涴市方向展开，保留弥市与涴市跨区关联。；三堤精确接桩、隔堤完整地理线位及坐标未取得；2.57为容积不能当平方公里；弥市并非错误同名点，但全区跨至松滋涴市不能仅以弥市单点圈代替；西南涴市隔堤的轴线和转角未取得，所有陆向折线均推测。；96是扩大区资料值，不能并入荆江921主体面积；没有按96缩放。；旧图仅弥市地标不代表扩大区全体，新候选也不宣布按乡镇行政界测定。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "涴市扩大区",
        "涴市扩大分洪区"
      ],
      "chatgptExtractionPath": "automation/output/hubei-chatgpt-2026-09-13/publications/2026-09-13T07-43-24-175Z-长江-26/extraction.json"
    },
    "虎西备蓄区": {
      "id": "长江-27",
      "name": "虎西备蓄区",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 69,
        "contextAnchors": [
          {
            "id": "0",
            "name": "虎渡河",
            "location": "112.13499346,30.23778072",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "虎渡河",
            "location": "112.11888024,30.02751887",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "虎渡河",
            "location": "112.1338832,30.13556503",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "虎渡河",
            "location": "112.15696749,29.92838469",
            "anchorKind": "natural"
          },
          {
            "id": "4",
            "name": "虎渡河",
            "location": "112.19458241,29.62140876",
            "anchorKind": "natural"
          },
          {
            "id": "5",
            "name": "孟家溪镇人民政府",
            "location": "112.09774889,29.85573979",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "中共公安县孟家溪镇委员会",
            "location": "112.09797882,29.85463678",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "公安县孟家溪镇永新村民委员会",
            "location": "112.11539618,29.92482282",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "公安县孟家溪镇人民政府民政办公室",
            "location": "112.09514136,29.85522386",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "孟家溪镇北街",
            "location": "112.09488027,29.85496074",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "孟家溪镇便民服务中心",
            "location": "112.09813783,29.85450282",
            "anchorKind": "administrative"
          },
          {
            "id": "11",
            "name": "孟家溪镇西街",
            "location": "112.09324354,29.85237484",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "走进荆江分蓄洪区",
          "url": "https://m.cnhubei.com/content/2020-07/21/content_13219792.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "公安县虎渡河以西，由虎西干堤和山岗隔堤围成的备蓄区；不是整条虎渡河沿线范围。资料面积92.38平方公里，仅用于猜测边界显示尺度。"
        },
        {
          "title": "湖北省3级及以上河道堤防防汛责任人名单",
          "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "湖北堤防责任清单明确虎渡河右堤章田寺段和虎西备蓄区山岗围堤"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“虎西备蓄区”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖北省国土空间规划（2021—2035年）",
          "url": "https://www.hubei.gov.cn/xxgk/gb/202503/W020250316334026803821.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划列出湖北主要蓄滞洪区及其所在流域，用于交叉核对名称和省域归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省荆州市公安县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "公安县虎渡河以西、孟家溪—章田寺—南平一带，核心工程为山岗围堤",
        "reasoning": "独立读取虎西备蓄区证据包；先锁定湖北省荆州市公安县及“公安县虎渡河以西、孟家溪—章田寺—南平一带，核心工程为山岗围堤”，再以本区地图锚点定中心与方向，用本区92.38km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "公安县虎渡河以西，由虎西干堤和山岗隔堤围成的备蓄区；不是整条虎渡河沿线范围。按92.38平方公里资料尺度重建闭合猜测边界，旧锚点只作定位及方向代理。采用湖北日报2020年现场采访记载的92.38 km²作显示尺度。2021年论文图表检索另见86，尚未完成图面及差异口径核对，暂不据此替换；猜测边界仍需人工验收",
            "references": [
              {
                "url": "https://m.cnhubei.com/content/2020-07/21/content_13219792.html",
                "label": "引用 1"
              },
              {
                "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf",
                "label": "引用 2"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 3"
              },
              {
                "url": "https://www.hubei.gov.cn/xxgk/gb/202503/W020250316334026803821.pdf",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖北省荆州市公安县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：公安县虎渡河以西、孟家溪—章田寺—南平一带，核心工程为山岗围堤。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "人民大垸": {
      "id": "长江-28",
      "name": "人民大垸",
      "basin": "长江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "人民大垸",
            "location": "112.74157673,29.74958187",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "人民大垸",
            "location": "112.7620924,29.83772059",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "人民大垸",
            "location": "112.5143841,29.84190888",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "人民大垸农场",
            "location": "112.78595185,29.7901375",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "监利市人民大垸管理区",
            "location": "112.70564432,29.82902325",
            "anchorKind": "engineering"
          },
          {
            "id": "5",
            "name": "人民大垸福利院",
            "location": "112.73959824,29.83561602",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "人民大垸农场西湖分场",
            "location": "112.76672684,29.87107819",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "监利市人民大垸管理区水利局",
            "location": "112.70917859,29.82975487",
            "anchorKind": "engineering"
          },
          {
            "id": "8",
            "name": "人民大垸农场管理区珠湖分场一队",
            "location": "112.63478538,29.83006586",
            "anchorKind": "engineering"
          },
          {
            "id": "9",
            "name": "人民大垸电力局",
            "location": "112.71555264,29.84006893",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "人民大垸管理区流港分场",
            "location": "112.76322836,29.83745028",
            "anchorKind": "engineering"
          },
          {
            "id": "11",
            "name": "人民大垸农场管理区解放",
            "location": "112.73739114,29.8488255",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "走进荆江分蓄洪区",
          "url": "https://m.cnhubei.com/content/2020-07/21/content_13219792.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "跨湖北省石首市、监利市，由荆江大堤和柳杨支堤围成的人民大垸分蓄洪区；不等于人民大垸管理区。资料面积341平方公里，仅用于猜测边界显示尺度。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“人民大垸”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖北省国土空间规划（2021—2035年）",
          "url": "https://www.hubei.gov.cn/xxgk/gb/202503/W020250316334026803821.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划列出湖北主要蓄滞洪区及其所在流域，用于交叉核对名称和省域归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省荆州市石首市",
        "湖北省荆州市监利市"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "湖北省荆州市监利市"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "位于湖北省荆州市石首市、监利市境内，由荆江大堤和柳杨支堤围成；流港及人民大垸管理区地物仅作区内定位线索，不能代表完整分蓄洪区范围。",
        "reasoning": "独立读取人民大垸证据包；先锁定湖北省荆州市石首市、湖北省荆州市监利市及“位于湖北省荆州市石首市、监利市境内，由荆江大堤和柳杨支堤围成；流港及人民大垸管理区地物仅作区内定位线索，不能代表完整分蓄洪区范围。”，再以本区地图锚点定中心与方向，用本区341km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "跨湖北省石首市、监利市，由荆江大堤和柳杨支堤围成的人民大垸分蓄洪区；不等于人民大垸管理区。按341平方公里资料尺度重建闭合猜测边界，旧锚点只作定位及方向代理。采用湖北日报2020年现场采访记载的341 km²作显示尺度。2021年论文图表检索另见362，尚未完成图面及差异口径核对，暂不替换；现有地图锚点只是定位线索，不是管理区或洪区的测量界址",
            "references": [
              {
                "url": "https://m.cnhubei.com/content/2020-07/21/content_13219792.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.hubei.gov.cn/xxgk/gb/202503/W020250316334026803821.pdf",
                "label": "引用 3"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "行政区域一致：湖北省荆州市监利市。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：位于湖北省荆州市石首市、监利市境内，由荆江大堤和柳杨支堤围成；流港及人民大垸管理区地物仅作区内定位线索，不能代表完整分蓄洪区范围。现有证据相互印证，确信度高。",
            "references": []
          }
        ]
      }
    },
    "洪湖分洪区": {
      "id": "长江-29",
      "name": "洪湖分洪区",
      "basin": "长江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "洪湖水体中部（湖泊地标中心代理点）",
            "location": "113.335527,29.828188",
            "anchorKind": "manual-location-center"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“洪湖分洪区”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖北省国土空间规划（2021—2035年）",
          "url": "https://www.hubei.gov.cn/xxgk/gb/202503/W020250316334026803821.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划列出湖北主要蓄滞洪区及其所在流域，用于交叉核对名称和省域归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省荆州市洪湖市",
        "湖北省荆州市监利市"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "湖北省荆州市洪湖市"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "洪湖市与监利市之间的洪湖周边低地，预估中心取洪湖水体中部。按人工审阅要求，以项目中洪湖湖泊地标（GCJ-02：113.335527, 29.828188）作为猜测边界中心代理点。",
        "reasoning": "按用户要求，以项目高德洪湖湖泊地标GCJ-02坐标113.335527,29.828188作为湖水中部的中心代理点，绘制闭合猜测边界。不再使用周边道路或行政区点计算中心。主项目保留原图示尺度268.09 km²，审阅候选保留原图示尺度258.81 km²；两者均非已核定洪区面积，水体地标也不是测量质心。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "用户要求中心设在洪湖水体中部，采用项目已有洪湖湖泊地标坐标；洪湖市行政中心、洪湖大道和管理机构位置不参与中心平均。保留既有图示面积，不视为官方洪区面积或湖泊精确质心",
            "references": [
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 1"
              },
              {
                "url": "https://www.hubei.gov.cn/xxgk/gb/202503/W020250316334026803821.pdf",
                "label": "引用 2"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "行政区域一致：湖北省荆州市洪湖市。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：洪湖市与监利市之间的洪湖周边低地，预估中心取洪湖水体中部。按人工审阅要求，以项目中洪湖湖泊地标（GCJ-02：113.335527, 29.828188）作为猜测边界中心代理点。现有证据相互印证，确信度高。",
            "references": []
          }
        ]
      }
    },
    "杜家台": {
      "id": "长江-30",
      "name": "杜家台",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 19,
        "contextAnchors": [
          {
            "id": "0",
            "name": "杜家台分洪闸附近（管理分局代理，非闸体精确坐标）",
            "location": "113.49507,30.373931",
            "anchorKind": "engineering-proxy"
          },
          {
            "id": "1",
            "name": "周邦大桥附近（地图名周帮大桥，目视取点）",
            "location": "113.682295,30.354287",
            "anchorKind": "engineering-proxy"
          },
          {
            "id": "2",
            "name": "沉湖水面参照点（非湖泊或洪区中心）",
            "location": "113.826632,30.303104",
            "anchorKind": "natural-proxy"
          },
          {
            "id": "3",
            "name": "黄陵矶出口附近（管理处附近目视取点）",
            "location": "114.145239,30.438031",
            "anchorKind": "engineering-proxy"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖北日报：杜家台分蓄洪区“升级”工程开工",
          "url": "https://swj.wuhan.gov.cn/tzdt/jcss/202010/t20201026_1475870.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "报道明确杜家台分蓄洪区位于江汉平原东部、长江左岸和汉江下游右岸，国土面积613.98平方公里，涉及武汉市蔡甸区、武汉开发区（汉南区）和仙桃市；周邦大桥横跨分洪道，连接北侧刘家垸与南侧西流河镇。"
        },
        {
          "title": "杜家台分洪闸：汉右堤126＋200、仙桃城区东北侧",
          "url": "https://www.hbdsw.org.cn/tbgz/ztx/jnwz/201512/t4589961.shtml",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "2015-12-14文章明确杜家台分洪闸位于汉江下游右岸、仙桃城区东北侧，桩号汉右堤126＋200。索引可读，正文直接抓取受限；不包含带坐标系的闸体经纬度。"
        },
        {
          "title": "武汉市水利工程分类名录（表7：杜家台）",
          "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "表7登记杜家台全区面积613.98平方公里；蔡甸、经开管理分段重复登记同一全区总面积，不相加。"
        },
        {
          "title": "杜家台分蓄洪区数字孪生工程说明",
          "url": "https://www.hubwd.com/xwzx/yqdt/1706212863762370560.shtml",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "工程说明列出杜家台闸、分洪道、沉湖、通顺河、黄陵矶闸等水网组成；数字孪生项目延伸范围不作为洪区边界。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“杜家台”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖北省国土空间规划（2021—2035年）",
          "url": "https://www.hubei.gov.cn/xxgk/gb/202503/W020250316334026803821.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划列出湖北主要蓄滞洪区及其所在流域，用于交叉核对名称和省域归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省武汉市蔡甸区",
        "湖北省武汉市汉南区",
        "湖北省仙桃市"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "西起仙桃城区东北侧汉江右岸杜家台分洪闸附近，经周邦分洪道向东连通蔡甸消泗、沉湖及通顺河一带，至汉南黄陵矶出口；分洪闸是西端进洪点，不是全区中心",
        "reasoning": "先以仙桃城区定位西端东北侧、汉江右岸的杜家台分洪闸附近，再经周邦大桥向东连通沉湖低地、通顺河及黄陵矶出口附近。采用西端较窄、东段展开的闭合猜测范围，613.98 km²为全区国土面积尺度，不是闸口周边面积。4个锚点均为明确标注的地图代理，闸体精确坐标和堤线未取得；折点及南北宽度为LLM推断并按面积调节，未逐段沿堤描摹、未完成河岸或行政区矢量裁剪。排除潜江、天门等同名村庄、宿舍及蔡甸管理局办公地址；不能用于工程调度或法定界址。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "分洪闸位于仙桃城区东北侧汉江右岸，是全区西端进洪点；全区沿分洪道向东延伸至蔡甸、汉南，面积613.98平方公里。边界为路线与面积约束的猜测范围，闸口不作为全区中心",
            "references": [
              {
                "url": "https://swj.wuhan.gov.cn/tzdt/jcss/202010/t20201026_1475870.html",
                "label": "引用 1"
              },
              {
                "url": "https://www.hbdsw.org.cn/tbgz/ztx/jnwz/201512/t4589961.shtml",
                "label": "引用 2"
              },
              {
                "url": "https://www.hubwd.com/xwzx/yqdt/1706212863762370560.shtml",
                "label": "引用 3"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 4"
              },
              {
                "url": "https://www.hubei.gov.cn/xxgk/gb/202503/W020250316334026803821.pdf",
                "label": "引用 5"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖北省武汉市蔡甸区、湖北省武汉市汉南区、湖北省仙桃市。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：西起仙桃城区东北侧汉江右岸杜家台分洪闸附近，经周邦分洪道向东连通蔡甸消泗、沉湖及通顺河一带，至汉南黄陵矶出口；分洪闸是西端进洪点，不是全区中心。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "西凉湖": {
      "id": "长江-31",
      "name": "西凉湖",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 28,
        "contextAnchors": [
          {
            "id": "0",
            "name": "北部金水河湖网低地DEM参考点",
            "location": "114.15561506,30.27759641",
            "anchorKind": "terrain-reference"
          },
          {
            "id": "1",
            "name": "中部湖间平原DEM参考点",
            "location": "114.16557601,30.14757154",
            "anchorKind": "terrain-reference"
          },
          {
            "id": "2",
            "name": "斧头湖周边湖盆DEM参考点",
            "location": "114.21543191,30.05248347",
            "anchorKind": "terrain-reference"
          },
          {
            "id": "3",
            "name": "西凉湖周边低地DEM参考点",
            "location": "114.08068849,29.96762576",
            "anchorKind": "terrain-reference"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "西凉湖：如何抚平你的伤痛",
          "url": "https://slj.xianning.gov.cn/ztzl/zahh/swh/201905/t20190520_1715058.shtml",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "报道明确西凉湖蓄洪区涉及嘉鱼、咸安、赤壁和江夏。"
        },
        {
          "title": "湖北唯一堤防碑刻：四邑公堤的千年沧桑",
          "url": "https://slj.xianning.gov.cn/slwh/202411/t20241127_3821386.shtml",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "四邑公堤上起嘉鱼马鞍山，下至江夏凉亭山；嘉鱼东北、咸宁西、蒲圻北、江夏南为历史低洼地。"
        },
        {
          "title": "自然地理",
          "url": "https://www.jiangxia.gov.cn/mljx_22450/202406/t20240627_2421253.shtml",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "长江与金水河沿岸河网冲积平原海拔概括为20—23米，岗地一般23—50米，非分洪区逐点界线。"
        },
        {
          "title": "武汉市水利工程分级分类名录",
          "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "西凉湖蓄滞洪区总面积1095平方公里，其中江夏416平方公里，作为跨区尺度核验。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“西凉湖”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "湖北省国土空间规划（2021—2035年）",
          "url": "https://www.hubei.gov.cn/xxgk/gb/202503/W020250316334026803821.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划列出湖北主要蓄滞洪区及其所在流域，用于交叉核对名称和省域归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省咸宁市嘉鱼县",
        "湖北省咸宁市咸安区",
        "湖北省咸宁市赤壁市",
        "湖北省武汉市江夏区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖北省长江右岸四邑公堤背水侧，跨嘉鱼东北、赤壁北、咸安西及武汉江夏南部，沿金水河与西凉湖、斧头湖等湖群低地向江夏延伸。",
        "reasoning": "依据四邑公堤背水侧、跨四县低地及金水河湖网关系，使用本次下载的约66米像元DEM判读闭合猜测边界。参考点为DEM区域取点，非闸址或界桩；向江夏延伸，保留西凉湖低盆并避让南部丘陵。图示约962.1平方公里，1095仅作全区尺度校验，未强行配平。未取得逐段堤线与安全区边界，江夏416平方公里尚未分区核验；待人工验收，非法定边界。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "基于四邑公堤与跨四县低洼区的官方描述，结合实际DEM判读绘制不规则闭合猜测路径；沿江和湖间低地北伸，避开原候选南部大片丘陵，湖名点不再充当全区中心",
            "references": [
              {
                "url": "https://slj.xianning.gov.cn/ztzl/zahh/swh/201905/t20190520_1715058.shtml",
                "label": "引用 1"
              },
              {
                "url": "https://slj.xianning.gov.cn/slwh/202411/t20241127_3821386.shtml",
                "label": "引用 2"
              },
              {
                "url": "https://www.jiangxia.gov.cn/mljx_22450/202406/t20240627_2421253.shtml",
                "label": "引用 3"
              },
              {
                "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html",
                "label": "引用 4"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 5"
              },
              {
                "url": "https://www.hubei.gov.cn/xxgk/gb/202503/W020250316334026803821.pdf",
                "label": "引用 6"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：湖北省咸宁市嘉鱼县、湖北省咸宁市咸安区、湖北省咸宁市赤壁市、湖北省武汉市江夏区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：湖北省长江右岸四邑公堤背水侧，跨嘉鱼东北、赤壁北、咸安西及武汉江夏南部，沿金水河与西凉湖、斧头湖等湖群低地向江夏延伸。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "东西湖": {
      "id": "长江-32",
      "name": "东西湖",
      "basin": "长江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:43:27.654Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 26,
        "contextAnchors": [
          {
            "id": "0",
            "name": "东西湖",
            "location": "114.13630799,30.62008767",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "东西湖大道",
            "location": "114.148416,30.61795278",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "东西湖互通",
            "location": "114.04072002,30.6793118",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "东西湖堤",
            "location": "114.18322435,30.70186588",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "东西湖大堤",
            "location": "114.2687083,30.68100826",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "东西湖中心广场",
            "location": "114.13857222,30.62316808",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "东西湖收费站(G42沪蓉高速出口)",
            "location": "113.98527804,30.71138025",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "东西湖出口(G42沪蓉高速东向)",
            "location": "113.97904752,30.70951087",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "东西湖大堤",
            "location": "114.12889186,30.59388344",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "东西湖大道入口(孝感方向)",
            "location": "114.09929594,30.61806046",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "东西湖区人民政府",
            "location": "114.13967422,30.65137173",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "武汉市水利工程分级分类名录",
          "publisher": "",
          "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "东西湖排水防涝专项规划2022—2035",
          "publisher": "",
          "url": "https://www.dxh.gov.cn/ZWGK/bmxxgk/bwbjxxgk/qswhhpj/qtxxgk/202209/P020260209376280512896.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖北2024堤防名单",
          "publisher": "",
          "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "东西湖加快打造中国网谷",
          "publisher": "",
          "url": "https://fgw.wuhan.gov.cn/xwzx/cqfc/202312/t20231221_2325195.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "江岸防汛抗旱预案",
          "publisher": "",
          "url": "https://www.jiangan.gov.cn/jaxxw/zfxxgk/zc_41333/qtzdgkwj/zfbwj/202011/t20201102_1488969.shtml",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省武汉市东西湖区"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "湖北省武汉市东西湖区"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖北武汉，主要东西湖区并含硚口舵落口、江岸金潭村少量堤内地；并非东西湖行政495平方公里",
        "reasoning": "旧行政中心椭圆越汉江并漏掉西北府河侧；新候选按府河—新沟—汉江—张公堤围堤格局重画，不把495行政区面积当444工程区。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：东西湖区蓄滞洪区。2024水利工程名录总面积 444 km²：",
            "references": [
              {
                "label": "武汉市水利工程分级分类名录",
                "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html"
              },
              {
                "label": "东西湖排水防涝专项规划2022—2035",
                "url": "https://www.dxh.gov.cn/ZWGK/bmxxgk/bwbjxxgk/qswhhpj/qtxxgk/202209/P020260209376280512896.pdf"
              },
              {
                "label": "湖北2024堤防名单",
                "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf"
              },
              {
                "label": "东西湖加快打造中国网谷",
                "url": "https://fgw.wuhan.gov.cn/xwzx/cqfc/202312/t20231221_2325195.html"
              },
              {
                "label": "江岸防汛抗旱预案",
                "url": "https://www.jiangan.gov.cn/jaxxw/zfxxgk/zc_41333/qtzdgkwj/zfbwj/202011/t20201102_1488969.shtml"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "北：新沟至三金潭东西湖围堤，沿府澴河侧（资料记载）；西：新沟围堤接汉江大堤（资料记载）；南：汉江堤新沟至舵落口（资料记载）；东：张公堤舵落口至三金潭约5+000—23+770（资料记载）",
            "references": [
              {
                "label": "武汉市水利工程分级分类名录",
                "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html"
              },
              {
                "label": "东西湖排水防涝专项规划2022—2035",
                "url": "https://www.dxh.gov.cn/ZWGK/bmxxgk/bwbjxxgk/qswhhpj/qtxxgk/202209/P020260209376280512896.pdf"
              },
              {
                "label": "湖北2024堤防名单",
                "url": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf"
              },
              {
                "label": "东西湖加快打造中国网谷",
                "url": "https://fgw.wuhan.gov.cn/xwzx/cqfc/202312/t20231221_2325195.html"
              },
              {
                "label": "江岸防汛抗旱预案",
                "url": "https://www.jiangan.gov.cn/jaxxw/zfxxgk/zc_41333/qtzdgkwj/zfbwj/202011/t20201102_1488969.shtml"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧行政中心椭圆越汉江并漏掉西北府河侧；新候选按府河—新沟—汉江—张公堤围堤格局重画，不把495行政区面积当444工程区。；442规划与444工程口径保留差异；围堤部分桩号未列，精确全周线位未取得；吴家山内部安全区不代表其几何已扣除；不能将金银湖常水面或495行政范围当全工程边界；张公堤、三金潭、舵落口、新沟与围堤的精确交接点未测；东侧和西端连接线推测。；沿河心只是沿堤位置代理，未取得围堤顶线。；444工程与442排水围堤口径不同；工程含少量硚口、江岸，不认定等同东西湖区全域。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "东西湖区蓄滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/hubei-chatgpt-2026-09-13/publications/2026-09-13T07-43-27-654Z-长江-32/extraction.json"
    },
    "武湖": {
      "id": "长江-33",
      "name": "武湖",
      "basin": "长江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:43:30.044Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "武湖",
            "location": "114.4998251,30.79755517",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "武湖",
            "location": "114.49438906,30.77675919",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "武湖",
            "location": "114.41107625,30.70604972",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "武湖大桥",
            "location": "114.57506511,30.81402314",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "武湖河道堤防管理段",
            "location": "114.54377654,30.69159505",
            "anchorKind": "engineering"
          },
          {
            "id": "5",
            "name": "武湖村村委会",
            "location": "114.52651483,30.70755134",
            "anchorKind": "locality"
          },
          {
            "id": "6",
            "name": "武湖村村民委员会",
            "location": "114.53348031,30.70625746",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "长江新区阳逻街武湖村退役军人服务站",
            "location": "114.52652181,30.70757533",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "中共武湖村支部委员会",
            "location": "114.52652081,30.70754432",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "武湖(地铁站)",
            "location": "114.43000019,30.70702451",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "武湖正街",
            "location": "114.42464116,30.6971494",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "湖北鄂政函2024第34号",
          "publisher": "",
          "url": "https://www.hubei.gov.cn/xxgk/gb/202406/W020240618393271896187.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "武汉2024水利工程名录",
          "publisher": "",
          "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "湖北公共资源工程信息",
          "publisher": "",
          "url": "https://www.hbggzyfwpt.cn/jyxx/jsgcXmxxDetail2?guid=3d2ad1cc-1a53-4a34-a951-f3bb80bc0b5c",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "武湖工程报建",
          "publisher": "",
          "url": "https://www.hbbidcloud.cn/shengbenji/jyxx/004001/004001002/20230801/535cbce3-1aab-4e8d-9963-7e73e01e28c4.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省武汉市新洲区",
        "湖北省武汉市黄陂区"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "湖北省武汉市新洲区"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖北武汉长江北岸，传统黄陂、新洲；今工程主要长江新区与黄陂，涉及武湖、阳逻、仓埠、三里、六指、大潭",
        "reasoning": "旧武湖地名椭圆越过长江且漏掉北侧湖区低地；新候选沿长江北侧与滠水东侧展开，北东端按鲁台—仓埠方向推测，未把优化305.2改作现行面积。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：武湖蓄滞洪区、武湖分蓄洪区。2024武汉水利工程名录总面积 277.9 km²：",
            "references": [
              {
                "label": "湖北鄂政函2024第34号",
                "url": "https://www.hubei.gov.cn/xxgk/gb/202406/W020240618393271896187.pdf"
              },
              {
                "label": "武汉2024水利工程名录",
                "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html"
              },
              {
                "label": "湖北公共资源工程信息",
                "url": "https://www.hbggzyfwpt.cn/jyxx/jsgcXmxxDetail2?guid=3d2ad1cc-1a53-4a34-a951-f3bb80bc0b5c"
              },
              {
                "label": "武湖工程报建",
                "url": "https://www.hbbidcloud.cn/shengbenji/jyxx/004001/004001002/20230801/535cbce3-1aab-4e8d-9963-7e73e01e28c4.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "南：长江北岸武湖长江干堤，窑头进退洪闸（资料记载）；西：滠水东堤（资料记载）；北：黄陂鲁台、六指三里大潭等只作方位，具体闭合推测（方位参照）；东：仓埠方向；北东完整围堤未取得（方位参照）",
            "references": [
              {
                "label": "湖北鄂政函2024第34号",
                "url": "https://www.hubei.gov.cn/xxgk/gb/202406/W020240618393271896187.pdf"
              },
              {
                "label": "武汉2024水利工程名录",
                "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html"
              },
              {
                "label": "湖北公共资源工程信息",
                "url": "https://www.hbggzyfwpt.cn/jyxx/jsgcXmxxDetail2?guid=3d2ad1cc-1a53-4a34-a951-f3bb80bc0b5c"
              },
              {
                "label": "武湖工程报建",
                "url": "https://www.hbbidcloud.cn/shengbenji/jyxx/004001/004001002/20230801/535cbce3-1aab-4e8d-9963-7e73e01e28c4.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧武湖地名椭圆越过长江且漏掉北侧湖区低地；新候选沿长江北侧与滠水东侧展开，北东端按鲁台—仓埠方向推测，未把优化305.2改作现行面积。；北东线位与闭合未知，不能把鲁台仓埠连线冒充堤线；277.9/289/305.2不同年代口径；98安全区及207.2蓄洪区优化分项来源链需保留不确定；内部武湖阳逻安全区未取得精确扣除多边形；未找到完整官方范围图；鲁台、仓埠只为方向参照，北东侧连续堤线与转角未定位，全部陆向折线推测。；河心只作堤线位置代理，277.9现行名录与305.2优化口径不混用，未面积缩放。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "武湖蓄滞洪区",
        "武湖分蓄洪区"
      ],
      "chatgptExtractionPath": "automation/output/hubei-chatgpt-2026-09-13/publications/2026-09-13T07-43-30-044Z-长江-33/extraction.json"
    },
    "张渡湖": {
      "id": "长江-34",
      "name": "张渡湖",
      "basin": "长江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:43:32.203Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 22,
        "contextAnchors": [
          {
            "id": "0",
            "name": "涨渡湖",
            "location": "114.70444591,30.6435104",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "涨渡湖街道办事处",
            "location": "114.79430296,30.6691685",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "涨渡湖派出所",
            "location": "114.78965744,30.66778273",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "新洲区涨渡湖林场",
            "location": "114.77626373,30.67305531",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "涨渡湖林场二分场马河湾1号",
            "location": "114.77604527,30.64196157",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "涨渡湖湿地森林公园",
            "location": "114.76796138,30.6719649",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "涨渡湖张鱼渔庄",
            "location": "114.73504228,30.6323693",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "涨渡湖渔场",
            "location": "114.74518075,30.66594695",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "涨渡湖加油站",
            "location": "114.77850259,30.74192808",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "涨渡湖抗日根据地纪念碑",
            "location": "114.75111628,30.70851471",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "涨渡湖闸",
            "location": "114.73999296,30.60799653",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "涨渡湖2025建设工程公众参与公告",
          "publisher": "",
          "url": "https://www.whxinzhou.gov.cn/xxgk_29/zcfg/gsgg/202503/t20250327_2558206.shtml",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "涨渡湖2025安全建设方案示意图",
          "publisher": "",
          "url": "https://www.whxinzhou.gov.cn/xxgk_29/zcfg/gsgg/202503/W020250327369145455504.png",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "武汉2022人大建议答复",
          "publisher": "",
          "url": "https://swj.wuhan.gov.cn/xxgk/new_qtzdgknr/jytabl/202210/t20221026_2071091.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "2005专业文献与图1",
          "publisher": "",
          "url": "https://zgglxb.chd.edu.cn/EN/article/downloadArticleFile.do?attachType=PDF&id=1050",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "武汉2024水利工程名录",
          "publisher": "",
          "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省武汉市新洲区"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "湖北省武汉市新洲区"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖北武汉新洲中南部，长江北岸；双柳、邾城、汪集、李集、涨渡湖5街道",
        "reasoning": "旧椭圆横越长江并以同名湖泊为中心；新候选整体回到长江北侧，按官方涨渡湖方案图的倒水—举水两侧形态向北展开，北部凤凰岗地与河道未定位段明确推测。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：涨渡湖、涨渡湖蓄滞洪区。现行管理总面积 438.32 km²：",
            "references": [
              {
                "label": "涨渡湖2025建设工程公众参与公告",
                "url": "https://www.whxinzhou.gov.cn/xxgk_29/zcfg/gsgg/202503/t20250327_2558206.shtml"
              },
              {
                "label": "涨渡湖2025安全建设方案示意图",
                "url": "https://www.whxinzhou.gov.cn/xxgk_29/zcfg/gsgg/202503/W020250327369145455504.png"
              },
              {
                "label": "武汉2022人大建议答复",
                "url": "https://swj.wuhan.gov.cn/xxgk/new_qtzdgknr/jytabl/202210/t20221026_2071091.html"
              },
              {
                "label": "2005专业文献与图1",
                "url": "https://zgglxb.chd.edu.cn/EN/article/downloadArticleFile.do?attachType=PDF&id=1050"
              },
              {
                "label": "武汉2024水利工程名录",
                "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "西：倒水东堤（资料记载）；东：举水西堤，与白潭湖隔举水（资料记载）；南：长江堵龙干堤，历史童家大湾口门（资料记载）；北：凤凰丘陵岗地，旧文献方向；现优化局部待2025图核（方位参照）",
            "references": [
              {
                "label": "涨渡湖2025建设工程公众参与公告",
                "url": "https://www.whxinzhou.gov.cn/xxgk_29/zcfg/gsgg/202503/t20250327_2558206.shtml"
              },
              {
                "label": "涨渡湖2025安全建设方案示意图",
                "url": "https://www.whxinzhou.gov.cn/xxgk_29/zcfg/gsgg/202503/W020250327369145455504.png"
              },
              {
                "label": "武汉2022人大建议答复",
                "url": "https://swj.wuhan.gov.cn/xxgk/new_qtzdgknr/jytabl/202210/t20221026_2071091.html"
              },
              {
                "label": "2005专业文献与图1",
                "url": "https://zgglxb.chd.edu.cn/EN/article/downloadArticleFile.do?attachType=PDF&id=1050"
              },
              {
                "label": "武汉2024水利工程名录",
                "url": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧椭圆横越长江并以同名湖泊为中心；新候选整体回到长江北侧，按官方涨渡湖方案图的倒水—举水两侧形态向北展开，北部凤凰岗地与河道未定位段明确推测。；旧309/337与现438.32不同时期口径，不能面积反推；北部岗地具体线位与优化安全区切割待图核；旧分洪口门不得等同新进退洪闸坐标；文献河堤方向不是河心线本身；倒水侧、举水中下游及凤凰岗地闭合线没有完整GIS线，图示方位手工推测坐标不是官方坐标，也不是已经配准的精确河心。；图中安全区、城镇与高地凹口未精确扣除；本候选不是净有效蓄洪区。；438.32是现行工程口径；方案图438及优化口径分别保留，不按面积缩放。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "涨渡湖",
        "涨渡湖蓄滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/hubei-chatgpt-2026-09-13/publications/2026-09-13T07-43-32-203Z-长江-34/extraction.json"
    },
    "白潭湖": {
      "id": "长江-35",
      "name": "白潭湖",
      "basin": "长江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:43:34.411Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 18,
        "contextAnchors": [
          {
            "id": "0",
            "name": "白潭湖",
            "location": "114.94771147,30.46213978",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "白潭湖环湖公路",
            "location": "114.95607537,30.47232472",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "白潭湖源墅",
            "location": "114.94606411,30.47686685",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "白潭湖活力之门大桥",
            "location": "114.94294541,30.47366681",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "白潭湖大道",
            "location": "114.92866915,30.47519283",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "白潭湖潮玩欢乐水世界",
            "location": "114.94923887,30.47374064",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "黄冈客厅白潭湖一号",
            "location": "114.94763868,30.47859108",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "白潭湖社区",
            "location": "114.96196052,30.46391339",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "白潭湖环湖公路与白潭湖路交叉口",
            "location": "114.94957362,30.4735282",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "南湖路与白潭湖大道交叉口",
            "location": "114.94950647,30.43750091",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "黄冈市黄州区白潭湖水产保护服务中心",
            "location": "114.94721723,30.47232661",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "黄冈2023优化调整勘察设计招标",
          "publisher": "",
          "url": "https://www.hbbidcloud.cn/huanggang/jyxx/004002/004002002/20230612/77fe9bdd-2d63-40f1-b14f-d8096dcfebe5.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "新洲河道采砂官方资料举水围堤",
          "publisher": "",
          "url": "https://www.whxinzhou.gov.cn/xxgk_29/zcfg/gsgg/202309/P020230914574326150834.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "白潭湖水韵新城湖体报道",
          "publisher": "",
          "url": "https://www.people.com.cn/24hour/n/2013/1024/c25408-23307423.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "湖北省黄冈市黄州区"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "湖北省黄冈市黄州区"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "湖北黄冈长江北岸；工程招标仅到黄冈市，较早城市圈规划称黄冈含团风但完整乡镇范围未知",
        "reasoning": "旧白潭湖地名椭圆跨过长江，只围湖泊附近；新候选沿真实长江北岸展开，并与涨渡湖在同一举水方向代理线两侧分开，北东长孙堤相关封口仍推测。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：白潭湖蓄滞洪区。2023招标蓄滞面积 204 km²：",
            "references": [
              {
                "label": "黄冈2023优化调整勘察设计招标",
                "url": "https://www.hbbidcloud.cn/huanggang/jyxx/004002/004002002/20230612/77fe9bdd-2d63-40f1-b14f-d8096dcfebe5.html"
              },
              {
                "label": "新洲河道采砂官方资料举水围堤",
                "url": "https://www.whxinzhou.gov.cn/xxgk_29/zcfg/gsgg/202309/P020230914574326150834.pdf"
              },
              {
                "label": "白潭湖水韵新城湖体报道",
                "url": "https://www.people.com.cn/24hour/n/2013/1024/c25408-23307423.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "西：举水东岸举东堤，举西对面为涨渡湖（资料记载）；南：长江北岸防洪堤体系（资料记载）；东：长孙堤局部工程线，完整相接未知；原文具体桥梁防补工程来源URL未展开（方位参照）；北：完整闭合与长孙堤接入未知（绘图推断）",
            "references": [
              {
                "label": "黄冈2023优化调整勘察设计招标",
                "url": "https://www.hbbidcloud.cn/huanggang/jyxx/004002/004002002/20230612/77fe9bdd-2d63-40f1-b14f-d8096dcfebe5.html"
              },
              {
                "label": "新洲河道采砂官方资料举水围堤",
                "url": "https://www.whxinzhou.gov.cn/xxgk_29/zcfg/gsgg/202309/P020230914574326150834.pdf"
              },
              {
                "label": "白潭湖水韵新城湖体报道",
                "url": "https://www.people.com.cn/24hour/n/2013/1024/c25408-23307423.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧白潭湖地名椭圆跨过长江，只围湖泊附近；新候选沿真实长江北岸展开，并与涨渡湖在同一举水方向代理线两侧分开，北东长孙堤相关封口仍推测。；北部与东部完整闭合未知；长孙堤仅局部工程关系不能视为完整东界，具体报道来源链未展开；湖体18平方公里不等于204工程；团风涉及依据尺度粗，不能按行政界填满；未取得官方完整范围图与安全区精确边界；举水中下游实际GIS线未取全，西侧为明确图示推测代理，不冒充已下载的真实河心。；长孙堤仅文献局部方向且原回答来源链接未展开，北东所有折点与封口推测；不能将其说成实测连续界线。；204为工程面积而非约18km²常水湖面；湖泊地标只用于内部定位，未面积缩放。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "白潭湖蓄滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/hubei-chatgpt-2026-09-13/publications/2026-09-13T07-43-34-411Z-长江-35/extraction.json"
    },
    "康山圩": {
      "id": "长江-36",
      "name": "康山圩",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "未找到可用同名地物，但政府公文或新闻能够支持一个模糊位置。",
      "reviewedAt": "2026-09-13",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 46,
        "contextAnchors": [
          {
            "id": "B0319016AX",
            "name": "康山乡人民政府",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "瑞康路",
            "type": "政府机构及社会团体;政府机关;乡镇级政府及事业单位",
            "location": "116.432743,28.877483",
            "queryName": "康山乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0FFH1WX2X",
            "name": "余干县康山乡民政服务站",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "瑞康路余干县康山乡人民政府",
            "type": "政府机构及社会团体;政府机关;乡镇级政府及事业单位",
            "location": "116.432517,28.877352",
            "queryName": "康山乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0GUXZ9V6M",
            "name": "余干县康山乡退役军人服务站",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "康山乡政府大院",
            "type": "政府机构及社会团体;政府机关;乡镇级政府及事业单位",
            "location": "116.432953,28.877456",
            "queryName": "康山乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0G3SCX3BW",
            "name": "余干县康山乡大山村退役军人服务站",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "694县道",
            "type": "政府机构及社会团体;政府机关;乡镇以下级政府及事业单位",
            "location": "116.439350,28.878316",
            "queryName": "康山乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0G3SCX3DF",
            "name": "余干县康山乡府前村退役军人服务站",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "康山乡府前村委会",
            "type": "政府机构及社会团体;政府机关;乡镇以下级政府及事业单位",
            "location": "116.428617,28.882492",
            "queryName": "康山乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0G3SCVV44",
            "name": "余干县康山乡团结村退役军人服务站",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "康山乡团结村委会",
            "type": "政府机构及社会团体;政府机关;乡镇以下级政府及事业单位",
            "location": "116.437474,28.878794",
            "queryName": "康山乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0G3SCVHWR",
            "name": "余干县康山乡山头村退役军人服务站",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "山头村委会",
            "type": "政府机构及社会团体;政府机关;乡镇以下级政府及事业单位",
            "location": "116.428683,28.858956",
            "queryName": "康山乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0G3SCVV45",
            "name": "余干县康山乡王家村退役军人服务站",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "康山乡王家村委会",
            "type": "政府机构及社会团体;政府机关;乡镇以下级政府及事业单位",
            "location": "116.428424,28.873140",
            "queryName": "康山乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B031904BC0",
            "name": "余干县鄱阳湖管理局",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "田园鄱阳湖骑行道",
            "type": "政府机构及社会团体;政府机关;区县级政府及事业单位",
            "location": "116.563221,28.899179",
            "queryName": "鄱阳湖",
            "queryRole": "description",
            "anchorKind": "engineering"
          },
          {
            "id": "BZ9LPY003T",
            "name": "鄱阳湖大道",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "余干县",
            "type": "地名地址信息;交通地名;道路名",
            "location": "116.693456,28.725172",
            "queryName": "鄱阳湖",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0KR71QDT3",
            "name": "鄱阳湖大道",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "余干县",
            "type": "地名地址信息;交通地名;道路名",
            "location": "116.678580,28.757583",
            "queryName": "鄱阳湖",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0L3M5K3V4",
            "name": "余干县鄱阳湖湿地生态保护中心",
            "province": "江西省",
            "city": "上饶市",
            "district": "余干县",
            "address": "世纪大道377号",
            "type": "政府机构及社会团体;政府机关;政府机关相关",
            "location": "116.686258,28.699888",
            "queryName": "鄱阳湖",
            "queryRole": "description",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "共产党员网：康山大堤守护人",
          "publisher": "共产党员网：康山大堤守护人",
          "url": "https://www.12371.cn/2020/08/03/VIDE1596457921339171.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "余干县资料和防汛报道均明确康山乡及康山大堤"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "publisher": "水利部政务服务平台",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummaryTemplate": "水利部名录将“{zone}”列入{basin}，用于交叉核对规范名称和流域归属，不单独确定具体边界。",
          "locationSummary": "水利部名录将“康山圩”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "江西省实施《中华人民共和国防洪法》办法",
          "publisher": "南昌市人民政府",
          "url": "https://ajj.nc.gov.cn/ncajj/flfg/201905/48OGY733W8N1EDTXSFTYUAVV159FR8QA.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "江西省法规明确列出康山、珠湖、黄湖、方洲斜塘四处国家蓄滞洪区，交叉确认省域归属。"
        },
        {
          "title": "鄱阳湖珠湖、黄湖、方洲斜塘蓄滞洪区安全建设工程公示",
          "publisher": "南昌市新建区人民政府",
          "url": "https://xjq.nc.gov.cn/xjqrmzf/gggs/202410/aec88a1477f740c197e53ee14190e1ea.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "工程公示将珠湖、黄湖、方洲斜塘纳入同一鄱阳湖蓄滞洪区安全建设项目。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "江西省上饶市余干县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "江西省上饶市余干县西北部、鄱阳湖东南岸；位于赣江南支、抚河、信江三河汇流口下游，主体为康山大堤堤内圩区。",
        "reasoning": "取消旧方案对全部控制点的等比缩放，保持驾湖、锣鼓山、大湖口和院前地名参照的原坐标。南部连线重新作为待核实的陆侧闭合假设。面积仅检查尺度。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "网页资料与面积",
            "outcome": "保留不同口径",
            "detail": "蓄洪面积 292.98 km²；展示尺度参照 343.4 km²（康山大堤保护面积）。集雨面积 450.3 km²：不可作外边界面积；2026采购转载蓄洪面积 277.7 km²：称扣除安全区及保护区，尚未核得原始采购详情；不替换2023口径；历史设计水位淹没面积 312.37 km²：历史预案转载，非现行面积",
            "references": []
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向边界",
            "outcome": "部分线位未知",
            "detail": "北／东北：康山大堤，外侧为鄱阳湖。：资料记载；西／西南：康山垦殖场、瑞洪镇驾湖村一带；驾湖为大堤西端地名。：历史资料与地名参照；东：石口镇院前村一带，为大堤东端地名。：资料记载；村委坐标非堤端坐标；南／东南：隔堤、封堵垭口与自然高地分水岭，向信瑞联圩一侧闭合；具体连接线未知。：采购转载线索，待原始设计核实",
            "references": [
              {
                "label": "回答引用来源",
                "url": "https://chinawater.com.cn/syxg/kd/202312/t20231220_1036156.html"
              },
              {
                "label": "回答引用来源",
                "url": "https://mee.gov.cn/gkml/sthjbgw/spwj1/201412/t20141215_292990.htm"
              },
              {
                "label": "回答引用来源",
                "url": "https://finance.people.com.cn/n1/2023/0510/c1004-32683062.html"
              },
              {
                "label": "回答引用来源",
                "url": "https://xjq.nc.gov.cn/xjqrmzf/gggs/202201/5990bb84f5b24d879299eac828080c87.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://jyqzb.com/detail/content_01202606180159057_5.html"
              },
              {
                "label": "回答引用来源",
                "url": "https://bbs.co188.com/thread-1587474-1-1.html"
              },
              {
                "label": "回答引用来源",
                "url": "https://jyqzb.com/detail/content_01202606180159069_5.html"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "展示验收",
            "outcome": "人工验收推测范围",
            "detail": "取消旧方案对全部控制点的等比缩放，保持驾湖、锣鼓山、大湖口和院前地名参照的原坐标。南部连线重新作为待核实的陆侧闭合假设。面积仅检查尺度。 全部连线仍为推测，非法定边界。",
            "references": []
          }
        ]
      },
      "chatgptExtractionPath": "automation/output/jiangxi-chatgpt-2026-09-13/长江-36/extraction.json"
    },
    "珠湖圩": {
      "id": "长江-37",
      "name": "珠湖圩",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "未找到可用同名地物，但政府公文或新闻能够支持一个模糊位置。",
      "reviewedAt": "2026-09-13",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 15,
        "contextAnchors": []
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "王宗华开展巡河巡湖工作和“安全防范警示日”活动",
          "publisher": "江西日报社大江网",
          "url": "https://jxsr.jxnews.com.cn/system/2025/05/19/020875082.shtml",
          "sourceType": "mainstream-news",
          "supportsLocation": true,
          "locationSummary": "报道将莲湖乡莲北圩与鄱阳县珠湖蓄滞洪区安全建设工程列入同次巡查，可确认工程位于鄱阳县，细部范围仍为模糊判断。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "publisher": "水利部政务服务平台",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummaryTemplate": "水利部名录将“{zone}”列入{basin}，用于交叉核对规范名称和流域归属，不单独确定具体边界。",
          "locationSummary": "水利部名录将“珠湖圩”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "江西省实施《中华人民共和国防洪法》办法",
          "publisher": "南昌市人民政府",
          "url": "https://ajj.nc.gov.cn/ncajj/flfg/201905/48OGY733W8N1EDTXSFTYUAVV159FR8QA.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "江西省法规明确列出康山、珠湖、黄湖、方洲斜塘四处国家蓄滞洪区，交叉确认省域归属。"
        },
        {
          "title": "鄱阳湖珠湖、黄湖、方洲斜塘蓄滞洪区安全建设工程公示",
          "publisher": "南昌市新建区人民政府",
          "url": "https://xjq.nc.gov.cn/xjqrmzf/gggs/202410/aec88a1477f740c197e53ee14190e1ea.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "工程公示将珠湖、黄湖、方洲斜塘纳入同一鄱阳湖蓄滞洪区安全建设项目。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "江西省上饶市鄱阳县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "江西省上饶市鄱阳县西南部、鄱阳湖东岸，以珠湖内湖及周边低地为核心；工程涉及高家岭、双港、四十里街、团林、珠湖、白沙洲六乡镇。工程涉及乡镇不等于全部乡镇均在淹没区内。",
        "reasoning": "以珠湖水体和六乡镇的相对位置重画待审阅外框；取消旧方案整体缩放。保留162.50保护范围展示口径，同时显著列出120.78蓄洪面积，不把两者画成同一测量结果。西北堤线仅有地名代理，尚未沿X700实测描绘。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "网页资料与面积",
            "outcome": "保留不同口径",
            "detail": "蓄洪面积 120.78 km²；展示尺度参照 162.5 km²（珠湖联圩保护面积（沿用既有展示口径））。2018模型洪水范围 253 km²：模型范围，不移植到现行蓄洪区；模型初始水面 64.61 km²：多年平均水位15.06 m下水面，非圩区面积",
            "references": []
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向边界",
            "outcome": "部分线位未知",
            "detail": "西北：珠湖大堤及堤顶公路X700分隔珠湖与鄱阳湖。：2018模型边界，非现行法定线；北：珠湖乡在珠湖北岸；潼津河仅作外部方位参照。：地理参照，精确北界未知；东／东北：高家岭原站前乡在珠湖东岸；四十里街西濒内珠湖。不能把昌江直接定为东界。：地理参照，线位未知；南／东南：团林乡、双港镇位于珠湖南岸；外围山脊线是2018模型的闭合条件。：模型与方位参照，具体山脊未知；西／西南：白沙洲内临珠湖、外临鄱阳湖；青山湖不是已确认界线。：方位参照",
            "references": [
              {
                "label": "回答引用来源",
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/shixiang_7.jsp?mindex=2"
              },
              {
                "label": "回答引用来源",
                "url": "https://chinawater.com.cn/yw/202309/t20230927_1001966.html"
              },
              {
                "label": "回答引用来源",
                "url": "https://xjq.nc.gov.cn/xjqrmzf/gggs/202201/5990bb84f5b24d879299eac828080c87.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://rmcjzz.cjw.cn/cn/article/pdf/preview/10.16232/j.cnki.1001-4179.2018.10.005.pdf"
              },
              {
                "label": "回答引用来源",
                "url": "https://xjq.nc.gov.cn/xjqrmzf/xjbmgsgg16/202207/59e8098ee78f42b6a606d3a73c4282f8.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/nscxmgs/201605/t20160522_339571.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://xzqh.org/html/show/jx/10171.html"
              },
              {
                "label": "回答引用来源",
                "url": "https://baike.sogou.com/m/fullLemma?g_ut=3&lid=7500636"
              },
              {
                "label": "回答引用来源",
                "url": "https://mee.gov.cn/xxgk2018/xxgk/xxgk15/201805/W020180926618499652361.pdf"
              },
              {
                "label": "回答引用来源",
                "url": "https://tt.jxnews.com.cn/news/2591854?app=csp"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "展示验收",
            "outcome": "人工验收推测范围",
            "detail": "以珠湖水体和六乡镇的相对位置重画待审阅外框；取消旧方案整体缩放。保留162.50保护范围展示口径，同时显著列出120.78蓄洪面积，不把两者画成同一测量结果。西北堤线仅有地名代理，尚未沿X700实测描绘。 全部连线仍为推测，非法定边界。",
            "references": []
          }
        ]
      },
      "chatgptExtractionPath": "automation/output/jiangxi-chatgpt-2026-09-13/长江-37/extraction.json"
    },
    "黄湖圩": {
      "id": "长江-38",
      "name": "黄湖圩",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "未找到可用同名地物，但政府公文或新闻能够支持一个模糊位置。",
      "reviewedAt": "2026-09-13",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 22,
        "contextAnchors": [
          {
            "id": "B0FFGJA992",
            "name": "蒋巷镇人民政府",
            "province": "江西省",
            "city": "南昌市",
            "district": "南昌县",
            "address": "蒋巷中大道蒋巷镇政府蒋巷镇委",
            "type": "政府机构及社会团体;政府机关;乡镇级政府及事业单位",
            "location": "116.018952,28.764690",
            "queryName": "蒋巷镇",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B031705H5Q",
            "name": "中共蒋巷镇委员会",
            "province": "江西省",
            "city": "南昌市",
            "district": "南昌县",
            "address": "蒋巷镇",
            "type": "政府机构及社会团体;政府机关;乡镇级政府及事业单位",
            "location": "116.024319,28.757793",
            "queryName": "蒋巷镇",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B03170T9S2",
            "name": "蒋巷镇垾上村民委员会",
            "province": "江西省",
            "city": "南昌市",
            "district": "南昌县",
            "address": "蒋巷镇旱上村",
            "type": "政府机构及社会团体;政府机关;乡镇以下级政府及事业单位",
            "location": "115.977694,28.766766",
            "queryName": "蒋巷镇",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B03170TRK8",
            "name": "蒋巷镇蒋巷村民委员会",
            "province": "江西省",
            "city": "南昌市",
            "district": "南昌县",
            "address": "蒋巷街联谊路胡家自然村152号新农贸市场正门斜对面",
            "type": "政府机构及社会团体;政府机关;乡镇以下级政府及事业单位",
            "location": "116.025793,28.760320",
            "queryName": "蒋巷镇",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0FFKVSPMZ",
            "name": "蒋巷镇居委会",
            "province": "江西省",
            "city": "南昌市",
            "district": "南昌县",
            "address": "望南路与蒋巷街西路交叉口西南40米",
            "type": "政府机构及社会团体;政府机关;乡镇级政府及事业单位",
            "location": "116.020381,28.757447",
            "queryName": "蒋巷镇",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0FFJ4MWCY",
            "name": "蒋巷镇蒋巷村娄家自然村",
            "province": "江西省",
            "city": "南昌市",
            "district": "南昌县",
            "address": "南昌县",
            "type": "地名地址信息;地名地址信息;地名地址信息",
            "location": "116.020903,28.753458",
            "queryName": "蒋巷镇",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B03170UD20",
            "name": "南昌县蒋巷镇叶楼村村民委员会",
            "province": "江西省",
            "city": "南昌市",
            "district": "南昌县",
            "address": "蒋巷镇",
            "type": "政府机构及社会团体;政府机关;乡镇以下级政府及事业单位",
            "location": "115.976331,28.735793",
            "queryName": "蒋巷镇",
            "queryRole": "description",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "南昌市水利局：黄湖、方洲斜塘基本情况",
          "publisher": "南昌市水利局：黄湖、方洲斜塘基本情况",
          "url": "https://water.nc.gov.cn/ncswj/shzhfy/202512/55bd3587c8be4e39a34c097efcaafa19.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "南昌市水利局明确总体区位，地方报道进一步定位到洲头村黄湖圩农田道路"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "publisher": "水利部政务服务平台",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummaryTemplate": "水利部名录将“{zone}”列入{basin}，用于交叉核对规范名称和流域归属，不单独确定具体边界。",
          "locationSummary": "水利部名录将“黄湖圩”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "江西省实施《中华人民共和国防洪法》办法",
          "publisher": "南昌市人民政府",
          "url": "https://ajj.nc.gov.cn/ncajj/flfg/201905/48OGY733W8N1EDTXSFTYUAVV159FR8QA.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "江西省法规明确列出康山、珠湖、黄湖、方洲斜塘四处国家蓄滞洪区，交叉确认省域归属。"
        },
        {
          "title": "鄱阳湖珠湖、黄湖、方洲斜塘蓄滞洪区安全建设工程公示",
          "publisher": "南昌市新建区人民政府",
          "url": "https://xjq.nc.gov.cn/xjqrmzf/gggs/202410/aec88a1477f740c197e53ee14190e1ea.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "工程公示将珠湖、黄湖、方洲斜塘纳入同一鄱阳湖蓄滞洪区安全建设项目。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "江西省南昌市南昌县蒋巷镇"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "江西省南昌市南昌县蒋巷镇东北部、蒋巷联圩东北角，赣江南支与中支入鄱阳湖尾闾三角洲，东侧临鄱阳湖。工程征地涉及三洞、山尾、胜利、叶楼、蒋巷五村，不等于边界依次经过五村。",
        "reasoning": "将新候选集中在东北入湖尾闾和分洪口门工程参照附近，保留口门参照坐标；不再把上游的河流搜索点当成界址。隔堤端点和两侧堤线尚未取得，整圈均为低精度假设。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "网页资料与面积",
            "outcome": "保留不同口径",
            "detail": "蓄洪面积 49.31 km²；展示尺度参照 49.31 km²（蓄洪面积（保护面积缺失时的展示尺度参照））。集雨面积 49.28 km²：2024工程报道口径，与蓄洪面积分列；保护耕地折算 31 km²：4.65万亩，仅耕地；历史分蓄洪区面积 45.5 km²：旧资料，不替换现行49.31；蒋巷联圩整体保护面积 149.86 km²：母圩面积，不可套用于黄湖",
            "references": []
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向边界",
            "outcome": "部分线位未知",
            "detail": "东：临鄱阳湖外洪圩堤，沿彭泽湖、玉丰电力排灌站至黄湖排水闸。：环评地物顺序；尚未坐标化；北：自黄湖排水闸向西约8 km，经分洪口门、东沙湖、石头河电排站至下西舍磨盘洲；外侧为赣江中支入湖尾闾。：环评堤线记录；北界为方位归纳；西／西南：黄湖隔堤参与围合，长8.57 km；完整起终点及逐段线位未知。：官方工程关系，端点未知；南：衔接五丰圩方向及蒋巷联圩内部圩区；隔堤与外洪堤的闭合线未知，不能直接认作赣江南支。：方位参照，线位未知",
            "references": [
              {
                "label": "回答引用来源",
                "url": "https://nc.gov.cn/ncszf/jrnc/202411/596a3afafef44223a9c58d64612b4999.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://water.nc.gov.cn/ncswj/shzhfy/202512/55bd3587c8be4e39a34c097efcaafa19.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://wapbaike.baidu.com/item/%E9%84%B1%E9%98%B3%E6%B9%96/19437048"
              },
              {
                "label": "回答引用来源",
                "url": "https://nchdz.nc.gov.cn/ncgxq/resource/uploadfile/file/20200722/20200722112417141.pdf"
              },
              {
                "label": "回答引用来源",
                "url": "https://ncx.nc.gov.cn/ncxrmzf/zyjgggs/202602/af0b6657ed9147589eacade0159f0891.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://ncx.nc.gov.cn/ncxrmzf/xydt/202212/79df3bdcb92440aa9b90f5a5453e7e7c.shtml"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "展示验收",
            "outcome": "人工验收推测范围",
            "detail": "将新候选集中在东北入湖尾闾和分洪口门工程参照附近，保留口门参照坐标；不再把上游的河流搜索点当成界址。隔堤端点和两侧堤线尚未取得，整圈均为低精度假设。 全部连线仍为推测，非法定边界。",
            "references": []
          }
        ]
      },
      "chatgptExtractionPath": "automation/output/jiangxi-chatgpt-2026-09-13/长江-38/extraction.json"
    },
    "方洲斜塘": {
      "id": "长江-39",
      "name": "方洲斜塘",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "未找到可用同名地物，但政府公文或新闻能够支持一个模糊位置。",
      "reviewedAt": "2026-09-13",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "B031703HG4",
            "name": "铁河乡人民政府",
            "province": "江西省",
            "city": "南昌市",
            "district": "新建区",
            "address": "象山镇",
            "type": "政府机构及社会团体;政府机关;乡镇级政府及事业单位",
            "location": "115.975033,29.027576",
            "queryName": "铁河乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0FFMAVQAN",
            "name": "铁河乡车辆客运管理站",
            "province": "江西省",
            "city": "南昌市",
            "district": "新建区",
            "address": "铁金段与赤城北路交叉口西北180米",
            "type": "政府机构及社会团体;政府机关;政府机关相关",
            "location": "115.970280,29.030380",
            "queryName": "铁河乡",
            "queryRole": "description",
            "anchorKind": "engineering"
          },
          {
            "id": "B031702QH0",
            "name": "中共新建区铁河乡委员会",
            "province": "江西省",
            "city": "南昌市",
            "district": "新建区",
            "address": "铁河乡政府",
            "type": "政府机构及社会团体;政府机关;乡镇级政府及事业单位",
            "location": "115.975203,29.027425",
            "queryName": "铁河乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0MGGP2RK3",
            "name": "铁河乡就业之家",
            "province": "江西省",
            "city": "南昌市",
            "district": "新建区",
            "address": "铁河乡人民政府东南门北80米",
            "type": "政府机构及社会团体;政府机关;政府机关相关",
            "location": "115.975156,29.028016",
            "queryName": "铁河乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0J02AJZ2Q",
            "name": "新建区铁河乡公共服务办公室",
            "province": "江西省",
            "city": "南昌市",
            "district": "新建区",
            "address": "苏宁易购西北侧50米",
            "type": "政府机构及社会团体;政府机关;乡镇级政府及事业单位",
            "location": "115.969343,29.031117",
            "queryName": "铁河乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0GUOL672E",
            "name": "铁河乡退役军人服务站",
            "province": "江西省",
            "city": "南昌市",
            "district": "新建区",
            "address": "赤城北路",
            "type": "政府机构及社会团体;政府及社会团体相关;政府及社会团体相关",
            "location": "115.975180,29.027428",
            "queryName": "铁河乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0M6TD3ELV",
            "name": "铁河乡街道社区交通安全劝导站",
            "province": "江西省",
            "city": "南昌市",
            "district": "新建区",
            "address": "铁河卫生院南侧130米",
            "type": "政府机构及社会团体;政府机关;政府机关相关",
            "location": "115.975656,29.024702",
            "queryName": "铁河乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0IK2M7WNA",
            "name": "新建区铁河乡赤城村退役军人服务站",
            "province": "江西省",
            "city": "南昌市",
            "district": "新建区",
            "address": "铁河敬老院东侧120米",
            "type": "政府机构及社会团体;政府及社会团体相关;政府及社会团体相关",
            "location": "115.963425,29.035155",
            "queryName": "铁河乡",
            "queryRole": "description",
            "anchorKind": "administrative"
          },
          {
            "id": "B0K17DRNZ0",
            "name": "方洲斜塘蓄滞洪区安全建设工程分洪口",
            "province": "",
            "city": "",
            "district": "",
            "address": "江西省南昌市新建区043县道",
            "type": "地名地址信息;输入提示;地名",
            "location": "116.003279,29.075631",
            "queryName": "方洲斜塘",
            "queryRole": "zone-name",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "南昌市水利局：黄湖、方洲斜塘基本情况",
          "publisher": "南昌市水利局：黄湖、方洲斜塘基本情况",
          "url": "https://water.nc.gov.cn/ncswj/shzhfy/202512/55bd3587c8be4e39a34c097efcaafa19.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "南昌市水利局明确现行行政归属；纠正项目原先误写为鄱阳县"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "publisher": "水利部政务服务平台",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummaryTemplate": "水利部名录将“{zone}”列入{basin}，用于交叉核对规范名称和流域归属，不单独确定具体边界。",
          "locationSummary": "水利部名录将“方洲斜塘”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "江西省实施《中华人民共和国防洪法》办法",
          "publisher": "南昌市人民政府",
          "url": "https://ajj.nc.gov.cn/ncajj/flfg/201905/48OGY733W8N1EDTXSFTYUAVV159FR8QA.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "江西省法规明确列出康山、珠湖、黄湖、方洲斜塘四处国家蓄滞洪区，交叉确认省域归属。"
        },
        {
          "title": "鄱阳湖珠湖、黄湖、方洲斜塘蓄滞洪区安全建设工程公示",
          "publisher": "南昌市新建区人民政府",
          "url": "https://xjq.nc.gov.cn/xjqrmzf/gggs/202410/aec88a1477f740c197e53ee14190e1ea.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "工程公示将珠湖、黄湖、方洲斜塘纳入同一鄱阳湖蓄滞洪区安全建设项目。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "江西省南昌市新建区铁河乡"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "江西省南昌市新建区铁河乡，赣西联圩西北部、赣江主支左岸、鄱阳湖西南缘。铁河穿过区内，分为方洲与斜塘圩区；象山镇工程临时用地不能直接当作淹没区。",
        "reasoning": "旧猜测圈偏向西北，方洲分场参照点落在旧圈以东。本候选加入东南部方洲分场、新丰分场方向，形成包含两部分的围合假设；保留分洪口门参照坐标。西侧高地和南隔堤均未取得实测线，仍需叠图审阅。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "网页资料与面积",
            "outcome": "保留不同口径",
            "detail": "蓄洪面积 33.94 km²；展示尺度参照 33.94 km²（现状蓄洪面积（保护面积缺失时的展示尺度参照））。2023蓄洪淹没面积 33.93 km²：与33.94分列，0.01差异原因未核实；水网规划蓄洪面积 35.41 km²：不同规划口径；总集雨面积 39.05 km²：不是蓄洪面积；保护耕地折算 22.13 km²：3.32万亩，仅耕地；赣西联圩保护面积 114.58 km²：母圩面积，不套用于本区",
            "references": []
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向边界",
            "outcome": "部分线位未知",
            "detail": "南：隔堤，资料长度6.443 km；两端测量坐标未知。：规划直接记载；东：赣西联圩相应堤段。：规划直接记载，堤段线位未知；北：赣西联圩相应堤段。：规划直接记载，不能直接当成自然湖岸；西：赣西联圩与自然高地分水岭共同围合。：规划直接记载，具体高地线未知；内部：铁河、方洲圩、木莲圩、斜塘圩属于内部分区。：不能默认连接为外围边界",
            "references": [
              {
                "label": "回答引用来源",
                "url": "https://water.nc.gov.cn/ncswj/shzhfy/202512/55bd3587c8be4e39a34c097efcaafa19.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://xjq.nc.gov.cn/xjqrmzf/zdjcygk/202412/383b8bf1d39d49588cf7fa53824eb77f/files/%E9%99%84%E4%BB%B61%E5%8D%97%E6%98%8C%E5%B8%82%E6%96%B0%E5%BB%BA%E5%8C%BA%E6%B0%B4%E7%BD%91%E5%BB%BA%E8%AE%BE%E8%A7%84%E5%88%92%EF%BC%88%E6%8A%A5%E6%89%B9%E7%A8%BF%EF%BC%89.pdf"
              },
              {
                "label": "回答引用来源",
                "url": "https://chinawater.com.cn/yw/202309/t20230927_1001966.html"
              },
              {
                "label": "回答引用来源",
                "url": "https://xjq.nc.gov.cn/xjqrmzf/gggs/202201/5990bb84f5b24d879299eac828080c87.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://xjq.nc.gov.cn/xjqrmzf/xjbmgfxwj36/202105/fc0f89db6d7f4c92879f1f0d874ac118.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://xzqh.org/show/china/2019/36/360112.html"
              },
              {
                "label": "回答引用来源",
                "url": "https://bnr.nc.gov.cn/ncszrzyj/lsyd/202412/984c618acd654248beeab7d637b00e8c.shtml"
              },
              {
                "label": "回答引用来源",
                "url": "https://xjq.nc.gov.cn/xjqrmzf/xjbmgsgg16/202207/59e8098ee78f42b6a606d3a73c4282f8.shtml"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "展示验收",
            "outcome": "人工验收推测范围",
            "detail": "旧猜测圈偏向西北，方洲分场参照点落在旧圈以东。本候选加入东南部方洲分场、新丰分场方向，形成包含两部分的围合假设；保留分洪口门参照坐标。西侧高地和南隔堤均未取得实测线，仍需叠图审阅。 全部连线仍为推测，非法定边界。",
            "references": []
          }
        ]
      },
      "chatgptExtractionPath": "automation/output/jiangxi-chatgpt-2026-09-13/长江-39/extraction.json"
    },
    "华阳河": {
      "id": "长江-40",
      "name": "华阳河",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 66,
        "contextAnchors": [
          {
            "id": "0",
            "name": "西隔堤北端判读代理",
            "location": "115.97002198,30.08937925",
            "anchorKind": "terrain-reference"
          },
          {
            "id": "1",
            "name": "西隔堤接黄广大堤判读代理",
            "location": "116.11326609,29.84165851",
            "anchorKind": "terrain-reference"
          },
          {
            "id": "2",
            "name": "东隔堤南部判读代理",
            "location": "116.70299781,30.07544233",
            "anchorKind": "terrain-reference"
          },
          {
            "id": "3",
            "name": "东隔堤接北丘陵判读代理",
            "location": "116.65288239,30.14435167",
            "anchorKind": "terrain-reference"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "华阳河蓄滞洪区建设工程可行性研究报告获得批复",
          "url": "https://www.ndrc.gov.cn/fzggw/jgsj/njs/sjdt/202111/t20211126_1305347.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "批复明确治理范围西起湖北八一大堤、东至安徽合成圩西堤、南起同马大堤和黄广大堤、北至丘陵岗地蓄洪水位以下区域。"
        },
        {
          "title": "关于华阳河蓄滞洪区建设工程环境影响报告书的批复",
          "url": "https://www.mee.gov.cn/xxgk2018/xxgk/xxgk11/202009/t20200904_796717.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "批复确认工程位于安徽省安庆市宿松县、望江县、太湖县和湖北省黄冈市黄梅县境内。"
        },
        {
          "title": "华阳河蓄滞洪区建设工程相关项目计划",
          "url": "https://whfgw.wuhu.gov.cn/group4/M00/08/20/rBgXDmJnoZ-ATuGkAAfAUTtqQus650.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "项目计划列明望江县内安全区和控制工程，用于交叉核对工程位置。"
        },
        {
          "title": "湖北省华阳河蓄滞洪区西隔堤加固工程建设控制范围通告（2016年第6期公报第45页）",
          "url": "https://www.hubei.gov.cn/gbhis/2016/2016-06.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "鄂政函〔2015〕281号明确西隔堤加固段南接黄广大堤2+560，北至黄梅县城东北抱儿山；这是文字端点，未给测量坐标。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“华阳河”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省水利发展“十四五”规划",
          "url": "https://www.ahjd.gov.cn/OpennessContent/show/2318784.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划列出华阳河工程以及滁河荒草二圩、荒草三圩、蒿子圩、汪波东荡进退洪闸建设。"
        },
        {
          "title": "宝塔河闸站工程进入尾声（2025年9月18日第2版）",
          "url": "https://aqdzb.aqnews.com.cn/epaper/xml/aqrb/20250918/RB2025091802.pdf",
          "sourceType": "authoritative-report",
          "supportsLocation": true,
          "locationSummary": "望江县水利局现场采访说明宝塔河闸站位于宝塔河与新东隔堤交叉处，由原城关闸、宝塔河泵站合建，辅助核对东界工程对象。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省安庆市宿松县",
        "安徽省安庆市望江县",
        "安徽省安庆市太湖县",
        "湖北省黄冈市黄梅县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "安徽省安庆市宿松县、望江县、太湖县和湖北省黄冈市黄梅县境内，西起湖北八一大堤，东至安徽合成圩西堤，南起同马大堤和黄广大堤，北至丘陵岗地蓄洪水位以下区域",
        "reasoning": "国家发展改革委明确西隔堤、新东隔堤及南侧两道江堤四至；结合本区公开DEM，以龙感湖西侧向望江西侧展开的不规则低地范围重画，避开长江南岸与北侧连片丘陵。堤线为文字和地形约束的低精度代理，尚未取得测量堤线。 图示轮廓由本区独立判读确定，未按参考面积配平；待人工验收，非法定边界。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "国家发展改革委明确西隔堤、新东隔堤及南侧两道江堤四至；结合本区公开DEM，以龙感湖西侧向望江西侧展开的不规则低地范围重画，避开长江南岸与北侧连片丘陵。堤线为文字和地形约束的低精度代理，尚未取得测量堤线",
            "references": [
              {
                "url": "https://www.ndrc.gov.cn/fzggw/jgsj/njs/sjdt/202111/t20211126_1305347.html",
                "label": "引用 1"
              },
              {
                "url": "https://www.mee.gov.cn/xxgk2018/xxgk/xxgk11/202009/t20200904_796717.html",
                "label": "引用 2"
              },
              {
                "url": "https://whfgw.wuhu.gov.cn/group4/M00/08/20/rBgXDmJnoZ-ATuGkAAfAUTtqQus650.pdf",
                "label": "引用 3"
              },
              {
                "url": "https://www.hubei.gov.cn/gbhis/2016/2016-06.pdf",
                "label": "引用 4"
              },
              {
                "url": "https://aqdzb.aqnews.com.cn/epaper/xml/aqrb/20250918/RB2025091802.pdf",
                "label": "引用 5"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 6"
              },
              {
                "url": "https://www.ahjd.gov.cn/OpennessContent/show/2318784.html",
                "label": "引用 7"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：安徽省安庆市宿松县、安徽省安庆市望江县、安徽省安庆市太湖县、湖北省黄冈市黄梅县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：安徽省安庆市宿松县、望江县、太湖县和湖北省黄冈市黄梅县境内，西起湖北八一大堤，东至安徽合成圩西堤，南起同马大堤和黄广大堤，北至丘陵岗地蓄洪水位以下区域。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "荒草二圩": {
      "id": "长江-41",
      "name": "荒草二圩",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 6,
        "contextAnchors": [
          {
            "id": "0",
            "name": "荒草二圩蓄洪区",
            "location": "118.31458611,32.01468259",
            "anchorKind": "location-clue"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "中共全椒县委关于巡视整改进展情况的通报",
          "url": "https://m.ahjjjc.gov.cn/p/108279.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "通报明确全椒县荒草二圩进退洪闸工程。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“荒草二圩”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省水利发展“十四五”规划",
          "url": "https://www.ahjd.gov.cn/OpennessContent/show/2318784.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划列出华阳河工程以及滁河荒草二圩、荒草三圩、蒿子圩、汪波东荡进退洪闸建设。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省滁州市全椒县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "安徽省滁州市全椒县",
        "reasoning": "保留本区已记录的地点锚点与独立候选外侧轮廓，按人工审阅要求与荒草三圩设置共用推定分界；接边且内部不重合。分界按两区定位点之间的平分线修正显示关系，未取得实测分隔堤。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "保留本区已记录的地点锚点与独立候选外侧轮廓，按人工审阅要求与荒草三圩设置共用推定分界；接边且内部不重合。分界按两区定位点之间的平分线修正显示关系，未取得实测分隔堤",
            "references": [
              {
                "url": "https://m.ahjjjc.gov.cn/p/108279.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.ahjd.gov.cn/OpennessContent/show/2318784.html",
                "label": "引用 3"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：安徽省滁州市全椒县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：安徽省滁州市全椒县。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "荒草三圩": {
      "id": "长江-42",
      "name": "荒草三圩",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 7,
        "contextAnchors": [
          {
            "id": "0",
            "name": "荒草三圩蓄洪区",
            "location": "118.32427459,32.03007682",
            "anchorKind": "location-clue"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "中共全椒县委关于巡视整改进展情况的通报",
          "url": "https://m.ahjjjc.gov.cn/p/108279.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "通报明确全椒县荒草三圩进退洪闸工程。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“荒草三圩”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省水利发展“十四五”规划",
          "url": "https://www.ahjd.gov.cn/OpennessContent/show/2318784.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划列出华阳河工程以及滁河荒草二圩、荒草三圩、蒿子圩、汪波东荡进退洪闸建设。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省滁州市全椒县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "安徽省滁州市全椒县",
        "reasoning": "保留本区已记录的地点锚点与独立候选外侧轮廓，按人工审阅要求与荒草二圩设置共用推定分界；接边且内部不重合。分界按两区定位点之间的平分线修正显示关系，未取得实测分隔堤。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "保留本区已记录的地点锚点与独立候选外侧轮廓，按人工审阅要求与荒草二圩设置共用推定分界；接边且内部不重合。分界按两区定位点之间的平分线修正显示关系，未取得实测分隔堤",
            "references": [
              {
                "url": "https://m.ahjjjc.gov.cn/p/108279.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.ahjd.gov.cn/OpennessContent/show/2318784.html",
                "label": "引用 3"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：安徽省滁州市全椒县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：安徽省滁州市全椒县。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "汪波东荡": {
      "id": "长江-43",
      "name": "汪波东荡",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "汊河镇人民政府",
            "location": "118.59404454,32.22222912",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "中共汊河镇纪律检查委员会",
            "location": "118.59572026,32.20659055",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "来安县汊河镇镇综合行政执法大队",
            "location": "118.57928917,32.23872879",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "来安县汊河镇退役军人服务站",
            "location": "118.59706857,32.20541333",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "来安县汊河镇综治中心",
            "location": "118.58074117,32.23770442",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "汊河镇汊河社区退役军人服务站",
            "location": "118.58262338,32.21046392",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "来安县三城镇沈圩村综治中心",
            "location": "118.51543332,32.2316904",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "沈圩村村民委员会",
            "location": "118.51539348,32.2318235",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "三城镇沈圩村退役军人服务站",
            "location": "118.51534664,32.23165966",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "相官村村民委员会",
            "location": "118.53961053,32.27470792",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "相官村党群服务中心",
            "location": "118.53984479,32.27461134",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "关于打造三城湿地水乡发展生态旅游业议案的答复",
          "url": "https://ahlard.gov.cn/dblxqz/12686.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "答复将汪波荡农场与来安县南部三城乡、汊河镇等区域直接关联；结合蓄滞洪工程资料，可确认到来安县南部。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“汪波东荡”列入长江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省水利发展“十四五”规划",
          "url": "https://www.ahjd.gov.cn/OpennessContent/show/2318784.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划列出华阳河工程以及滁河荒草二圩、荒草三圩、蒿子圩、汪波东荡进退洪闸建设。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省滁州市来安县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "来安县南部汊河镇、三城乡，汪波荡农场西荡—广大圩、沈圩一带",
        "reasoning": "独立读取汪波东荡证据包；先锁定安徽省滁州市来安县及“来安县南部汊河镇、三城乡，汪波荡农场西荡—广大圩、沈圩一带”，再以本区地图锚点定中心与方向，按锚点跨度确定低精度显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "县人大答复将汪波荡农场与汊河镇、三城乡连接，并进一步列出西荡、广大圩和沈圩等片区",
            "references": [
              {
                "url": "https://ahlard.gov.cn/dblxqz/12686.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.ahjd.gov.cn/OpennessContent/show/2318784.html",
                "label": "引用 3"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：安徽省滁州市来安县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：来安县南部汊河镇、三城乡，汪波荡农场西荡—广大圩、沈圩一带。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "蒿子圩": {
      "id": "长江-44",
      "name": "蒿子圩",
      "basin": "长江流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T05:56:46.423Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 8,
        "contextAnchors": [
          {
            "id": "0",
            "name": "蒿子圩",
            "location": "118.50859697,32.14799424",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "江苏省生态空间管控区域规划",
          "publisher": "",
          "url": "https://www.jiangsu.gov.cn/module/download/downfile.jsp?classid=0&filename=41d4406973644c03b562924cf59cd693.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "南京水务局：滁河堤防浦口段、蒿子圩闸精细化管理公示",
          "publisher": "",
          "url": "https://shuiwu.nanjing.gov.cn/njsswj/202311/t20231120_4101255.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "夏心旻检查部署南京防汛工作",
          "publisher": "",
          "url": "https://www.zgjssw.gov.cn/shixianchuanzhen/nanjing/202206/t20220626_7595836.shtml",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "人民日报：南京浦口生态绿色一体化发展",
          "publisher": "",
          "url": "https://js.people.com.cn/n2/2021/1109/c360304-34995945.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "永宁街道公开工作资料",
          "publisher": "",
          "url": "https://www.pukou.gov.cn/cypk/jdgk/ynjd/gsgg/202301/P020230128620050292809.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "安徽省主体功能区规划（消歧）",
          "publisher": "",
          "url": "https://fzghc.aufe.edu.cn/_upload/article/files/82/9b/67ab1c204fc9bb09152914a0edfc/2f868a03-9b82-4166-beae-570f12bcede8.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84河线及地名下载存档，只作定位代理"
        }
      ],
      "verifiedAdministrativeAreas": [
        "江苏省南京市浦口区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "江苏南京市浦口区永宁街道，滁河浦口侧，位于张圩重要湿地西侧；滁河对岸安徽滁州南谯另有同名圩，必须分开。",
        "reasoning": "旧圆仅围单一地标、范围过大。本候选在该浦口地标附近贴实际滁河弯道收束成小型圩形；1.9 km²水利与1.34 km²生态口径分列，未把河流几何北侧一概当安徽。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：蒿子圩滞洪区、蒿子圩蓄滞洪区。南京防汛公开水利蓄滞洪总面积 1.9 km²：设计蓄洪水位12.5m",
            "references": [
              {
                "label": "江苏省生态空间管控区域规划",
                "url": "https://www.jiangsu.gov.cn/module/download/downfile.jsp?classid=0&filename=41d4406973644c03b562924cf59cd693.pdf"
              },
              {
                "label": "南京水务局：滁河堤防浦口段、蒿子圩闸精细化管理公示",
                "url": "https://shuiwu.nanjing.gov.cn/njsswj/202311/t20231120_4101255.html"
              },
              {
                "label": "夏心旻检查部署南京防汛工作",
                "url": "https://www.zgjssw.gov.cn/shixianchuanzhen/nanjing/202206/t20220626_7595836.shtml"
              },
              {
                "label": "人民日报：南京浦口生态绿色一体化发展",
                "url": "https://js.people.com.cn/n2/2021/1109/c360304-34995945.html"
              },
              {
                "label": "永宁街道公开工作资料",
                "url": "https://www.pukou.gov.cn/cypk/jdgk/ynjd/gsgg/202301/P020230128620050292809.pdf"
              },
              {
                "label": "安徽省主体功能区规划（消歧）",
                "url": "https://fzghc.aufe.edu.cn/_upload/article/files/82/9b/67ab1c204fc9bb09152914a0edfc/2f868a03-9b82-4166-beae-570f12bcede8.pdf"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "南：滁河是苏皖同名圩分隔线；江苏对象须锁浦口侧，不能跨河入南谯。（资料记载）；东：相邻张圩重要湿地西至蒿子圩、南至滁河，蒿子圩在张圩西侧。（资料记载）；其他：蒿子圩闸属滁河堤防浦口段，作为迎河侧控制点；760m隐患堤防加固只为工程线索。（方位参照）；北：北侧围堤连续线未提供，底图可辨围堤或闭合段标推测。（绘图推断）；西：西侧围堤连续线未提供，闭合标推测。（绘图推断）",
            "references": [
              {
                "label": "江苏省生态空间管控区域规划",
                "url": "https://www.jiangsu.gov.cn/module/download/downfile.jsp?classid=0&filename=41d4406973644c03b562924cf59cd693.pdf"
              },
              {
                "label": "南京水务局：滁河堤防浦口段、蒿子圩闸精细化管理公示",
                "url": "https://shuiwu.nanjing.gov.cn/njsswj/202311/t20231120_4101255.html"
              },
              {
                "label": "夏心旻检查部署南京防汛工作",
                "url": "https://www.zgjssw.gov.cn/shixianchuanzhen/nanjing/202206/t20220626_7595836.shtml"
              },
              {
                "label": "人民日报：南京浦口生态绿色一体化发展",
                "url": "https://js.people.com.cn/n2/2021/1109/c360304-34995945.html"
              },
              {
                "label": "永宁街道公开工作资料",
                "url": "https://www.pukou.gov.cn/cypk/jdgk/ynjd/gsgg/202301/P020230128620050292809.pdf"
              },
              {
                "label": "安徽省主体功能区规划（消歧）",
                "url": "https://fzghc.aufe.edu.cn/_upload/article/files/82/9b/67ab1c204fc9bb09152914a0edfc/2f868a03-9b82-4166-beae-570f12bcede8.pdf"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧圆仅围单一地标、范围过大。本候选在该浦口地标附近贴实际滁河弯道收束成小型圩形；1.9 km²水利与1.34 km²生态口径分列，未把河流几何北侧一概当安徽。；无官方圩界和闸口经纬度；北/西侧明确堤名与连续线位；不可据1.9km²机械缩放；南向字段为相邻张圩南至滁河及苏皖分隔关系，具体弯河方位以真实河线核对；西侧、北侧和与张圩接界均为推测连线，未取得连续围堤或闸轴测量坐标。；浦口参考县界用于行政位置和西端小角保守避让（DataV显示数据GCJ-02转WGS84），不等于圩界或法定省界认定；不能用笼统南北岸替代具体河弯。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "蒿子圩滞洪区",
        "蒿子圩蓄滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/jiangsu-chatgpt-2026-09-13/publications/2026-09-13T05-56-46-423Z-长江-44/extraction.json"
    },
    "北金堤": {
      "id": "黄河-01",
      "name": "北金堤",
      "basin": "黄河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:04:02.889Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 19,
        "contextAnchors": [
          {
            "id": "0",
            "name": "渠村分洪闸",
            "location": "115.01262377,35.3738779",
            "anchorKind": "engineering"
          },
          {
            "id": "1",
            "name": "北金堤滞洪大桥",
            "location": "115.60330062,35.91007333",
            "anchorKind": "engineering"
          },
          {
            "id": "2",
            "name": "北金堤大桥",
            "location": "115.60769036,35.93116728",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [
        {
          "title": "搜狗百科：北金堤滞洪区",
          "publisher": "搜狗百科",
          "url": "https://baike.sogou.com/m/fullLemma?g_ut=3&lid=72401921",
          "sourceType": "encyclopedia",
          "supportsLocation": false,
          "confidenceEligible": false,
          "role": "search-expansion",
          "checkedAt": "2026-07-24",
          "locationSummary": "词条补充渠村、邢庙两处分洪闸及北金堤沿线线索；总面积和跨县范围以河南省政府资料为准。",
          "searchTerms": [
            "渠村分洪闸",
            "邢庙分洪闸",
            "临黄堤"
          ],
          "locationRelations": [
            "临黄堤与北金堤之间"
          ],
          "crossValidation": {
            "status": "matched",
            "matchedAdministrativeAreas": [
              "河南省濮阳市",
              "河南省安阳市",
              "山东省聊城市"
            ],
            "matchedRelations": [
              "临黄堤—北金堤之间"
            ],
            "supportingSourceUrls": [
              "https://file.henan.gov.cn/4500000001/2020-04-23/1587641251474MdSsiyKH.pdf"
            ],
            "boundaryEligible": false
          }
        }
      ],
      "governmentSources": [
        {
          "title": "2024河南水利厅洪水风险图包3招标",
          "publisher": "",
          "url": "https://kaifeng.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2024/10/21/aad0f483f4b043aeb0310c759eb17bc3.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "黄河保护法实施办法草案说明",
          "publisher": "",
          "url": "https://oss.henanrd.gov.cn/hnsrd-lzpt-oss001/cms/20241204/564ea852bd9643dfaa28dfa8535dacc0.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "北金堤分滞洪区水利百科",
          "publisher": "",
          "url": "https://www.shuizhishi.cn/c/2020-04-09/519338.shtml",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "渠村分洪闸专业调研",
          "publisher": "",
          "url": "https://www.yrcti.edu.cn/slgcxy/info/1042/8257.htm",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省新乡市长垣市",
        "河南省安阳市滑县",
        "河南省濮阳市濮阳县",
        "河南省濮阳市范县",
        "河南省濮阳市台前县",
        "山东省聊城市莘县",
        "山东省聊城市阳谷县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "豫鲁两省7县市：河南长垣、滑县、濮阳、范县、台前；山东莘县、阳谷。用户河南分组不改变真实跨省归属。",
        "reasoning": "旧椭圆以渠村和北金堤桥连线为轴，遗漏长垣方向且横越黄河；新候选沿实际黄河左侧延伸成西南—东北带，保留豫鲁跨省，北侧堤线未测处全部推测。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：北金堤蓄滞洪区、北金堤分滞洪区、北金堤滞洪区。官方洪水风险图编制区/总面积 2316 km²：",
            "references": [
              {
                "label": "2024河南水利厅洪水风险图包3招标",
                "url": "https://kaifeng.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2024/10/21/aad0f483f4b043aeb0310c759eb17bc3.pdf"
              },
              {
                "label": "黄河保护法实施办法草案说明",
                "url": "https://oss.henanrd.gov.cn/hnsrd-lzpt-oss001/cms/20241204/564ea852bd9643dfaa28dfa8535dacc0.pdf"
              },
              {
                "label": "北金堤分滞洪区水利百科",
                "url": "https://www.shuizhishi.cn/c/2020-04-09/519338.shtml"
              },
              {
                "label": "渠村分洪闸专业调研",
                "url": "https://www.yrcti.edu.cn/slgcxy/info/1042/8257.htm"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "北：原北金堤构成北侧围堤体系。（资料记载）；南：黄河左岸部分临黄堤。（资料记载）；西：西南延至长垣方向，旧石头庄进洪口；渠村闸不是全区西南端。（方位参照）；东：东北下端台前张庄临黄堤张庄排水闸方向。（方位参照）",
            "references": [
              {
                "label": "2024河南水利厅洪水风险图包3招标",
                "url": "https://kaifeng.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2024/10/21/aad0f483f4b043aeb0310c759eb17bc3.pdf"
              },
              {
                "label": "黄河保护法实施办法草案说明",
                "url": "https://oss.henanrd.gov.cn/hnsrd-lzpt-oss001/cms/20241204/564ea852bd9643dfaa28dfa8535dacc0.pdf"
              },
              {
                "label": "北金堤分滞洪区水利百科",
                "url": "https://www.shuizhishi.cn/c/2020-04-09/519338.shtml"
              },
              {
                "label": "渠村分洪闸专业调研",
                "url": "https://www.yrcti.edu.cn/slgcxy/info/1042/8257.htm"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧椭圆以渠村和北金堤桥连线为轴，遗漏长垣方向且横越黄河；新候选沿实际黄河左侧延伸成西南—东北带，保留豫鲁跨省，北侧堤线未测处全部推测。；官方2316km²多边形节点；西南收口与豫鲁交界连续堤线；不可沿行政界闭合；东平湖是山东独立工程，不得并入；北金堤实际连续堤线、西南石头庄及东北张庄闸精确节点未定位；陆向折线和端点均推测，不是已测140km完整围堤。；河心不等于临黄堤；不按省县界切断跨省区域，不纳入东平湖。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "北金堤蓄滞洪区",
        "北金堤分滞洪区",
        "北金堤滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/henan-chatgpt-2026-09-13/publications/2026-09-13T07-04-02-889Z-黄河-01/extraction.json"
    },
    "东平湖": {
      "id": "黄河-02",
      "name": "东平湖",
      "basin": "黄河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:04:18.809Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 120,
        "contextAnchors": [
          {
            "id": "0",
            "name": "东平湖",
            "location": "116.20894691,35.99131911",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "小清河",
            "location": "116.20240606,36.14207397",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "东平县老湖镇人民政府",
            "location": "116.26819144,35.99917167",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "大汶河（汶上段）",
            "location": "116.66172188,35.93665494",
            "anchorKind": "natural"
          }
        ]
      },
      "referenceClues": [
        {
          "title": "维基百科：东平湖",
          "publisher": "维基百科",
          "url": "https://zh.wikipedia.org/wiki/%E4%B8%9C%E5%B9%B3%E6%B9%96",
          "sourceType": "encyclopedia",
          "supportsLocation": false,
          "confidenceEligible": false,
          "role": "search-expansion",
          "checkedAt": "2026-07-24",
          "locationSummary": "词条补充东平县境内、大汶河入湖、小清河出湖以及老湖镇、银山镇等沿湖线索；只用于查找水系与聚落锚点。",
          "searchTerms": [
            "老湖镇",
            "银山镇",
            "大汶河",
            "小清河"
          ],
          "locationRelations": [
            "大汶河入湖",
            "小清河连接黄河"
          ],
          "crossValidation": {
            "status": "partially-matched",
            "matchedAdministrativeAreas": [
              "山东省泰安市东平县"
            ],
            "matchedRelations": [],
            "supportingSourceUrls": [
              "https://www.yrcc.gov.cn/zwzc/zcjd/202403/t20240312_426969.html"
            ],
            "boundaryEligible": false
          }
        }
      ],
      "governmentSources": [
        {
          "title": "东平县志水利东平湖",
          "publisher": "",
          "url": "https://shandong-chorography.org/database/c94/section/6/article/19/",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "中国水土保持2024年12期：东平湖位置示意图1",
          "publisher": "",
          "url": "https://guifan-files.shuibao100.com/FsdajR0fn1VUllANdVxdV8-HvXzK",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "山东省泰安市东平县",
        "山东省济宁市梁山县",
        "山东省济宁市汶上县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "山东省泰安市东平县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "实际全区山东，跨泰安东平、济宁梁山及汶上。老湖全部东平；梁山/汶上部分属新湖，汶上在郭楼镇。保留用户河南分组不改归属。",
        "reasoning": "旧椭圆几乎漏掉北侧实际东平湖老湖；新候选把老湖返回真实湖泊位置，并向南、西南展开新湖推测区。新湖围堤、分隔线尚未定位，不能将新增轮廓认定为完整627km²工程界。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：东平湖蓄滞洪区、东平湖滞洪区、东平湖水库。县志总蓄滞洪区面积 627 km²：老湖209+新湖418；近年地方水务整编口径 626 km²：老湖208+新湖418；部分恢复回答未给此口径独立URL",
            "references": [
              {
                "label": "东平县志水利东平湖",
                "url": "https://shandong-chorography.org/database/c94/section/6/article/19/"
              },
              {
                "label": "中国水土保持2024年12期：东平湖位置示意图1",
                "url": "https://guifan-files.shuibao100.com/FsdajR0fn1VUllANdVxdV8-HvXzK"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "北：清河口门。（资料记载）；南：金线岭围堤。（资料记载）；西：梁济运河和黄河大堤。（资料记载）；东：凤凰山及湖东排渗河。（资料记载）；其他：二级湖堤分隔老新湖，南/西南新湖不可因非常水面而遗漏。（资料记载）",
            "references": [
              {
                "label": "东平县志水利东平湖",
                "url": "https://shandong-chorography.org/database/c94/section/6/article/19/"
              },
              {
                "label": "中国水土保持2024年12期：东平湖位置示意图1",
                "url": "https://guifan-files.shuibao100.com/FsdajR0fn1VUllANdVxdV8-HvXzK"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧椭圆几乎漏掉北侧实际东平湖老湖；新候选把老湖返回真实湖泊位置，并向南、西南展开新湖推测区。新湖围堤、分隔线尚未定位，不能将新增轮廓认定为完整627km²工程界。；四侧细部堤线及交接节点；地理包络35°30至36°20N/116°00至116°30E基准未知，非顶点，不用于闭合；626与627口径差异不通过面积修形；老湖水面不是209km²老湖工程完整边界，岸外滞洪带未精确恢复。；新湖418km²的围堤实际转角、金线岭南堤、梁济运河西界与湖东排渗河东界未定位；本候选陆地新湖段为明确推测，不宣称完整覆盖。；二级湖堤是新老湖内部隔堤，不当作全区外界；627=209+418与626=208+418并列口径不混淆。；实际省份山东，涉及东平、梁山、汶上；河南仅用户清单分组。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "东平湖蓄滞洪区",
        "东平湖滞洪区",
        "东平湖水库"
      ],
      "chatgptExtractionPath": "automation/output/henan-chatgpt-2026-09-13/publications/2026-09-13T07-04-18-809Z-黄河-02/extraction.json"
    },
    "蒙洼": {
      "id": "淮河-01",
      "name": "蒙洼",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 103,
        "contextAnchors": [
          {
            "id": "0",
            "name": "王家坝进洪口附近（底图参考）",
            "location": "115.607439,32.429338",
            "anchorKind": "hydrographic-context"
          },
          {
            "id": "1",
            "name": "濛河分洪道北侧转折（底图参考）",
            "location": "115.8662796,32.62087018",
            "anchorKind": "hydrographic-context"
          },
          {
            "id": "2",
            "name": "颍上侧东段（县界交叠参考）",
            "location": "115.95923297,32.60721801",
            "anchorKind": "hydrographic-context"
          }
        ]
      },
      "referenceClues": [
        {
          "title": "维基百科：蒙洼蓄洪区",
          "publisher": "维基百科",
          "url": "https://zh.wikipedia.org/wiki/%E8%92%99%E6%B4%BC%E8%93%84%E6%B4%AA%E5%8C%BA",
          "sourceType": "encyclopedia",
          "supportsLocation": false,
          "confidenceEligible": false,
          "role": "search-expansion",
          "checkedAt": "2026-07-24",
          "locationSummary": "词条补充了淮河北岸、濛河分洪道、王家坝及狭长形态等线索；四至和180.4平方公里面积另由公开环评资料核对。",
          "searchTerms": [
            "王家坝",
            "濛河分洪道",
            "淮河"
          ],
          "locationRelations": [
            "南临淮河",
            "北倚濛河分洪道"
          ],
          "crossValidation": {
            "status": "matched",
            "matchedAdministrativeAreas": [
              "安徽省阜阳市阜南县"
            ],
            "matchedRelations": [
              "南临淮河",
              "北临濛河分洪道"
            ],
            "supportingSourceUrls": [
              "https://xcoss.henan.gov.cn/typtfile/20260203/b1c7a44a6a994452b7edf10271d0e668.pdf"
            ],
            "boundaryEligible": false
          }
        }
      ],
      "governmentSources": [
        {
          "title": "阜南县财政局：“六到位”做好蒙洼蓄洪补偿工作",
          "url": "https://www.mof.gov.cn/zhengwuxinxi/xinwenlianbo/anhuicaizhengxinxilianbo/202009/t20200930_3598694.htm",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "报道确认蒙洼蓄洪区位于阜南县并涉及区内乡镇、村组和庄台。"
        },
        {
          "title": "阜南许堂至王家坝段改建工程环境影响报告书",
          "url": "https://xcoss.henan.gov.cn/typtfile/20260203/b1c7a44a6a994452b7edf10271d0e668.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "报告明确蒙洼位于阜南县南部，西临洪河、白露河入淮口，南临淮河，北临濛河分洪道，现状面积180.4平方公里。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“蒙洼”列入淮河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省淮河行蓄洪区基础设施建设总体规划解读",
          "url": "https://www.bengshan.gov.cn/zfxxgk/public/29591/40568681.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划实施范围列出安徽淮河流域16处行蓄洪区，用于交叉核对名称与省域归属。"
        },
        {
          "title": "合肥至周口高速公路颍上（南照）至临泉（皖豫省界）段",
          "url": "https://www.atcdi.com.cn/contents/23/1552.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "项目资料明确蒙洼蓄洪区位于阜南、颍上两县境内，总面积180.4平方公里。"
        },
        {
          "title": "多模态序列遥感影像的洪涝灾害应急信息快速提取（2021，第1446页，图4—5）",
          "url": "https://ch.whu.edu.cn/cn/article/pdf/preview/10.13203/j.whugis20210465.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "正文明确阜南、颍上两县；图5显示沿两条河道延伸的狭长轮廓。研究图用于走向核对，未当作已配准法定边界。"
        },
        {
          "title": "濛洼蓄洪工程及位置示意图",
          "url": "https://www.shuizhishi.cn/c/2020-04-09/521668.shtml",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "西起洪河口，东至南照集，南临淮河，北靠濛河分洪道；工程示意图与河道之间的狭长区域相符。"
        },
        {
          "title": "DataV阜南县、颍上县行政区参考图层",
          "url": "https://geo.datav.aliyun.com/areas_v3/bound/341226.json",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "geo.datav.aliyun.com"
        },
        {
          "title": "高德公开底图河道参考（12级）",
          "url": "https://www.amap.com/",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.amap.com"
        },
        {
          "title": "线索",
          "url": "https://zh.wikipedia.org/wiki/%E8%92%99%E6%B4%BC%E8%93%84%E6%B4%AA%E5%8C%BA",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "验收推断引用资料"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省阜阳市阜南县",
        "安徽省阜阳市颍上县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "安徽省阜阳市阜南县与颍上县境内，淮河中游北岸；主体在阜南县，东段延伸至颍上县南照镇西侧。西起洪河入淮口，南临淮河，北靠濛河分洪道。",
        "reasoning": "沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。",
            "references": [
              {
                "url": "https://www.mof.gov.cn/zhengwuxinxi/xinwenlianbo/anhuicaizhengxinxilianbo/202009/t20200930_3598694.htm",
                "label": "来源 1"
              },
              {
                "url": "https://xcoss.henan.gov.cn/typtfile/20260203/b1c7a44a6a994452b7edf10271d0e668.pdf",
                "label": "来源 2"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 6 组陆地，保留 33 个内部水面孔洞及连通河道开口；图示陆地面积约 206.16 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "外缘沿用此前审阅版本；可见水面排除不覆盖底图未显示的小水体。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      }
    },
    "城西湖": {
      "id": "淮河-02",
      "name": "城西湖",
      "basin": "淮河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": true,
        "usableForLocation": true,
        "title": "霍邱县行蓄洪区平面位置图",
        "url": "https://www.huoqiu.gov.cn/xxgk/zfgb/34762402.html",
        "publisher": "霍邱县人民政府",
        "description": "官方实施细则附件包含霍邱县行蓄洪区平面位置图。"
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 26,
        "contextAnchors": [
          {
            "id": "0",
            "name": "城西湖南部",
            "location": "116.16540284,32.22134168",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "城西湖中部",
            "location": "116.20241685,32.34780141",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "城西湖北部",
            "location": "116.0546297,32.54286157",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "城西湖乡人民政府",
            "location": "116.26995746,32.37575863",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "2019行蓄洪区基本情况表",
          "publisher": "",
          "url": "https://file.xuancheng.gov.cn/5/201912/20191216113152312ix77ba.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "霍邱行蓄洪区负面清单及城西湖位置图",
          "publisher": "",
          "url": "https://www.huoqiu.gov.cn/xxgk/zfgb/34762402.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "六安水利局：城西湖蓄洪区的变迁",
          "publisher": "",
          "url": "https://slj.luan.gov.cn/zczx/slyw/3194051.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "六安水利局：城西湖进洪闸",
          "publisher": "",
          "url": "https://slj.luan.gov.cn/zczx/slyw/5171301.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "霍邱沿岗河工程环评",
          "publisher": "",
          "url": "https://www.huoqiu.gov.cn/group3/M00/6B/6C/wKgSG2ZZl-iAA4jsAD37K40MJsI050.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap水系与地名（2026-09-13下载）",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "本地Overpass原始几何已保存；众包河心/水面只作定位代理"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省六安市霍邱县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "安徽省六安市霍邱县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "安徽省六安市霍邱县，淮河右岸；2019资料涉及16乡镇。蓄洪范围是26.50m废黄高程水位线以下，扣除河口保庄圩保护区。",
        "reasoning": "沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。",
            "references": [
              {
                "url": "https://file.xuancheng.gov.cn/5/201912/20191216113152312ix77ba.pdf",
                "label": "来源 1"
              },
              {
                "url": "https://www.huoqiu.gov.cn/xxgk/zfgb/34762402.html",
                "label": "来源 2"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 7 组陆地，保留 5 个内部水面孔洞及连通河道开口；图示陆地面积约 391.67 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "外缘沿用此前审阅版本；可见水面排除不覆盖底图未显示的小水体。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      },
      "aliases": [
        "城西湖蓄洪区"
      ],
      "chatgptExtractionPath": "automation/output/anhui-chatgpt-2026-09-13/publications/2026-09-13T05-15-25-954Z-淮河-02/extraction.json"
    },
    "城东湖": {
      "id": "淮河-03",
      "name": "城东湖",
      "basin": "淮河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": true,
        "usableForLocation": true,
        "title": "霍邱县行蓄洪区平面位置图",
        "url": "https://www.huoqiu.gov.cn/xxgk/zfgb/34762402.html",
        "publisher": "霍邱县人民政府",
        "description": "官方实施细则附件包含霍邱县行蓄洪区平面位置图。"
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 3,
        "contextAnchors": [
          {
            "id": "0",
            "name": "城东湖",
            "location": "116.37782093,32.29918108",
            "anchorKind": "natural"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "霍邱行蓄洪区负面清单实施细则",
          "publisher": "",
          "url": "https://www.huoqiu.gov.cn/xxgk/zfgb/34762402.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "霍邱县政府公报2021年第4期",
          "publisher": "",
          "url": "https://www.huoqiu.gov.cn/group3/M00/28/A5/wKgSG2HBlZmAQHuSAXhhsvNpLbk136.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "第14页乡镇名录，第16页城东湖位置图"
        },
        {
          "title": "六安水利局：汲河流域洪痕概况",
          "publisher": "",
          "url": "https://slj.luan.gov.cn/zczx/tzgg/5215752.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "六安市水资源综合规划（2011至2030）",
          "publisher": "",
          "url": "https://slj.luan.gov.cn/group1/M00/02/EF/wKgSGV_1fD-AFTetACmEfjMsDzo758.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "六安市官方防洪方案PDF",
          "publisher": "",
          "url": "https://www.luan.gov.cn/group1/M00/05/1E/wKgSGWEsZC-AZxPnAEpoW9FNlo8277.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap水系与地名（2026-09-13下载）",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "本地Overpass原始几何已保存；众包河心/水面只作定位代理"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省六安市霍邱县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "安徽省六安市霍邱县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "城东湖常水面上部、下部两组工程陆地展示范围。",
        "reasoning": "按工程参考图上部、下部橙色地块作局部湖岸配准，保留两组陆地；该展示范围不代表完整蓄洪区。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "按工程参考图上部、下部橙色地块作局部湖岸配准，保留两组陆地；该展示范围不代表完整蓄洪区。",
            "references": [
              {
                "url": "https://www.huoqiu.gov.cn/xxgk/zfgb/34762402.html",
                "label": "来源 1"
              },
              {
                "url": "https://www.huoqiu.gov.cn/group3/M00/28/A5/wKgSG2HBlZmAQHuSAXhhsvNpLbk136.pdf",
                "label": "来源 2"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 2 组陆地，保留 0 个内部水面孔洞及连通河道开口；图示陆地面积约 74.89 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "外缘沿用此前审阅版本；可见水面排除不覆盖底图未显示的小水体。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      },
      "aliases": [
        "城东湖蓄洪区"
      ],
      "chatgptExtractionPath": "automation/output/anhui-chatgpt-2026-09-13/publications/2026-09-13T05-15-42-499Z-淮河-03/extraction.json"
    },
    "瓦埠湖": {
      "id": "淮河-04",
      "name": "瓦埠湖",
      "basin": "淮河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 28,
        "contextAnchors": [
          {
            "id": "0",
            "name": "东淝闸",
            "location": "116.763285,32.601777",
            "anchorKind": "geographic-reference",
            "note": "检索为闸管理处"
          },
          {
            "id": "1",
            "name": "窑口镇",
            "location": "116.787633,32.451515",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "2",
            "name": "陶店回族乡",
            "location": "116.85718,32.360396",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "3",
            "name": "瓦埠镇",
            "location": "116.928029,32.328156",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "4",
            "name": "孙庙乡",
            "location": "116.958373,32.438555",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "5",
            "name": "史院乡",
            "location": "117.028643,32.457522",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "淮南市实施安徽省淮河行蓄洪区基础设施建设总体规划方案",
          "url": "https://www.huainan.gov.cn/public/6596035/1258400177.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "规划表明确瓦埠湖涉及寿县、谢家集区和田家庵区。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“瓦埠湖”列入淮河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省淮河行蓄洪区基础设施建设总体规划解读",
          "url": "https://www.bengshan.gov.cn/zfxxgk/public/29591/40568681.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划实施范围列出安徽淮河流域16处行蓄洪区，用于交叉核对名称与省域归属。"
        },
        {
          "title": "计划蓄洪水位22.0m水面面积",
          "url": "https://www.huainan.gov.cn/group1/M00/2B/81/rB406mm58VmAARezAFOM_B1zynY237.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.huainan.gov.cn"
        },
        {
          "title": "瓦埠湖蓄洪区（长丰县）项目水保环保验收服务标中标结果",
          "url": "https://www.anzhaobid.com/jyxx/002001/002001004/20240130/440c9e63-8184-40cc-954f-b7d12e231dcc.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "公告明确存在瓦埠湖蓄洪区（长丰县）项目，支持范围涉及长丰县；公告不提供完整边界或淹没线。"
        },
        {
          "title": "高德底图与DataV长丰县界参考",
          "url": "https://geo.datav.aliyun.com/areas_v3/bound/340121.json",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "geo.datav.aliyun.com"
        },
        {
          "title": "安徽省行蓄洪区安全建设规划资料",
          "url": "https://file.xuancheng.gov.cn/5/201912/20191216113152312ix77ba.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "用于河湖、工程或村镇方位核对；不提供完整实测界址。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省淮南市寿县",
        "安徽省淮南市谢家集区",
        "安徽省淮南市田家庵区",
        "安徽省合肥市长丰县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "安徽省淮南市寿县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "北端对齐东淝河出口，东西两侧按瓦埠湖分汊及窑口、陶店、孙庙、史院一带定位。 外形改为沿湖谷伸展的分汊轮廓，东支单独伸向长丰方向。 主湖、东侧湖汊和连通水道均挖空，保留周边陆地。",
        "reasoning": "北端对齐东淝河出口，东西两侧按瓦埠湖分汊及窑口、陶店、孙庙、史院一带定位。 外形改为沿湖谷伸展的分汊轮廓，东支单独伸向长丰方向。 主湖、东侧湖汊和连通水道均挖空，保留周边陆地。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "北端对齐东淝河出口，东西两侧按瓦埠湖分汊及窑口、陶店、孙庙、史院一带定位。 外形改为沿湖谷伸展的分汊轮廓，东支单独伸向长丰方向。 主湖、东侧湖汊和连通水道均挖空，保留周边陆地。",
            "references": [
              {
                "url": "https://file.xuancheng.gov.cn/5/201912/20191216113152312ix77ba.pdf",
                "label": "来源 1"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 6 组陆地，保留 0 个内部水面孔洞及连通河道开口；图示陆地面积约 524.53 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "资料总面积 776 km² 不等于湖面面积。尚缺蓄洪水位对应的等高线和批准界线，四周陆缘都是待核推定段；本图不按面积反推形状。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      }
    },
    "老汪湖": {
      "id": "淮河-05",
      "name": "老汪湖",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": true,
        "usableForLocation": false,
        "title": "老汪湖蓄滞洪区控制运用预案（征求意见稿）第 4 页风险图",
        "url": "https://slj.ahsz.gov.cn/group1/M00/58/40/Cpc8VmhjmZWAKx2fABoyeyI8BzE023.pdf",
        "publisher": "宿州市水利局",
        "note": "示意风险图用于近似定位，不足以确定精确界线。"
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 6,
        "contextAnchors": [
          {
            "id": "0",
            "name": "柏山参照点",
            "location": "117.274555,33.855628",
            "anchorKind": "geographic-reference",
            "note": "柏山村附近药房地名；不宣称为柏山闸坐标"
          },
          {
            "id": "1",
            "name": "张东湖参照点",
            "location": "117.429075,33.916597",
            "anchorKind": "geographic-reference",
            "note": "张东湖村委会，非闸轴线"
          },
          {
            "id": "2",
            "name": "小李庄闸",
            "location": "117.424013,33.835645",
            "anchorKind": "geographic-reference",
            "note": "小李庄闸管理所"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "埇桥区水利局：老汪湖蓄滞洪区概况",
          "url": "https://www.szyq.gov.cn/grassroots/6623401/158511991.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "埇桥区水利局公布面积、乡镇村数量及地貌水系"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“老汪湖”列入淮河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省淮河行蓄洪区基础设施建设总体规划解读",
          "url": "https://www.bengshan.gov.cn/zfxxgk/public/29591/40568681.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划实施范围列出安徽淮河流域16处行蓄洪区，用于交叉核对名称与省域归属。"
        },
        {
          "title": "老汪湖蓄洪面积",
          "url": "https://slj.ahsz.gov.cn/group1/M00/58/40/Cpc8VmhjmZWAKx2fABoyeyI8BzE023.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "slj.ahsz.gov.cn"
        },
        {
          "title": "灵璧县：老汪湖圈堤与三座闸",
          "url": "https://www.lingbi.gov.cn/public/6628291/145699201.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "用于河湖、工程或村镇方位核对；不提供完整实测界址。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省宿州市埇桥区",
        "安徽省宿州市灵璧县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "另用官方《控制运用预案（征求意见稿）》第 4 页风险图描绘狭长、多支汊外缘。 小李庄闸改作东南端点；整个范围向西、向北延伸至柏山和张东湖方向。 保留西北支汊、东北尾部和冲疃集以北的南侧弧形轮廓。",
        "reasoning": "另用官方《控制运用预案（征求意见稿）》第 4 页风险图描绘狭长、多支汊外缘。 小李庄闸改作东南端点；整个范围向西、向北延伸至柏山和张东湖方向。 保留西北支汊、东北尾部和冲疃集以北的南侧弧形轮廓。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "另用官方《控制运用预案（征求意见稿）》第 4 页风险图描绘狭长、多支汊外缘。 小李庄闸改作东南端点；整个范围向西、向北延伸至柏山和张东湖方向。 保留西北支汊、东北尾部和冲疃集以北的南侧弧形轮廓。",
            "references": [
              {
                "url": "https://slj.ahsz.gov.cn/group1/M00/58/40/Cpc8VmhjmZWAKx2fABoyeyI8BzE023.pdf",
                "label": "来源 1"
              },
              {
                "url": "https://www.lingbi.gov.cn/public/6628291/145699201.html",
                "label": "来源 2"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 1 组陆地，保留 3 个内部水面孔洞及连通河道开口；图示陆地面积约 75.72 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "参考图为示意性风险图且东北尾端超出图框。柏山、张东湖使用邻近地名作近似配准，非闸轴线实测点；绝对位置和东北闭合段仍需人工确认。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      }
    },
    "泥河洼": {
      "id": "淮河-06",
      "name": "泥河洼",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:04:21.388Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 101,
        "contextAnchors": [
          {
            "id": "0",
            "name": "沙河西段",
            "location": "113.59321203,33.69428745",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "沙河东段",
            "location": "113.82042442,33.60183947",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "澧河西段",
            "location": "113.56484365,33.50105118",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "澧河东段",
            "location": "113.83007368,33.55049276",
            "anchorKind": "natural"
          },
          {
            "id": "4",
            "name": "泥河洼地名点",
            "location": "113.82453859,33.56925066",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "河南淮河滞洪区建设环评",
          "publisher": "",
          "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "附图18-4泥河洼环保措施平面布置图"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省漯河市舞阳县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "河南漯河舞阳县，北舞渡镇、姜店乡及周边；莲花/马村仅检索地名，不作为完整分片界线。",
        "reasoning": "旧椭圆横切河道且缺少沙澧夹河关系；新候选沿实际沙河和澧河围出舞阳低地，两端以本区地标方向推测闭合，未把河流汇口全部三角区当滞洪区。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：泥河洼滞洪区、泥河洼蓄滞洪区。滞洪区/工程区面积 103 km²：恢复回答未逐一绑定数值到原始链接，保留研究引用链待核；不作设计淹没值",
            "references": [
              {
                "label": "河南淮河滞洪区建设环评",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "北：沙河大堤以南，马湾/罗湾进洪闸锚点。（资料记载）；南：澧河大堤以北，澧河左堤大宋至白付湾及蓄洪南大堤。（资料记载）；其他：纸房退水闸，灰河右岸堤防/马湾导流堤/蒿庄围堤为局部工程参照。（方位参照）；东：连续端部闭合线未知。（绘图推断）；西：连续端部闭合线未知。（绘图推断）",
            "references": [
              {
                "label": "河南淮河滞洪区建设环评",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧椭圆横切河道且缺少沙澧夹河关系；新候选沿实际沙河和澧河围出舞阳低地，两端以本区地标方向推测闭合，未把河流汇口全部三角区当滞洪区。；东西端连续闭合未知；无官方经纬度；103引用原页未独立核定；乡镇边界不作外围；西端马湾/罗湾进洪节点、东端纸房退水闸及大宋—白付湾堤转角无精确坐标，所选端点与闭合线都是推测。；实际河心不是大堤轴线；103为本轮资料面积，未用于配平，也不宣称全区围堤已复原。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "泥河洼滞洪区",
        "泥河洼蓄滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/henan-chatgpt-2026-09-13/publications/2026-09-13T07-04-21-388Z-淮河-06/extraction.json"
    },
    "老王坡": {
      "id": "淮河-07",
      "name": "老王坡",
      "basin": "淮河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:04:30.076Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 22,
        "contextAnchors": [
          {
            "id": "0",
            "name": "老王坡",
            "location": "114.06275585,33.46737653",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "老王坡农场",
            "location": "114.08772157,33.44501406",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "老王坡·村西花田",
            "location": "114.06328801,33.41497275",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "老王坡管理委员会退役军人服务站",
            "location": "114.07972802,33.42910293",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "京港澳高速对老王坡影响分析（设计单位论文镜像）",
          "publisher": "",
          "url": "https://m.fx361.com/news/2017/0712/18186815.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "河南淮河滞洪区建设环评",
          "publisher": "",
          "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "附图18之1"
        },
        {
          "title": "河南淮河滞洪建设环评批复",
          "publisher": "",
          "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201510/t20151020_315239.htm",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "2025河南洪水风险图包2",
          "publisher": "",
          "url": "https://sanmenxia.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2025/09/16/edd20ae1903641ff951bc88d4269036d.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省驻马店市西平县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "河南省驻马店市西平县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "河南驻马店西平县东北部紧靠县城，桂李/五沟营/老王坡管理区定位；无明确跨县跨省分片。",
        "reasoning": "旧20km²椭圆仅围农场附近；新候选沿南北两河展开成低地带，避免把内部淤泥河和高速公路误作边界，东西坝与高地尚属推测。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：老王坡滞洪区、老王坡蓄滞洪区。工程现状总面积 121 km²：设计水位57.65m、1.71亿m³",
            "references": [
              {
                "label": "京港澳高速对老王坡影响分析（设计单位论文镜像）",
                "url": "https://m.fx361.com/news/2017/0712/18186815.html"
              },
              {
                "label": "河南淮河滞洪区建设环评",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf"
              },
              {
                "label": "河南淮河滞洪建设环评批复",
                "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201510/t20151020_315239.htm"
              },
              {
                "label": "2025河南洪水风险图包2",
                "url": "https://sanmenxia.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2025/09/16/edd20ae1903641ff951bc88d4269036d.pdf"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：东大坝。（资料记载）；北：干河堤。（资料记载）；南：小洪河左堤。（资料记载）；西：自然高地，具体折点未知。（方位参照）",
            "references": [
              {
                "label": "京港澳高速对老王坡影响分析（设计单位论文镜像）",
                "url": "https://m.fx361.com/news/2017/0712/18186815.html"
              },
              {
                "label": "河南淮河滞洪区建设环评",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf"
              },
              {
                "label": "河南淮河滞洪建设环评批复",
                "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201510/t20151020_315239.htm"
              },
              {
                "label": "2025河南洪水风险图包2",
                "url": "https://sanmenxia.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2025/09/16/edd20ae1903641ff951bc88d4269036d.pdf"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧20km²椭圆仅围农场附近；新候选沿南北两河展开成低地带，避免把内部淤泥河和高速公路误作边界，东西坝与高地尚属推测。；西高地折点及连续界线；无原文经纬度；京港澳高速/淤泥河为内部，不作边界；东大坝实际堤轴及西自然高地未定位，东西闭合段推测。；OSM南线标洪河、北支未命名；与文献小洪河/干河按空间关系对应，堤岸偏移及河名同一性未独立测定。；121是工程总面积；本候选并未按面积放大。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "老王坡滞洪区",
        "老王坡蓄滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/henan-chatgpt-2026-09-13/publications/2026-09-13T07-04-30-076Z-淮河-07/extraction.json"
    },
    "蛟停湖": {
      "id": "淮河-08",
      "name": "蛟停湖",
      "basin": "淮河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:04:39.123Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 21,
        "contextAnchors": [
          {
            "id": "0",
            "name": "蛟停湖乡",
            "location": "114.68662983,32.71869606",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "蛟停湖大草原",
            "location": "114.68526877,32.72694002",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "新蔡县蛟停湖滞洪区管理所",
            "location": "114.6938783,32.71765849",
            "anchorKind": "engineering"
          },
          {
            "id": "3",
            "name": "蛟停湖派出所",
            "location": "114.67820961,32.71722682",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "河南淮河滞洪区建设环评",
          "publisher": "",
          "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "附图18之3"
        },
        {
          "title": "河南政务西洋店镇",
          "publisher": "",
          "url": "https://www.hnzwfw.gov.cn/411723105000/detail.html?region=411723105000",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "河南政务余店镇",
          "publisher": "",
          "url": "https://www.hnzwfw.gov.cn/411729111000/detail.html?region=411729111000",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "2025河南洪水风险图包2",
          "publisher": "",
          "url": "https://sanmenxia.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2025/09/16/edd20ae1903641ff951bc88d4269036d.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "2026防汛责任名单",
          "publisher": "",
          "url": "https://dzb.henandaily.cn/html5/2026-05/13/content_17_1792490.htm",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省驻马店市新蔡县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "河南省驻马店市新蔡县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "河南驻马店平舆县与新蔡县，平舆西洋店镇南部西半片；新蔡余店镇/国营蛟停湖农场。不能因邻县交界擅自加正阳分片。",
        "reasoning": "旧35km²椭圆只圈蛟停湖农场；新候选沿新老汝河之间的真实低地带展开，保留平舆—新蔡方向，不加正阳分片。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：蛟停湖滞洪区、蛟停湖蓄洪区。1969河道调整后历史蓄洪面积 43.2 km²：ChatGPT称历史水利资料，但回答未给该历史数值独立原始链接；不能宣称已由环评核实",
            "references": [
              {
                "label": "河南淮河滞洪区建设环评",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf"
              },
              {
                "label": "河南政务西洋店镇",
                "url": "https://www.hnzwfw.gov.cn/411723105000/detail.html?region=411723105000"
              },
              {
                "label": "河南政务余店镇",
                "url": "https://www.hnzwfw.gov.cn/411729111000/detail.html?region=411729111000"
              },
              {
                "label": "2025河南洪水风险图包2",
                "url": "https://sanmenxia.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2025/09/16/edd20ae1903641ff951bc88d4269036d.pdf"
              },
              {
                "label": "2026防汛责任名单",
                "url": "https://dzb.henandaily.cn/html5/2026-05/13/content_17_1792490.htm"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "其他：老汝河左堤临河段39.4km、汝河右堤临河段25.71km为两条长堤骨架。（资料记载）；西：平舆西洋店/西洋潭进洪侧。（方位参照）；东：新蔡方向退洪侧，模型节点西洋店站→进洪闸→湖心→退洪闸→河坞闸。（方位参照）；南：两长堤短接、转折与东南封口未知，附图指导推测。（绘图推断）",
            "references": [
              {
                "label": "河南淮河滞洪区建设环评",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf"
              },
              {
                "label": "河南政务西洋店镇",
                "url": "https://www.hnzwfw.gov.cn/411723105000/detail.html?region=411723105000"
              },
              {
                "label": "河南政务余店镇",
                "url": "https://www.hnzwfw.gov.cn/411729111000/detail.html?region=411729111000"
              },
              {
                "label": "2025河南洪水风险图包2",
                "url": "https://sanmenxia.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2025/09/16/edd20ae1903641ff951bc88d4269036d.pdf"
              },
              {
                "label": "2026防汛责任名单",
                "url": "https://dzb.henandaily.cn/html5/2026-05/13/content_17_1792490.htm"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧35km²椭圆只圈蛟停湖农场；新候选沿新老汝河之间的真实低地带展开，保留平舆—新蔡方向，不加正阳分片。；当前更新全区面积未检到；无原文坐标；短接堤与东南封口；43.2历史口径来源链须保留不当现行实测；进退洪闸精确点、短接堤和两端封口未知，闭合点不代表原始坐标。；43.2是ChatGPT提到的历史调整口径，独立原始数字来源链未明，不能说已由环评核实，也不用于缩放。；OSM两线均名汝河，新老河道按位置关系辨识；河心代理不等于实际堤顶。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "蛟停湖滞洪区",
        "蛟停湖蓄洪区"
      ],
      "chatgptExtractionPath": "automation/output/henan-chatgpt-2026-09-13/publications/2026-09-13T07-04-39-123Z-淮河-08/extraction.json"
    },
    "黄墩湖": {
      "id": "淮河-09",
      "name": "黄墩湖",
      "basin": "淮河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T05:56:07.084Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 9,
        "contextAnchors": [
          {
            "id": "0",
            "name": "黄墩湖（邳州）",
            "location": "118.05710181,34.19123231",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "黄墩湖（新沂）",
            "location": "118.07849102,34.16976844",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "黄墩湖滞洪闸",
            "location": "118.06330051,34.15796569",
            "anchorKind": "engineering"
          },
          {
            "id": "3",
            "name": "黄墩湖现代渔业精品园",
            "location": "118.07471688,34.12176745",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "蓄滞洪区运维管理保障政策需求调查研究",
          "publisher": "",
          "url": "https://www.waterinfo.com.cn/xsyj/zjgd/202402/t20240204_36227.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "江苏省生态空间管控区域规划",
          "publisher": "",
          "url": "https://www.jiangsu.gov.cn/module/download/downfile.jsp?classid=0&filename=41d4406973644c03b562924cf59cd693.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "黄墩湖滞洪闸",
          "publisher": "",
          "url": "https://ly.jswater.org.cn/lysl/gcgk/gcjj/art/2022/art_bba798bce8b847b7bbf08d3962bb14f3.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "中国财经报：宿迁滞洪区撤退集结驿站",
          "publisher": "",
          "url": "https://app.cfen.com.cn/detailArticle/21639435_46010_zgcjb.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84河线及地名下载存档，只作定位代理"
        }
      ],
      "verifiedAdministrativeAreas": [
        "江苏省徐州市邳州市",
        "江苏省宿迁市宿豫区"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "江苏省徐州市邳州市"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "骆马湖西侧，跨江苏省徐州市邳州新河镇/八路镇、睢宁魏集等地和宿迁市宿豫区皂河镇。2021原皂河与黄墩镇合并，旧黄墩镇为历史地名。",
        "reasoning": "旧图420 km²仅为显示尺度且越过中运河。本候选用真实运河转折收回东缘，南端保留在废黄河以北的皂河方向；西侧旧包络仍为推测，未宣称已追出徐洪河东堤。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：黄墩湖滞洪区。蓄滞洪面积 230 km²：有效分蓄洪容积14.7亿m³",
            "references": [
              {
                "label": "蓄滞洪区运维管理保障政策需求调查研究",
                "url": "https://www.waterinfo.com.cn/xsyj/zjgd/202402/t20240204_36227.html"
              },
              {
                "label": "江苏省生态空间管控区域规划",
                "url": "https://www.jiangsu.gov.cn/module/download/downfile.jsp?classid=0&filename=41d4406973644c03b562924cf59cd693.pdf"
              },
              {
                "label": "黄墩湖滞洪闸",
                "url": "https://ly.jswater.org.cn/lysl/gcgk/gcjj/art/2022/art_bba798bce8b847b7bbf08d3962bb14f3.html"
              },
              {
                "label": "中国财经报：宿迁滞洪区撤退集结驿站",
                "url": "https://app.cfen.com.cn/detailArticle/21639435_46010_zgcjb.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "西：徐洪河以东，徐洪河东堤为西侧强依据。（资料记载）；北：全区房亭河以南；宿迁局部北至民便河。（资料记载）；东：总体中运河以西；宿迁局部东至骆马湖二线堤，黄墩湖滞洪闸位于中运河西堤。（资料记载）；南：废黄河以北，宿迁局部废黄河北堤。（资料记载）",
            "references": [
              {
                "label": "蓄滞洪区运维管理保障政策需求调查研究",
                "url": "https://www.waterinfo.com.cn/xsyj/zjgd/202402/t20240204_36227.html"
              },
              {
                "label": "江苏省生态空间管控区域规划",
                "url": "https://www.jiangsu.gov.cn/module/download/downfile.jsp?classid=0&filename=41d4406973644c03b562924cf59cd693.pdf"
              },
              {
                "label": "黄墩湖滞洪闸",
                "url": "https://ly.jswater.org.cn/lysl/gcgk/gcjj/art/2022/art_bba798bce8b847b7bbf08d3962bb14f3.html"
              },
              {
                "label": "中国财经报：宿迁滞洪区撤退集结驿站",
                "url": "https://app.cfen.com.cn/detailArticle/21639435_46010_zgcjb.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧图420 km²仅为显示尺度且越过中运河。本候选用真实运河转折收回东缘，南端保留在废黄河以北的皂河方向；西侧旧包络仍为推测，未宣称已追出徐洪河东堤。；无官方拐点及滞洪闸经纬度；骨干河流交接和徐州/宿迁接边围堤连续线未知，连接标推测；生态管控分片行政界不替代外围水利边界；徐洪河东堤与房亭河连续坐标未获得：西、北边缘保留旧包络作为推测，不能认定为真实河堤。；南端与市县接边、运河短缺段为推测连接；230 km²为完整资料值，候选是否涵盖全部徐州/宿迁片区须人工核看。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "黄墩湖滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/jiangsu-chatgpt-2026-09-13/publications/2026-09-13T05-56-07-084Z-淮河-09/extraction.json"
    },
    "南润段": {
      "id": "淮河-10",
      "name": "南润段",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "南照镇人民政府",
            "location": "116.0005075,32.61364452",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "润河镇人民政府",
            "location": "116.1057928,32.53687361",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "南润段进退水闸",
            "location": "116.07612632,32.55493539",
            "anchorKind": "engineering"
          },
          {
            "id": "3",
            "name": "南照镇卜林村",
            "location": "115.97255806,32.63179277",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "2019年度农村住房保险试点通知附件4：行蓄洪区基本情况表",
          "publisher": "",
          "url": "https://file.xuancheng.gov.cn/5/201912/20191216113152312ix77ba.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "S238淮河特大桥及接线改建工程环评",
          "publisher": "",
          "url": "https://www.gushi.gov.cn/zfxxgk/rootfiles/2026/01/04/1768850313491726-1768850313784815.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "临淮岗水资源综合利用工程航道通航评价采购公告",
          "publisher": "",
          "url": "https://www.cwhh.com.cn/News.aspx?classid=5D311CA918CA9A03&id=02EADF0628EF4A34&mclassid=2B25C5E62F83A049",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "央广网：安徽颍上一日内启用三大行蓄洪区",
          "publisher": "",
          "url": "https://www.cnr.cn/ah/news/20200721/t20200721_525175017.shtml",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap水系与地名（2026-09-13下载）",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "本地Overpass原始几何已保存；众包河心/水面只作定位代理"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省阜阳市颍上县南照镇",
        "安徽省阜阳市颍上县润河镇"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "安徽省阜阳市颍上县南照镇、润河镇；淮河左岸（北岸），南照集至临淮岗河段上游段的狭长圈堤型蓄洪区。",
        "reasoning": "沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。",
            "references": [
              {
                "url": "https://file.xuancheng.gov.cn/5/201912/20191216113152312ix77ba.pdf",
                "label": "来源 1"
              },
              {
                "url": "https://www.gushi.gov.cn/zfxxgk/rootfiles/2026/01/04/1768850313491726-1768850313784815.pdf",
                "label": "来源 2"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 7 组陆地，保留 1 个内部水面孔洞及连通河道开口；图示陆地面积约 4.07 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "外缘沿用此前审阅版本；可见水面排除不覆盖底图未显示的小水体。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      },
      "aliases": [
        "南润段蓄洪区",
        "南润段行蓄洪区",
        "南润段行洪区"
      ],
      "chatgptExtractionPath": "automation/output/anhui-chatgpt-2026-09-13/publications/2026-09-13T05-15-11-713Z-淮河-10/extraction.json"
    },
    "邱家湖": {
      "id": "淮河-11",
      "name": "邱家湖",
      "basin": "淮河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 46,
        "contextAnchors": [
          {
            "id": "0",
            "name": "邱家湖",
            "location": "116.23885284,32.50179006",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "邱家湖大沟",
            "location": "116.23658736,32.49368748",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "半岗镇人民政府",
            "location": "116.20373971,32.5010637",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "2019行蓄洪区基本情况表",
          "publisher": "",
          "url": "https://file.xuancheng.gov.cn/5/201912/20191216113152312ix77ba.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "霍邱行蓄洪区负面清单及丘家湖霍邱县附图",
          "publisher": "",
          "url": "https://www.huoqiu.gov.cn/xxgk/zfgb/34762402.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "霍邱县政府公报2021年第4期",
          "publisher": "",
          "url": "https://www.huoqiu.gov.cn/group3/M00/28/A5/wKgSG2HBlZmAQHuSAXhhsvNpLbk136.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "央广网：蓄洪低地变产业发展宝地",
          "publisher": "",
          "url": "https://www.cnr.cn/ah/news/20211217/t20211217_525690129.shtml",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "S238淮河特大桥及接线改建工程环评",
          "publisher": "",
          "url": "https://www.gushi.gov.cn/zfxxgk/rootfiles/2026/01/04/1768850313491726-1768850313784815.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap水系与地名（2026-09-13下载）",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "本地Overpass原始几何已保存；众包河心/水面只作定位代理"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省阜阳市颍上县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "安徽省阜阳市颍上县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "安徽省颍上县关屯乡、半岗镇为主体，另含霍邱县临淮岗镇部分。颍上低地在淮河主坝与临淮岗北副坝之间。",
        "reasoning": "沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。",
            "references": [
              {
                "url": "https://file.xuancheng.gov.cn/5/201912/20191216113152312ix77ba.pdf",
                "label": "来源 1"
              },
              {
                "url": "https://www.huoqiu.gov.cn/xxgk/zfgb/34762402.html",
                "label": "来源 2"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 1 组陆地，保留 0 个内部水面孔洞及连通河道开口；图示陆地面积约 19.80 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "外缘沿用此前审阅版本；可见水面排除不覆盖底图未显示的小水体。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      },
      "aliases": [
        "邱家湖蓄洪区",
        "丘家湖蓄洪区"
      ],
      "chatgptExtractionPath": "automation/output/anhui-chatgpt-2026-09-13/publications/2026-09-13T05-15-35-278Z-淮河-11/extraction.json"
    },
    "姜唐湖": {
      "id": "淮河-12",
      "name": "姜唐湖",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 4,
        "contextAnchors": [
          {
            "id": "0",
            "name": "姜唐湖退水闸",
            "location": "116.50382523,32.48113601",
            "anchorKind": "engineering"
          },
          {
            "id": "1",
            "name": "姜唐湖退水闸管理处",
            "location": "116.50372623,32.479474",
            "anchorKind": "engineering"
          },
          {
            "id": "2",
            "name": "姜唐湖北堤",
            "location": "116.40953979,32.50549047",
            "anchorKind": "engineering"
          },
          {
            "id": "3",
            "name": "姜唐湖西侧农场点",
            "location": "116.40295899,32.51267191",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "霍邱行蓄洪区负面清单实施细则",
          "publisher": "",
          "url": "https://www.huoqiu.gov.cn/xxgk/zfgb/34762402.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "霍邱县政府公报2021年第4期",
          "publisher": "",
          "url": "https://www.huoqiu.gov.cn/group3/M00/28/A5/wKgSG2HBlZmAQHuSAXhhsvNpLbk136.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "第17页姜唐湖霍邱县局部位置图"
        },
        {
          "title": "陈富川：淮河流域行蓄洪区进洪量计算分析（2025）",
          "publisher": "",
          "url": "https://szy.sljsygl.com/UpFiles/2025-9-24/638943183612930837.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "作者单位安徽省临淮岗洪水控制工程管理局；图1工程平面"
        },
        {
          "title": "霍邱河湖及水利工程管理保护范围划定公告",
          "publisher": "",
          "url": "https://www.huoqiu.gov.cn/public/6618991/37327579.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "中安在线/阜阳日报：颍上启用三个行蓄洪区",
          "publisher": "",
          "url": "https://api.app.anhuinews.com/appcontent/4678054.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "安徽水利厅来源：水利工程正式开工（凤凰转载）",
          "publisher": "",
          "url": "https://ah.ifeng.com/c/8p4wpMH18mC",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "119.2km²口径"
        },
        {
          "title": "临沂生态环境局公开材料：唐垛湖下口门退水闸",
          "publisher": "",
          "url": "https://hbj.linyi.gov.cn/info/1812/50493.htm",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "由ChatGPT引用，未单独逐页核验"
        },
        {
          "title": "OpenStreetMap水系与地名（2026-09-13下载）",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "本地Overpass原始几何已保存；众包河心/水面只作定位代理"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省阜阳市颍上县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "由霍邱县姜家湖与颍上县唐垛湖联圩改建而成。霍邱侧临淮岗，颍上侧涉及垂岗、王岗、赛涧、半岗。不能仅以霍邱部分代表全区。",
        "reasoning": "沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "沿用此前审阅外缘，扣除可见湖河水面，保留陆地分块和水道开口。",
            "references": [
              {
                "url": "https://www.huoqiu.gov.cn/xxgk/zfgb/34762402.html",
                "label": "来源 1"
              },
              {
                "url": "https://www.huoqiu.gov.cn/group3/M00/28/A5/wKgSG2HBlZmAQHuSAXhhsvNpLbk136.pdf",
                "label": "来源 2"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 4 组陆地，保留 1 个内部水面孔洞及连通河道开口；图示陆地面积约 152.37 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "外缘沿用此前审阅版本；可见水面排除不覆盖底图未显示的小水体。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      },
      "aliases": [
        "姜唐湖行洪区",
        "姜唐湖行蓄洪区"
      ],
      "chatgptExtractionPath": "automation/output/anhui-chatgpt-2026-09-13/publications/2026-09-13T05-15-48-863Z-淮河-12/extraction.json"
    },
    "寿西湖": {
      "id": "淮河-13",
      "name": "寿西湖",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 21,
        "contextAnchors": [
          {
            "id": "0",
            "name": "正阳关镇",
            "location": "116.532535,32.480545",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "1",
            "name": "丰庄镇",
            "location": "116.602609,32.498577",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "2",
            "name": "涧沟镇",
            "location": "116.650817,32.48865",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "3",
            "name": "东淝闸",
            "location": "116.763285,32.601777",
            "anchorKind": "geographic-reference",
            "note": "地图检索为东淝闸管理处，非测绘闸轴线"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "安徽省行蓄洪区运用补偿资料",
          "url": "https://www.panji.gov.cn/group1/M00/15/80/rB406mRi31eAJGdDAAelRoo3lr4882.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "同名农场地物聚类和安徽行蓄洪区资料相互印证"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“寿西湖”列入淮河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省淮河行蓄洪区基础设施建设总体规划解读",
          "url": "https://www.bengshan.gov.cn/zfxxgk/public/29591/40568681.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划实施范围列出安徽淮河流域16处行蓄洪区，用于交叉核对名称与省域归属。"
        },
        {
          "title": "淮南网：寿西湖与牛尾岗堤",
          "url": "https://www.huainannet.com/zt_content.asp?id=141843",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "用于河湖、工程或村镇方位核对；不提供完整实测界址。"
        },
        {
          "title": "安徽农垦：寿西湖农场沿革",
          "url": "https://www.ahnk.com.cn/display.php?id=142",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "用于河湖、工程或村镇方位核对；不提供完整实测界址。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省淮南市寿县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "北缘沿正阳关下游淮河南岸，经鲁口对岸至寿县西北。 东端以东淝河、寿县古城西侧定位；不再以寿西湖农场为圆心。 南缘按牛尾岗堤“正阳关—寿县城西”的资料走向，在丰庄、涧沟一线连接。",
        "reasoning": "北缘沿正阳关下游淮河南岸，经鲁口对岸至寿县西北。 东端以东淝河、寿县古城西侧定位；不再以寿西湖农场为圆心。 南缘按牛尾岗堤“正阳关—寿县城西”的资料走向，在丰庄、涧沟一线连接。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "北缘沿正阳关下游淮河南岸，经鲁口对岸至寿县西北。 东端以东淝河、寿县古城西侧定位；不再以寿西湖农场为圆心。 南缘按牛尾岗堤“正阳关—寿县城西”的资料走向，在丰庄、涧沟一线连接。",
            "references": [
              {
                "url": "https://www.huainannet.com/zt_content.asp?id=141843",
                "label": "来源 1"
              },
              {
                "url": "https://www.ahnk.com.cn/display.php?id=142",
                "label": "来源 2"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 3 组陆地，保留 10 个内部水面孔洞及连通河道开口；图示陆地面积约 165.06 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "牛尾岗堤具体线位尚缺矢量资料；南缘连接段为推定，不把 G328 道路直接认定为堤线。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      }
    },
    "董峰湖": {
      "id": "淮河-14",
      "name": "董峰湖",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "董峰湖进洪闸",
            "location": "116.696351,32.603495",
            "anchorKind": "geographic-reference",
            "note": "高德同名工程地物；不是退洪闸"
          },
          {
            "id": "1",
            "name": "东风湖农场场部",
            "location": "116.691072,32.696634",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "2",
            "name": "东风湖农场本部",
            "location": "116.658172,32.667918",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "3",
            "name": "张王村附近",
            "location": "116.722408,32.625549",
            "anchorKind": "geographic-reference",
            "note": "检索地物为张王村瓜果交易市场"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "淮南市实施安徽省淮河行蓄洪区基础设施建设总体规划方案",
          "url": "https://www.huainan.gov.cn/public/6596035/1258400177.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "规划表明确董峰湖涉及毛集区、凤台县和东风湖农场。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“董峰湖”列入淮河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省淮河行蓄洪区基础设施建设总体规划解读",
          "url": "https://www.bengshan.gov.cn/zfxxgk/public/29591/40568681.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划实施范围列出安徽淮河流域16处行蓄洪区，用于交叉核对名称与省域归属。"
        },
        {
          "title": "毛集区、凤台县与东风湖农场区内国土面积合计",
          "url": "https://file.xuancheng.gov.cn/5/201912/20191216113152312ix77ba.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "file.xuancheng.gov.cn"
        },
        {
          "title": "毛集试验区：董峰湖与西淝河、淮河关系",
          "url": "https://www.maoji.gov.cn/public/118322641/1259937672.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "用于河湖、工程或村镇方位核对；不提供完整实测界址。"
        },
        {
          "title": "生态环境部：正阳关至峡山口段工程批复",
          "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201503/t20150330_298328.htm",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "用于河湖、工程或村镇方位核对；不提供完整实测界址。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省淮南市毛集实验区",
        "安徽省淮南市凤台县",
        "安徽省农垦集团东风湖农场"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "移到焦岗湖东侧、淮河北岸的河湾地带。 南端对齐董峰湖进洪闸；东缘随淮河弯道转折，北端以西淝河汇口定位。 西侧用东风湖农场及董岗方向核对陆缘，不再把焦岗湖圈入。",
        "reasoning": "移到焦岗湖东侧、淮河北岸的河湾地带。 南端对齐董峰湖进洪闸；东缘随淮河弯道转折，北端以西淝河汇口定位。 西侧用东风湖农场及董岗方向核对陆缘，不再把焦岗湖圈入。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "移到焦岗湖东侧、淮河北岸的河湾地带。 南端对齐董峰湖进洪闸；东缘随淮河弯道转折，北端以西淝河汇口定位。 西侧用东风湖农场及董岗方向核对陆缘，不再把焦岗湖圈入。",
            "references": [
              {
                "url": "https://www.maoji.gov.cn/public/118322641/1259937672.html",
                "label": "来源 1"
              },
              {
                "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201503/t20150330_298328.htm",
                "label": "来源 2"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 3 组陆地，保留 6 个内部水面孔洞及连通河道开口；图示陆地面积约 44.63 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "西侧堤线及退建段缺少实测坐标；西缘为待核连接段。农场场部只作方位参照。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      }
    },
    "汤渔湖": {
      "id": "淮河-15",
      "name": "汤渔湖",
      "basin": "淮河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 4,
        "contextAnchors": [
          {
            "id": "0",
            "name": "高皇镇",
            "location": "116.990254,32.714699",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "1",
            "name": "老胡村",
            "location": "116.973854,32.69256",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "2",
            "name": "闸口村",
            "location": "117.088287,32.705614",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "淮南市实施安徽省淮河行蓄洪区基础设施建设总体规划方案",
          "url": "https://www.huainan.gov.cn/public/6596035/1258400177.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "规划表明确汤渔湖位于淮南市潘集区。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“汤渔湖”列入淮河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省淮河行蓄洪区基础设施建设总体规划解读",
          "url": "https://www.bengshan.gov.cn/zfxxgk/public/29591/40568681.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划实施范围列出安徽淮河流域16处行蓄洪区，用于交叉核对名称与省域归属。"
        },
        {
          "title": "淮南市水利局：汤渔湖工程位置",
          "url": "https://slj.huainan.gov.cn/xwdt/slyw/551850959.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "用于河湖、工程或村镇方位核对；不提供完整实测界址。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省淮南市潘集区"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "安徽省淮南市潘集区"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "以高皇镇、老胡村与闸口村确定淮河北岸位置。 南、东缘跟随淮河弯道，东北端在荆山湖进洪方向上游收束。 外轮廓从高皇低地沿河向东北延伸，不再以排灌站为圆心。",
        "reasoning": "以高皇镇、老胡村与闸口村确定淮河北岸位置。 南、东缘跟随淮河弯道，东北端在荆山湖进洪方向上游收束。 外轮廓从高皇低地沿河向东北延伸，不再以排灌站为圆心。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "以高皇镇、老胡村与闸口村确定淮河北岸位置。 南、东缘跟随淮河弯道，东北端在荆山湖进洪方向上游收束。 外轮廓从高皇低地沿河向东北延伸，不再以排灌站为圆心。",
            "references": [
              {
                "url": "https://slj.huainan.gov.cn/xwdt/slyw/551850959.html",
                "label": "来源 1"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 3 组陆地，保留 4 个内部水面孔洞及连通河道开口；图示陆地面积约 58.42 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "西北侧淮北大堤尚无完整线位；地标之间的连接为推定段。2025 年新工程位置用于定位，不表示工程已建成。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      }
    },
    "荆山湖": {
      "id": "淮河-16",
      "name": "荆山湖",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 6,
        "contextAnchors": [
          {
            "id": "0",
            "name": "荆山湖进洪闸",
            "location": "117.077273,32.778986",
            "anchorKind": "geographic-reference",
            "note": "地图同名工程位置"
          },
          {
            "id": "1",
            "name": "常坟镇",
            "location": "117.071332,32.819775",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "2",
            "name": "上桥",
            "location": "117.123587,32.9189",
            "anchorKind": "geographic-reference",
            "note": "公交站近似地名位置，不是退洪闸"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "白莲坡镇多措并举做好防汛工作",
          "url": "https://www.ahhy.gov.cn/xwzx/xzdt/81377712.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "报道明确白莲坡镇姚山村山南位于荆山湖行蓄洪区，并与常坟镇相关工程信息相互印证。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“荆山湖”列入淮河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省淮河行蓄洪区基础设施建设总体规划解读",
          "url": "https://www.bengshan.gov.cn/zfxxgk/public/29591/40568681.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划实施范围列出安徽淮河流域16处行蓄洪区，用于交叉核对名称与省域归属。"
        },
        {
          "title": "2020年启用行洪区面积",
          "url": "https://m.ahjjjc.gov.cn/android/p/86454.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "m.ahjjjc.gov.cn"
        },
        {
          "title": "怀远县水资源综合规划",
          "url": "https://www.ahhy.gov.cn/zfxxgk/public/24721/50569113.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "用于河湖、工程或村镇方位核对；不提供完整实测界址。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省蚌埠市怀远县白莲坡镇",
        "安徽省蚌埠市怀远县常坟镇"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "南端对齐荆山湖进洪闸，北端在茨淮新河入淮附近收束。 东侧沿淮河西岸连续弯曲，避免跨到马城镇一侧。 西侧结合常坟—上桥方向及可见旧河道定位，形成沿河长条与中段展开。",
        "reasoning": "南端对齐荆山湖进洪闸，北端在茨淮新河入淮附近收束。 东侧沿淮河西岸连续弯曲，避免跨到马城镇一侧。 西侧结合常坟—上桥方向及可见旧河道定位，形成沿河长条与中段展开。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "南端对齐荆山湖进洪闸，北端在茨淮新河入淮附近收束。 东侧沿淮河西岸连续弯曲，避免跨到马城镇一侧。 西侧结合常坟—上桥方向及可见旧河道定位，形成沿河长条与中段展开。",
            "references": [
              {
                "url": "https://www.ahhy.gov.cn/zfxxgk/public/24721/50569113.html",
                "label": "来源 1"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 1 组陆地，保留 1 个内部水面孔洞及连通河道开口；图示陆地面积约 58.60 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "西侧淮北大堤具体线位待核；上桥为地名参照，不等同荆山湖退洪闸。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      }
    },
    "花园湖": {
      "id": "淮河-17",
      "name": "花园湖",
      "basin": "淮河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H3",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-22",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "multiple-resolved",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 25,
        "contextAnchors": [
          {
            "id": "0",
            "name": "花园湖进洪闸",
            "location": "117.692904,32.942745",
            "anchorKind": "geographic-reference",
            "note": "地图同名工程位置"
          },
          {
            "id": "1",
            "name": "临淮关镇",
            "location": "117.611635,32.897371",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "2",
            "name": "板桥镇",
            "location": "117.697696,32.905028",
            "anchorKind": "geographic-reference",
            "note": "地图地名位置，不是边界控制点"
          },
          {
            "id": "3",
            "name": "枣巷镇",
            "location": "117.820414,33.015055",
            "anchorKind": "geographic-reference",
            "note": "检索位置为枣巷镇中心小学"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "安徽省五河县淮河花园湖行蓄洪区安全建设方案",
          "url": "https://www.wuhe.gov.cn/zfxxgk/public/25221/41271231.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "方案明确花园湖位于淮河南岸临淮关至五河县小溪镇之间，跨凤阳、明光、五河。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“花园湖”列入淮河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "安徽省淮河行蓄洪区基础设施建设总体规划解读",
          "url": "https://www.bengshan.gov.cn/zfxxgk/public/29591/40568681.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划实施范围列出安徽淮河流域16处行蓄洪区，用于交叉核对名称与省域归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "安徽省滁州市凤阳县",
        "安徽省滁州市明光市",
        "安徽省蚌埠市五河县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "安徽省滁州市凤阳县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "北、西侧随淮河南岸弯道，自花园湖进洪闸向小溪方向展开。 围绕花园湖及板桥河、小溪河的低地连接两侧陆地，湖体挖空。 临淮关、板桥、枣巷用于核对上下游与湖岸方位，不把镇中心直接当作界址。",
        "reasoning": "北、西侧随淮河南岸弯道，自花园湖进洪闸向小溪方向展开。 围绕花园湖及板桥河、小溪河的低地连接两侧陆地，湖体挖空。 临淮关、板桥、枣巷用于核对上下游与湖岸方位，不把镇中心直接当作界址。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "水系与位置依据",
            "outcome": "已验收",
            "detail": "北、西侧随淮河南岸弯道，自花园湖进洪闸向小溪方向展开。 围绕花园湖及板桥河、小溪河的低地连接两侧陆地，湖体挖空。 临淮关、板桥、枣巷用于核对上下游与湖岸方位，不把镇中心直接当作界址。",
            "references": [
              {
                "url": "https://www.wuhe.gov.cn/zfxxgk/public/25221/41271231.html",
                "label": "来源 1"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "陆地范围绘制",
            "outcome": "已验收",
            "detail": "本轮展示 1 组陆地，保留 3 个内部水面孔洞及连通河道开口；图示陆地面积约 188.61 平方公里。资料总面积与扣水后的图示面积不同，不据此缩放边界。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围限制",
            "outcome": "已标注",
            "detail": "小溪端口门和南侧丘岗过渡线仍需工程图确认；南、东陆缘为推定段。218.3 km² 为地方方案口径，与规划 213.46 km² 有差异。 本轮确认用于位置理解，不代表法定界线或实地测绘。",
            "references": []
          }
        ]
      }
    },
    "杨庄": {
      "id": "淮河-18",
      "name": "杨庄",
      "basin": "淮河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:04:25.381Z",
      "fieldVerified": false,
      "officialMap": {
        "available": true,
        "usableForLocation": true,
        "title": "河南省淮河流域滞洪区建设工程环境影响报告书",
        "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf",
        "publisher": "生态环境部",
        "description": "环境影响报告书包含杨庄滞洪区环保措施平面布置图。"
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "杨庄乡人民政府",
            "location": "113.84063829,33.33311383",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "河南淮河滞洪区建设环评",
          "publisher": "",
          "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "附图18-2杨庄环保措施平面布置图"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省驻马店市西平县杨庄乡"
      ],
      "administrativeMatch": {
        "overall": "mismatch",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "河南驻马店西平县杨庄乡一带，小洪河水系；洪庄杨等周边地名不证明全乡属滞洪区。",
        "reasoning": "旧地名椭圆把北侧小洪河河段切在范围之外；新候选围绕杨庄与小洪河曲流低地调整，保留东南人工坝、西北高地的文献格局。外缘所有折点仍是推测，未声称已实测大坝。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：杨庄滞洪区、杨庄蓄滞洪区。整体总面积常见口径 82 km²：恢复回答未逐值绑定原始页，不能宣称已逐页核验；设计淹没面积 76 km²：与82总面积区别，设计2.03亿m³不是面积",
            "references": [
              {
                "label": "河南淮河滞洪区建设环评",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：东部大坝。（资料记载）；南：南部大坝。（资料记载）；西：西部自然高地，精确分水线未知。（方位参照）；北：北部自然高地，精确线未知。（方位参照）；其他：小洪河核心水系，洪溪/吉斗内部或邻近；杨岗大坝及水闸/围村堤为配准参照，不确认每点是哪侧外缘。（方位参照）",
            "references": [
              {
                "label": "河南淮河滞洪区建设环评",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201605/W020160522154049212554.pdf"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧地名椭圆把北侧小洪河河段切在范围之外；新候选围绕杨庄与小洪河曲流低地调整，保留东南人工坝、西北高地的文献格局。外缘所有折点仍是推测，未声称已实测大坝。；西北自然高地精确线；若干坝段转折未知；无原始经纬度；82总/76淹没值具体原页尚未逐页核验；东坝、南坝和西北自然高地的精确线位均未定位；全周折点为推测，只有工程方向格局有文献依据。；OSM洪河曲流和杨庄地标仅作内部定位，不是外缘测点；实际大坝仍须人工核图。；82为常见总面积、76为设计淹没，恢复回答未逐值绑定原始页；没有按任何面积配平。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "杨庄滞洪区",
        "杨庄蓄滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/henan-chatgpt-2026-09-13/publications/2026-09-13T07-04-25-381Z-淮河-18/extraction.json"
    },
    "洪泽湖周边（含鲍集圩）": {
      "id": "淮河-19",
      "name": "洪泽湖周边（含鲍集圩）",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T06:01:43.205Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "洪泽湖",
            "location": "118.71884947,33.26628666",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "洪泽湖大堤",
            "location": "118.81185171,33.22311933",
            "anchorKind": "engineering"
          },
          {
            "id": "2",
            "name": "洪泽湖大桥",
            "location": "118.84342898,33.29977155",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "淮河入海水道二期工程环境影响报告书",
          "publisher": "",
          "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201703/W020170317519265114044.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "洪泽湖周边近期建设可研通过审查",
          "publisher": "",
          "url": "https://www.taihudesign.com/31/2572",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "蓄滞洪区运维管理保障政策需求调查研究",
          "publisher": "",
          "url": "https://www.waterinfo.com.cn/xsyj/zjgd/202402/t20240204_36227.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "生态环境部：浮山以下行洪区调整和建设工程环评批复",
          "publisher": "",
          "url": "https://www.mee.gov.cn/xxgk2018/xxgk/xxgk11/202503/t20250303_1103201.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "盱眙洪泽湖周边（含鲍集圩）划界项目成交公告",
          "publisher": "",
          "url": "https://czj.huaian.gov.cn/col/17148_618535/content/17460288/ff808081971d6c520197202f54400041.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "2017年盱眙县政府工作报告",
          "publisher": "",
          "url": "https://www.xuyi.gov.cn/col/1158_255456/art/xyx_932465.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84河线及地名下载存档，只作定位代理"
        }
      ],
      "verifiedAdministrativeAreas": [
        "江苏省宿迁市泗洪县",
        "江苏省宿迁市宿城区",
        "江苏省宿迁市泗阳县",
        "江苏省淮安市淮阴区",
        "江苏省淮安市洪泽区",
        "江苏省淮安市盱眙县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "江苏宿迁泗洪、泗阳、宿城区和淮安盱眙、洪泽区、淮阴区，以及省属洪泽湖农场/三河农场。多个滨湖圩区集合，非洪泽湖常水湖面。",
        "reasoning": "按用户指定，将原23.073km²沿淮局部候选以面积质心等比放大1.597744倍至58.9km²，未裁切或挪位。宽度和两端仍为推测，不代表完整鲍集圩或389圩集合；放大后可能越过原临河约束，须人工核看。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：洪泽湖周边滞洪区（含鲍集圩）。2017环评范围总面积 1440.59 km²：16.0m至12.5m蓄洪垦殖堤圈线之间389圩；16m滞洪水位容积26.37亿m³；近期建设可研审查面积 1515 km²：设计滞洪量约30亿m³；运维调研蓄滞洪面积 1648 km²：30.35亿m³；不同版本未找到完整边界变更表",
            "references": [
              {
                "label": "淮河入海水道二期工程环境影响报告书",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201703/W020170317519265114044.pdf"
              },
              {
                "label": "洪泽湖周边近期建设可研通过审查",
                "url": "https://www.taihudesign.com/31/2572"
              },
              {
                "label": "蓄滞洪区运维管理保障政策需求调查研究",
                "url": "https://www.waterinfo.com.cn/xsyj/zjgd/202402/t20240204_36227.html"
              },
              {
                "label": "生态环境部：浮山以下行洪区调整和建设工程环评批复",
                "url": "https://www.mee.gov.cn/xxgk2018/xxgk/xxgk11/202503/t20250303_1103201.html"
              },
              {
                "label": "盱眙洪泽湖周边（含鲍集圩）划界项目成交公告",
                "url": "https://czj.huaian.gov.cn/col/17148_618535/content/17460288/ff808081971d6c520197202f54400041.html"
              },
              {
                "label": "2017年盱眙县政府工作报告",
                "url": "https://www.xuyi.gov.cn/col/1158_255456/art/xyx_932465.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：总体位于洪泽湖大堤以西，湖面不属于圩区集合。（资料记载）；北：总体废黄河以南。（资料记载）；西：泗洪西南高地以东，另含盱眙沿湖沿淮。（资料记载）；其他：389圩为高程16.0m至12.5m蓄洪垦殖堤圈线之间圩区；已知刘嘴圩、大咀圩、鲍集圩须分片闭合。（资料记载）；南：鲍集圩在浮山以下淮河左岸，局部团结河以南、淮北堤以北；对岸安徽潘村洼不得并入。（方位参照）",
            "references": [
              {
                "label": "淮河入海水道二期工程环境影响报告书",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201703/W020170317519265114044.pdf"
              },
              {
                "label": "洪泽湖周边近期建设可研通过审查",
                "url": "https://www.taihudesign.com/31/2572"
              },
              {
                "label": "蓄滞洪区运维管理保障政策需求调查研究",
                "url": "https://www.waterinfo.com.cn/xsyj/zjgd/202402/t20240204_36227.html"
              },
              {
                "label": "生态环境部：浮山以下行洪区调整和建设工程环评批复",
                "url": "https://www.mee.gov.cn/xxgk2018/xxgk/xxgk11/202503/t20250303_1103201.html"
              },
              {
                "label": "盱眙洪泽湖周边（含鲍集圩）划界项目成交公告",
                "url": "https://czj.huaian.gov.cn/col/17148_618535/content/17460288/ff808081971d6c520197202f54400041.html"
              },
              {
                "label": "2017年盱眙县政府工作报告",
                "url": "https://www.xuyi.gov.cn/col/1158_255456/art/xyx_932465.html"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "按用户指定，将原23.073km²沿淮局部候选以面积质心等比放大1.597744倍至58.9km²，未裁切或挪位。宽度和两端仍为推测，不代表完整鲍集圩或389圩集合；放大后可能越过原临河约束，须人工核看。；389圩完整公开名录和矢量边界；2025盱眙划界调整正式成果；不同面积版本边界变化未明；仅若干可定位圩候选必须声明局部，不冒充完整389圩集合；具体圩名附属工程来源详见原文引用，未独立地理编码；原陆向2km闭合带现随整体等比放大，不能再称新候选维持原2km宽；上下游端点随比例扩展且仍是推测。；58.9km²仅用户指定资料参照面积，不证明完整鲍集圩边界，更不代表389圩。；放大后现状湖面交叠0.000km²；局部原河段对岸代理交叠10.551km²，未作裁切；不能再声称完全位于原左岸。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "洪泽湖周边滞洪区（含鲍集圩）"
      ],
      "chatgptExtractionPath": "automation/output/jiangsu-chatgpt-2026-09-13/publications/2026-09-13T06-01-43-205Z-淮河-19/extraction.json"
    },
    "南四湖湖东": {
      "id": "淮河-20",
      "name": "南四湖湖东",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "南四湖",
            "location": "117.15932883,34.7029253",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "微山县南四湖综合管理委员会",
            "location": "117.1378187,34.79998176",
            "anchorKind": "engineering"
          },
          {
            "id": "2",
            "name": "二级坝水利枢纽管理局",
            "location": "116.98411534,34.87079179",
            "anchorKind": "engineering"
          },
          {
            "id": "3",
            "name": "韩庄水利枢纽管理局",
            "location": "117.36852954,34.59538551",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "生态环境部：山东省湖东滞洪区建设工程批复",
          "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201701/t20170109_394447.htm",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "生态环境部批复明确跨济宁、枣庄；纠正项目原先仅写济宁"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“南四湖湖东”列入淮河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "山东省交通运输防汛抗旱应急预案",
          "url": "https://jtt.shandong.gov.cn/art/2021/9/6/art_231733_10293316.html?xxgkhide=1",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级预案在响应条件中同时列出东平湖、南四湖湖东和恩县洼，交叉确认其山东省域归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "山东省济宁市微山县",
        "山东省枣庄市滕州市"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "南四湖湖东堤东侧，自微山、二级坝至韩庄相关湖东低地",
        "reasoning": "独立使用南四湖湖东本区政府资料和地图锚点生成椭圆化低精度闭合候选；650 km²仅是锚点包络显示尺度，不是资料面积。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "生态环境部批复明确跨济宁、枣庄，纠正项目原先仅写济宁；另有2条官方资料交叉核对",
            "references": [
              {
                "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201701/t20170109_394447.htm",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://jtt.shandong.gov.cn/art/2021/9/6/art_231733_10293316.html?xxgkhide=1",
                "label": "引用 3"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：山东省济宁市微山县、山东省枣庄市滕州市。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：南四湖湖东堤东侧，跨济宁市与枣庄市，预估中心取南四湖东岸中段。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "大逍遥": {
      "id": "淮河-21",
      "name": "大逍遥",
      "basin": "淮河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:04:33.722Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 12,
        "contextAnchors": [
          {
            "id": "0",
            "name": "逍遥镇",
            "location": "114.26320289,33.74588101",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "李大庄乡",
            "location": "114.55439896,33.65396667",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "黄桥乡",
            "location": "114.45476456,33.76506609",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "西夏亭镇",
            "location": "114.37870163,33.74380257",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "艾岗乡",
            "location": "114.3387034,33.82404673",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "淮委到西华调研大逍遥规划",
          "publisher": "",
          "url": "https://www.zhoukou.gov.cn/page_pc/xwzx/xqdt/xqdt/articled424d2b57f5440699d310daa6b9ae0ea.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "周口巡河督导防汛及总体布局",
          "publisher": "",
          "url": "https://www.zhoukou.gov.cn/page_pc/xwzx/zkyw/article022b04552b7c4832b136d3e3e612db57.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "淮河防洪规划概要",
          "publisher": "",
          "url": "https://www.chinawater.com.cn/newscenter/ly/huaih/200905/t20090513_42647.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "西华2025重点工作分解",
          "publisher": "",
          "url": "https://www.xihua.gov.cn/sitesources/xhxrmzf/page_pc/zwgk/zfwj/articleff7b546cd2784081ad5cbd63170a4d7a.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "河南四水同治规划",
          "publisher": "",
          "url": "https://oss.henan.gov.cn/typtfile/20240123/f191e6f92c6b40e8b782d4533a0bb154.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省周口市西华县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "河南周口西华县逍遥镇沙河/颍河相关河段。商水县尚湾/老门潭仅规划考察走廊参照，未证实规划红线跨商水。",
        "reasoning": "旧椭圆只按旧显示尺度圈中心；新候选依沙河与颍河的真实汇流低地形状展开，西端以逍遥镇方向推测连接。没有可核验全区面积，不将旧257.3当资料。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "资料面积未知",
            "detail": "资料中亦称：大逍遥滞洪区、河南省沙颍河大逍遥滞洪区工程。未取得可核实的资料面积；图示面积只来自候选几何，不作为资料面积。",
            "references": [
              {
                "label": "淮委到西华调研大逍遥规划",
                "url": "https://www.zhoukou.gov.cn/page_pc/xwzx/xqdt/xqdt/articled424d2b57f5440699d310daa6b9ae0ea.html"
              },
              {
                "label": "周口巡河督导防汛及总体布局",
                "url": "https://www.zhoukou.gov.cn/page_pc/xwzx/zkyw/article022b04552b7c4832b136d3e3e612db57.html"
              },
              {
                "label": "淮河防洪规划概要",
                "url": "https://www.chinawater.com.cn/newscenter/ly/huaih/200905/t20090513_42647.html"
              },
              {
                "label": "西华2025重点工作分解",
                "url": "https://www.xihua.gov.cn/sitesources/xhxrmzf/page_pc/zwgk/zfwj/articleff7b546cd2784081ad5cbd63170a4d7a.html"
              },
              {
                "label": "河南四水同治规划",
                "url": "https://oss.henan.gov.cn/typtfile/20240123/f191e6f92c6b40e8b782d4533a0bb154.pdf"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：逍遥镇东侧沙河，西华张湾险工为沙河线锚点；不等于已定边界。（方位参照）；西：逍遥镇西侧近颍河，双河区位约束。（方位参照）；北：封口未知。（绘图推断）；南：封口未知，商水外部险工不证明分片。（绘图推断）",
            "references": [
              {
                "label": "淮委到西华调研大逍遥规划",
                "url": "https://www.zhoukou.gov.cn/page_pc/xwzx/xqdt/xqdt/articled424d2b57f5440699d310daa6b9ae0ea.html"
              },
              {
                "label": "周口巡河督导防汛及总体布局",
                "url": "https://www.zhoukou.gov.cn/page_pc/xwzx/zkyw/article022b04552b7c4832b136d3e3e612db57.html"
              },
              {
                "label": "淮河防洪规划概要",
                "url": "https://www.chinawater.com.cn/newscenter/ly/huaih/200905/t20090513_42647.html"
              },
              {
                "label": "西华2025重点工作分解",
                "url": "https://www.xihua.gov.cn/sitesources/xhxrmzf/page_pc/zwgk/zfwj/articleff7b546cd2784081ad5cbd63170a4d7a.html"
              },
              {
                "label": "河南四水同治规划",
                "url": "https://oss.henan.gov.cn/typtfile/20240123/f191e6f92c6b40e8b782d4533a0bb154.pdf"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧椭圆只按旧显示尺度圈中心；新候选依沙河与颍河的真实汇流低地形状展开，西端以逍遥镇方向推测连接。没有可核验全区面积，不将旧257.3当资料。；无核验官方单区面积；尚规划未建语境，最终红线未知；东西河岸哪段属围界未知；无官方坐标；ChatGPT建议不闭合仅为建议；用户允许两方向可定位改善后推测封口，不自动禁用；这是规划对象的推测全闭合候选，不代表已建法定边界。；西端堤线及汇流端工程封口未知；两河河心代理不等于堤顶。；未检到可靠总面积，参考面积为空，旧图257.3仅绘图尺度。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "大逍遥滞洪区",
        "河南省沙颍河大逍遥滞洪区工程"
      ],
      "chatgptExtractionPath": "automation/output/henan-chatgpt-2026-09-13/publications/2026-09-13T07-04-33-722Z-淮河-21/extraction.json"
    },
    "永定河泛区": {
      "id": "海河-01",
      "name": "永定河泛区",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "梁各庄村委（入口附近位置参考）",
            "location": "116.456317,39.437156",
            "anchorKind": "unknown"
          },
          {
            "id": "1",
            "name": "屈家店工程端点（环评坐标）",
            "location": "117.10241195,39.2472583",
            "anchorKind": "unknown"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "永定河泛区综合治理工程（天津段）环境影响报告书",
          "url": "https://www.ydhtz.com.cn/Private/Files/20241216/6386994584142439331200388.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "PDF第28页：梁各庄至屈家店全长约67公里，图2-1示全域形态及堤线，正文约500平方公里为不同口径；工程端点坐标可作下游定位参考。"
        },
        {
          "title": "中国防汛抗旱2023年第9期：蓄滞洪区面积表",
          "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023359.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "表1永定河泛区487.7平方公里，与用户约488口径接近；不提供精确边界矢量。"
        },
        {
          "title": "廊坊市政府：永定河泛区防汛备汛",
          "url": "https://www.lf.gov.cn/Item/156177.aspx",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "廊坊市政府给出起讫点、跨区范围和面积"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“永定河泛区”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河北省蓄滞洪区管理办法",
          "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "河北省政府规章列明省内蓄滞洪区管理范围，用于交叉核对跨市县工程的河北段归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省廊坊市固安县",
        "河北省廊坊市广阳区",
        "河北省廊坊市安次区",
        "河北省廊坊市永清县",
        "天津市武清区",
        "天津市北辰区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "永定河泛区为沿永定河展开的狭长型泛区，上起梁各庄附近，下至天津北辰屈家店枢纽，全长约67公里；北侧参考新北堤—护路堤—北运河左堤，南侧参考北遥堤—增产堤—南遥堤。全区面积按用户指定记录为488平方公里；三角淀为独立蓄滞洪区，不得重叠。",
        "reasoning": "以天津段环评第28页全域位置示意、公开底图及用户四至建立低精度轮廓。固定三角淀两版轮廓并留约2米数值间隙，保持至屈家店的连续通道。为达到488平方公里，西段示意宽度经面积拟合（参数见proposal-wgs.json）；此宽度及天津段绕三角淀的北侧边线尚非实测堤线，不能视为四至已逐段落实。梁各庄村委坐标仅为入口附近参照；未取得DEM或法定界址。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "永定河泛区为沿永定河展开的狭长型泛区，上起梁各庄附近，下至天津北辰屈家店枢纽，全长约67公里；北侧参考新北堤—护路堤—北运河左堤，南侧参考北遥堤—增产堤—南遥堤。全区面积按用户指定记录为488平方公里；三角淀为独立蓄滞洪区，不得重叠。 轮廓按面积拟合，精确堤线待审",
            "references": [
              {
                "url": "https://www.ydhtz.com.cn/Private/Files/20241216/6386994584142439331200388.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023359.pdf",
                "label": "引用 2"
              },
              {
                "url": "https://www.lf.gov.cn/Item/156177.aspx",
                "label": "引用 3"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 4"
              },
              {
                "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
                "label": "引用 5"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河北省廊坊市固安县、河北省廊坊市广阳区、河北省廊坊市安次区、河北省廊坊市永清县、天津市武清区、天津市北辰区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：永定河泛区为沿永定河展开的狭长型泛区，上起梁各庄附近，下至天津北辰屈家店枢纽，全长约67公里；北侧参考新北堤—护路堤—北运河左堤，南侧参考北遥堤—增产堤—南遥堤。全区面积按用户指定记录为488平方公里；三角淀为独立蓄滞洪区，不得重叠。现有证据只支持到该范围，确信度中。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "全区参考面积",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12以天津段环评第28页全域位置示意、公开底图及用户四至建立低精度轮廓。固定三角淀两版轮廓并留约2米数值间隙，保持至屈家店的连续通道。为达到488平方公里，西段示意宽度经面积拟合（参数见proposal-wgs.json）；此宽度及天津段绕三角淀的北侧边线尚非实测堤线，不能视为四至已逐段落实。梁各庄村委坐标仅为入口附近参照；未取得DEM或法定界址。",
            "references": []
          }
        ]
      }
    },
    "小清河分洪区": {
      "id": "海河-02",
      "name": "小清河分洪区",
      "basin": "海河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T08:03:16.496Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "小清河",
            "location": "116.19408963,39.75169136",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "小清河",
            "location": "116.17053023,39.6302482",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "小清河",
            "location": "116.14402908,39.57444002",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "小清河",
            "location": "116.20183934,39.70305784",
            "anchorKind": "natural"
          },
          {
            "id": "4",
            "name": "小清河",
            "location": "116.12985315,39.53073421",
            "anchorKind": "natural"
          },
          {
            "id": "5",
            "name": "小清河",
            "location": "116.13791752,39.56790354",
            "anchorKind": "natural"
          },
          {
            "id": "6",
            "name": "小清河",
            "location": "116.19818727,39.79558642",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "小清河桥",
            "location": "116.21465454,39.84963548",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "小清河与G4京港澳高速交叉口",
            "location": "116.19889628,39.7944031",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "小清河桥",
            "location": "116.2017819,39.69837025",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "小清河桥",
            "location": "116.180844,39.66930323",
            "anchorKind": "administrative"
          },
          {
            "id": "11",
            "name": "小清河2号桥",
            "location": "116.16996077,39.60579097",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "2024北京小清河四预能力建设招标",
          "publisher": "",
          "url": "https://ggzyfw.beijing.gov.cn/cmsbj/u/cms/cn.gov.bjggzyfw.www/202405/7320804541295.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "小清河行洪通道围堤",
          "publisher": "",
          "url": "https://ggzyfw.beijing.gov.cn/jyxxggjtbyqs/20231117/4260892.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "水土保持涿州部分工程管理资料",
          "publisher": "",
          "url": "https://www.stbc.cn/stbc/index/article?id=c149fd19e24b698f447309a905158b01",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "房山2023防汛责任表",
          "publisher": "",
          "url": "https://www.bjfsh.gov.cn/zhxw/fsb/202306/P020230626637989511119.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "丰台段风险图项目页",
          "publisher": "",
          "url": "https://www.bwsti.com/articleshow.aspx?cid=3307&lmid=1113",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原文显示URL与实际href有差异，不声称成功取得图"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "北京市丰台区",
        "北京市房山区",
        "河北省保定市涿州市"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "北京市房山区"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "北京丰台、房山和河北保定涿州，海河流域，排除山东小清河",
        "reasoning": "旧椭圆只围小清河同名检索点且缺少京冀分段关系；新候选沿已有河弯位置形成连续京冀低地示意，向南涿州展开。铁路、外堤和两端均未定位，不能把此图说成335km²完整工程界。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：小清河蓄滞洪区。海规计2012年91号规划总面积，非当前所有治理统计 335 km²：",
            "references": [
              {
                "label": "2024北京小清河四预能力建设招标",
                "url": "https://ggzyfw.beijing.gov.cn/cmsbj/u/cms/cn.gov.bjggzyfw.www/202405/7320804541295.pdf"
              },
              {
                "label": "小清河行洪通道围堤",
                "url": "https://ggzyfw.beijing.gov.cn/jyxxggjtbyqs/20231117/4260892.html"
              },
              {
                "label": "水土保持涿州部分工程管理资料",
                "url": "https://www.stbc.cn/stbc/index/article?id=c149fd19e24b698f447309a905158b01"
              },
              {
                "label": "房山2023防汛责任表",
                "url": "https://www.bjfsh.gov.cn/zhxw/fsb/202306/P020230626637989511119.pdf"
              },
              {
                "label": "丰台段风险图项目页",
                "url": "https://www.bwsti.com/articleshow.aspx?cid=3307&lmid=1113"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "北：大宁水库（资料记载）；南：古城小埝和小营横堤（资料记载）；东：北京段永定河右堤；河北段白沟河左堤上延及古城小埝（资料记载）；西：北京段京广铁路；河北段自然高地（资料记载）",
            "references": [
              {
                "label": "2024北京小清河四预能力建设招标",
                "url": "https://ggzyfw.beijing.gov.cn/cmsbj/u/cms/cn.gov.bjggzyfw.www/202405/7320804541295.pdf"
              },
              {
                "label": "小清河行洪通道围堤",
                "url": "https://ggzyfw.beijing.gov.cn/jyxxggjtbyqs/20231117/4260892.html"
              },
              {
                "label": "水土保持涿州部分工程管理资料",
                "url": "https://www.stbc.cn/stbc/index/article?id=c149fd19e24b698f447309a905158b01"
              },
              {
                "label": "房山2023防汛责任表",
                "url": "https://www.bjfsh.gov.cn/zhxw/fsb/202306/P020230626637989511119.pdf"
              },
              {
                "label": "丰台段风险图项目页",
                "url": "https://www.bwsti.com/articleshow.aspx?cid=3307&lmid=1113"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧椭圆只围小清河同名检索点且缺少京冀分段关系；新候选沿已有河弯位置形成连续京冀低地示意，向南涿州展开。铁路、外堤和两端均未定位，不能把此图说成335km²完整工程界。；335旧总/232北京/204.3涿州不同年代口径不得机械相加；424总/192河北为转载工程口径原来源链未充分展开，不替代主面积；大宁、铁路、高地、横堤精确接点及完整GIS线位未取得；城建Ⅲ区/良乡卫星城/涿仝安全区未取得完整轮廓，未声称净扣；北京或涿州乡镇行政界不等于工程界；全部外周折点为推测：京广铁路、永定右堤、白沟左堤上延、大宁端、古城小埝和小营横堤未取得精确线位。；内部小清河地图点只是检索地标，既不是官方坐标也不是外界点；本候选不宣称已复原全工程范围。；335为2012历史总面积、232为北京范围、204.3为涿州另一管理口径，不能直接相加；不拿任一数字配平。；北京安全区、良乡安全区和涿仝安全区未精确扣除，不称净有效行洪面。；实际对象为北京丰台/房山—河北涿州，不是山东小清河；乡镇名称只作上下文。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "小清河蓄滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/remaining-chatgpt-2026-09-13/publications/2026-09-13T08-03-16-496Z-海河-02/extraction.json"
    },
    "东淀": {
      "id": "海河-03",
      "name": "东淀",
      "basin": "海河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": true,
        "usableForLocation": true,
        "title": "东淀蓄滞洪区（西青区域）产业发展导则",
        "url": "https://www.tjxq.gov.cn/xwzx/ztzl/xczx/202406/W020240614377186983575.pdf",
        "publisher": "天津市西青区人民政府",
        "description": "导则印刷第4页介绍全区379平方公里与四至，第27页示意图仅覆盖西青区段；全区候选另参照2023年论文第38页图1，均不提供完整测量坐标。"
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 120,
        "contextAnchors": [
          {
            "id": "0",
            "name": "西接新盖房分洪道（论文图件近似）",
            "location": "116.26255978,38.99062091",
            "anchorKind": "source-map-outline"
          },
          {
            "id": "1",
            "name": "西河闸端点（论文图件近似）",
            "location": "116.95791147,39.1217482",
            "anchorKind": "source-map-outline"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "东淀蓄滞洪区（西青区）防洪避险导则",
          "url": "https://www.tjxq.gov.cn/xwzx/ztzl/xczx/202406/W020240614377186983575.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "印刷第4页：全区379平方公里、东西66公里、宽2.5—9公里及四至；第27页图仅画西青区段，不能当成全区边界。"
        },
        {
          "title": "海河“23·7”流域性特大洪水东淀蓄滞洪区洪水演进模拟与预报",
          "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023408.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "印刷第38页：规划面积378.76平方公里；图1显示全区轮廓，与新盖房分洪道分开，北东淀北大堤、南千里堤子牙河右堤，东至西河闸。"
        },
        {
          "title": "东淀蓄滞洪区建设征地移民安置实施方案",
          "url": "https://www.bazhou.gov.cn/zwgk/bzszcwj/content_29538",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "文件明确东淀位于大清河水系下游，跨霸州、文安、雄安新区及天津静海、西青。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“东淀”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河北省蓄滞洪区管理办法",
          "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "河北省政府规章列明省内蓄滞洪区管理范围，用于交叉核对跨市县工程的河北段归属。"
        },
        {
          "title": "天津市蓄滞洪区管理与安全建设答复",
          "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "市级答复列出天津国家蓄滞洪区及分类，用于交叉核对这些工程在天津的分布。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省廊坊市霸州市",
        "河北省廊坊市文安县",
        "天津市静海区",
        "天津市西青区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "位于大清河系下游，跨河北省霸州市、文安县和天津市静海区、西青区。北靠中亭河及东淀北大堤，南界千里堤、隔淀堤等分隔堤，东侧沿子牙河右堤、西河堤至西河闸枢纽，西接新盖房分洪道及下码头北洼、溢流洼一带。全区东西约66公里、南北约2.5—9公里，总面积约379平方公里；进退洪通道不作为东淀全区外包络。",
        "reasoning": "以379平方公里为全区面积参考，按中国防汛抗旱2023年第10期第38页图1的全区外轮廓手工描点，以河道转折和枢纽对照高德底图作仿射配准。重新生成狭长且不规则的完整候选，舍弃旧3178平方公里椭圆。图件无坐标网，配准残差最大约19底图像素，故堤线仅为低精度近似；不强行缩放来凑足379平方公里。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "西青区导则注明东淀全区379平方公里；2023年洪水模拟论文注明规划面积378.76平方公里，并区分东淀与新盖房分洪道。两者共同支持跨霸州、文安、静海、西青的狭长范围；县城与项目办公室点不构成围堤边界",
            "references": [
              {
                "url": "https://www.bazhou.gov.cn/zwgk/bzszcwj/content_29538",
                "label": "引用 1"
              },
              {
                "url": "https://www.tjxq.gov.cn/xwzx/ztzl/xczx/202406/W020240614377186983575.pdf",
                "label": "引用 2"
              },
              {
                "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023408.pdf",
                "label": "引用 3"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 4"
              },
              {
                "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
                "label": "引用 5"
              },
              {
                "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
                "label": "引用 6"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河北省廊坊市霸州市、河北省廊坊市文安县、天津市静海区、天津市西青区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：位于大清河系下游，跨河北省霸州市、文安县和天津市静海区、西青区。北靠中亭河及东淀北大堤，南界千里堤、隔淀堤等分隔堤，东侧沿子牙河右堤、西河堤至西河闸枢纽，西接新盖房分洪道及下码头北洼、溢流洼一带。全区东西约66公里、南北约2.5—9公里，总面积约379平方公里；进退洪通道不作为东淀全区外包络。现有证据相互印证，确信度高。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "东淀全区，非仅西青区段",
            "references": [
              {
                "label": "面积来源",
                "url": "https://www.tjxq.gov.cn/xwzx/ztzl/xczx/202406/W020240614377186983575.pdf"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12已按全区论文图1重绘东西向狭长候选。官方参考379平方公里（论文378.76）；手工配准候选约366.99平方公里，面积差约-3.2%。新盖房和独流减河仅表示进退洪连接，不整段圈入。图件无坐标网，外缘仍待核实。",
            "references": []
          }
        ]
      }
    },
    "文安洼": {
      "id": "海河-04",
      "name": "文安洼",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 21,
        "contextAnchors": [
          {
            "id": "0",
            "name": "津保南线大城县城段（底图参考）",
            "location": "116.64321899,38.69676461",
            "anchorKind": "road-context"
          },
          {
            "id": "1",
            "name": "津保南线子牙河附近（底图参考）",
            "location": "116.71463013,38.68336578",
            "anchorKind": "road-context"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "天津市东淀和文安洼蓄滞洪区工程与安全建设项目环境影响报告表（公开转载本）",
          "url": "https://16312426.s21i.faiusr.com/61/ABUIABA9GAAgw9LJsAYopIW4xwU.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "印刷第28页给出文安洼1557平方公里；第45页及后文明确跨文安、大城、任丘和静海，北千里堤隔淀堤、东子牙河左堤、南津保公路、西自然高地。官方原站索引与其项目题名、四至相符，原站PDF当前无法下载，使用转载本核读，不冒称已取回原站。"
        },
        {
          "title": "河北省大城县国民经济和社会发展第十三个五年规划纲要",
          "url": "https://www.lf.gov.cn/Item/112636.aspx",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "说明大城县城津保南线城区段及东西向津保路，支持道路身份；不是蓄洪边界测绘文件。"
        },
        {
          "title": "河北省水利厅水土保持方案编制范围征求意见稿（转载）",
          "url": "https://www.stbc.cn/stbc/index/article?id=c149fd19e24b698f447309a905158b01",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "大城县第68项将文安洼描述为南至津保路，东、西、北至县界。此为大城县内范围，不可当作跨县全区四至；征求意见稿仅作旁证。"
        },
        {
          "title": "文安县灾民防汛转移安置预案",
          "url": "https://www.wenan.gov.cn/GOV1/Item/36206.aspx",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "文安县转移预案和蓄滞洪区资料给出四至与12乡镇范围"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“文安洼”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河北省蓄滞洪区管理办法",
          "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "河北省政府规章列明省内蓄滞洪区管理范围，用于交叉核对跨市县工程的河北段归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省廊坊市文安县",
        "河北省廊坊市大城县",
        "河北省沧州市任丘市",
        "天津市静海区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "位于大清河下游、东淀南侧，以河北省廊坊市文安县为主体，并涉及大城县北部、沧州市任丘市和天津市静海区。北靠千里堤、隔淀堤，东依子牙河左堤，南至任丘—大城一线津保公路南线，西接任丘自然高地。大城县津保路北侧属于需纳入核对的范围，不能将文安洼缩成文安县城周边的小片区域。",
        "reasoning": "按用户四至重建候选：南边沿底图津保南线（S381）任丘至大城县城、子牙河附近路段手工描点，东侧参考子牙河左岸，西側自然高地仅作近似闭合，北侧参考千里堤/隔淀堤和大清河走廊。北侧约0.82平方公里描点交叠沿既定东淀候选接边消除，不移动东淀，不认定其为实测共堤。旧县城椭圆全部弃用；未取得全区测绘坐标和地形水位线。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "环评范围涉及文安、大城、任丘、静海，南止津保公路；大城县规划确认津保南线城区段。原定位遗漏大城县，并以县城办公点包络缩小全区，应按四至重建，仍需核定具体围堤",
            "references": [
              {
                "url": "https://16312426.s21i.faiusr.com/61/ABUIABA9GAAgw9LJsAYopIW4xwU.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://www.lf.gov.cn/Item/112636.aspx",
                "label": "引用 2"
              },
              {
                "url": "https://www.stbc.cn/stbc/index/article?id=c149fd19e24b698f447309a905158b01",
                "label": "引用 3"
              },
              {
                "url": "https://www.wenan.gov.cn/GOV1/Item/36206.aspx",
                "label": "引用 4"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 5"
              },
              {
                "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
                "label": "引用 6"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河北省廊坊市文安县、河北省廊坊市大城县、河北省沧州市任丘市、天津市静海区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：位于大清河下游、东淀南侧，以河北省廊坊市文安县为主体，并涉及大城县北部、沧州市任丘市和天津市静海区。北靠千里堤、隔淀堤，东依子牙河左堤，南至任丘—大城一线津保公路南线，西接任丘自然高地。大城县津保路北侧属于需纳入核对的范围，不能将文安洼缩成文安县城周边的小片区域。现有证据只支持到该范围，确信度中。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12已补列大城县，并按四至重建：南缘沿任丘—大城津保南线闭合。新候选约1524.21平方公里，环评参考1557平方公里。东淀固定，北侧接边仅作显示约束；西部高地及完整堤线未实测，需人工审核。",
            "references": []
          }
        ]
      }
    },
    "贾口洼": {
      "id": "海河-05",
      "name": "贾口洼",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 5,
        "contextAnchors": [
          {
            "id": "0",
            "name": "贾口洼",
            "location": "116.84956538,38.99478618",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "天津市贾口洼蓄滞洪区工程与安全建设施工五标段项目经理部",
            "location": "116.91609284,38.83905569",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "天津市水务局：贾口洼工程与安全建设",
          "url": "https://swj.tj.gov.cn/xwzx_17135/mtjj/202405/t20240508_6619886.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "天津工程资料确认静海区及独流安全区，项目原有资料确认跨青县"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“贾口洼”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "天津市蓄滞洪区管理与安全建设答复",
          "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "市级答复列出天津国家蓄滞洪区及分类，用于交叉核对这些工程在天津的分布。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省沧州市青县",
        "天津市静海区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "天津静海区西南部唐官屯—独流片区，并向河北青县北部延伸",
        "reasoning": "独立读取贾口洼证据包；先锁定河北省沧州市青县、天津市静海区及“天津静海区西南部唐官屯—独流片区，并向河北青县北部延伸”，再以本区地图锚点定中心与方向，按锚点跨度确定低精度显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "天津工程资料确认静海区及独流安全区，项目原有资料确认跨青县；另有2条官方资料交叉核对",
            "references": [
              {
                "url": "https://swj.tj.gov.cn/xwzx_17135/mtjj/202405/t20240508_6619886.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
                "label": "引用 3"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河北省沧州市青县、天津市静海区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：天津静海区西南部唐官屯—独流片区，并向河北青县北部延伸。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "兰沟洼": {
      "id": "海河-06",
      "name": "兰沟洼",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 25,
        "contextAnchors": [
          {
            "id": "0",
            "name": "兰沟洼-琉璃河特大桥",
            "location": "115.86631915,39.16960837",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "兰沟洼特大桥",
            "location": "115.96681335,39.13112967",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [
        {
          "title": "维基百科：新盖房水利枢纽",
          "publisher": "维基百科",
          "url": "https://zh.wikipedia.org/wiki/%E6%96%B0%E7%9B%96%E6%88%BF%E6%B0%B4%E5%88%A9%E6%9E%A2%E7%BA%BD",
          "sourceType": "encyclopedia",
          "supportsLocation": false,
          "confidenceEligible": false,
          "role": "search-expansion",
          "checkedAt": "2026-07-24",
          "locationSummary": "词条把兰沟洼与新盖房枢纽、东务分洪口门和东马营一带联系起来，并给出228平方公里面积，已用工程报道交叉核验。",
          "searchTerms": [
            "新盖房枢纽",
            "东务分洪闸",
            "东马营退洪闸"
          ],
          "locationRelations": [
            "新盖房枢纽上游",
            "东务进洪—东马营退洪"
          ],
          "crossValidation": {
            "status": "matched",
            "matchedAdministrativeAreas": [
              "河北省保定市高碑店市",
              "河北省保定市定兴县"
            ],
            "matchedRelations": [
              "东务分洪闸—东马营退洪闸"
            ],
            "supportingSourceUrls": [
              "https://www.news.cn/photo/20250630/b0b565e8b7fb434d854e2eff03f3cb03/c.html"
            ],
            "boundaryEligible": false
          }
        }
      ],
      "governmentSources": [
        {
          "title": "河北启用7处蓄滞洪区有序分泄河道洪水",
          "url": "https://www.xiongan.gov.cn/2023-08/02/c_1212251167.htm",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "大清河水系北支兰沟洼蓄滞洪区全区面积；不是桥梁或单个工程标段范围。资料面积228平方公里，仅用于猜测边界显示尺度。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“兰沟洼”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河北省蓄滞洪区管理办法",
          "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "河北省政府规章列明省内蓄滞洪区管理范围，用于交叉核对跨市县工程的河北段归属。"
        },
        {
          "title": "线索",
          "url": "https://zh.wikipedia.org/wiki/%E6%96%B0%E7%9B%96%E6%88%BF%E6%B0%B4%E5%88%A9%E6%9E%A2%E7%BA%BD",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "验收推断引用资料"
        },
        {
          "title": "新华网：兰沟洼高碑店段核心控制性工程",
          "url": "https://www.news.cn/photo/20250630/b0b565e8b7fb434d854e2eff03f3cb03/c.html",
          "sourceType": "mainstream-news",
          "supportsLocation": true,
          "locationSummary": "新华社报道确认两座核心闸门，中国建筑项目资料列出高碑店段6镇37村"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省保定市定兴县",
        "河北省保定市高碑店市"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "跨定兴县与高碑店市；高碑店段明确涉及肖官营、新城、辛桥、辛立庄、东马营、泗庄6镇，以东务分洪闸—东马营退洪闸为工程控制点",
        "reasoning": "独立读取兰沟洼证据包；先锁定河北省保定市定兴县、河北省保定市高碑店市及“跨定兴县与高碑店市；高碑店段明确涉及肖官营、新城、辛桥、辛立庄、东马营、泗庄6镇，以东务分洪闸—东马营退洪闸为工程控制点”，再以本区地图锚点定中心与方向，用本区228km²公开资料面积校验显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "大清河水系北支兰沟洼蓄滞洪区全区面积；不是桥梁或单个工程标段范围。按228平方公里资料尺度重建闭合猜测边界，旧锚点只作定位及方向代理。采用2023年启用消息记载的228 km²，并以央广网记者从水利部获得的消息交叉核对；两篇报道可能共享消息来源，不视为两次独立测量。面积仅约束猜测边界尺度",
            "references": [
              {
                "url": "https://zh.wikipedia.org/wiki/%E6%96%B0%E7%9B%96%E6%88%BF%E6%B0%B4%E5%88%A9%E6%9E%A2%E7%BA%BD",
                "label": "线索"
              },
              {
                "url": "https://www.xiongan.gov.cn/2023-08/02/c_1212251167.htm",
                "label": "引用 1"
              },
              {
                "url": "https://www.news.cn/photo/20250630/b0b565e8b7fb434d854e2eff03f3cb03/c.html",
                "label": "引用 2"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 3"
              },
              {
                "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河北省保定市定兴县、河北省保定市高碑店市。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：跨定兴县与高碑店市；高碑店段明确涉及肖官营、新城、辛桥、辛立庄、东马营、泗庄6镇，以东务分洪闸—东马营退洪闸为工程控制点。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "宁晋泊": {
      "id": "海河-07",
      "name": "宁晋泊",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 29,
        "contextAnchors": [
          {
            "id": "0",
            "name": "大陆泽宁晋泊蓄滞洪区防洪工程与安全建设指挥部",
            "location": "114.79454432,37.37921494",
            "anchorKind": "engineering"
          },
          {
            "id": "1",
            "name": "宁晋泊生态湿地示范区",
            "location": "115.05398768,37.50157302",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "宁晋泊工程宁晋段临时用地复垦范围",
          "url": "https://www.ningjin.gov.cn/single/121/59696.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "宁晋县项目与生态修复规划列明工程涉及乡镇和村庄"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“宁晋泊”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河北省蓄滞洪区管理办法",
          "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "河北省政府规章列明省内蓄滞洪区管理范围，用于交叉核对跨市县工程的河北段归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省邢台市隆尧县",
        "河北省邢台市宁晋县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "隆尧县东部—宁晋县南部，重点为北河庄、大曹庄、徐家河、耿庄桥、东汪等乡镇",
        "reasoning": "独立读取宁晋泊证据包；先锁定河北省邢台市隆尧县、河北省邢台市宁晋县及“隆尧县东部—宁晋县南部，重点为北河庄、大曹庄、徐家河、耿庄桥、东汪等乡镇”，再以本区地图锚点定中心与方向，按锚点跨度确定低精度显示尺度。旧主项目边界未参与生成。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "宁晋县项目与生态修复规划列明工程涉及乡镇和村庄；另有2条官方资料交叉核对",
            "references": [
              {
                "url": "https://www.ningjin.gov.cn/single/121/59696.html",
                "label": "引用 1"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 2"
              },
              {
                "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
                "label": "引用 3"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河北省邢台市隆尧县、河北省邢台市宁晋县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：隆尧县东部—宁晋县南部，重点为北河庄、大曹庄、徐家河、耿庄桥、东汪等乡镇。现有证据只支持到该范围，确信度中。",
            "references": []
          }
        ]
      }
    },
    "大陆泽": {
      "id": "海河-08",
      "name": "大陆泽",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 23,
        "contextAnchors": [
          {
            "id": "0",
            "name": "天口镇杜家庄村核心参考",
            "location": "114.823289,37.154496",
            "anchorKind": "core-location-reference"
          },
          {
            "id": "1",
            "name": "骆六村区内参考",
            "location": "114.81371,37.114531",
            "anchorKind": "settlement-context"
          },
          {
            "id": "2",
            "name": "环水村北部参考",
            "location": "114.796868,37.229546",
            "anchorKind": "settlement-context"
          },
          {
            "id": "3",
            "name": "邢家湾北部参考",
            "location": "114.804761,37.256552",
            "anchorKind": "settlement-context"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "雨后再出发——河北省受灾脱贫地区帮扶进行时",
          "url": "https://www.ezhou.gov.cn/zt/zdzt/jzfp/tszs/202310/t20231012_580521.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "正文明确任泽区天口镇杜家庄村是区内最低地带及大陆泽洼地核心；文中沙洺河流经村庄。"
        },
        {
          "title": "治水利民 泽被千秋——大陆泽、宁晋泊工程启动实施",
          "url": "https://m.thepaper.cn/baijiahao_19309474",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "任泽区水务局受访者介绍区内大陆泽面积279平方公里，北澧新河将大陆泽洪水下泄宁晋泊。279出现在任泽区范围介绍，不冒充已确认的跨区全区面积；八县为联合工程范围。"
        },
        {
          "title": "我省抓紧抓实灾后恢复重建各项工作",
          "url": "https://www.lf.gov.cn/Item/134480.aspx",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "明确任泽区骆庄乡骆六村位于大陆泽蓄滞洪区，处于沙洺河与南澧河之间。"
        },
        {
          "title": "大陆泽、宁晋泊蓄滞洪区工程范围资料",
          "url": "https://finance.sina.cn/2022-08-03/detail-imizirav6521125.d.html",
          "sourceType": "mainstream-news",
          "supportsLocation": true,
          "locationSummary": "国家项目报道明确两大蓄滞洪区合计跨8县区49乡镇"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“大陆泽”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河北省蓄滞洪区管理办法",
          "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "河北省政府规章列明省内蓄滞洪区管理范围，用于交叉核对跨市县工程的河北段归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省邢台市任泽区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "河北省邢台市任泽区，以天口镇杜家庄村附近为大陆泽低洼核心。南部覆盖骆庄乡骆六村及沙洺河、南澧河、留垒河汇流低地，北部向环水村、邢家湾镇方向收束；西侧接近任泽城区及较高地带、主体在京广铁路以东。北澧新河向东北连通下游宁晋泊，此连接不等于大陆泽覆盖宁晋泊或联合工程八县范围。",
        "reasoning": "采用用户指定的杜家庄村核心与约279平方公里尺度，以骆六村区内参考和环水村、邢家湾北部参考约束生成北端收窄的低精度候选。只调没有测量依据的外包络宽度，所有已定位参考点保持不动。道路底图用来核对地名、河流走向与城区相对位置；未取得DEM淹没线或完整围堤坐标，折点不是实际界址。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "杜家庄村低洼核心与骆六村区内位置分别有报道支持；279平方公里采用用户指定并有任泽区面积介绍印证。两区联合项目八县范围不能套给大陆泽，北澧新河仅是向宁晋泊下泄的连接通道",
            "references": [
              {
                "url": "https://www.ezhou.gov.cn/zt/zdzt/jzfp/tszs/202310/t20231012_580521.html",
                "label": "引用 1"
              },
              {
                "url": "https://m.thepaper.cn/baijiahao_19309474",
                "label": "引用 2"
              },
              {
                "url": "https://www.lf.gov.cn/Item/134480.aspx",
                "label": "引用 3"
              },
              {
                "url": "https://finance.sina.cn/2022-08-03/detail-imizirav6521125.d.html",
                "label": "引用 4"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 5"
              },
              {
                "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
                "label": "引用 6"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河北省邢台市任泽区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：河北省邢台市任泽区，以天口镇杜家庄村附近为大陆泽低洼核心。南部覆盖骆庄乡骆六村及沙洺河、南澧河、留垒河汇流低地，北部向环水村、邢家湾镇方向收束；西侧接近任泽城区及较高地带、主体在京广铁路以东。北澧新河向东北连通下游宁晋泊，此连接不等于大陆泽覆盖宁晋泊或联合工程八县范围。现有证据只支持到该范围，确信度中。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "用户指定大陆泽制图尺度；报道为任泽区范围介绍",
            "references": [
              {
                "label": "面积来源",
                "url": "https://m.thepaper.cn/baijiahao_19309474"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12已将核心点定位到天口镇杜家庄村附近，重绘约279.04平方公里候选，南含骆六村、北向环水村和邢家湾收窄。279平方公里在报道中为任泽区介绍口径，本次按用户指定采用；外缘仅为方位和面积约束的猜测线，非测绘或DEM结果。",
            "references": []
          }
        ]
      }
    },
    "良相坡": {
      "id": "海河-09",
      "name": "良相坡",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:03:02.782Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "淇河",
            "location": "114.2136593,35.78117894",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "西岗镇人民政府",
            "location": "114.24796434,35.56534198",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "西岗镇大李庄村民委员会",
            "location": "114.25569557,35.51755187",
            "anchorKind": "administrative"
          },
          {
            "id": "3",
            "name": "西岗镇便民服务中心",
            "location": "114.24991487,35.57000137",
            "anchorKind": "administrative"
          },
          {
            "id": "4",
            "name": "中共淇县西岗镇委员会",
            "location": "114.24836089,35.56499766",
            "anchorKind": "administrative"
          },
          {
            "id": "5",
            "name": "西岗镇西岗村退役军人服务站",
            "location": "114.25047156,35.57213657",
            "anchorKind": "administrative"
          },
          {
            "id": "6",
            "name": "西岗镇河口村退役军人服务站",
            "location": "114.28422005,35.60526095",
            "anchorKind": "administrative"
          },
          {
            "id": "7",
            "name": "西岗镇商贸综合服务中心",
            "location": "114.24796903,35.571885",
            "anchorKind": "administrative"
          },
          {
            "id": "8",
            "name": "西岗镇大车村退役军人服务站",
            "location": "114.26416491,35.59784781",
            "anchorKind": "administrative"
          },
          {
            "id": "9",
            "name": "西岗镇宋庄村退役军人服务站",
            "location": "114.27909957,35.61530069",
            "anchorKind": "administrative"
          },
          {
            "id": "10",
            "name": "淇县西岗镇宋庄村儿童之家",
            "location": "114.27448143,35.61703201",
            "anchorKind": "administrative"
          },
          {
            "id": "11",
            "name": "淇县西岗镇退役军人服务站",
            "location": "114.24809219,35.56520386",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "2026河南防汛责任名单",
          "publisher": "",
          "url": "https://dzb.henandaily.cn/html5/2026-05/13/content_17_1792490.htm",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "海河23·7特大洪水国家蓄滞洪区统计",
          "publisher": "",
          "url": "https://www.cfdm.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023359.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "鹤壁朝歌堤提升报道",
          "publisher": "",
          "url": "https://hbrb.hebiw.com/pad/con/202505/20/content_25774.html",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "卫河右堤文字冲突"
        },
        {
          "title": "良相坡堤提升环评文本镜像",
          "publisher": "",
          "url": "https://max.book118.com/html/2025/0218/6101033012011043.shtm",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "坐标基准未知"
        },
        {
          "title": "河南良相坡被洪水淹没村庄",
          "publisher": "",
          "url": "https://www.cicphoto.com/cn/view14334494",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省鹤壁市淇县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "河南鹤壁淇县与新乡卫辉。淇县西岗镇、北阳镇、朝歌街道；卫辉上乐村镇小河口、曲律、西沿等村。",
        "reasoning": "旧椭圆沿淇河远向北扩展并越过卫河；新候选回到朝歌堤—西岗堤—卫河交汇低地，南侧沿实际卫河折转，西北高地闭合仍推测。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：良相坡蓄滞洪区、良相坡滞洪区。国家蓄滞洪区统计面积 81.1 km²：蓄滞洪量0.7亿m³；早期设计滞洪/溢洪淹没范围 71 km²：早期0.59亿m³，不等同现行总区",
            "references": [
              {
                "label": "2026河南防汛责任名单",
                "url": "https://dzb.henandaily.cn/html5/2026-05/13/content_17_1792490.htm"
              },
              {
                "label": "海河23·7特大洪水国家蓄滞洪区统计",
                "url": "https://www.cfdm.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023359.pdf"
              },
              {
                "label": "鹤壁朝歌堤提升报道",
                "url": "https://hbrb.hebiw.com/pad/con/202505/20/content_25774.html"
              },
              {
                "label": "良相坡堤提升环评文本镜像",
                "url": "https://max.book118.com/html/2025/0218/6101033012011043.shtm"
              },
              {
                "label": "河南良相坡被洪水淹没村庄",
                "url": "https://www.cicphoto.com/cn/view14334494"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "东：西岗堤及淇河右堤。（资料记载）；北：朝歌防洪堤，旧称淇县城关堤，西北转自然高地。（资料记载）；南：多数资料卫河左堤；2025鹤壁报道写右堤，保留冲突，不能机械确定。（conflicted）；西：西北自然高地精确坡脚缺线，推测闭合。（绘图推断）",
            "references": [
              {
                "label": "2026河南防汛责任名单",
                "url": "https://dzb.henandaily.cn/html5/2026-05/13/content_17_1792490.htm"
              },
              {
                "label": "海河23·7特大洪水国家蓄滞洪区统计",
                "url": "https://www.cfdm.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023359.pdf"
              },
              {
                "label": "鹤壁朝歌堤提升报道",
                "url": "https://hbrb.hebiw.com/pad/con/202505/20/content_25774.html"
              },
              {
                "label": "良相坡堤提升环评文本镜像",
                "url": "https://max.book118.com/html/2025/0218/6101033012011043.shtm"
              },
              {
                "label": "河南良相坡被洪水淹没村庄",
                "url": "https://www.cicphoto.com/cn/view14334494"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧椭圆沿淇河远向北扩展并越过卫河；新候选回到朝歌堤—西岗堤—卫河交汇低地，南侧沿实际卫河折转，西北高地闭合仍推测。；西北自然高地坡脚；卫河左右堤来源冲突；镜像DMS非已核实官方界址；卫河左堤/右堤资料存在冲突；这里用实际河段和交汇方向定位，不宣布解决了具体堤岸名称。；西岗堤、朝歌堤和西北自然高地转角为粗略推测；环评镜像DMS坐标基准未知，只作方向级比对，不冒充WGS84测点。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "良相坡蓄滞洪区",
        "良相坡滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/henan-chatgpt-2026-09-13/publications/2026-09-13T07-03-02-782Z-海河-09/extraction.json"
    },
    "长虹渠": {
      "id": "海河-10",
      "name": "长虹渠",
      "basin": "海河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 23,
        "contextAnchors": [
          {
            "id": "0",
            "name": "淇门村附近（非分洪闸坐标）",
            "location": "114.300776,35.486559",
            "anchorKind": "location-context"
          },
          {
            "id": "1",
            "name": "申店村（隔堤位置参考）",
            "location": "114.322396,35.456158",
            "anchorKind": "location-context"
          },
          {
            "id": "2",
            "name": "新镇（区域参考）",
            "location": "114.368105,35.50841",
            "anchorKind": "location-context"
          },
          {
            "id": "3",
            "name": "王庄镇新集村（区内河道入口参考）",
            "location": "114.417744,35.499538",
            "anchorKind": "location-context"
          },
          {
            "id": "4",
            "name": "小铺（区域参考）",
            "location": "114.488803,35.530687",
            "anchorKind": "location-context"
          },
          {
            "id": "5",
            "name": "道口南街附近（非退水闸坐标）",
            "location": "114.509172,35.573053",
            "anchorKind": "location-context"
          },
          {
            "id": "6",
            "name": "浚县曹湾村（非溢洪堰坐标）",
            "location": "114.481914,35.599215",
            "anchorKind": "location-context"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "滑县长虹渠蓄滞洪区2025年运用预案",
          "url": "https://guotuju.hnhx.gov.cn/portal/zwgk/zdlyxxgk/slly/webinfo/2025/05/1751277793518536.htm",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "明确卫河右堤和太行堤之间长条形区域、滑县面积26.6平方公里；长虹渠在王庄新集进入滑县，在道口南街入卫河，涉及王庄、小铺、道口，退水设施有长虹渠退水闸及曹湾溢洪堰。"
        },
        {
          "title": "蓄滞洪区建设项目安全设施方案研究",
          "url": "https://ojs.omniscient.sg/index.php/ntec/article/download/44903/43813/",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "明确长虹渠位于浚县、滑县，南太行堤、北卫河右堤、西申店隔堤；仅文字和工程方案，没有完整边界坐标。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省鹤壁市浚县",
        "河南省安阳市滑县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "河南省鹤壁市浚县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "长虹渠蓄滞洪区位于浚县、滑县的卫河右堤与太行堤之间，西起淇门分洪口及申店隔堤附近，东向经新镇、滑县王庄镇新集、小铺、道口一带，退水设施包括道口附近长虹渠退水闸和曹湾溢洪堰。125平方公里按用户给定全区尺度，滑县水利局预案明确滑县部分26.6平方公里；长虹渠河流上溯卫辉不等于蓄滞洪区西界上溯到卫辉。",
        "reasoning": "长虹渠蓄滞洪区位于河南豫北浚县东南部与滑县西部交界一带、卫河右堤和太行堤之间；沿淇门—新镇东部—王庄镇新集村—小铺—道口、曹湾附近展开，图示面积125平方公里。按地名坐标，主体由西南向东北延伸。 官方预案确认长虹渠自王庄镇新集村进入滑县、于道口南街村入卫河，滑县段12.5公里。既有卫河侧描线与全部地名锚点固定，未核实的南侧假设线向南微调约16.1米，球面几何面积为125.00平方公里。125为用户指定全区图示尺度；滑县部分与官方26.6平方公里口径不符、太行堤精确线位缺失及邻区旧图冲突仍待核实。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "位置与边界",
            "outcome": "已验收",
            "detail": "浚县东南部、滑县西部交界地区，北侧卫河右堤，南侧太行堤，西侧申店隔堤附近。",
            "references": [
              {
                "url": "https://guotuju.hnhx.gov.cn/portal/zwgk/zdlyxxgk/slly/webinfo/2025/05/1751277793518536.htm",
                "label": "滑县官方预案"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区内排涝通道",
            "outcome": "已验收",
            "detail": "按淇门、新镇东部、王庄镇新集、小铺、道口及曹湾一带核对位置。官方确认新集进入滑县、南街村入卫河，滑县段12.5公里；地名序列仅为方位参考，不绘成实测洪水流线。",
            "references": [
              {
                "url": "https://guotuju.hnhx.gov.cn/portal/zwgk/zdlyxxgk/slly/webinfo/2025/05/1751277793518536.htm",
                "label": "河道起讫及长度"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "125平方公里制图尺度",
            "outcome": "已验收",
            "detail": "按用户给定的125平方公里设置图示尺度。保持卫河侧描线和地名点固定，仅微调未核实的南侧假设线。滑县官方26.6平方公里为县内口径，现图分县面积不符的问题仍保留待审。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "用户指定全区图示面积125平方公里；滑县26.6平方公里为官方县内口径",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12待审候选约124.98平方公里；滑县县界参考交叠约47.1平方公里，与官方26.6差异明显，太行堤尚未准确定位。白寺坡、良相坡旧候选仍有重叠。本次仅更新原审核页，主图边界保持不变，等待人工标线。",
            "references": []
          }
        ]
      }
    },
    "柳围坡": {
      "id": "海河-11",
      "name": "柳围坡",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 38,
        "contextAnchors": [
          {
            "id": "0",
            "name": "上乐村镇范围参考",
            "location": "114.22,35.47",
            "anchorKind": "location-context"
          },
          {
            "id": "1",
            "name": "申店村（非隔堤实测点）",
            "location": "114.322396,35.456158",
            "anchorKind": "location-context"
          },
          {
            "id": "2",
            "name": "濮卫高速道路位置参考",
            "location": "114.213046,35.430547",
            "anchorKind": "location-context"
          },
          {
            "id": "3",
            "name": "S72濮卫高速道路位置参考",
            "location": "114.263452,35.430771",
            "anchorKind": "location-context"
          },
          {
            "id": "4",
            "name": "S72濮卫高速道路位置参考",
            "location": "114.290869,35.440046",
            "anchorKind": "location-context"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "河南省卫辉市漳卫河“21·7”洪水灾后治理柳围坡蓄滞洪区建设项目涉及的河南省浚县新镇煤普查项目压覆区域勘查成本价值评估报告",
          "url": "https://xcoss.henan.gov.cn/typtfile/20260310/5d2665f13a7a4a0aa08b5c59c35b54f8.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "PDF第19页（印刷18页）明确北卫河右堤、东申店隔堤、南濮卫高速、西城郊乡自然高地，面积78.51平方公里，约10×7公里；附图为矿区范围与工程位置，不是全洪区界址。"
        },
        {
          "title": "河南省海河流域五处蓄滞洪区项目勘察设计评标结果公示",
          "url": "https://slt.henan.gov.cn/2022/09-16/2608344.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "列出柳围坡与良相坡、长虹渠、白寺坡、小滩坡为不同工程对象；不提供具体界线。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省新乡市卫辉市",
        "河南省鹤壁市浚县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "柳围坡蓄滞洪区位于河南省卫河右岸，新乡市卫辉市东部至鹤壁市浚县西南部。北界卫河右堤，东界申店隔堤，南界濮卫高速，西至卫辉市城郊乡自然高地；涉及上乐村、城郊、李源屯、庞寨一带。规划淹没面积78.5平方公里（2026年公开项目报告记78.51），资料约记东西10公里、南北7公里。乡镇范围不是全乡镇纳入的依据。",
        "reasoning": "按本轮四至要求重绘：恢复等比缩小前的卫河侧描线、濮卫高速路线与申店隔堤参考线；东侧复用长虹渠当前候选的西侧线段，两候选共边且不重叠。固定这三侧以后，以78.5平方公里作为制图尺度，在西部未核实地带设置临时南北闭合线（WGS84经度约114.187251）。这条西线是面积约束下的显示假设，不是已确认的城郊乡界、自然高地边缘或等高线；取得高程及工程范围图后仍须重绘。图示顺序为卫辉城区方向—柳围坡—申店隔堤—长虹渠，卫河沿两区北侧延伸，不表示仅位于最东端。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "四至与面积",
            "outcome": "已验收",
            "detail": "政府网站所载项目评估报告列出北卫河右堤、南濮卫高速、东申店隔堤、西城郊乡自然高地及78.5平方公里。",
            "references": [
              {
                "url": "https://xcoss.henan.gov.cn/typtfile/20260310/5d2665f13a7a4a0aa08b5c59c35b54f8.pdf",
                "label": "项目评估报告"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "两区邻接",
            "outcome": "已验收",
            "detail": "柳围坡在申店隔堤参考线西侧，长虹渠在东侧。此页邻区线显示长虹渠当前审阅候选，以便直接核对共边。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "西界待核",
            "outcome": "已验收",
            "detail": "按本轮四至要求重绘：恢复等比缩小前的卫河侧描线、濮卫高速路线与申店隔堤参考线；东侧复用长虹渠当前候选的西侧线段，两候选共边且不重叠。固定这三侧以后，以78.5平方公里作为制图尺度，在西部未核实地带设置临时南北闭合线（WGS84经度约114.187251）。这条西线是面积约束下的显示假设，不是已确认的城郊乡界、自然高地边缘或等高线；取得高程及工程范围图后仍须重绘。图示顺序为卫辉城区方向—柳围坡—申店隔堤—长虹渠，卫河沿两区北侧延伸，不表示仅位于最东端。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "柳围坡规划淹没面积",
            "references": [
              {
                "label": "面积来源",
                "url": "https://xcoss.henan.gov.cn/typtfile/20260310/5d2665f13a7a4a0aa08b5c59c35b54f8.pdf"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12按本轮四至要求重绘：恢复等比缩小前的卫河侧描线、濮卫高速路线与申店隔堤参考线；东侧复用长虹渠当前候选的西侧线段，两候选共边且不重叠。固定这三侧以后，以78.5平方公里作为制图尺度，在西部未核实地带设置临时南北闭合线（WGS84经度约114.187251）。这条西线是面积约束下的显示假设，不是已确认的城郊乡界、自然高地边缘或等高线；取得高程及工程范围图后仍须重绘。图示顺序为卫辉城区方向—柳围坡—申店隔堤—长虹渠，卫河沿两区北侧延伸，不表示仅位于最东端。",
            "references": []
          }
        ]
      }
    },
    "白寺坡": {
      "id": "海河-12",
      "name": "白寺坡",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-13T07:03:54.105Z",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 120,
        "contextAnchors": [
          {
            "id": "0",
            "name": "卫河",
            "location": "114.34155411,35.51809809",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "卫河",
            "location": "114.53712475,35.68039922",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "卫河",
            "location": "114.41217314,35.55532114",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "卫河",
            "location": "114.53280835,35.6143047",
            "anchorKind": "natural"
          },
          {
            "id": "4",
            "name": "卫河",
            "location": "114.44823559,35.58632526",
            "anchorKind": "natural"
          },
          {
            "id": "5",
            "name": "卫河",
            "location": "114.50089585,35.76757613",
            "anchorKind": "natural"
          },
          {
            "id": "6",
            "name": "卫河",
            "location": "114.50307103,35.73921243",
            "anchorKind": "natural"
          },
          {
            "id": "7",
            "name": "卫河",
            "location": "114.52260671,35.80538607",
            "anchorKind": "natural"
          },
          {
            "id": "8",
            "name": "卫河",
            "location": "114.5278205,35.70741385",
            "anchorKind": "natural"
          },
          {
            "id": "9",
            "name": "卫河",
            "location": "114.5105141,35.57912076",
            "anchorKind": "natural"
          },
          {
            "id": "10",
            "name": "屯子镇人民政府",
            "location": "114.48808524,35.7778458",
            "anchorKind": "administrative"
          },
          {
            "id": "11",
            "name": "浚县屯子镇民政所",
            "location": "114.49274164,35.77635468",
            "anchorKind": "administrative"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "滑县白寺坡2025运用预案",
          "publisher": "",
          "url": "https://www.hnhx.gov.cn/cms/cmsadmin/infopub/infopre.jsp?channelcode=A00020342&infoid=1751277793605634&pubpath=portal&pubtype=D&templetid=1611986277702238&userId=10002",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "2021鹤壁启用白寺坡公告转载",
          "publisher": "",
          "url": "https://www.thepaper.cn/newsDetail_forward_13736844",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "国家蓄滞洪区统计",
          "publisher": "",
          "url": "https://www.cfdm.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023359.pdf",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "2026防汛责任名单",
          "publisher": "",
          "url": "https://dzb.henandaily.cn/html5/2026-05/13/content_17_1792490.htm",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "ChatGPT引用，须结合原文核对"
        },
        {
          "title": "OpenStreetMap众包地理参考",
          "publisher": "",
          "url": "https://www.openstreetmap.org/copyright",
          "sourceType": "web-research-source",
          "supportsLocation": true,
          "locationSummary": "原始WGS84水系存档；河心只作位置代理，不等于堤顶"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省鹤壁市浚县",
        "河南省安阳市滑县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "河南鹤壁浚县与安阳滑县。浚县小河、白寺、屯子、卫溪、浚州及农场；滑县道口河西、程文庄、顺北新村、白庄、军庄5村。",
        "reasoning": "旧大椭圆横跨共渠和卫河、向南北过展；新候选沿两条实际水系围出中间洼地，北端屯子和南端道路连接仍推测，不以滑县6.2km²代替全区。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "面积口径",
            "outcome": "分别保留资料口径",
            "detail": "资料中亦称：白寺坡蓄滞洪区、白寺坡滞洪区。国家蓄滞洪区统计面积 129.1 km²：3.1亿m³",
            "references": [
              {
                "label": "滑县白寺坡2025运用预案",
                "url": "https://www.hnhx.gov.cn/cms/cmsadmin/infopub/infopre.jsp?channelcode=A00020342&infoid=1751277793605634&pubpath=portal&pubtype=D&templetid=1611986277702238&userId=10002"
              },
              {
                "label": "2021鹤壁启用白寺坡公告转载",
                "url": "https://www.thepaper.cn/newsDetail_forward_13736844"
              },
              {
                "label": "国家蓄滞洪区统计",
                "url": "https://www.cfdm.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023359.pdf"
              },
              {
                "label": "2026防汛责任名单",
                "url": "https://dzb.henandaily.cn/html5/2026-05/13/content_17_1792490.htm"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "多方向位置与边界",
            "outcome": "保留资料与推测区别",
            "detail": "西：共产主义渠东堤以东。（资料记载）；东：卫河河堤、傅庄堤以西。（资料记载）；北：屯子码头以南，卫河左堤与同山/屯子丘陵之间。（资料记载）；南：省道S305大海线以北。（资料记载）",
            "references": [
              {
                "label": "滑县白寺坡2025运用预案",
                "url": "https://www.hnhx.gov.cn/cms/cmsadmin/infopub/infopre.jsp?channelcode=A00020342&infoid=1751277793605634&pubpath=portal&pubtype=D&templetid=1611986277702238&userId=10002"
              },
              {
                "label": "2021鹤壁启用白寺坡公告转载",
                "url": "https://www.thepaper.cn/newsDetail_forward_13736844"
              },
              {
                "label": "国家蓄滞洪区统计",
                "url": "https://www.cfdm.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023359.pdf"
              },
              {
                "label": "2026防汛责任名单",
                "url": "https://dzb.henandaily.cn/html5/2026-05/13/content_17_1792490.htm"
              },
              {
                "label": "OpenStreetMap众包地理参考",
                "url": "https://www.openstreetmap.org/copyright"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "人工点击验收",
            "outcome": "推测边界用于地图展示",
            "detail": "旧大椭圆横跨共渠和卫河、向南北过展；新候选沿两条实际水系围出中间洼地，北端屯子和南端道路连接仍推测，不以滑县6.2km²代替全区。；S305与堤线交接节点；屯子码头北部转折；未找到闸口官方经纬度；屯子码头、S305与堤线精确交接点未定位，南北端是可审阅推测，非道路实测轨迹。；傅庄堤局部与卫河河心有差别，沿河代理不认定为堤顶；129.1是整体资料值。；候选为资料推定范围，非法定边界，未经实地核验。；依据段为地理位置代理，不能认定为测量堤线；未知闭合段明确为推测。",
            "references": []
          }
        ]
      },
      "aliases": [
        "白寺坡蓄滞洪区",
        "白寺坡滞洪区"
      ],
      "chatgptExtractionPath": "automation/output/henan-chatgpt-2026-09-13/publications/2026-09-13T07-03-54-105Z-海河-12/extraction.json"
    },
    "大名泛区": {
      "id": "海河-13",
      "name": "大名泛区",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "大名县城（内部参考）",
            "location": "115.147985,36.286406",
            "anchorKind": "administrative"
          },
          {
            "id": "1",
            "name": "升斗铺村（分洪口附近参考，非口门坐标）",
            "location": "115.130607,36.311881",
            "anchorKind": "administrative"
          },
          {
            "id": "2",
            "name": "漳河右岸侧（河道代理）",
            "location": "115.20228601,36.40052103",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "卫河左岸侧（河道代理）",
            "location": "115.30261308,36.34440507",
            "anchorKind": "natural"
          },
          {
            "id": "4",
            "name": "漳卫汇合处（河道参考）",
            "location": "115.28356988,36.47690689",
            "anchorKind": "natural"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "中国水利报：向着难处攻 奔着问题去",
          "url": "https://www.chinawater.com.cn/newscenter/kx/202307/t20230708_798710.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "中国水利报实地查勘记录明确点名漳河大名泛区升斗铺分洪口门"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“大名泛区”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河北省蓄滞洪区管理办法",
          "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "河北省政府规章列明省内蓄滞洪区管理范围，用于交叉核对跨市县工程的河北段归属。"
        },
        {
          "title": "大名泛区防洪工程项目采购公告（第三方转载，2026-09-01）",
          "url": "https://www.yunzhuluban.cn/details/7/726",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.yunzhuluban.cn"
        },
        {
          "title": "OpenStreetMap 漳河与卫河河道参考",
          "url": "https://www.openstreetmap.org/way/593877368",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.openstreetmap.org"
        },
        {
          "title": "DataV 大名县参考行政界",
          "url": "https://geo.datav.aliyun.com/areas_v3/bound/130425.json",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "geo.datav.aliyun.com"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省邯郸市大名县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "位于河北省大名县漳河右岸与卫河左岸之间，覆盖大名县城及周边农村平原；西北侧为升斗铺分洪口一带，东侧沿小引河、高庄固退水工程方向展开。",
        "reasoning": "按用户提供的漳河右堤、卫河左堤关系重绘：以 OpenStreetMap 漳河、卫河河道线作为两侧堤线的低精度代理，在两河汇合处闭合；西南侧暂以大名县参考行政界截断，覆盖县城和两河间农村平原。河道中心线不是实测堤线，县界也不是已确认的泛区边界。参考面积约371平方公里；当前图示约318.82平方公里，差约14.1%，保留差异等待工程范围图复核，未为凑面积移动河道。74公里为工程堤防总长，不当作图示周长。升斗铺村点仅为口门附近位置参考，高庄固闸尚无可靠精确坐标，不虚设闸址。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "两河约束",
            "outcome": "已验收",
            "detail": "漳河右岸与卫河左岸之间构成泛区主体，工程资料列出两堤总长约74公里。",
            "references": [
              {
                "url": "https://www.yunzhuluban.cn/details/7/726",
                "label": "工程资料"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "分洪与退水定位",
            "outcome": "已验收",
            "detail": "升斗铺位于县城西北侧漳河附近；高庄固村在小引河附近、卫河西侧。村级地图点不等同于闸口实测坐标。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "范围与面积复核",
            "outcome": "已验收",
            "detail": "按用户提供的漳河右堤、卫河左堤关系重绘：以 OpenStreetMap 漳河、卫河河道线作为两侧堤线的低精度代理，在两河汇合处闭合；西南侧暂以大名县参考行政界截断，覆盖县城和两河间农村平原。河道中心线不是实测堤线，县界也不是已确认的泛区边界。参考面积约371平方公里；当前图示约318.82平方公里，差约14.1%，保留差异等待工程范围图复核，未为凑面积移动河道。74公里为工程堤防总长，不当作图示周长。升斗铺村点仅为口门附近位置参考，高庄固闸尚无可靠精确坐标，不虚设闸址。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "工程项目总面积",
            "references": [
              {
                "label": "面积来源",
                "url": "https://www.yunzhuluban.cn/details/7/726"
              }
            ]
          }
        ]
      }
    },
    "恩县洼": {
      "id": "海河-14",
      "name": "恩县洼",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 2,
        "contextAnchors": [
          {
            "id": "0",
            "name": "西郑庄闸附近（村委位置代理）",
            "location": "116.040495,37.351713",
            "anchorKind": "location-context"
          },
          {
            "id": "1",
            "name": "四女寺枢纽附近（大桥位置代理）",
            "location": "116.238229,37.362042",
            "anchorKind": "location-context"
          },
          {
            "id": "2",
            "name": "大屯水库（水域位置参考）",
            "location": "116.208568,37.265334",
            "anchorKind": "location-context"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "恩县洼滞洪区建设工程环境影响报告书",
          "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201609/W020160926494546299038.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "正文第21页（PDF32）明确325平方公里及四至；第26页说明北围堤与陈公堤衔接；附图二、九提供总体布置及整体范围。正文经纬度存在明显重复、纬度异常，未采用。"
        },
        {
          "title": "关于恩县洼滞洪区建设工程环境影响报告书的批复",
          "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201701/t20170109_394445.htm",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "明确武城县北部及卫运河大堤、陈公堤、安全区堤防等工程；批复不直接给出325面积，以环评正文为面积来源。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“恩县洼”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "山东省交通运输防汛抗旱应急预案",
          "url": "https://jtt.shandong.gov.cn/art/2021/9/6/art_231733_10293316.html?xxgkhide=1",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "省级预案在响应条件中同时列出东平湖、南四湖湖东和恩县洼，交叉确认其山东省域归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "山东省德州市武城县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "恩县洼滞洪区位于山东省德州市武城县北部、卫运河下游右岸。北以卫运河右岸大堤为界，东北衔接老减河右堤；东以陈公堤为界，南至平原—武城公路（平武公路）一线，西部沿自然高地、自然地形。总面积325平方公里，包含武城县城及其以北低洼平原，不能用科研或管理基地单点代表完整范围。",
        "reasoning": "依据2016年环评附图二总体布置图和附图九范围图，结合卫运河、老减河、平武公路及工程水库位置，重绘完整低精度轮廓。保持河道与公路参考方向，对未取得实测界址的西侧自然高地近似线作约8.3像素（本底图约250米）以内调整，使显示面积约325平方公里。没有DEM或法定矢量，示意图转绘不等于工程堤线测量。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "环评正文确认325平方公里及卫运河右堤、老减河右堤、陈公堤、平武公路和西侧自然地形。按附图全区外轮廓及河道公路方向重绘；旧科研管理基地单点不能定完整范围，西部外缘仍待核",
            "references": [
              {
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201609/W020160926494546299038.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201701/t20170109_394445.htm",
                "label": "引用 2"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 3"
              },
              {
                "url": "https://jtt.shandong.gov.cn/art/2021/9/6/art_231733_10293316.html?xxgkhide=1",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：山东省德州市武城县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：恩县洼滞洪区位于山东省德州市武城县北部、卫运河下游右岸。北以卫运河右岸大堤为界，东北衔接老减河右堤；东以陈公堤为界，南至平原—武城公路（平武公路）一线，西部沿自然高地、自然地形。总面积325平方公里，包含武城县城及其以北低洼平原，不能用科研或管理基地单点代表完整范围。现有证据只支持到该范围，确信度中。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "环评全区面积，包括县城安全区的整体范围",
            "references": [
              {
                "label": "面积来源",
                "url": "https://www.mee.gov.cn/ywgz/hjyxpj/jsxmhjyxpj/xmslqk/201609/W020160926494546299038.pdf"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12参考面积325平方公里，按环评附图重绘约325平方公里整体外轮廓，主图与原审核页同步。北卫运河右堤及老减河右堤、东陈公堤、南平武公路、西自然地形；图件对应和西侧自然高地为近似，仍待人工审核。",
            "references": []
          }
        ]
      }
    },
    "盛庄洼": {
      "id": "海河-15",
      "name": "盛庄洼",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 0,
        "contextAnchors": [
          {
            "id": "0",
            "name": "九丈窝村民委员会",
            "location": "117.735832,39.594383",
            "anchorKind": "location-context"
          },
          {
            "id": "1",
            "name": "大盘龙庄村村委会",
            "location": "117.720401,39.55914",
            "anchorKind": "location-context"
          },
          {
            "id": "2",
            "name": "北单庄村民委员会",
            "location": "117.74104,39.577994",
            "anchorKind": "location-context"
          },
          {
            "id": "3",
            "name": "流涧头村委会",
            "location": "117.724589,39.57445",
            "anchorKind": "location-context"
          },
          {
            "id": "4",
            "name": "河北省唐山市玉田县潮洛窝乡盛家庄村村民委员会",
            "location": "117.710811,39.547479",
            "anchorKind": "location-context"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "基于MIKE21模型的盛庄洼蓄滞洪区洪水淹没分析",
          "url": "https://szy.sljsygl.com/UpFiles/2020-5-26/637261018360540254.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "第2页明确东南还乡河故道、西蓟运河和双城河左堤、北九丈窝防洪堤；论文面积12.15，列出大盘龙、北单庄、流涧头及盛庄子围村工程。"
        },
        {
          "title": "天津市蓟州区青甸洼蓄滞洪区专项规划",
          "url": "https://www.tjjz.gov.cn/zwgk/zcwj/qjwj/qjjg/SWJ3/202310/W020231019726519980367.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "流域调度章节说明还乡河经九丈窝向盛庄洼分洪，支持水系关联；不用于确定盛庄洼完整界线或12.5面积。"
        },
        {
          "title": "唐山市水利局：玉田县盛庄洼蓄滞洪区建设",
          "url": "https://slj.tangshan.gov.cn/shuiwuju/gzdt/20250401/1628730.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "玉田县水利局确认工程归属，结合林南仓低洼片区作中等置信预估"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“盛庄洼”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河北省蓄滞洪区管理办法",
          "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "河北省政府规章列明省内蓄滞洪区管理范围，用于交叉核对跨市县工程的河北段归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省唐山市玉田县",
        "天津市宁河区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "盛庄洼位于河北省唐山市玉田县与天津市宁河区交界，主体在玉田县潮洛窝乡九丈窝村以南，覆盖大盘龙、北单庄、流涧头、盛家庄一带，向西南延伸至丰台镇附近。东南以还乡河故道为参照，西侧为蓟运河及双城河左堤，北侧为九丈窝防洪堤；本次规划显示面积按用户指定12.5平方公里。",
        "reasoning": "依据水利设计研究院作者论文的三侧堤防描述、图1总体位置及模型图形态，结合五处村庄位置重新定位。固定村庄参考点，形成南北狭长且向西南延伸的面积约束候选。东侧未实测轮廓为匹配12.5平方公里收窄，不能声称与还乡河故道实际堤线完全贴合。模型图坐标系未标明，推测投影仅用于方向核对，未作为实测界址。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "依据三侧河堤描述及九丈窝以南村庄重新定位；按用户要求采用12.5平方公里。论文另记12.15，东侧轮廓按面积收窄，实际堤线待核",
            "references": [
              {
                "url": "https://szy.sljsygl.com/UpFiles/2020-5-26/637261018360540254.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://www.tjjz.gov.cn/zwgk/zcwj/qjwj/qjjg/SWJ3/202310/W020231019726519980367.pdf",
                "label": "引用 2"
              },
              {
                "url": "https://slj.tangshan.gov.cn/shuiwuju/gzdt/20250401/1628730.html",
                "label": "引用 3"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 4"
              },
              {
                "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
                "label": "引用 5"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河北省唐山市玉田县、天津市宁河区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：盛庄洼位于河北省唐山市玉田县与天津市宁河区交界，主体在玉田县潮洛窝乡九丈窝村以南，覆盖大盘龙、北单庄、流涧头、盛家庄一带，向西南延伸至丰台镇附近。东南以还乡河故道为参照，西侧为蓟运河及双城河左堤，北侧为九丈窝防洪堤；本次规划显示面积按用户指定12.5平方公里。现有证据只支持到该范围，确信度中。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "用户指定本次规划显示尺度",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12依据水利设计研究院作者论文的三侧堤防描述、图1总体位置及模型图形态，结合五处村庄位置重新定位。固定村庄参考点，形成南北狭长且向西南延伸的面积约束候选。东侧未实测轮廓为匹配12.5平方公里收窄，不能声称与还乡河故道实际堤线完全贴合。模型图坐标系未标明，推测投影仅用于方向核对，未作为实测界址。",
            "references": []
          }
        ]
      }
    },
    "青甸洼": {
      "id": "海河-16",
      "name": "青甸洼",
      "basin": "海河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": true,
        "usableForLocation": true,
        "title": "天津市蓟州区青甸洼蓄滞洪区专项规划",
        "url": "https://www.tjjz.gov.cn/zwgk/zcwj/qjwj/qjjg/SWJ3/202310/W020231019726519980367.pdf",
        "publisher": "天津市蓟州区人民政府",
        "description": "专项规划给出经纬度范围和多幅位置示意图。"
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 6,
        "contextAnchors": [
          {
            "id": "0",
            "name": "青甸洼",
            "location": "117.34284387,39.82849949",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "州河右岸侧（河道代理）",
            "location": "117.43298743,39.8396399",
            "anchorKind": "natural"
          },
          {
            "id": "2",
            "name": "泃河左岸侧（河道代理）",
            "location": "117.30640115,39.80839188",
            "anchorKind": "natural"
          },
          {
            "id": "3",
            "name": "西北自然高地方向（规划图参考）",
            "location": "117.34573529,39.933023",
            "anchorKind": "natural"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "天津市蓟州区青甸洼蓄滞洪区专项规划",
          "url": "https://www.tjjz.gov.cn/zwgk/zcwj/qjwj/qjjg/SWJ3/202310/W020231019726519980367.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "规划明确青甸洼位于蓟州西南部州河、泃河汇流地带，并给出经纬度范围。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“青甸洼”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "天津市蓄滞洪区管理与安全建设答复",
          "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "市级答复列出天津国家蓄滞洪区及分类，用于交叉核对这些工程在天津的分布。"
        },
        {
          "title": "天津政务网：拧紧“北防山洪”安全链条（2026-07-05）",
          "url": "https://www.tj.gov.cn/sy/tpxw/202607/t20260705_7329985.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.tj.gov.cn"
        },
        {
          "title": "OpenStreetMap 州河与泃河河道参考",
          "url": "https://www.openstreetmap.org/way/144711647",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.openstreetmap.org"
        }
      ],
      "verifiedAdministrativeAreas": [
        "天津市蓟州区"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "天津市蓟州区"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "青甸洼位于天津市蓟州区西南部、蓟运河上游州河与泃河汇流地带；东侧州河右堤，南侧泃河左堤，西北侧至7.0米淹没线附近自然高地。全洼参考面积150平方公里，包含本洼及东、南、西、北四洼。",
        "reasoning": "从蓟州区专项规划图1.1-2描取全洼外轮廓（PDF第9页），以规划公布的东经117°15′00″—117°25′56″、北纬39°46′43″—39°55′54″对示意图进行范围配准；再以OpenStreetMap州河、泃河线排除另一岸部分。当前图示150.85平方公里，相对150平方公里约差0.56%，保留图件描取误差而不缩放凑面积。西北线参考规划图1.1-4的7.0米淹没线标注（PDF第11页），没有将其当作实测高程线；河道线仅为堤岸方向代理，非实测堤顶线。全洼与35.6平方公里本洼、桑梓分洪道分别识别，未把分洪道向西延伸段并入150平方公里范围。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "全洼范围",
            "outcome": "已验收",
            "detail": "按专项规划识别本洼及东、南、西、北四洼；150平方公里是全区口径，本洼为35.6平方公里。",
            "references": [
              {
                "url": "https://www.tjjz.gov.cn/zwgk/zcwj/qjwj/qjjg/SWJ3/202310/W020231019726519980367.pdf",
                "label": "专项规划"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "两河与西北侧",
            "outcome": "已验收",
            "detail": "东侧为州河右岸、南侧为泃河左岸；西北侧依规划图示的自然高地及淹没线方向描绘，保留低精度说明。",
            "references": [
              {
                "url": "https://www.tjjz.gov.cn/zwgk/zcwj/qjwj/qjjg/SWJ3/202310/W020231019726519980367.pdf",
                "label": "范围图及分区图"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "坐标与面积校核",
            "outcome": "已验收",
            "detail": "从蓟州区专项规划图1.1-2描取全洼外轮廓（PDF第9页），以规划公布的东经117°15′00″—117°25′56″、北纬39°46′43″—39°55′54″对示意图进行范围配准；再以OpenStreetMap州河、泃河线排除另一岸部分。当前图示150.85平方公里，相对150平方公里约差0.56%，保留图件描取误差而不缩放凑面积。西北线参考规划图1.1-4的7.0米淹没线标注（PDF第11页），没有将其当作实测高程线；河道线仅为堤岸方向代理，非实测堤顶线。全洼与35.6平方公里本洼、桑梓分洪道分别识别，未把分洪道向西延伸段并入150平方公里范围。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "全洼；本洼35.6平方公里为子区",
            "references": [
              {
                "label": "面积来源",
                "url": "https://www.tjjz.gov.cn/zwgk/zcwj/qjwj/qjjg/SWJ3/202310/W020231019726519980367.pdf"
              }
            ]
          }
        ]
      }
    },
    "黄庄洼": {
      "id": "海河-17",
      "name": "黄庄洼",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 5,
        "contextAnchors": [
          {
            "id": "0",
            "name": "北围堤起点（报告工程点）",
            "location": "117.37985333,39.65335232",
            "anchorKind": "location-context"
          },
          {
            "id": "1",
            "name": "北围堤终点（报告工程点）",
            "location": "117.4822494,39.64575653",
            "anchorKind": "location-context"
          },
          {
            "id": "2",
            "name": "东北围堤终点（报告工程点）",
            "location": "117.61135888,39.58495391",
            "anchorKind": "location-context"
          },
          {
            "id": "3",
            "name": "南围堤起点（报告工程点）",
            "location": "117.48796992,39.44841347",
            "anchorKind": "location-context"
          },
          {
            "id": "4",
            "name": "南围堤终点（报告工程点）",
            "location": "117.70581213,39.537538",
            "anchorKind": "location-context"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "黄庄洼蓄滞洪区工程与安全建设项目环境影响报告表（2024年4月）",
          "url": "https://16312426.s21i.faiusr.com/61/ABUIABA9GAAgvNHJsAYojMG23gY.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "PDF第21页明确348.28平方公里、宁河4.6%、四至及范围图2-1；第2页列出围堤工程端点。Ⅰ区135.08、Ⅱ区213.2，不将内部分区堤当外界。"
        },
        {
          "title": "黄庄洼蓄滞洪区工程与安全建设项目报批前公示",
          "url": "https://www.tjcsh.cn/nd.jsp?_ngc=-1&fromColId=-1&groupId=5&id=816",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "2024年4月3日报批前公示，提供本次完整环评附件；与E1为同源公示关系，不算独立佐证。"
        },
        {
          "title": "天津市水务局：黄庄洼工程与安全建设",
          "url": "https://swj.tj.gov.cn/xwzx_17135/mtjj/202405/t20240508_6619886.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "天津工程资料给出外围堤和分区隔堤，高德检得同名退水渠"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“黄庄洼”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "天津市蓄滞洪区管理与安全建设答复",
          "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "市级答复列出天津国家蓄滞洪区及分类，用于交叉核对这些工程在天津的分布。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "天津市宝坻区、宁河区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "黄庄洼蓄滞洪区位于天津市宝坻区东南部、宁河区西北部，处于潮白新河与蓟运河之间。北界箭杆河、北围堤，西界潮白新河左堤，南界西关引河、江洼口深渠，东界蓟运河右堤。东西约31公里、南北约25公里，西北高、东南低。全区348.28平方公里，宁河部分约占4.6%。",
        "reasoning": "按2024年环评PDF第21页图2-1转绘整体外轮廓，以第2页北围堤和南围堤的四个工程端点配准。东北围堤终点在图中对应位置不确定，未参与拟合；坐标基准未注明，暂按WGS84转换。配准残差约300米，绘制面积356.84平方公里，较348.28大约2.46%。没有通过等比缩放牺牲河堤位置；示意图不等于实测界线。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "黄庄洼蓄滞洪区位于天津市宝坻区东南部、宁河区西北部，处于潮白新河与蓟运河之间。北界箭杆河、北围堤，西界潮白新河左堤，南界西关引河、江洼口深渠，东界蓟运河右堤。东西约31公里、南北约25公里，西北高、东南低。全区348.28平方公里，宁河部分约占4.6%。 按环评范围图转绘；与大黄铺洼旧主图有重叠，待联合审核",
            "references": [
              {
                "url": "https://16312426.s21i.faiusr.com/61/ABUIABA9GAAgvNHJsAYojMG23gY.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://www.tjcsh.cn/nd.jsp?_ngc=-1&fromColId=-1&groupId=5&id=816",
                "label": "引用 2"
              },
              {
                "url": "https://swj.tj.gov.cn/xwzx_17135/mtjj/202405/t20240508_6619886.html",
                "label": "引用 3"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 4"
              },
              {
                "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
                "label": "引用 5"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：天津市宝坻区、宁河区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：黄庄洼蓄滞洪区位于天津市宝坻区东南部、宁河区西北部，处于潮白新河与蓟运河之间。北界箭杆河、北围堤，西界潮白新河左堤，南界西关引河、江洼口深渠，东界蓟运河右堤。东西约31公里、南北约25公里，西北高、东南低。全区348.28平方公里，宁河部分约占4.6%。现有证据只支持到该范围，确信度中。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "2024年工程环评全区面积，Ⅰ区135.08加Ⅱ区213.2",
            "references": [
              {
                "label": "面积来源",
                "url": "https://16312426.s21i.faiusr.com/61/ABUIABA9GAAgvNHJsAYojMG23gY.pdf"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12请审核与大黄铺洼旧主图约4平方公里的重叠及工程图配准误差；黄庄洼参考面积348.28，转绘356.84。新候选只用于原审核页，主图暂保留，不能将候选认定为无冲突最终界址。",
            "references": []
          }
        ]
      }
    },
    "大黄铺洼": {
      "id": "海河-18",
      "name": "大黄铺洼",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "青龙湾河参考点（非堤顶）",
            "location": "117.35503985,39.48364156",
            "anchorKind": "water"
          },
          {
            "id": "1",
            "name": "龙凤河参考点（非堤顶）",
            "location": "117.31424131,39.35618489",
            "anchorKind": "water"
          },
          {
            "id": "2",
            "name": "青排渠参考点",
            "location": "117.40225263,39.28897919",
            "anchorKind": "water"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“大黄铺洼”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "天津市蓄滞洪区管理与安全建设答复",
          "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "市级答复列出天津国家蓄滞洪区及分类，用于交叉核对这些工程在天津的分布。"
        },
        {
          "title": "用户提供的2025年武清项目四至、经纬度与273.71平方公里口径",
          "url": "https://www.tjwq.gov.cn/zwgk/zfxxgk/wbj2/qzwfwb1/fdzdgknr32/xzxkfwsx32/202506/W020250627571815893048.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.tjwq.gov.cn"
        },
        {
          "title": "OpenStreetMap 河道参考",
          "url": "https://www.openstreetmap.org/way/91406383",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.openstreetmap.org"
        }
      ],
      "verifiedAdministrativeAreas": [
        "天津市宝坻区",
        "天津市武清区",
        "天津市宁河区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "大黄铺洼（大黄堡洼）位于天津北部武清、宝坻、宁河交界，属北运河水系。北依筐儿港北堤，西以黄沙河、龙凤河（北京排污河）左堤为界，南界青排渠，东界青龙湾减河及故道右堤；全区参考面积273.71平方公里。当前为示意候选，西北界位置矛盾及东侧缺失河段仍待核实。",
        "reasoning": "移除以湿地管理处办公地点为中心的旧椭圆。用OpenStreetMap青龙湾河上段、龙凤河和青排渠约束可辨河段；东侧缺段按下游方向低精度衔接。按用户给定东经117°15′—117°28′、北纬39°16′—39°33′裁定显示范围；西北界与黄沙河位置存在矛盾，明确保留待核。图示面积独立计算为267.67平方公里，参考面积273.71平方公里，不通过整体缩放强凑面积。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "四至定位与面积口径",
            "outcome": "已验收",
            "detail": "大黄铺洼（大黄堡洼）位于天津北部武清、宝坻、宁河交界，属北运河水系。北依筐儿港北堤，西以黄沙河、龙凤河（北京排污河）左堤为界，南界青排渠，东界青龙湾减河及故道右堤；全区参考面积273.71平方公里。当前为示意候选，西北界位置矛盾及东侧缺失河段仍待核实。",
            "references": []
          },
          {
            "stage": "administrative-cross-check",
            "title": "修正错误办公地点锚点",
            "outcome": "已验收",
            "detail": "移除以湿地管理处办公地点为中心的旧椭圆。用OpenStreetMap青龙湾河上段、龙凤河和青排渠约束可辨河段；东侧缺段按下游方向低精度衔接。按用户给定东经117°15′—117°28′、北纬39°16′—39°33′裁定显示范围；西北界与黄沙河位置存在矛盾，明确保留待核。图示面积独立计算为267.67平方公里，参考面积273.71平方公里，不通过整体缩放强凑面积。",
            "references": [
              {
                "url": "https://www.openstreetmap.org/way/91406383",
                "label": "河道参考"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "尚待核实的边界段",
            "outcome": "已验收",
            "detail": "本轮按用户提供的四至、经纬度及面积修订；项目PDF网址当前返回撤稿或删除页面，未取得可描取的工程图。 已取得的黄沙河下游坐标在117°15′以西，与所给经纬度下限不一致；本候选优先保留经纬度范围，西北闭合线不是已核实的黄沙河左堤或筐儿港北堤。 西南、南侧沿龙凤河和青排渠河道作岸侧代理；东侧缺失河段采用方向性折线衔接，不能视作实测堤线。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "全蓄滞洪区",
            "references": [
              {
                "label": "面积来源",
                "url": "https://www.tjwq.gov.cn/zwgk/zfxxgk/wbj2/qzwfwb1/fdzdgknr32/xzxkfwsx32/202506/W020250627571815893048.pdf"
              }
            ]
          }
        ]
      }
    },
    "三角淀": {
      "id": "海河-19",
      "name": "三角淀",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 65,
        "contextAnchors": [
          {
            "id": "0",
            "name": "陈咀二支渠桥（西界参考）",
            "location": "116.984245,39.289133",
            "anchorKind": "location-context"
          },
          {
            "id": "1",
            "name": "陈咀镇人民政府（行政参照）",
            "location": "117.008043,39.293156",
            "anchorKind": "location-context"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "天津市北四河水系防洪调度一体化模型建设",
          "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2025040.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "PDF第2页图1及正文确认三角淀属于永定河水系，并位于永定河泛区南侧、屈家店上游；全域示意图不能确定每条堤渠精确界址。"
        },
        {
          "title": "市防指公布防汛责任人名单",
          "url": "https://epaper.tianjinwe.com/tjrb/resfile/2024-05-14/08/08.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "三角淀防汛责任人分别列武清区和北辰区，印证跨区；不提供四至坐标。"
        },
        {
          "title": "北辰区双口镇防汛预案",
          "url": "https://www.tjbc.gov.cn/zwgk/zfxxgk/xxgk_zjyq/zjyq_xxgk_skz/xxgk_fdzdgk_skz/xxgk_zdmsxx_skz/xxgk_jz_skz/202302/P020230221540637976752.pdf",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "双口镇防汛预案明确丁平三村处在三角淀分洪区"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“三角淀”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "天津市蓄滞洪区管理与安全建设答复",
          "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "市级答复列出天津国家蓄滞洪区及分类，用于交叉核对这些工程在天津的分布。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "天津市武清区、北辰区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "三角淀属于永定河水系的国家蓄滞洪区，位于天津市西北部，跨武清区、北辰区，处于永定河下游右岸、永定河泛区东南方向。按用户提供的四至：北遥堤以南、南遥堤以北、陈嘴二支渠以东、增产堤以西。参考总面积约59.8平方公里。",
        "reasoning": "以用户四至为目标，依据论文确认永定河泛区南侧的总体位置，并参照公开底图沟渠及陈咀二支渠桥建立待审草案，图上约59.95平方公里。论文全域图尺度较小，直接配准未能贴合河渠，已弃用其配准多边形。现草案的北侧连接线、南遥堤及增产堤与底图渠线是否对应尚未确认，不能将其称为已核实四至或实测堤线；无DEM。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "三角淀属于永定河水系的国家蓄滞洪区，位于天津市西北部，跨武清区、北辰区，处于永定河下游右岸、永定河泛区东南方向。按用户提供的四至：北遥堤以南、南遥堤以北、陈嘴二支渠以东、增产堤以西。参考总面积约59.8平方公里。 依河渠地物建立待审草案，与永定河泛区旧审核候选存在冲突",
            "references": [
              {
                "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2025040.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://epaper.tianjinwe.com/tjrb/resfile/2024-05-14/08/08.pdf",
                "label": "引用 2"
              },
              {
                "url": "https://www.tjbc.gov.cn/zwgk/zfxxgk/xxgk_zjyq/zjyq_xxgk_skz/xxgk_fdzdgk_skz/xxgk_zdmsxx_skz/xxgk_jz_skz/202302/P020230221540637976752.pdf",
                "label": "引用 3"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 4"
              },
              {
                "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
                "label": "引用 5"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：天津市武清区、北辰区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：三角淀属于永定河水系的国家蓄滞洪区，位于天津市西北部，跨武清区、北辰区，处于永定河下游右岸、永定河泛区东南方向。按用户提供的四至：北遥堤以南、南遥堤以北、陈嘴二支渠以东、增产堤以西。参考总面积约59.8平方公里。现有证据只支持到该范围，确信度中。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "本次用户提供的全区参考面积",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12请联合审核三角淀与永定河泛区旧审核候选的重叠，并核对北遥堤、南遥堤、增产堤实际线位。面积按用户约59.8记录，论文面积表为59.9，显示草案约59.95。二支渠桥为西侧定位参考，其余边线仍为假设。",
            "references": []
          }
        ]
      }
    },
    "小滩坡": {
      "id": "海河-20",
      "name": "小滩坡",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 120,
        "contextAnchors": [
          {
            "id": "0",
            "name": "共产主义渠（河道参考，非堤顶）",
            "location": "114.51990914,35.80414089",
            "anchorKind": "water"
          },
          {
            "id": "1",
            "name": "卫河汇流段（河道参考）",
            "location": "114.55099337,35.82694138",
            "anchorKind": "water"
          },
          {
            "id": "2",
            "name": "杨梁村（浚县段方向参考）",
            "location": "114.65495649,35.78622778",
            "anchorKind": "locality"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "河南省2024年洪水风险图编制项目招标文件",
          "url": "https://kaifeng.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2024/10/21/f18625889f174dbc93e3303b89746f19.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "项目表确认小滩坡涉及卫河、浚内沟，跨鹤壁市浚县与安阳市内黄县，编制区面积95.4平方公里。"
        },
        {
          "title": "小滩坡蓄滞洪区启用情况",
          "url": "https://www.mztoday.gov.cn/show/46722.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "防汛资料明确小滩坡位于卫河中游右岸，涉及浚县王庄、善堂、黎阳和内黄县二安4个乡镇街道。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“小滩坡”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河南省四水同治规划（2021—2035年）",
          "url": "https://oss.henan.gov.cn/typtfile/20240123/f191e6f92c6b40e8b782d4533a0bb154.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划统筹河南省海河、淮河和黄河流域蓄滞洪区，并列出北金堤、大逍遥及海河流域工程。"
        },
        {
          "title": "河南省海河流域五处蓄滞洪区工程勘察设计公示",
          "url": "https://slt.henan.gov.cn/2022/09-16/2608344.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省水利厅项目公示将良相坡、柳围坡、长虹渠、白寺坡和小滩坡列为同批海河流域工程。"
        },
        {
          "title": "用户提供的小滩坡四至资料及2021年通告检索线索",
          "url": "https://www.sohu.com/a/480422433_265069",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.sohu.com"
        },
        {
          "title": "OpenStreetMap共产主义渠及卫河参考",
          "url": "https://www.openstreetmap.org/way/694955738",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.openstreetmap.org"
        },
        {
          "title": "杨梁村公开地图位置",
          "url": "https://mapcarta.com/es/33073132",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "mapcarta.com"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省鹤壁市浚县王庄镇",
        "河南省鹤壁市浚县善堂镇",
        "河南省鹤壁市浚县黎阳街道",
        "河南省安阳市内黄县二安镇"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "小滩坡位于河南北部卫河中游右岸，跨鹤壁市浚县与安阳市内黄县，全区参考面积95.4平方公里。浚县段以共产主义渠东堤、二道防线及码头—二道防线、北苏—杨梁两条横向界线定位；内黄县段另行延伸。当前东界和内黄段外缘均为待核示意线；与白寺坡旧候选重叠约84.88平方公里，需联合复核。",
        "reasoning": "移除以王庄、善堂、黎阳、二安行政办公点中值生成的椭圆，改用共产主义渠及汇流后卫河线约束西侧，沿右岸低地组织狭长轮廓。杨梁村采用OSM村庄点（114.64937,35.78645）作为浚县段东北方向参考；北部内黄段、东侧二道防线与南部码头连线仍为方向性闭合。当前图示91.07平方公里，独立计算后保留与95.4的差值，不以等比缩放代替边界证据。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "范围与面积口径",
            "outcome": "已验收",
            "detail": "小滩坡位于河南北部卫河中游右岸，跨鹤壁市浚县与安阳市内黄县，全区参考面积95.4平方公里。浚县段以共产主义渠东堤、二道防线及码头—二道防线、北苏—杨梁两条横向界线定位；内黄县段另行延伸。当前东界和内黄段外缘均为待核示意线；与白寺坡旧候选重叠约84.88平方公里，需联合复核。",
            "references": [
              {
                "url": "https://kaifeng.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2024/10/21/f18625889f174dbc93e3303b89746f19.pdf",
                "label": "面积资料"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "河道约束替代行政点椭圆",
            "outcome": "已验收",
            "detail": "移除以王庄、善堂、黎阳、二安行政办公点中值生成的椭圆，改用共产主义渠及汇流后卫河线约束西侧，沿右岸低地组织狭长轮廓。杨梁村采用OSM村庄点（114.64937,35.78645）作为浚县段东北方向参考；北部内黄段、东侧二道防线与南部码头连线仍为方向性闭合。当前图示91.07平方公里，独立计算后保留与95.4的差值，不以等比缩放代替边界证据。",
            "references": [
              {
                "url": "https://www.openstreetmap.org/way/694955738",
                "label": "共产主义渠"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "待核边界段",
            "outcome": "已验收",
            "detail": "二道防线未取得实测线位；东侧仅为方向性示意折线，不能当作已确认的二道防线。 四至通告描述浚县段；内黄县二安镇部分的外围边界尚未取得，本候选北部为河道与区域方向支持的暂拟延伸。 码头、北苏的精确界址及连线待核，村庄中心点不能替代堤线；95.4平方公里为全区参考口径。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "浚县与内黄县全区",
            "references": [
              {
                "label": "面积来源",
                "url": "https://kaifeng.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2024/10/21/f18625889f174dbc93e3303b89746f19.pdf"
              }
            ]
          }
        ]
      }
    },
    "任固坡": {
      "id": "海河-21",
      "name": "任固坡",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 20,
        "contextAnchors": [
          {
            "id": "0",
            "name": "汤永河右堤工程起点",
            "location": "114.60542951,35.99611507",
            "anchorKind": "engineering"
          },
          {
            "id": "1",
            "name": "汤永河右堤工程终点（经度排印待核）",
            "location": "114.69214803,35.97046395",
            "anchorKind": "engineering"
          },
          {
            "id": "2",
            "name": "五陵方向卫河左岸（河道参考）",
            "location": "114.61202654,35.8507116",
            "anchorKind": "water"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "安阳县广润坡、任固坡工程环评公示",
          "url": "https://www.ayx.gov.cn/2024/12-18/3333857.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "河南风险图项目与安阳县环评共同确认跨县范围；纠正原项目仅写安阳县"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“任固坡”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河南省四水同治规划（2021—2035年）",
          "url": "https://oss.henan.gov.cn/typtfile/20240123/f191e6f92c6b40e8b782d4533a0bb154.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划统筹河南省海河、淮河和黄河流域蓄滞洪区，并列出北金堤、大逍遥及海河流域工程。"
        },
        {
          "title": "2024年安阳县广润坡、任固坡建设工程环境影响报告表",
          "url": "https://oss.dahe.cn/anyangxian/sitesources/adxq/upload/202412/20241225195021503.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "oss.dahe.cn"
        },
        {
          "title": "OpenStreetMap卫河河道参考",
          "url": "https://www.openstreetmap.org/way/683011245",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.openstreetmap.org"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省安阳市汤阴县任固镇",
        "河南省安阳市内黄县",
        "河南省安阳市安阳县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "任固坡位于河南安阳东部，跨汤阴、内黄、安阳三县，处在老观咀下游、汤永河入卫河口上游的卫河左岸。北以汤永河右堤为界，东靠卫河左堤，西南接自然高地，南端向五陵一带收束。当前北界缺段与自然高地线为待核示意线；与广润坡、白寺坡旧轮廓仍有重叠，需联合复核。",
        "reasoning": "以工程环评PDF第23页（正文20页）、第68页（正文65页）的三县位置、四至及上大下小形态替换任固镇单点椭圆。东侧跟随OSM卫河线，南端到公布的北纬35°50′45″附近收束；北侧参考PDF第5页汤永河右堤工程起终点，西南侧暂按自然高地方向闭合。全部候选在环评公布的东经114°31′—114°42′、北纬35°50′45″—36°01′范围内。图示153.25平方公里，保留既有全区参考160平方公里；不以面积缩放改变有依据的卫河侧线。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "工程环评定位",
            "outcome": "已验收",
            "detail": "任固坡位于河南安阳东部，跨汤阴、内黄、安阳三县，处在老观咀下游、汤永河入卫河口上游的卫河左岸。北以汤永河右堤为界，东靠卫河左堤，西南接自然高地，南端向五陵一带收束。当前北界缺段与自然高地线为待核示意线；与广润坡、白寺坡旧轮廓仍有重叠，需联合复核。",
            "references": [
              {
                "url": "https://oss.dahe.cn/anyangxian/sitesources/adxq/upload/202412/20241225195021503.pdf",
                "label": "2024年工程环评"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "两河与南端形态",
            "outcome": "已验收",
            "detail": "以工程环评PDF第23页（正文20页）、第68页（正文65页）的三县位置、四至及上大下小形态替换任固镇单点椭圆。东侧跟随OSM卫河线，南端到公布的北纬35°50′45″附近收束；北侧参考PDF第5页汤永河右堤工程起终点，西南侧暂按自然高地方向闭合。全部候选在环评公布的东经114°31′—114°42′、北纬35°50′45″—36°01′范围内。图示153.25平方公里，保留既有全区参考160平方公里；不以面积缩放改变有依据的卫河侧线。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "精度限制",
            "outcome": "已验收",
            "detail": "已读取2024年安阳县工程环评正文；该PDF未附完整范围地图，尚未取得实测外围堤线及自然高地线。 北界由汤永河右堤工程端点及公布范围作方向性衔接，不是对整条汤永河右堤的精确描取；工程终点经度排印为114°41′112610″，暂按11.2610秒解释，待核。 卫河河道参考线作为左岸一侧代理，不能替代实测左堤；西南线只表达自然高地收束方向，未取得同基准DEM或等高线。",
            "references": []
          }
        ]
      }
    },
    "共渠西": {
      "id": "海河-22",
      "name": "共渠西",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 12,
        "contextAnchors": [
          {
            "id": "0",
            "name": "刘庄闸附近共渠起点",
            "location": "114.292769,35.501382",
            "anchorKind": "location-context"
          },
          {
            "id": "1",
            "name": "大海线共产主义渠大桥",
            "location": "114.380427,35.593611",
            "anchorKind": "location-context"
          },
          {
            "id": "2",
            "name": "邢固村（间隔南侧参考）",
            "location": "114.348852,35.571321",
            "anchorKind": "location-context"
          },
          {
            "id": "3",
            "name": "同山（间隔高地参考）",
            "location": "114.379676,35.621979",
            "anchorKind": "location-context"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "共渠西蓄滞洪区洪水演进数值模拟研究——以海河“23·7”流域性特大洪水为例",
          "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023341.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "PDF第2页明确上、下片互不相连、刑固北至同山高地分隔，区域总面积95；第3页图1、图2展示两洼地和细长模型河道。没有取得论文原始DEM。"
        },
        {
          "title": "河南鹤壁浚县启用共渠西蓄滞洪区",
          "url": "https://xinwen.bjd.com.cn/content/s64c98f12e4b03d11a64e0e0a.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "下片四至为共渠左堤以西、大海线S305以北、60米等高线以东、屯子镇屯子上岗渠以南，涉及卫贤、小河、白寺、屯子4镇。"
        },
        {
          "title": "海河“23·7”流域性特大洪水蓄滞洪区运用复盘及系统治理绿色发展的思考",
          "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023359.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "PDF第3页表2原文是淇门站、淇河左岸枋城口门；洪门、洪河、杨坊为不采用的疑似OCR错读。表1全区规划面积94.9，按用户及E1约95记录。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“共渠西”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河南省四水同治规划（2021—2035年）",
          "url": "https://oss.henan.gov.cn/typtfile/20240123/f191e6f92c6b40e8b782d4533a0bb154.pdf",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "省级规划统筹河南省海河、淮河和黄河流域蓄滞洪区，并列出北金堤、大逍遥及海河流域工程。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省鹤壁市浚县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "共渠西蓄滞洪区位于河南省鹤壁市浚县，由上片、下片两个互不相连的洼地组成，总面积约95平方公里。上片在西南，西南以淇河左堤、东南以共产主义渠左堤为界，西北接自然高地。下片在东北，东界共产主义渠左堤，南界大海线S305，西界60米等高线，北界屯子镇屯子上岗渠。刑固北至同山一带自然高地隔开两片。",
        "reasoning": "依据2023年研究论文图1分别转绘上片、下片，去掉模型图沿共渠连接两片的细河道部分，形成MultiPolygon；参考刘庄闸和大海线共渠大桥进行经纬方向配准。两片合计约61平方公里，与资料95仍有明显差异，未通过放大或连接中间高地来补足。下片西侧为论文自然高地近似外缘，尚未取得原始DEM核验60米等高线，北侧上岗渠及南侧S305精确堤线仍待核。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "共渠西蓄滞洪区位于河南省鹤壁市浚县，由上片、下片两个互不相连的洼地组成，总面积约95平方公里。上片在西南，西南以淇河左堤、东南以共产主义渠左堤为界，西北接自然高地。下片在东北，东界共产主义渠左堤，南界大海线S305，西界60米等高线，北界屯子镇屯子上岗渠。刑固北至同山一带自然高地隔开两片。 两片单独绘制，面积和自然高地边线待审核，不连接中间高地",
            "references": [
              {
                "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023341.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://xinwen.bjd.com.cn/content/s64c98f12e4b03d11a64e0e0a.html",
                "label": "引用 2"
              },
              {
                "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023359.pdf",
                "label": "引用 3"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 4"
              },
              {
                "url": "https://oss.henan.gov.cn/typtfile/20240123/f191e6f92c6b40e8b782d4533a0bb154.pdf",
                "label": "引用 5"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河南省鹤壁市浚县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：共渠西蓄滞洪区位于河南省鹤壁市浚县，由上片、下片两个互不相连的洼地组成，总面积约95平方公里。上片在西南，西南以淇河左堤、东南以共产主义渠左堤为界，西北接自然高地。下片在东北，东界共产主义渠左堤，南界大海线S305，西界60米等高线，北界屯子镇屯子上岗渠。刑固北至同山一带自然高地隔开两片。现有证据只支持到该范围，确信度中。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "共渠西上片与下片全区合计，非单片面积",
            "references": [
              {
                "label": "面积来源",
                "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023341.pdf"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12请联合核对两片的外缘与良相坡、长虹渠、白寺坡旧图冲突。资料面积95平方公里，转绘约61平方公里；两片间保持真实空白，不把连接河道或高地并入。下片60米等高线、上岗渠及上片自然高地均需进一步资料审核。",
            "references": []
          }
        ]
      }
    },
    "广润坡": {
      "id": "海河-23",
      "name": "广润坡",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 1,
        "contextAnchors": [
          {
            "id": "0",
            "name": "西防洪堤工程起点",
            "location": "114.50549288,35.99749263",
            "anchorKind": "engineering"
          },
          {
            "id": "1",
            "name": "西防洪堤工程终点",
            "location": "114.49421292,36.03488519",
            "anchorKind": "engineering"
          },
          {
            "id": "2",
            "name": "汤永河堤工程参考点",
            "location": "114.60542951,35.99611507",
            "anchorKind": "engineering"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "安阳市政协：提升广润坡蓄滞洪区防洪标准提案",
          "url": "https://ay.hnzx.gov.cn/2024/12-24/4346716.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "政协提案和县水利工情公示明确4乡镇、52村及洪河流向"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“广润坡”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河南省四水同治规划（2021—2035年）",
          "url": "https://oss.henan.gov.cn/typtfile/20240123/f191e6f92c6b40e8b782d4533a0bb154.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划统筹河南省海河、淮河和黄河流域蓄滞洪区，并列出北金堤、大逍遥及海河流域工程。"
        },
        {
          "title": "2024年安阳县广润坡、任固坡建设工程环境影响报告表",
          "url": "https://oss.dahe.cn/anyangxian/sitesources/adxq/upload/202412/20241225195021503.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "oss.dahe.cn"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省安阳市安阳县白璧镇",
        "河南省安阳市安阳县高庄镇",
        "河南省安阳市安阳县瓦店乡",
        "河南省安阳市安阳县辛村镇",
        "河南省安阳市文峰区",
        "河南省安阳市汤阴县",
        "河南省安阳市内黄县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "广润坡位于卫河支流汤永河中下游左岸，双石桥至入卫河口之间，整体东西向展开。南部为汤永河堤防、卫河左堤，东部及北部为安阳河右堤，西北接自然高地，西部为西防洪堤。全区152.79平方公里，含一级71.82、二级80.97平方公里；东防洪堤为内部两级分界。当前为工程端点与方位约束示意，河堤缺段及西北高地线待核。",
        "reasoning": "移除白璧、高庄、瓦店、辛村办公地名点形成的旧椭圆。按环评PDF第23页（正文20页）的东西向和四至关系组织全区轮廓；PDF第68页给出一级71.82、二级80.97，合计152.79平方公里，内部东防洪堤不作为全区外缘。西侧参考PDF第4页西防洪堤端点，南侧采用同一工程资料构建的汤永河方向线，北东侧因未取得完整河道线位作低精度连接。候选全部位于114°25′—114°47′、35°56′—36°04′范围内。绘制面积独立计算144.31平方公里，较参考152.79偏小约5.55%，保留差值，不通过缩放凑面积。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "全区口径与四至",
            "outcome": "已验收",
            "detail": "广润坡位于卫河支流汤永河中下游左岸，双石桥至入卫河口之间，整体东西向展开。南部为汤永河堤防、卫河左堤，东部及北部为安阳河右堤，西北接自然高地，西部为西防洪堤。全区152.79平方公里，含一级71.82、二级80.97平方公里；东防洪堤为内部两级分界。当前为工程端点与方位约束示意，河堤缺段及西北高地线待核。",
            "references": [
              {
                "url": "https://oss.dahe.cn/anyangxian/sitesources/adxq/upload/202412/20241225195021503.pdf",
                "label": "2024年工程环评"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "东西向轮廓及任固坡衔接",
            "outcome": "已验收",
            "detail": "移除白璧、高庄、瓦店、辛村办公地名点形成的旧椭圆。按环评PDF第23页（正文20页）的东西向和四至关系组织全区轮廓；PDF第68页给出一级71.82、二级80.97，合计152.79平方公里，内部东防洪堤不作为全区外缘。西侧参考PDF第4页西防洪堤端点，南侧采用同一工程资料构建的汤永河方向线，北东侧因未取得完整河道线位作低精度连接。候选全部位于114°25′—114°47′、35°56′—36°04′范围内。绘制面积独立计算144.31平方公里，较参考152.79偏小约5.55%，保留差值，不通过缩放凑面积。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "描边精度",
            "outcome": "已验收",
            "detail": "已读取环评正文，但该附件没有完整范围附图；未取得安阳河右堤、汤永河整段及西北自然高地的实测线位，相关折线仅为方位示意，不能声称已沿实测河堤描边。 西防洪堤采用环评PDF第4页工程起终点约束方向；工程段不一定覆盖完整西边界，西北高地范围仍需完整工程图复核。 南侧沿用同一环评支持的汤永河方向性代理线，与任固坡候选衔接；两区不重叠并不证明共同边界已核实。任固坡工程终点经度排印歧义仍待核。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "全区：一级71.82＋二级80.97平方公里",
            "references": [
              {
                "label": "面积来源",
                "url": "https://oss.dahe.cn/anyangxian/sitesources/adxq/upload/202412/20241225195021503.pdf"
              }
            ]
          }
        ]
      }
    },
    "团泊洼": {
      "id": "海河-24",
      "name": "团泊洼",
      "basin": "海河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "南运河与独流减河交会代理点",
            "location": "116.92882202,39.05457838",
            "anchorKind": "river-junction-proxy"
          },
          {
            "id": "1",
            "name": "独流减河与马厂减河交会点",
            "location": "117.31253141,38.82740363",
            "anchorKind": "river-junction-proxy"
          },
          {
            "id": "2",
            "name": "马厂减河西端参考点",
            "location": "116.88971604,38.69750638",
            "anchorKind": "river-junction-proxy"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "天津市静海区水土保持规划：团泊洼水库片区",
          "url": "https://www.tjjh.gov.cn/jhqzf/zwgk_28985/zcwj/jhqzcwj/qzfzcwj/202207/W020220729336783909933.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "天津市水务局确认团泊洼水库和全市蓄滞洪体系，静海区官方规划给出水库片区范围；据此仅作中等置信中心预估"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“团泊洼”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "天津市蓄滞洪区管理与安全建设答复",
          "url": "https://yjgl.tj.gov.cn/ZWGK6939/JYTABL2250/TABL9992/202205/t20220520_5886051.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "市级答复列出天津国家蓄滞洪区及分类，用于交叉核对这些工程在天津的分布。"
        },
        {
          "title": "北京旅游网：团泊洼水库（含整个洼区范围与设计受淹面积）",
          "url": "https://s.visitbeijing.com.cn/index.php/attraction/120481",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "s.visitbeijing.com.cn"
        },
        {
          "title": "OpenStreetMap：南运河、独流减河与马厂减河河道",
          "url": "https://www.openstreetmap.org/#map=11/38.89/117.10",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.openstreetmap.org"
        }
      ],
      "verifiedAdministrativeAreas": [
        "天津市静海区",
        "天津市滨海新区大港街道"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "天津市静海区"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "团泊洼位于天津南部，主体在静海区东部、东南部，东侧延伸至滨海新区原大港地区。西界南运河，北界独流减河右堤，东南界马厂减河左堤，三条河围成“运东大三角”。设计受淹面积684.22平方公里；团泊湖水库只是其中一部分。",
        "reasoning": "移除基于团泊湖、生活基地地名点的旧椭圆，改用南运河—独流减河—马厂减河的河道折线闭合。马厂减河在与独流减河交会处收口，不沿下游继续延伸至海河。图示围合面积独立计算为809.40平方公里，参考设计受淹面积684.22平方公里。三角形地理围合线与设计淹没线需分开核验。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "运东大三角与设计受淹面积",
            "outcome": "已验收",
            "detail": "团泊洼位于天津南部，主体在静海区东部、东南部，东侧延伸至滨海新区原大港地区。西界南运河，北界独流减河右堤，东南界马厂减河左堤，三条河围成“运东大三角”。设计受淹面积684.22平方公里；团泊湖水库只是其中一部分。",
            "references": [
              {
                "url": "https://s.visitbeijing.com.cn/index.php/attraction/120481",
                "label": "范围及面积说明"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "沿三条河重绘",
            "outcome": "已验收",
            "detail": "移除基于团泊湖、生活基地地名点的旧椭圆，改用南运河—独流减河—马厂减河的河道折线闭合。马厂减河在与独流减河交会处收口，不沿下游继续延伸至海河。图示围合面积独立计算为809.40平方公里，参考设计受淹面积684.22平方公里。三角形地理围合线与设计淹没线需分开核验。",
            "references": [
              {
                "url": "https://www.openstreetmap.org/#map=11/38.89/117.10",
                "label": "公开河道底图"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "精度与口径",
            "outcome": "已验收",
            "detail": "当前采用公开地图河道中心线近似相应河堤，尚未取得右堤、左堤实测线及法定界址，不是工程级堤线。 684.22平方公里为设计受淹面积，与三河围合的地理范围不完全等价；未取得设计水位淹没线，不按目标面积缩放河流轮廓。 公开河道数据未覆盖南运河北段、南端至马厂起点以及马厂西段的连续线位；三处以端点直线连接作临时代理，非已核实河道。 与贾口洼现有候选重叠约4.86平方公里，与其旧主图重叠约67.87平方公里，邻区共同边界待联合核验。",
            "references": []
          }
        ]
      }
    },
    "永年洼": {
      "id": "海河-25",
      "name": "永年洼",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 19,
        "contextAnchors": [
          {
            "id": "0",
            "name": "广府古城",
            "location": "114.729273,36.701056",
            "anchorKind": "unknown"
          },
          {
            "id": "1",
            "name": "贞元门（北门）",
            "location": "114.7293,36.70643",
            "anchorKind": "unknown"
          },
          {
            "id": "2",
            "name": "阳明门（南门）",
            "location": "114.729359,36.695902",
            "anchorKind": "unknown"
          },
          {
            "id": "3",
            "name": "借马庄泄洪闸（图示位置）",
            "location": "114.70903161,36.72086324",
            "anchorKind": "unknown"
          },
          {
            "id": "4",
            "name": "莲花口进洪闸（图示位置）",
            "location": "114.71017119,36.67104255",
            "anchorKind": "unknown"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "典型蓄滞洪区洪水资源利用潜力评估方法研究",
          "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023231.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "第3页（印刷页26）正文记总面积约18.5平方公里；图2标明外围范围、广府城、莲花口进洪闸、借马庄泄洪闸及滏阳河，作为本次轮廓来源。"
        },
        {
          "title": "中国日报：永年洼蓄滞洪区治理工程竣工",
          "url": "https://cn.chinadaily.com.cn/a/202511/25/WS692572b9a310942cc499352e.html",
          "sourceType": "mainstream-news",
          "supportsLocation": true,
          "locationSummary": "水利项目与湿地管理范围共同指向广府古城周边永年洼"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“永年洼”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河北省蓄滞洪区管理办法",
          "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "河北省政府规章列明省内蓄滞洪区管理范围，用于交叉核对跨市县工程的河北段归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省邯郸市永年区"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "永年洼位于河北省邯郸市永年区东部，以广府古城周边低洼地为核心，参考面积18.5平方公里。东南侧为滏阳河左堤，西、北侧为外围围堤；莲花口进洪闸位于东南部，借马庄泄洪闸位于北围堤。广府古城位于洼内核心区域。",
        "reasoning": "沿2023年水利研究论文第3页图2紫色蓄滞洪区范围描绘，以广府古城南北城门坐标作旋转和尺度配准；初始配准约17.01平方公里，为匹配用户及论文18.5平方公里，围绕古城将线性尺度放大约4.28%。图件分辨率及城门像素拾取存在误差，边界是图示近似，未取得实测堤线、闸址或DEM。古城位于范围内部偏西的核心区域，依原图保留，不强行挪至几何中心。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "永年洼位于河北省邯郸市永年区东部，以广府古城周边低洼地为核心，参考面积18.5平方公里。东南侧为滏阳河左堤，西、北侧为外围围堤；莲花口进洪闸位于东南部，借马庄泄洪闸位于北围堤。广府古城位于洼内核心区域。 轮廓按面积拟合，精确堤线待审",
            "references": [
              {
                "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023231.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://cn.chinadaily.com.cn/a/202511/25/WS692572b9a310942cc499352e.html",
                "label": "引用 2"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 3"
              },
              {
                "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河北省邯郸市永年区。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：永年洼位于河北省邯郸市永年区东部，以广府古城周边低洼地为核心，参考面积18.5平方公里。东南侧为滏阳河左堤，西、北侧为外围围堤；莲花口进洪闸位于东南部，借马庄泄洪闸位于北围堤。广府古城位于洼内核心区域。现有证据只支持到该范围，确信度中。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "全区参考面积",
            "references": [
              {
                "label": "面积来源",
                "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023231.pdf"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12沿2023年水利研究论文第3页图2紫色蓄滞洪区范围描绘，以广府古城南北城门坐标作旋转和尺度配准；初始配准约17.01平方公里，为匹配用户及论文18.5平方公里，围绕古城将线性尺度放大约4.28%。图件分辨率及城门像素拾取存在误差，边界是图示近似，未取得实测堤线、闸址或DEM。古城位于范围内部偏西的核心区域，依原图保留，不强行挪至几何中心。",
            "references": []
          }
        ]
      }
    },
    "献县泛区": {
      "id": "海河-26",
      "name": "献县泛区",
      "basin": "海河流域",
      "confidence": "medium",
      "confidenceLabel": "确信度中",
      "ruleId": "M1",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "none",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 9,
        "contextAnchors": [
          {
            "id": "0",
            "name": "献县枢纽管理所（东端附近参考）",
            "location": "116.092282,38.210034",
            "anchorKind": "unknown"
          },
          {
            "id": "1",
            "name": "大齐村村委（独立位置参考）",
            "location": "115.802397,38.261489",
            "anchorKind": "unknown"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "海河“23·7”流域性特大洪水启用蓄滞洪区洪水淹没全过程卫星遥感监测分析",
          "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023409.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "PDF第5页图8标示献县泛区黄色蓄滞洪区边界，区别于红色淹没范围；用于本次轮廓描绘。"
        },
        {
          "title": "关于献县泛区蓄滞洪区建设与管理工程环境影响报告书的批复",
          "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201602/t20160223_330533.htm",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "确认滹沱河下游与滏阳新河下游交汇区及饶阳、武强、献县三县；原文将三县统写沧州市有行政归属笔误，本次按用户两市三县记录。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“献县泛区”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河北省蓄滞洪区管理办法",
          "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "河北省政府规章列明省内蓄滞洪区管理范围，用于交叉核对跨市县工程的河北段归属。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河北省沧州市献县",
        "河北省衡水市饶阳县",
        "河北省衡水市武强县"
      ],
      "administrativeMatch": {
        "overall": "partial",
        "matchedAreas": []
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "献县泛区位于河北省滹沱河下游、滹沱河与滏阳河及滏阳新河汇流区上游，跨沧州市献县和衡水市饶阳县、武强县两市三县，参考面积331平方公里。北侧滹沱河左堤（北大堤）；东、东北参考滏阳河右堤并向献县枢纽收束；南侧留楚排干、滹沱河南大堤及南小埝；西侧饶阳入泛一带。",
        "reasoning": "描绘2023年遥感监测论文第5页图8a黄色蓄滞洪区边界，不使用红色淹没范围。以北向箭头定方向、331平方公里定尺度，用献县枢纽管理所作为东端附近代理点配准。管理所不等于三河汇流精确断面，尚无第二个可靠图上控制点，整图定位仍可能存在平移及局部误差。西南遮挡边段沿可辨边界连接；未取得实测堤线或DEM。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "献县泛区位于河北省滹沱河下游、滹沱河与滏阳河及滏阳新河汇流区上游，跨沧州市献县和衡水市饶阳县、武强县两市三县，参考面积331平方公里。北侧滹沱河左堤（北大堤）；东、东北参考滏阳河右堤并向献县枢纽收束；南侧留楚排干、滹沱河南大堤及南小埝；西侧饶阳入泛一带。 轮廓按面积拟合，精确堤线待审",
            "references": [
              {
                "url": "https://zqqk.org.cn/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023409.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201602/t20160223_330533.htm",
                "label": "引用 2"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 3"
              },
              {
                "url": "https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/202103/t20210312_374070.html",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "公开资料可确认到：河北省沧州市献县、河北省衡水市饶阳县、河北省衡水市武强县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：献县泛区位于河北省滹沱河下游、滹沱河与滏阳河及滏阳新河汇流区上游，跨沧州市献县和衡水市饶阳县、武强县两市三县，参考面积331平方公里。北侧滹沱河左堤（北大堤）；东、东北参考滏阳河右堤并向献县枢纽收束；南侧留楚排干、滹沱河南大堤及南小埝；西侧饶阳入泛一带。现有证据只支持到该范围，确信度中。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "全区参考面积",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12描绘2023年遥感监测论文第5页图8a黄色蓄滞洪区边界，不使用红色淹没范围。以北向箭头定方向、331平方公里定尺度，用献县枢纽管理所作为东端附近代理点配准。管理所不等于三河汇流精确断面，尚无第二个可靠图上控制点，整图定位仍可能存在平移及局部误差。西南遮挡边段沿可辨边界连接；未取得实测堤线或DEM。",
            "references": []
          }
        ]
      }
    },
    "崔家桥": {
      "id": "海河-27",
      "name": "崔家桥",
      "basin": "海河流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": [
          {
            "id": "0",
            "name": "安阳河左堤硬化工程起点",
            "location": "114.44929467,36.11108254",
            "anchorKind": "engineering-reference"
          },
          {
            "id": "1",
            "name": "安阳河左堤硬化工程终点",
            "location": "114.47168591,36.11416328",
            "anchorKind": "engineering-reference"
          },
          {
            "id": "2",
            "name": "朱小庄围村堤参考位置（非全区界址）",
            "location": "114.57951619,36.12831076",
            "anchorKind": "engineering-reference"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "安阳县水利工程工情信息公示",
          "url": "https://www.ayx.gov.cn/2025/06-19/3529242.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "县水利工情公示列出2处分洪口和2处退水闸所在村镇"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“崔家桥”列入海河流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "河南省四水同治规划（2021—2035年）",
          "url": "https://oss.henan.gov.cn/typtfile/20240123/f191e6f92c6b40e8b782d4533a0bb154.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "省级规划统筹河南省海河、淮河和黄河流域蓄滞洪区，并列出北金堤、大逍遥及海河流域工程。"
        },
        {
          "title": "2024年崔家桥蓄滞洪区建设工程环境影响报告表",
          "url": "https://oss.dahe.cn/anyangxian/sitesources/adxq/upload/202412/20241225194630123.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "oss.dahe.cn"
        }
      ],
      "verifiedAdministrativeAreas": [
        "河南省安阳市安阳县崔家桥镇",
        "河南省安阳市安阳县永和镇"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "河南省安阳市安阳县崔家桥镇",
          "河南省安阳市安阳县永和镇"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "崔家桥蓄滞洪区位于河南省安阳市安阳县东部、卫河支流安阳河下游，主体涉及崔家桥镇、永和镇、韩陵镇。北界幸福渠左堤，南界安阳河左堤，西接韩陵山及东侧自然高地，东至永和镇朱小庄附近防洪堤。参考面积74.54平方公里。",
        "reasoning": "移除乡镇办公地名点构成的旧椭圆。依据2024年工程环评PDF第24页四至和74.54平方公里口径，按韩陵山—崔家桥—朱小庄的范围组织东西向轮廓；南侧参考PDF第4页安阳河左堤顶硬化工程端点，东侧参考PDF第5—6页朱小庄附近工程位置。其余河堤与高地缺段仅作方向性连接。图示独立测算82.36平方公里，不通过缩放凑面积。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "四至与面积",
            "outcome": "已验收",
            "detail": "崔家桥蓄滞洪区位于河南省安阳市安阳县东部、卫河支流安阳河下游，主体涉及崔家桥镇、永和镇、韩陵镇。北界幸福渠左堤，南界安阳河左堤，西接韩陵山及东侧自然高地，东至永和镇朱小庄附近防洪堤。参考面积74.54平方公里。",
            "references": [
              {
                "url": "https://oss.dahe.cn/anyangxian/sitesources/adxq/upload/202412/20241225194630123.pdf",
                "label": "2024年工程环评"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "示意轮廓定位",
            "outcome": "已验收",
            "detail": "移除乡镇办公地名点构成的旧椭圆。依据2024年工程环评PDF第24页四至和74.54平方公里口径，按韩陵山—崔家桥—朱小庄的范围组织东西向轮廓；南侧参考PDF第4页安阳河左堤顶硬化工程端点，东侧参考PDF第5—6页朱小庄附近工程位置。其余河堤与高地缺段仅作方向性连接。图示独立测算82.36平方公里，不通过缩放凑面积。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "待核实线段",
            "outcome": "已验收",
            "detail": "本次为工程坐标与四至关系约束的低精度示意，尚未取得完整幸福渠、安阳河河堤线和东防洪堤测绘线；折线不能视为已经沿实际河堤描边。 环评指出西界大致沿67.0米等高线；尚未取得该高程基准下的地形线，西侧暂用自然高地方位代理。 工程表中朱小庄与多个村庄坐标重复，仅作东侧位置参考，不将围村堤中心坐标当作全区东防洪堤界址。 旧规划58.58平方公里和牛庄以东折向南的方案不代表当前74.54平方公里全区，不据此截掉永和镇东部；幸福沟是内部退水沟渠，不等同北界幸福渠。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "全区参考面积；环评称淹没面积",
            "references": [
              {
                "label": "面积来源",
                "url": "https://oss.dahe.cn/anyangxian/sitesources/adxq/upload/202412/20241225194630123.pdf"
              }
            ]
          }
        ]
      }
    },
    "月亮泡": {
      "id": "松花江-01",
      "name": "月亮泡",
      "basin": "松花江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 24,
        "contextAnchors": [
          {
            "id": "0",
            "name": "月亮泡",
            "location": "123.90606004,45.73839304",
            "anchorKind": "natural"
          },
          {
            "id": "1",
            "name": "月亮泡水库",
            "location": "124.026649,45.70397603",
            "anchorKind": "natural"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "吉林省月亮泡水库除险加固工程建设征占地通告",
          "url": "https://xxgk.jl.gov.cn/szf/gkml/202605/t20260512_9599981.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "通告明确月亮泡工程涉及白城市大安市、镇赉县的乡镇、行政村和国营渔场。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“月亮泡”列入松花江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "月亮泡蓄滞洪区工程环境影响报告书批复",
          "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201506/t20150605_303040.htm",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "生态环境部批复确认吉林省月亮泡蓄滞洪区工程及白城市属地管理关系。"
        },
        {
          "title": "生态环境部：月亮泡蓄滞洪区工程批复（2015）",
          "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201506/t20150605_303040.htm",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "生态环境部批复确认吉林省月亮泡蓄滞洪区工程及白城市属地管理关系。"
        },
        {
          "title": "吉林省生态保护红线划定技术方案：表9蓄滞洪区名录",
          "url": "https://xxgk.jl.gov.cn/PDFfile/201812/5686404.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "xxgk.jl.gov.cn"
        },
        {
          "title": "湖泊科学：1994—2018年月亮泡水淹区生态变化研究",
          "url": "https://jlakes.alljournals.cn/html/2022/4/20220420.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "jlakes.alljournals.cn"
        }
      ],
      "verifiedAdministrativeAreas": [
        "吉林省白城市大安市",
        "吉林省白城市镇赉县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "吉林省白城市镇赉县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "月亮泡蓄滞洪区位于吉林省白城市东北部，跨大安市、镇赉县，处于洮儿河下游汇入嫩江的河口区域。核心为月亮泡水库及外围低洼平原，东临嫩江右岸，北部及西北部进入镇赉县，南部及西南部进入大安市月亮泡镇一带。全区参考面积686.01平方公里。",
        "reasoning": "剔除大安市区同名鲜鱼馆及镇政府、学校等办公生活地名对范围的控制，替换旧东南向椭圆。生态环境部批复锁定洮儿河入嫩江河口；吉林省生态保护红线技术方案PDF第49页表9列出686.01平方公里。《湖泊科学》2022年研究图1的经纬网辅助定位嫩江、月亮泡和新荒泡，东缘参考河道走向，其余方向结合用户提供的镇赉—大安低地关系形成待核示意。图示面积640.31平方公里。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "河口位置与全区面积",
            "outcome": "已验收",
            "detail": "月亮泡蓄滞洪区位于吉林省白城市东北部，跨大安市、镇赉县，处于洮儿河下游汇入嫩江的河口区域。核心为月亮泡水库及外围低洼平原，东临嫩江右岸，北部及西北部进入镇赉县，南部及西南部进入大安市月亮泡镇一带。全区参考面积686.01平方公里。",
            "references": [
              {
                "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201506/t20150605_303040.htm",
                "label": "生态环境部批复"
              },
              {
                "url": "https://xxgk.jl.gov.cn/PDFfile/201812/5686404.pdf",
                "label": "省级名录表9"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "湖区与外围平原",
            "outcome": "已验收",
            "detail": "剔除大安市区同名鲜鱼馆及镇政府、学校等办公生活地名对范围的控制，替换旧东南向椭圆。生态环境部批复锁定洮儿河入嫩江河口；吉林省生态保护红线技术方案PDF第49页表9列出686.01平方公里。《湖泊科学》2022年研究图1的经纬网辅助定位嫩江、月亮泡和新荒泡，东缘参考河道走向，其余方向结合用户提供的镇赉—大安低地关系形成待核示意。图示面积640.31平方公里。",
            "references": [
              {
                "url": "https://jlakes.alljournals.cn/html/2022/4/20220420.html",
                "label": "研究图1"
              }
            ]
          },
          {
            "stage": "decision",
            "title": "围堤与分隔堤待核",
            "outcome": "已验收",
            "detail": "当前为河口与外围低地的低精度示意。研究图展示水淹频次及湖泊湿地，不是蓄滞洪区法定范围图；不得把其研究区或水面边界当作全区围堤。 东侧依据研究图经纬网近似定位嫩江河道，尚非右岸实测堤线；北、西、南侧仍为方位示意，未取得镇赉县加固段、大安市围堤及5号坝新荒泡侧堤完整线位。 洮儿河分隔堤25.967公里及沿江镇—后珲春庙方向按用户提供线索记录，未取得两端实测坐标；分隔堤不直接当作整个蓄滞洪区北界，也不切除其两侧低地。 与胖头泡现有候选重叠约24.92平方公里，两区沿嫩江的对应边界需联合核验，当前不修改邻区。 图示范围独立测算，与686.01平方公里存在差值；未按面积缩放。经纬网线性定位存在读图误差，坐标精度不代表工程精度。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "面积口径",
            "outcome": "已验收",
            "detail": "全区总面积",
            "references": [
              {
                "label": "面积来源",
                "url": "https://xxgk.jl.gov.cn/PDFfile/201812/5686404.pdf"
              }
            ]
          }
        ]
      }
    },
    "胖头泡": {
      "id": "松花江-02",
      "name": "胖头泡",
      "basin": "松花江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H2",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "unique",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 28,
        "contextAnchors": [
          {
            "id": "0",
            "name": "南引水库（地图地物参考）",
            "location": "124.331952,45.990249",
            "anchorKind": "unknown"
          },
          {
            "id": "1",
            "name": "古恰镇政府（在约略东界之外，待审）",
            "location": "124.882489,45.520542",
            "anchorKind": "unknown"
          }
        ]
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "基于HEC-RAS的胖头泡蓄滞洪区洪水模拟与灾损评估",
          "url": "https://pdf.hanspub.org/JWRR20200100000_96434148.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "第3页图1及正文：嫩江、松花江左岸，北部南引水库，东部安肇新河；研究面积2029.6平方公里、东西64公里、南北58公里，范围示意图用于本稿形态参考，非实测界址。"
        },
        {
          "title": "生态环境部：胖头泡蓄滞洪区工程批复",
          "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201411/t20141119_291694.htm",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "生态环境部批复和中国水利报道明确河岸、面积、县区与乡镇数量"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“胖头泡”列入松花江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "黑龙江省重要蓄滞洪生态功能区说明",
          "url": "https://www.hlj.gov.cn/hlj/c108483/list_left_tt.shtml",
          "sourceType": "official-document",
          "supportsLocation": true,
          "locationSummary": "省政府生态区划将胖头泡置于肇源、杜尔伯特、泰来组成的嫩江下游功能区东部。"
        }
      ],
      "verifiedAdministrativeAreas": [
        "黑龙江省大庆市肇源县",
        "黑龙江省大庆市大同区",
        "黑龙江省大庆市杜尔伯特蒙古族自治县"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "黑龙江省大庆市肇源县"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "胖头泡蓄滞洪区位于黑龙江省大庆市西南部、嫩江与松花江汇合区附近，主体在肇源县西部和西北部，跨及大同区、杜尔伯特蒙古族自治县。西侧为嫩江左岸老龙口至养身地一带，南侧为松花江左岸养身地至古恰一带，东侧参考安肇新河下段右侧堤防及林肇公路，北侧为南引水库北部堤坝。用户约略范围东经124度08分至124度48分、北纬45度27分至46度03分。",
        "reasoning": "描绘2020年水资源研究论文第3页图1外部范围，保留北部南引水库所在突出部分，按用户约略经纬度范围配准（原坐标基准未说明，暂按WGS84）。曾试用三个乡镇地标配准，得到约2895平方公里及明显超出用户范围的外缘，因示意图比例与地标代理误差而弃用，见discarded-affine.json。本稿没有按面积强行缩放，范围内各段仍未证实与实际堤坝重合。未取得DEM或法定堤线。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "资料核验",
            "outcome": "已验收",
            "detail": "胖头泡蓄滞洪区位于黑龙江省大庆市西南部、嫩江与松花江汇合区附近，主体在肇源县西部和西北部，跨及大同区、杜尔伯特蒙古族自治县。西侧为嫩江左岸老龙口至养身地一带，南侧为松花江左岸养身地至古恰一带，东侧参考安肇新河下段右侧堤防及林肇公路，北侧为南引水库北部堤坝。用户约略范围东经124度08分至124度48分、北纬45度27分至46度03分。 采用论文轮廓和用户约略经纬度配准，四侧堤线与古恰衔接待审",
            "references": [
              {
                "url": "https://pdf.hanspub.org/JWRR20200100000_96434148.pdf",
                "label": "引用 1"
              },
              {
                "url": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201411/t20141119_291694.htm",
                "label": "引用 2"
              },
              {
                "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
                "label": "引用 3"
              },
              {
                "url": "https://www.hlj.gov.cn/hlj/c108483/list_left_tt.shtml",
                "label": "引用 4"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "区域交叉验证",
            "outcome": "已验收",
            "detail": "行政区域一致：黑龙江省大庆市肇源县。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置结论",
            "outcome": "已验收",
            "detail": "位置结论：胖头泡蓄滞洪区位于黑龙江省大庆市西南部、嫩江与松花江汇合区附近，主体在肇源县西部和西北部，跨及大同区、杜尔伯特蒙古族自治县。西侧为嫩江左岸老龙口至养身地一带，南侧为松花江左岸养身地至古恰一带，东侧参考安肇新河下段右侧堤防及林肇公路，北侧为南引水库北部堤坝。用户约略范围东经124度08分至124度48分、北纬45度27分至46度03分。现有证据相互印证，确信度高。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "位置资料补充",
            "outcome": "已验收",
            "detail": "位置资料补充 · 2026-09-12描绘2020年水资源研究论文第3页图1外部范围，保留北部南引水库所在突出部分，按用户约略经纬度范围配准（原坐标基准未说明，暂按WGS84）。曾试用三个乡镇地标配准，得到约2895平方公里及明显超出用户范围的外缘，因示意图比例与地标代理误差而弃用，见discarded-affine.json。本稿没有按面积强行缩放，范围内各段仍未证实与实际堤坝重合。未取得DEM或法定堤线。",
            "references": []
          }
        ]
      }
    },
    "潖江": {
      "id": "珠江-01",
      "name": "潖江",
      "basin": "珠江流域",
      "confidence": "high",
      "confidenceLabel": "确信度高",
      "ruleId": "H3",
      "confidenceReason": "位置结论、范围和资料已由项目所有者验收用于展示。",
      "reviewedAt": "2026-09-12",
      "fieldVerified": false,
      "officialMap": {
        "available": false,
        "usableForLocation": false
      },
      "placeSearch": {
        "provider": "高德地图",
        "searchedAt": "2026-07-24T06:24:30.069Z",
        "status": "multiple-resolved",
        "candidateCount": 0,
        "candidates": [],
        "selectedCandidateId": null,
        "selectedCandidate": null,
        "rawCandidateCount": 30,
        "contextAnchors": []
      },
      "referenceClues": [],
      "governmentSources": [
        {
          "title": "广东清远：守护飞来峡",
          "url": "https://www.gdjct.gd.gov.cn/mtzl/content/post_198802.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "报道明确飞来峡镇螺塘村位于潖江蓄滞洪区内。"
        },
        {
          "title": "水利部：国家蓄滞洪区名录",
          "url": "https://spjc.mwr.gov.cn/spjc/hallg/16008/16008_003_001.jsp?mindex=2",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "水利部名录将“潖江”列入珠江流域，用于交叉核对规范名称和流域归属，不单独确定具体边界。"
        },
        {
          "title": "潖江蓄滞洪区建设与管理工程用地公告",
          "url": "https://www.qingcheng.gov.cn/xxgk/ghjh/fzgh/content/post_1528124.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "用地公告确认潖江蓄滞洪区建设与管理工程位于清远市清城区。"
        },
        {
          "title": "中国防汛抗旱：潖江蓄滞洪区湿地化建设模式（2023）",
          "url": "http://zgfxkh.xml-journal.net/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023068.pdf",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "zgfxkh.xml-journal.net"
        },
        {
          "title": "佛冈县：潖江蓄滞洪区工程选址公示",
          "url": "http://www.fogang.gov.cn/fgxzwgk/zfxxgkml/content/post_617862.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.fogang.gov.cn"
        },
        {
          "title": "清城段用地平面图（仅工程宗地，不是全区范围）",
          "url": "http://www.qingcheng.gov.cn/qcqzdlyxxgk/zdxx/zdtzxx/content/post_1502224.html",
          "sourceType": "published-source",
          "supportsLocation": true,
          "locationSummary": "www.qingcheng.gov.cn"
        }
      ],
      "verifiedAdministrativeAreas": [
        "广东省清远市清城区飞来峡镇",
        "广东省清远市清城区源潭镇",
        "广东省清远市佛冈县龙山镇"
      ],
      "administrativeMatch": {
        "overall": "matched",
        "matchedAreas": [
          "广东省清远市清城区飞来峡镇",
          "广东省清远市清城区源潭镇"
        ]
      },
      "conclusion": {
        "hasFuzzyLocation": true,
        "positionText": "潖江蓄滞洪区位于广东省清远市、北江左岸，飞来峡水利枢纽下游约10公里，围绕潖江下游及其北江汇入口的低洼平原。西接飞来峡镇江口，向东深入佛冈县龙山镇，主体沿潖江两岸17宗堤围及相连洪泛地展开；西南经长布天然分流口连接大燕河上游、源潭方向。参考面积82平方公里，对应珠基高程22米以下区域。",
        "reasoning": "旧候选使用延伸至潖江上游的同名河道点与飞来峡镇办公地名，未表达下游两岸堤围结构。此次依据广东省水利水电科学研究院作者发表于《中国防汛抗旱》2023年11期论文图1提取红色位置轮廓，保留沿河狭长分支、西南伸展和北部地形凹入。原图无坐标网，按源潭与汤塘地名近似配准，面积独立测算142.65平方公里，保留与82平方公里的显著差值并待核，不以面积缩放凑数。",
        "reasoningSteps": [
          {
            "stage": "source-verification",
            "title": "河谷与17宗堤围",
            "outcome": "已验收",
            "detail": "潖江蓄滞洪区位于广东省清远市、北江左岸，飞来峡水利枢纽下游约10公里，围绕潖江下游及其北江汇入口的低洼平原。西接飞来峡镇江口，向东深入佛冈县龙山镇，主体沿潖江两岸17宗堤围及相连洪泛地展开；西南经长布天然分流口连接大燕河上游、源潭方向。参考面积82平方公里，对应珠基高程22米以下区域。",
            "references": [
              {
                "url": "http://zgfxkh.xml-journal.net/cn/article/pdf/preview/10.16867/j.issn.1673-9264.2023068.pdf",
                "label": "研究论文及位置图"
              },
              {
                "url": "http://www.fogang.gov.cn/fgxzwgk/zfxxgkml/content/post_617862.html",
                "label": "官方选址公示"
              }
            ]
          },
          {
            "stage": "administrative-cross-check",
            "title": "轮廓提取与面积差值",
            "outcome": "已验收",
            "detail": "旧候选使用延伸至潖江上游的同名河道点与飞来峡镇办公地名，未表达下游两岸堤围结构。此次依据广东省水利水电科学研究院作者发表于《中国防汛抗旱》2023年11期论文图1提取红色位置轮廓，保留沿河狭长分支、西南伸展和北部地形凹入。原图无坐标网，按源潭与汤塘地名近似配准，面积独立测算142.65平方公里，保留与82平方公里的显著差值并待核，不以面积缩放凑数。",
            "references": []
          },
          {
            "stage": "decision",
            "title": "读图精度与工程范围待核",
            "outcome": "已验收",
            "detail": "论文图1是位置示意图，没有经纬网；利用源潭、汤塘地名作近似配准，文字标注与实际中心位置并不精确，局部比例可能失真，不是测绘或法定范围。 提取红线所得图示约142.65平方公里，与22米以下82平方公里明显不符。未取得同一高程基准下的22米淹没线，因此不声称当前图示已满足82平方公里范围约束。 原图细小间隙以3像素闭运算连接；未单独核定17宗堤围及其相连洪泛地的拓扑，不能据此认定各围均连续。 清城段用地平面图是工程征地宗地，未用宗地红线替代整个蓄滞洪区边界；精确堤线、长布分流口及东端终点仍待工程总图核验。",
            "references": []
          }
        ]
      }
    }
  }
};
  window.FLOOD_STORAGE_LOCATION_EVIDENCE = Object.freeze({ ...payload, zones: Object.freeze(payload.zones) });
})();
