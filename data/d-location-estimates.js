(function () {
  "use strict";
  const estimates = {
  "六角山": {
    "estimatedArea": "汉寿县蒋家嘴镇—百禄桥镇交界的六角山村附近",
    "basis": "县水利局报道明确两蓄洪垸堤防加固所在片区",
    "confidence": "high",
    "sourceUrl": "https://m.voc.com.cn/rmt/article/12304035.html",
    "sourceTitle": "新湖南：汉寿县水利局顺利完成两蓄洪垸堤防加固",
    "zoneName": "六角山",
    "checkedAt": "2026-07-17"
  },
  "西官垸": {
    "estimatedArea": "澧县官垸镇及西官垸分洪闸—罗家湖泵站一带",
    "basis": "县防汛方案列出西官垸分洪闸和管理所，安全建设资料列出罗家湖泵站",
    "confidence": "high",
    "sourceUrl": "https://www.li-xian.gov.cn/zwgk/public/6616363/1511083531.html",
    "sourceTitle": "澧县防汛抗旱工作方案",
    "zoneName": "西官垸",
    "checkedAt": "2026-07-17"
  },
  "安澧垸": {
    "estimatedArea": "安乡县北部大湖口镇—黄山头镇、松滋河左岸一带",
    "basis": "省水利厅答复和安乡补水工程资料共同指向大湖口、黄山头片区",
    "confidence": "medium",
    "sourceUrl": "https://slt.hunan.gov.cn/slt/xxgk/jyta/zxta/202508/t20250819_33776902.html",
    "sourceTitle": "湖南省水利厅对省政协提案的答复",
    "zoneName": "安澧垸",
    "checkedAt": "2026-07-17"
  },
  "澧南垸": {
    "estimatedArea": "位于湖南省常德市澧县，北临澧水，东濒道水，三面环水、一面靠山，与县城隔河相望。该垸又名泰和垸。",
    "basis": "省政府报道和水利研究资料明确垸内乡镇、村及河流边界",
    "confidence": "high",
    "sourceUrl": "https://www.hunan.gov.cn/hnszf/hnyw/zwdt/202408/t20240801_33418250.html",
    "sourceTitle": "湖南省政府：垸，人与水的棋局",
    "zoneName": "澧南垸",
    "checkedAt": "2026-07-17"
  },
  "安昌垸": {
    "estimatedArea": "安乡县三岔河镇（原安昌乡）及其周边垸区",
    "basis": "原安昌乡并入三岔河镇，现由安昌大垸水利管委会管理",
    "confidence": "medium",
    "sourceUrl": "https://m.voc.com.cn/xhn/news/202605/32766315.html",
    "sourceTitle": "新湖南：安昌大垸堤防巡查",
    "zoneName": "安昌垸",
    "checkedAt": "2026-07-17"
  },
  "安化垸": {
    "estimatedArea": "安乡县三岔河镇东部原安化乡片区，藕池河中支、西支之间",
    "basis": "区划沿革显示原安化乡驻三岔河，现与安昌垸由同一水利管委会管理",
    "confidence": "medium",
    "sourceUrl": "https://www.meet99.com/map-n32931.html",
    "sourceTitle": "三岔河镇区划沿革与水系概况",
    "zoneName": "安化垸",
    "checkedAt": "2026-07-17"
  },
  "南顶垸": {
    "estimatedArea": "距离南县县城西北方向约 10 公里处，行政区划主要属于南县浪拔湖镇管辖",
    "basis": "人工校正位置；岳阳市档案馆资料记载两太垸位于育才垸西北角，地图中心采用浪拔湖镇泰来村一带",
    "confidence": "high",
    "sourceUrl": "https://daj.yueyang.gov.cn/6658/6667/content_572808.html",
    "sourceTitle": "岳阳市档案馆：典型堤垸兴废录",
    "mapTarget": {
      "name": "浪拔湖镇两太垸（今泰来村一带）",
      "lng": 112.355263,
      "lat": 29.418733,
      "radiusKm": 4,
      "coordinateSystem": "GCJ-02",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "岳阳市档案馆：典型堤垸兴废录",
      "sourceUrl": "https://daj.yueyang.gov.cn/6658/6667/content_572808.html",
      "sourceTitle": "岳阳市档案馆：典型堤垸兴废录",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "南顶垸",
    "checkedAt": "2026-07-17"
  },
  "和康垸": {
    "estimatedArea": "南县麻河口镇—北河口片区，和康垸麻河口白洋湖渍堤一带",
    "basis": "南县堤防清单明确和康垸堤段位于麻河口镇官正垸村",
    "confidence": "high",
    "sourceUrl": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202509/PDF/dc7e3e5e-4384-47b1-ae99-67601461ce7e/b685266f-52ab-4562-9523-af309a07af6f.pdf",
    "sourceTitle": "南县2025年度堤防白蚁等害堤动物防治项目",
    "mapTarget": {
      "name": "和康垸·麻河口镇片区",
      "lng": 112.2716673,
      "lat": 29.2976591,
      "radiusKm": 10,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "南县2025年度堤防白蚁等害堤动物防治项目",
      "sourceUrl": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202509/PDF/dc7e3e5e-4384-47b1-ae99-67601461ce7e/b685266f-52ab-4562-9523-af309a07af6f.pdf",
      "sourceTitle": "南县2025年度堤防白蚁等害堤动物防治项目",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "和康垸",
    "checkedAt": "2026-07-17"
  },
  "南汉垸": {
    "estimatedArea": "南县北河口—麻河口片区，位于大通湖垸西侧、澧水尾闾北侧",
    "basis": "南县垸区资料将北河口、麻河口列为该片主要乡镇",
    "confidence": "medium",
    "sourceUrl": "https://read01.com/m00E8zy.html",
    "sourceTitle": "南县大垸地名与区位资料",
    "zoneName": "南汉垸",
    "checkedAt": "2026-07-17"
  },
  "民主垸": {
    "estimatedArea": "益阳市资阳区沙头镇、茈湖口镇、张家塞乡，重点锚点为沙头镇中心水利管理站",
    "basis": "区级堤防清单和乡镇资料明确3个乡镇及张家塞—沙头堤段",
    "confidence": "high",
    "sourceUrl": "https://jyzx.yiyang.gov.cn/TPFrame/AttachStorage2/202509/PDF/b8f425f0-c348-4f2b-818a-180695bf2b57/05be09d4-a724-4307-91e8-4dd12ff487e1.pdf",
    "sourceTitle": "资阳区2025年度水利工程堤防清单",
    "zoneName": "民主垸",
    "checkedAt": "2026-07-17"
  },
  "共双茶": {
    "estimatedArea": "沅江市北部共华镇、泗湖山镇、茶盘洲镇和南洞庭芦苇场，分洪闸位于泗湖山镇石子埂村",
    "basis": "工程招标资料列出4个乡镇场，市水务局明确分洪闸所在村",
    "confidence": "high",
    "sourceUrl": "https://www.yiyang.gov.cn/yysw/6077/6176/content_1353495.html",
    "sourceTitle": "益阳市水务局：共双茶垸分洪闸工程位置",
    "zoneName": "共双茶",
    "checkedAt": "2026-07-17"
  },
  "城西垸": {
    "estimatedArea": "湘阴县鹤龙湖镇，重点为南阳、蔡家港、顺风、东方红、湘临等安全区/安全台片区",
    "basis": "县政府答复列明城西垸拟建安全区和安全台名称",
    "confidence": "high",
    "sourceUrl": "https://www.xiangyin.gov.cn/31203/31208/content_2311358.html",
    "sourceTitle": "湘阴县政府关于城西垸安全建设建议的答复",
    "mapTarget": {
      "name": "城西垸·鹤龙湖镇片区",
      "lng": 112.8479358,
      "lat": 28.6706335,
      "radiusKm": 12,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "湘阴县政府关于城西垸安全建设建议的答复",
      "sourceUrl": "https://www.xiangyin.gov.cn/31203/31208/content_2311358.html",
      "sourceTitle": "湘阴县政府关于城西垸安全建设建议的答复",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "城西垸",
    "checkedAt": "2026-07-17"
  },
  "屈原农场": {
    "estimatedArea": "岳阳市屈原管理区，以营田镇为管理与聚落中心，覆盖原屈原农场各分场",
    "basis": "区划沿革明确原屈原农场改为屈原管理区及各分场现行归属",
    "confidence": "high",
    "sourceUrl": "https://www.xzqh.org/html/show/hn/25048.html",
    "sourceTitle": "屈原管理区区划沿革",
    "mapTarget": {
      "name": "原屈原农场·营田镇中心",
      "lng": 112.9112498,
      "lat": 28.8634497,
      "radiusKm": 12,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "屈原管理区区划沿革",
      "sourceUrl": "https://www.xzqh.org/html/show/hn/25048.html",
      "sourceTitle": "屈原管理区区划沿革",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "屈原农场",
    "checkedAt": "2026-07-17"
  },
  "义和垸": {
    "estimatedArea": "湘阴县静河镇义合金鸡垸哑湖一带，涉及湾河口社区、麦子村、红旗村、金兴村、邮路口村、青湖村",
    "basis": "湘阴县河湖资料给出义合金鸡垸哑湖的乡镇、六个行政村和三汊河低排闸等范围锚点",
    "confidence": "high",
    "sourceUrl": "https://www.xiangyin.gov.cn/yyjc/jc_xyx/125/453/content_10425.html",
    "sourceTitle": "湘阴县各河湖概况及河湖长信息表",
    "zoneName": "义和垸",
    "checkedAt": "2026-07-17"
  },
  "北湖垸": {
    "estimatedArea": "仙桃市胡场镇北湖垸村",
    "basis": "现行村级区划可直接确认北湖垸村，且已有同名村级组织锚点",
    "confidence": "high",
    "sourceUrl": "https://www.xzqh.org/html/show/hb/37390.html",
    "sourceTitle": "仙桃市胡场镇区划资料",
    "zoneName": "北湖垸",
    "checkedAt": "2026-07-17"
  },
  "集成安合": {
    "estimatedArea": "华容县西部梅田湖镇—操军镇，鲇鱼须河右岸、藕池河东支左岸一带",
    "basis": "县水安全规划、乡镇规划和堤防清单共同指向梅田湖、操军片区",
    "confidence": "high",
    "sourceUrl": "https://www.huarong.gov.cn/33159/37006/37008/37038/37268/content_1997103.html",
    "sourceTitle": "华容县“十四五”水安全保障规划",
    "mapTarget": {
      "name": "集成安合垸·梅田湖镇片区",
      "lng": 112.3524168,
      "lat": 29.5280599,
      "radiusKm": 12,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "华容县“十四五”水安全保障规划",
      "sourceUrl": "https://www.huarong.gov.cn/33159/37006/37008/37038/37268/content_1997103.html",
      "sourceTitle": "华容县“十四五”水安全保障规划",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "集成安合",
    "checkedAt": "2026-07-17"
  },
  "钱粮湖": {
    "estimatedArea": "君山区钱粮湖镇—良心堡镇，层山、良心堡、方台湖安全区片区",
    "basis": "君山区政府项目资料明确安全建设地点和安全区名称",
    "confidence": "high",
    "sourceUrl": "https://junshan.gov.cn/32415/40825/40826/40843/40845/42921/content_1900512.html",
    "sourceTitle": "钱粮湖蓄洪垸安全建设一期工程位置",
    "zoneName": "钱粮湖",
    "checkedAt": "2026-07-17"
  },
  "建设垸": {
    "estimatedArea": "君山区北部建设垸堤防—洪水港长江护岸工程管理片区",
    "basis": "君山区水利局现设建设垸堤防事务中心并兼管洪水港长江护岸工程",
    "confidence": "medium",
    "sourceUrl": "https://www.junshan.gov.cn/32415/32465/39479/39482/index.htm",
    "sourceTitle": "君山区水利局机构概况",
    "zoneName": "建设垸",
    "checkedAt": "2026-07-17"
  },
  "建新农场": {
    "estimatedArea": "君山区建新公共事务服务中心、湖南省岳阳监狱（原建新农场）规划范围",
    "basis": "君山区国土空间规划公示明确原建新农场现行名称与管理单位",
    "confidence": "high",
    "sourceUrl": "https://junshan.gov.cn/32415/32440/content_2352545.html",
    "sourceTitle": "湖南省岳阳监狱（原建新农场）国土空间规划公示",
    "zoneName": "建新农场",
    "checkedAt": "2026-07-17"
  },
  "君山农场": {
    "estimatedArea": "君山区柳林洲街道原君山农场各分场片区",
    "basis": "区划沿革明确柳林洲由原君山农场、君山镇及多个分场合并形成",
    "confidence": "medium",
    "sourceUrl": "https://www.junshan.gov.cn/index.html",
    "sourceTitle": "君山区概况",
    "zoneName": "君山农场",
    "checkedAt": "2026-07-17"
  },
  "江南陆城": {
    "estimatedArea": "临湘市江南镇与岳阳市云溪区陆城镇，长江南岸狭长平原",
    "basis": "规划和人大建议明确江南垸、陆城垸相连且跨临湘、云溪",
    "confidence": "high",
    "sourceUrl": "https://www.hnrd.gov.cn/content/2018/01/28/7248843.html",
    "sourceTitle": "湖南人大：洞庭湖区蓄洪垸防洪标准建议",
    "mapTarget": {
      "name": "江南陆城垸·江南镇—陆城镇",
      "lng": 113.4372858,
      "lat": 29.7429199,
      "radiusKm": 20,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "湖南人大：洞庭湖区蓄洪垸防洪标准建议",
      "sourceUrl": "https://www.hnrd.gov.cn/content/2018/01/28/7248843.html",
      "sourceTitle": "湖南人大：洞庭湖区蓄洪垸防洪标准建议",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "江南陆城",
    "checkedAt": "2026-07-17"
  },
  "荆江分洪区": {
    "estimatedArea": "公安县长江南岸与虎渡河之间，覆盖斗湖堤、杨家厂、麻豪口、藕池、埠河、夹竹园、闸口等乡镇",
    "basis": "生态环境部批复和湖北堤防责任清单明确河流边界及主要乡镇",
    "confidence": "high",
    "sourceUrl": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201605/t20160509_337370.htm",
    "sourceTitle": "生态环境部：荆江分洪区近期重点项目批复",
    "zoneName": "荆江分洪区",
    "checkedAt": "2026-07-17"
  },
  "宛市扩大区": {
    "estimatedArea": "荆州区弥市镇及其南部邻近松滋片区（规范名称常写作“涴市扩大区”）",
    "basis": "《走进荆江分蓄洪区》记载涴市扩大分洪区跨荆州区、松滋市，面积96平方公里，由荆南长江干堤、虎西支堤和涴市隔堤围成；现有弥市镇锚点只用于猜测范围定位",
    "confidence": "high",
    "sourceUrl": "https://m.cnhubei.com/content/2020-07/21/content_13219792.html",
    "sourceTitle": "荆楚网：走进荆江分蓄洪区",
    "mapTarget": {
      "name": "涴市扩大区·弥市镇片区",
      "lng": 112.1176751,
      "lat": 30.2262916,
      "radiusKm": 12,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "荆楚网：走进荆江分蓄洪区",
      "sourceUrl": "https://m.cnhubei.com/content/2020-07/21/content_13219792.html",
      "sourceTitle": "荆楚网：走进荆江分蓄洪区",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "宛市扩大区",
    "checkedAt": "2026-07-17"
  },
  "虎西备蓄区": {
    "estimatedArea": "公安县虎渡河以西、孟家溪—章田寺—南平一带，核心工程为山岗围堤",
    "basis": "湖北堤防责任清单明确虎渡河右堤章田寺段和虎西备蓄区山岗围堤",
    "confidence": "high",
    "sourceUrl": "https://slt.hubei.gov.cn/fbjd/tzgg/202406/P020240611369154553013.pdf",
    "sourceTitle": "湖北省3级及以上河道堤防防汛责任人名单",
    "zoneName": "虎西备蓄区",
    "checkedAt": "2026-07-17"
  },
  "人民大垸": {
    "estimatedArea": "跨湖北省荆州市石首市、监利市，由荆江大堤和柳杨支堤围成的人民大垸分蓄洪区；流港及同名管理区仅作区内定位线索",
    "basis": "湖北日报现场采访记载人民大垸分蓄洪区跨石首、监利，面积341平方公里；不将人民大垸管理区的行政范围当成完整洪区边界",
    "confidence": "high",
    "sourceUrl": "https://m.cnhubei.com/content/2020-07/21/content_13219792.html",
    "sourceTitle": "湖北日报：走进荆江分蓄洪区",
    "mapTarget": {
      "name": "人民大垸·流港定位代理点",
      "lng": 112.7080623,
      "lat": 29.8439587,
      "radiusKm": 10,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "湖北日报：走进荆江分蓄洪区",
      "sourceUrl": "https://m.cnhubei.com/content/2020-07/21/content_13219792.html",
      "sourceTitle": "湖北日报：走进荆江分蓄洪区",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "人民大垸",
    "checkedAt": "2026-07-17"
  },
  "洪湖分洪区": {
    "estimatedArea": "洪湖市与监利市之间的洪湖周边低地，预估中心取洪湖水体中部",
    "basis": "不再将道路或行政中心参与平均，湖泊地标不等同法定分洪区边界",
    "confidence": "none",
    "sourceUrl": null,
    "sourceTitle": null,
    "zoneName": "洪湖分洪区",
    "checkedAt": "2026-07-17"
  },
  "杜家台": {
    "estimatedArea": "西起仙桃城区东北侧汉江右岸杜家台分洪闸附近，经周邦分洪道向东连通蔡甸消泗、沉湖及通顺河一带，至汉南黄陵矶出口；分洪闸是西端进洪点，不是全区中心",
    "basis": "闸址按仙桃城区东北侧、汉右堤126＋200定位；结合周邦大桥、沉湖和黄陵矶出口推断全区走向，613.98平方公里仅用于猜测边界尺度",
    "confidence": "medium",
    "sourceUrl": "https://www.hbdsw.org.cn/tbgz/ztx/jnwz/201512/t4589961.shtml",
    "sourceTitle": "湖北党史网：杜家台分洪闸（中共仙桃市委党史办公室）",
    "zoneName": "杜家台",
    "checkedAt": "2026-07-17"
  },
  "东西湖": {
    "estimatedArea": "武汉市东西湖区全域蓄滞洪保留区，预估中心取区级行政中心",
    "basis": "武汉市水利工程名录给出总面积444平方公里",
    "confidence": "high",
    "sourceUrl": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html",
    "sourceTitle": "武汉市水利工程分级分类名录",
    "mapTarget": {
      "name": "东西湖蓄滞洪保留区预估中心",
      "lng": 114.1307616,
      "lat": 30.6208329,
      "radiusKm": 18,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "武汉市水利工程分级分类名录",
      "sourceUrl": "https://swj.wuhan.gov.cn/xxgk/new_zc/new_qtzdgkwj/202412/t20241226_2508785.html",
      "sourceTitle": "武汉市水利工程分级分类名录",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "东西湖",
    "checkedAt": "2026-07-17"
  },
  "康山圩": {
    "estimatedArea": "余干县康山乡、鄱阳湖东南岸康山大堤内侧",
    "basis": "余干县资料和防汛报道均明确康山乡及康山大堤",
    "confidence": "high",
    "sourceUrl": "https://www.12371.cn/2020/08/03/VIDE1596457921339171.shtml",
    "sourceTitle": "共产党员网：康山大堤守护人",
    "mapTarget": {
      "name": "康山圩·康山乡片区",
      "lng": 116.4381259,
      "lat": 28.9493613,
      "radiusKm": 14,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "共产党员网：康山大堤守护人",
      "sourceUrl": "https://www.12371.cn/2020/08/03/VIDE1596457921339171.shtml",
      "sourceTitle": "共产党员网：康山大堤守护人",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "康山圩",
    "checkedAt": "2026-07-17"
  },
  "珠湖圩": {
    "estimatedArea": "鄱阳县西南部莲湖乡及珠湖周边，工程范围涉及邻近6个乡镇",
    "basis": "鄱阳县巡湖报道明确珠湖工程和莲湖乡相邻，工程报道确认县西南部6乡镇",
    "confidence": "medium",
    "sourceUrl": "https://jxsr.jxnews.com.cn/system/2025/05/19/020875082.shtml",
    "sourceTitle": "鄱阳县珠湖蓄滞洪区工程巡查报道",
    "mapTarget": {
      "name": "珠湖圩·莲湖乡片区",
      "lng": 116.5412893,
      "lat": 28.9983968,
      "radiusKm": 14,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "medium",
      "source": "鄱阳县珠湖蓄滞洪区工程巡查报道",
      "sourceUrl": "https://jxsr.jxnews.com.cn/system/2025/05/19/020875082.shtml",
      "sourceTitle": "鄱阳县珠湖蓄滞洪区工程巡查报道",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "珠湖圩",
    "checkedAt": "2026-07-17"
  },
  "黄湖圩": {
    "estimatedArea": "南昌县蒋巷镇洲头村、联圩村一带，蒋巷联圩东北部",
    "basis": "南昌市水利局明确总体区位，地方报道进一步定位到洲头村黄湖圩农田道路",
    "confidence": "high",
    "sourceUrl": "https://water.nc.gov.cn/ncswj/shzhfy/202512/55bd3587c8be4e39a34c097efcaafa19.shtml",
    "sourceTitle": "南昌市水利局：黄湖、方洲斜塘基本情况",
    "mapTarget": {
      "name": "黄湖圩·洲头村附近",
      "lng": 115.9955889,
      "lat": 28.7317741,
      "radiusKm": 6,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "南昌市水利局：黄湖、方洲斜塘基本情况",
      "sourceUrl": "https://water.nc.gov.cn/ncswj/shzhfy/202512/55bd3587c8be4e39a34c097efcaafa19.shtml",
      "sourceTitle": "南昌市水利局：黄湖、方洲斜塘基本情况",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "黄湖圩",
    "checkedAt": "2026-07-17"
  },
  "方洲斜塘": {
    "estimatedArea": "南昌市新建区铁河乡、赣西联圩西北部、赣江主支左岸",
    "basis": "南昌市水利局明确现行行政归属；纠正项目原先误写为鄱阳县",
    "confidence": "high",
    "sourceUrl": "https://water.nc.gov.cn/ncswj/shzhfy/202512/55bd3587c8be4e39a34c097efcaafa19.shtml",
    "sourceTitle": "南昌市水利局：黄湖、方洲斜塘基本情况",
    "mapTarget": {
      "name": "方洲斜塘·铁河乡片区",
      "lng": 115.9701294,
      "lat": 29.0304128,
      "radiusKm": 8,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "南昌市水利局：黄湖、方洲斜塘基本情况",
      "sourceUrl": "https://water.nc.gov.cn/ncswj/shzhfy/202512/55bd3587c8be4e39a34c097efcaafa19.shtml",
      "sourceTitle": "南昌市水利局：黄湖、方洲斜塘基本情况",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "方洲斜塘",
    "checkedAt": "2026-07-17"
  },
  "汪波东荡": {
    "estimatedArea": "来安县南部汊河镇、三城乡，汪波荡农场西荡—广大圩、沈圩一带",
    "basis": "来安县人大答复给出汪波荡农场、汊河镇、三城乡、广大圩、沈圩等连续位置线索",
    "confidence": "high",
    "sourceUrl": "https://ahlard.gov.cn/dblxqz/12686.html",
    "sourceTitle": "来安县人大：关于打造三城湿地水乡议案的答复",
    "zoneName": "汪波东荡",
    "checkedAt": "2026-07-17"
  },
  "蒿子圩": {
    "estimatedArea": "南京市浦口区永宁街道张圩社区，滁河南岸蒿子圩全部圩区",
    "basis": "江苏生态空间管控范围明确全部圩区，社区资料明确属张圩社区",
    "confidence": "high",
    "sourceUrl": "https://www.jiangsu.gov.cn/module/download/downfile.jsp?classid=0&filename=41d4406973644c03b562924cf59cd693.pdf",
    "sourceTitle": "江苏省生态空间管控区域规划",
    "zoneName": "蒿子圩",
    "checkedAt": "2026-07-17"
  },
  "北金堤": {
    "estimatedArea": "黄河左岸临黄堤—北金堤之间；河南侧明确涉及长垣、滑县、濮阳县、范县、台前5县市及中原油田，山东莘县、阳谷县南部作为相邻范围提示",
    "basis": "河南省政府公报明确河南侧5县市、自然村数量和面积，替换原百科来源",
    "confidence": "high",
    "sourceUrl": "https://file.henan.gov.cn/4500000001/2020-04-23/1587641251474MdSsiyKH.pdf",
    "sourceTitle": "河南省人民政府公报：北金堤滞洪区概况",
    "zoneName": "北金堤",
    "checkedAt": "2026-07-17"
  },
  "老汪湖": {
    "estimatedArea": "宿州埇桥区—灵璧县交界的奎濉河流域低地，涉及5个乡镇26村，锚点为老汪湖管理室",
    "basis": "埇桥区水利局公布面积、乡镇村数量及地貌水系",
    "confidence": "high",
    "sourceUrl": "https://www.szyq.gov.cn/grassroots/6623401/158511991.html",
    "sourceTitle": "埇桥区水利局：老汪湖蓄滞洪区概况",
    "zoneName": "老汪湖",
    "checkedAt": "2026-07-17"
  },
  "泥河洼": {
    "estimatedArea": "舞阳县沙河与澧河之间，北舞渡镇贾湖村以东，重点锚点为马湾村运行保障中心",
    "basis": "河南考古院给出贾湖村坐标及泥河洼相对方位，水利资料明确两河边界",
    "confidence": "high",
    "sourceUrl": "https://www.hnswwkgyjy.cn/NewsView.php?News_ID=222",
    "sourceTitle": "河南省文物考古研究院：贾湖遗址区位",
    "zoneName": "泥河洼",
    "checkedAt": "2026-07-17"
  },
  "老王坡": {
    "estimatedArea": "西平县老王坡农业现代化示范区，村西花田及其周边低洼农田",
    "basis": "省级农业报道确认示范区，同名地物聚类与现场锚点一致",
    "confidence": "high",
    "sourceUrl": "https://www.thepaper.cn/newsDetail_forward_23371992",
    "sourceTitle": "河南高标准农田建设：老王坡示范区",
    "zoneName": "老王坡",
    "checkedAt": "2026-07-17"
  },
  "蛟停湖": {
    "estimatedArea": "新蔡县蛟停湖大草原及周边低洼区，并与平舆县相邻工程片区衔接",
    "basis": "河南省水利工程验收资料确认新蔡、平舆两段，地图检得同名景观锚点",
    "confidence": "medium",
    "sourceUrl": "https://henan.people.com.cn/n2/2024/0107/c351638-40705687.html",
    "sourceTitle": "河南省淮河流域滞洪区建设工程竣工验收",
    "zoneName": "蛟停湖",
    "checkedAt": "2026-07-17"
  },
  "黄墩湖": {
    "estimatedArea": "骆马湖西侧，中运河—房亭河—邳睢公路—故黄河之间，重点为邳州八路/新河和宿豫黄墩/皂河片区",
    "basis": "运用预案给出四至边界、3县市7乡镇",
    "confidence": "none",
    "sourceUrl": "https://www.lvga.com/fagui/swfll/wtosw/1317031.shtml",
    "sourceTitle": "徐州市黄墩湖滞洪区运用预案",
    "zoneName": "黄墩湖",
    "checkedAt": "2026-07-17"
  },
  "南润段": {
    "estimatedArea": "颍上县南照镇—润河镇之间的淮河左岸行蓄洪区",
    "basis": "安徽工程规划和历次启用资料明确南照、润河两镇",
    "confidence": "high",
    "sourceUrl": "https://ah.people.com.cn/n2/2022/0610/c358428-35308628.html",
    "sourceTitle": "安徽淮河一般行蓄洪区工程规划公示",
    "zoneName": "南润段",
    "checkedAt": "2026-07-17"
  },
  "姜唐湖": {
    "estimatedArea": "颍上县垂岗、王岗、赛涧、半岗4乡镇，淮河正阳关—临淮岗之间",
    "basis": "行蓄洪启用报道明确4乡镇23村及河段位置",
    "confidence": "high",
    "sourceUrl": "https://www.kaiwind.com/n397/n398/c123112/content.html",
    "sourceTitle": "颍上姜唐湖行蓄洪区范围资料",
    "zoneName": "姜唐湖",
    "checkedAt": "2026-07-17"
  },
  "寿西湖": {
    "estimatedArea": "寿县县城西侧寿西湖农场及周边低洼地",
    "basis": "同名农场地物聚类和安徽行蓄洪区资料相互印证",
    "confidence": "medium",
    "sourceUrl": "https://www.panji.gov.cn/group1/M00/15/80/rB406mRi31eAJGdDAAelRoo3lr4882.pdf",
    "sourceTitle": "安徽省行蓄洪区运用补偿资料",
    "zoneName": "寿西湖",
    "checkedAt": "2026-07-17"
  },
  "南四湖湖东": {
    "estimatedArea": "南四湖湖东堤东侧，跨济宁市与枣庄市，预估中心取南四湖东岸中段",
    "basis": "生态环境部批复明确跨济宁、枣庄；纠正项目原先仅写济宁",
    "confidence": "high",
    "sourceUrl": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201701/t20170109_394447.htm",
    "sourceTitle": "生态环境部：山东省湖东滞洪区建设工程批复",
    "mapTarget": {
      "name": "南四湖湖东滞洪区预估中心",
      "lng": 117.159319,
      "lat": 34.702914,
      "radiusKm": 32,
      "coordinateSystem": "GCJ-02",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "生态环境部：山东省湖东滞洪区建设工程批复",
      "sourceUrl": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201701/t20170109_394447.htm",
      "sourceTitle": "生态环境部：山东省湖东滞洪区建设工程批复",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "南四湖湖东",
    "checkedAt": "2026-07-17"
  },
  "大逍遥": {
    "estimatedArea": "西华县西南部沙河—颍河之间，以逍遥镇为中心，向李大庄、黄桥、西夏亭、艾岗等相邻乡镇延伸；具体界线待规划发布",
    "basis": "西华县政府确认正在编制大逍遥规划，县级资料确认逍遥镇地处沙、颍河怀抱中；未沿用非官方来源的8乡镇确定边界",
    "confidence": "medium",
    "sourceUrl": "https://www.xihua.gov.cn/sitesources/xhxrmzf/page_pc/zwgk/zfwj/articleff7b546cd2784081ad5cbd63170a4d7a.html",
    "sourceTitle": "西华县政府：推进大逍遥蓄滞洪区规划编制",
    "mapTarget": {
      "name": "大逍遥·逍遥镇周边预估中心",
      "lng": 114.2574988,
      "lat": 33.7473586,
      "radiusKm": 22,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "medium",
      "source": "西华县政府：推进大逍遥蓄滞洪区规划编制",
      "sourceUrl": "https://www.xihua.gov.cn/sitesources/xhxrmzf/page_pc/zwgk/zfwj/articleff7b546cd2784081ad5cbd63170a4d7a.html",
      "sourceTitle": "西华县政府：推进大逍遥蓄滞洪区规划编制",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "大逍遥",
    "checkedAt": "2026-07-17"
  },
  "永定河泛区": {
    "estimatedArea": "自廊坊固安县起，经永清、安次、广阳及天津武清、北辰，下至屈家店枢纽",
    "basis": "廊坊市政府给出起讫点、跨区范围和面积",
    "confidence": "high",
    "sourceUrl": "https://www.lf.gov.cn/Item/156177.aspx",
    "sourceTitle": "廊坊市政府：永定河泛区防汛备汛",
    "mapTarget": {
      "name": "永定河泛区河道中段预估中心",
      "lng": 116.522766,
      "lat": 39.475514,
      "radiusKm": 28,
      "coordinateSystem": "GCJ-02",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "廊坊市政府：永定河泛区防汛备汛",
      "sourceUrl": "https://www.lf.gov.cn/Item/156177.aspx",
      "sourceTitle": "廊坊市政府：永定河泛区防汛备汛",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "永定河泛区",
    "checkedAt": "2026-07-17"
  },
  "小清河分洪区": {
    "estimatedArea": "永定河卢沟桥南侧，跨北京丰台、房山与河北涿州，涿州段重点涉及码头镇等7乡镇",
    "basis": "北京水务招标资料明确跨3区市，2023年转移资料明确涿州段规模",
    "confidence": "high",
    "sourceUrl": "https://swj.beijing.gov.cn/zwgk/ztb/zbjg/201912/P020191219459857462621.pdf",
    "sourceTitle": "北京市小清河分洪区水利工程资料",
    "mapTarget": {
      "name": "小清河分洪区·涿州段预估中心",
      "lng": 116.137904,
      "lat": 39.567896,
      "radiusKm": 18,
      "coordinateSystem": "GCJ-02",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "北京市小清河分洪区水利工程资料",
      "sourceUrl": "https://swj.beijing.gov.cn/zwgk/ztb/zbjg/201912/P020191219459857462621.pdf",
      "sourceTitle": "北京市小清河分洪区水利工程资料",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "小清河分洪区",
    "checkedAt": "2026-07-17"
  },
  "文安洼": {
    "estimatedArea": "以廊坊文安县为主体，西接任丘高地、东接天津静海，北靠千里堤/隔淀堤、南至津保公路南线",
    "basis": "文安县转移预案和蓄滞洪区资料给出四至与12乡镇范围",
    "confidence": "high",
    "sourceUrl": "https://www.wenan.gov.cn/GOV1/Item/36206.aspx",
    "sourceTitle": "文安县灾民防汛转移安置预案",
    "mapTarget": {
      "name": "文安洼·文安县主体区预估中心",
      "lng": 116.4567788,
      "lat": 38.8654817,
      "radiusKm": 28,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "文安县灾民防汛转移安置预案",
      "sourceUrl": "https://www.wenan.gov.cn/GOV1/Item/36206.aspx",
      "sourceTitle": "文安县灾民防汛转移安置预案",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "文安洼",
    "checkedAt": "2026-07-17"
  },
  "贾口洼": {
    "estimatedArea": "天津静海区西南部唐官屯—独流片区，并向河北青县北部延伸",
    "basis": "天津工程资料确认静海区及独流安全区，项目原有资料确认跨青县",
    "confidence": "medium",
    "sourceUrl": "https://swj.tj.gov.cn/xwzx_17135/mtjj/202405/t20240508_6619886.html",
    "sourceTitle": "天津市水务局：贾口洼工程与安全建设",
    "mapTarget": {
      "name": "贾口洼·唐官屯片区预估中心",
      "lng": 116.9105415,
      "lat": 38.7033381,
      "radiusKm": 18,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "medium",
      "source": "天津市水务局：贾口洼工程与安全建设",
      "sourceUrl": "https://swj.tj.gov.cn/xwzx_17135/mtjj/202405/t20240508_6619886.html",
      "sourceTitle": "天津市水务局：贾口洼工程与安全建设",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "贾口洼",
    "checkedAt": "2026-07-17"
  },
  "兰沟洼": {
    "estimatedArea": "跨定兴县与高碑店市；高碑店段明确涉及肖官营、新城、辛桥、辛立庄、东马营、泗庄6镇，以东务分洪闸—东马营退洪闸为工程控制点",
    "basis": "新华社报道确认两座核心闸门，中国建筑项目资料列出高碑店段6镇37村",
    "confidence": "high",
    "sourceUrl": "https://www.news.cn/photo/20250630/b0b565e8b7fb434d854e2eff03f3cb03/c.html",
    "sourceTitle": "新华网：兰沟洼高碑店段核心控制性工程",
    "zoneName": "兰沟洼",
    "checkedAt": "2026-07-17"
  },
  "宁晋泊": {
    "estimatedArea": "隆尧县东部—宁晋县南部，重点为北河庄、大曹庄、徐家河、耿庄桥、东汪等乡镇",
    "basis": "宁晋县项目与生态修复规划列明工程涉及乡镇和村庄",
    "confidence": "high",
    "sourceUrl": "https://www.ningjin.gov.cn/single/121/59696.html",
    "sourceTitle": "宁晋泊工程宁晋段临时用地复垦范围",
    "zoneName": "宁晋泊",
    "checkedAt": "2026-07-17"
  },
  "大陆泽": {
    "estimatedArea": "以任泽区骆庄—任城片区为核心，沿北澧河扩展至隆尧、宁晋、巨鹿、平乡、广宗、柏乡、南和等县区",
    "basis": "国家项目报道明确两大蓄滞洪区合计跨8县区49乡镇",
    "confidence": "high",
    "sourceUrl": "https://finance.sina.cn/2022-08-03/detail-imizirav6521125.d.html",
    "sourceTitle": "大陆泽、宁晋泊蓄滞洪区工程范围资料",
    "zoneName": "大陆泽",
    "checkedAt": "2026-07-17"
  },
  "良相坡": {
    "estimatedArea": "淇县西岗镇、北阳镇、朝歌街道至卫辉市北部，淇河、卫河、共产主义渠交汇处",
    "basis": "淇县补偿资料和防洪工程报道明确3乡镇及河流四至",
    "confidence": "high",
    "sourceUrl": "https://www.pdsjjw.gov.cn/sitesources/hbsjcj/page_pc/jcfc/articledcea814429874a35a4d637834db8bdcb.html",
    "sourceTitle": "淇县良相坡蓄滞洪区补偿范围",
    "zoneName": "良相坡",
    "checkedAt": "2026-07-17"
  },
  "长虹渠": {
    "estimatedArea": "浚县—滑县交界的长虹渠沿线，涉及2县4乡镇31村",
    "basis": "",
    "confidence": "none",
    "sourceUrl": "https://ojs.omniscient.sg/index.php/ntec/article/download/44903/43813/",
    "sourceTitle": "长虹渠蓄滞洪区安全设施工程研究",
    "zoneName": "长虹渠",
    "checkedAt": "2026-07-17"
  },
  "柳围坡": {
    "estimatedArea": "卫辉市柳围坡泄洪桥及卫河右岸周边低地",
    "basis": "同名泄洪桥提供工程锚点；未把单一桥位扩充为法定边界",
    "confidence": "medium",
    "sourceUrl": "https://henan.people.com.cn/n2/2024/0107/c351638-40705687.html",
    "sourceTitle": "河南省蓄滞洪区工程资料",
    "zoneName": "柳围坡",
    "checkedAt": "2026-07-17"
  },
  "白寺坡": {
    "estimatedArea": "浚县屯子丘陵—卫河左堤之间，并延伸至滑县道口河西、程文庄、顺北新村、白庄、军庄",
    "basis": "滑县水利局运用预案列明5村和河丘边界",
    "confidence": "high",
    "sourceUrl": "https://guotuju.hnhx.gov.cn/portal/zwgk/zdlyxxgk/slly/webinfo/2024/05/1737893405497823.htm",
    "sourceTitle": "滑县白寺坡蓄滞洪区2024年运用预案",
    "zoneName": "白寺坡",
    "checkedAt": "2026-07-17"
  },
  "大名泛区": {
    "estimatedArea": "邯郸市大名县漳河大名段，核心工程锚点为升斗铺分洪口门",
    "basis": "中国水利报实地查勘记录明确点名漳河大名泛区升斗铺分洪口门",
    "confidence": "high",
    "sourceUrl": "https://www.chinawater.com.cn/newscenter/kx/202307/t20230708_798710.html",
    "sourceTitle": "中国水利报：向着难处攻 奔着问题去",
    "zoneName": "大名泛区",
    "checkedAt": "2026-07-17"
  },
  "恩县洼": {
    "estimatedArea": "德州市武城县四女寺镇周边、恩县洼滞洪区科研与管理基地一带",
    "basis": "武城县政府报道明确科研基地和县级管理，已有同名滞洪区工程锚点",
    "confidence": "high",
    "sourceUrl": "https://mobile.epaper.routeryun.com/index.php/home/article/index/appkey/187/date/2024-06-03/aid/8363088.html",
    "sourceTitle": "武城时报：恩县洼滞洪区科研基地",
    "zoneName": "恩县洼",
    "checkedAt": "2026-07-17"
  },
  "盛庄洼": {
    "estimatedArea": "玉田县东南部林南仓镇周边洼地；工程公开资料尚未给出完整村级边界",
    "basis": "玉田县水利局确认工程归属，结合林南仓低洼片区作中等置信预估",
    "confidence": "medium",
    "sourceUrl": "https://slj.tangshan.gov.cn/shuiwuju/gzdt/20250401/1628730.html",
    "sourceTitle": "唐山市水利局：玉田县盛庄洼蓄滞洪区建设",
    "mapTarget": {
      "name": "盛庄洼·林南仓镇附近预估中心",
      "lng": 117.616523,
      "lat": 39.8350931,
      "radiusKm": 12,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "medium",
      "source": "唐山市水利局：玉田县盛庄洼蓄滞洪区建设",
      "sourceUrl": "https://slj.tangshan.gov.cn/shuiwuju/gzdt/20250401/1628730.html",
      "sourceTitle": "唐山市水利局：玉田县盛庄洼蓄滞洪区建设",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "盛庄洼",
    "checkedAt": "2026-07-17"
  },
  "黄庄洼": {
    "estimatedArea": "宝坻区东南部黄庄镇以南，潮白新河入洼尾闾及黄庄洼退水渠周边",
    "basis": "",
    "confidence": "none",
    "sourceUrl": "https://swj.tj.gov.cn/xwzx_17135/mtjj/202405/t20240508_6619886.html",
    "sourceTitle": "天津市水务局：黄庄洼工程与安全建设",
    "zoneName": "黄庄洼",
    "checkedAt": "2026-07-17"
  },
  "大黄铺洼": {
    "estimatedArea": "规范名称“大黄堡洼”：武清区大黄堡镇21村为核心，向宝坻、宁河相邻片区扩展",
    "basis": "转移报道明确大黄堡镇21村，工程资料给出青龙湾减河与北京排水河边界",
    "confidence": "high",
    "sourceUrl": "https://www.jiemian.com/article/9840773.html",
    "sourceTitle": "大黄堡蓄滞洪区21村转移资料",
    "zoneName": "大黄铺洼",
    "checkedAt": "2026-07-17"
  },
  "三角淀": {
    "estimatedArea": "天津市北辰区双口镇丁平三村一带",
    "basis": "双口镇防汛预案明确丁平三村处在三角淀分洪区",
    "confidence": "high",
    "sourceUrl": "https://www.tjbc.gov.cn/zwgk/zfxxgk/xxgk_zjyq/zjyq_xxgk_skz/xxgk_fdzdgk_skz/xxgk_zdmsxx_skz/xxgk_jz_skz/202302/P020230221540637976752.pdf",
    "sourceTitle": "北辰区双口镇防汛预案",
    "zoneName": "三角淀",
    "checkedAt": "2026-07-17"
  },
  "小滩坡": {
    "estimatedArea": "浚县小河镇—内黄县交界，卫河与浚内沟之间",
    "basis": "河南省洪水风险图项目明确跨浚县、内黄县及涉及河流",
    "confidence": "high",
    "sourceUrl": "https://kaifeng.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2024/10/21/f18625889f174dbc93e3303b89746f19.pdf",
    "sourceTitle": "河南省洪水风险图编制项目范围",
    "mapTarget": {
      "name": "小滩坡·浚县小河镇附近",
      "lng": 114.4264464,
      "lat": 35.5948576,
      "radiusKm": 12,
      "coordinateSystem": "WGS84",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "河南省洪水风险图编制项目范围",
      "sourceUrl": "https://kaifeng.zfcg.henan.gov.cn/cmsweb81e27e/henan/rootfiles/2024/10/21/f18625889f174dbc93e3303b89746f19.pdf",
      "sourceTitle": "河南省洪水风险图编制项目范围",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "小滩坡",
    "checkedAt": "2026-07-17"
  },
  "任固坡": {
    "estimatedArea": "汤阴县任固镇—内黄县西部，并含安阳县东南相邻工程段",
    "basis": "河南风险图项目与安阳县环评共同确认跨县范围；纠正原项目仅写安阳县",
    "confidence": "high",
    "sourceUrl": "https://www.ayx.gov.cn/2024/12-18/3333857.html",
    "sourceTitle": "安阳县广润坡、任固坡工程环评公示",
    "zoneName": "任固坡",
    "checkedAt": "2026-07-17"
  },
  "广润坡": {
    "estimatedArea": "安阳县白璧、高庄、瓦店、辛村4乡镇为核心，并跨文峰区、汤阴县、内黄县；重点在汪流屯—王贵庄—四伏厂",
    "basis": "政协提案和县水利工情公示明确4乡镇、52村及洪河流向",
    "confidence": "high",
    "sourceUrl": "https://ay.hnzx.gov.cn/2024/12-24/4346716.html",
    "sourceTitle": "安阳市政协：提升广润坡蓄滞洪区防洪标准提案",
    "zoneName": "广润坡",
    "checkedAt": "2026-07-17"
  },
  "团泊洼": {
    "estimatedArea": "天津市静海区团泊洼水库及周边低地，预估中心取团泊湖；蓄滞洪保留区的法定外缘仍待主管部门空间数据核验",
    "basis": "天津市水务局确认团泊洼水库和全市蓄滞洪体系，静海区官方规划给出水库片区范围；据此仅作中等置信中心预估",
    "confidence": "medium",
    "sourceUrl": "https://www.tjjh.gov.cn/jhqzf/zwgk_28985/zcwj/jhqzcwj/qzfzcwj/202207/W020220729336783909933.pdf",
    "sourceTitle": "天津市静海区水土保持规划：团泊洼水库片区",
    "mapTarget": {
      "name": "团泊洼·团泊湖预估中心",
      "lng": 117.095599,
      "lat": 38.910664,
      "radiusKm": 14,
      "coordinateSystem": "GCJ-02",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "medium",
      "source": "天津市静海区水土保持规划：团泊洼水库片区",
      "sourceUrl": "https://www.tjjh.gov.cn/jhqzf/zwgk_28985/zcwj/jhqzcwj/qzfzcwj/202207/W020220729336783909933.pdf",
      "sourceTitle": "天津市静海区水土保持规划：团泊洼水库片区",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "团泊洼",
    "checkedAt": "2026-07-17"
  },
  "永年洼": {
    "estimatedArea": "邯郸市永年区广府镇、永年洼国家湿地公园及滏阳河扇形低地",
    "basis": "水利项目与湿地管理范围共同指向广府古城周边永年洼",
    "confidence": "high",
    "sourceUrl": "https://cn.chinadaily.com.cn/a/202511/25/WS692572b9a310942cc499352e.html",
    "sourceTitle": "中国日报：永年洼蓄滞洪区治理工程竣工",
    "zoneName": "永年洼",
    "checkedAt": "2026-07-17"
  },
  "崔家桥": {
    "estimatedArea": "安阳县崔家桥镇—永和镇，曹马/郭盆分洪口至高村、王家口退水闸一带",
    "basis": "县水利工情公示列出2处分洪口和2处退水闸所在村镇",
    "confidence": "high",
    "sourceUrl": "https://www.ayx.gov.cn/2025/06-19/3529242.html",
    "sourceTitle": "安阳县水利工程工情信息公示",
    "zoneName": "崔家桥",
    "checkedAt": "2026-07-17"
  },
  "胖头泡": {
    "estimatedArea": "大庆市肇源县西部/西北部嫩江、松花江左岸，向大同区和杜尔伯特相邻片区延伸；老龙口—新站镇为核心",
    "basis": "生态环境部批复和中国水利报道明确河岸、面积、县区与乡镇数量",
    "confidence": "high",
    "sourceUrl": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201411/t20141119_291694.htm",
    "sourceTitle": "生态环境部：胖头泡蓄滞洪区工程批复",
    "mapTarget": {
      "name": "胖头泡蓄滞洪区预估中心",
      "lng": 124.269119,
      "lat": 45.631598,
      "radiusKm": 45,
      "coordinateSystem": "GCJ-02",
      "method": "web-research-estimate",
      "estimationType": "web-research",
      "confidence": "high",
      "source": "生态环境部：胖头泡蓄滞洪区工程批复",
      "sourceUrl": "https://www.mee.gov.cn/gkml/sthjbgw/spwj1/201411/t20141119_291694.htm",
      "sourceTitle": "生态环境部：胖头泡蓄滞洪区工程批复",
      "checkedAt": "2026-07-17"
    },
    "zoneName": "胖头泡",
    "checkedAt": "2026-07-17"
  }
};
  Object.entries(estimates).forEach(([zoneName, estimate]) => {
    estimate.zoneName = zoneName;
    if (estimate.mapTarget) {
      estimate.mapTarget.method = "web-research-estimate";
      estimate.mapTarget.estimationType = "web-research";
      estimate.mapTarget.confidence = estimate.confidence;
      estimate.mapTarget.source = estimate.sourceTitle;
      estimate.mapTarget.sourceUrl = estimate.sourceUrl;
      estimate.mapTarget.sourceTitle = estimate.sourceTitle;
      estimate.mapTarget.checkedAt = estimate.checkedAt;
    }
  });
  window.FLOOD_STORAGE_D_LOCATION_ESTIMATES = Object.freeze({
    ...{
  "generatedAt": "2026-07-17T12:00:00+08:00"
},
    zones: Object.freeze(estimates)
  });
})();
