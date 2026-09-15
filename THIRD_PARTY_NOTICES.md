# 第三方资料与授权说明

Required Notice: Copyright © 2026 lazyq666.

## 项目原创代码

本项目中由项目维护者原创并有权许可的源代码，依照 [PolyForm Noncommercial License 1.0.0](./LICENSE) 提供。该许可证允许为非商业目的使用、修改和分发代码，但不允许商业使用。

## 地图数据与参考资料

`data/` 中的数据由项目维护者根据公开网络资料整理，其中每条记录尽可能保留了来源网址、资料名称、推定方法和不确定性说明。原始网页、政府文件、论文、地图数据和其他第三方内容的权利仍归各自权利人所有，不因收录来源链接而自动改用本项目许可证。资料链接仅用于追溯，不表示项目已取得原文的再分发权，也不保证链接内容持续可用。

部分位置线索或几何数据来自 OpenStreetMap。OpenStreetMap 数据依据 ODbL 1.0 提供，使用时应保留“© OpenStreetMap contributors”署名，并遵守其数据库许可要求：<https://www.openstreetmap.org/copyright>。

仓库包含项目整理阶段保存的高德地物候选、D 级位置缓存，以及使用这些定位线索辅助配准的推定范围。它们用于公益地图的位置理解与资料追溯，不代表高德或主管部门对范围的确认，也不因收录在本仓库而自动适用项目的 PolyForm 许可证。复用、公开分发或商业使用前，接收者仍应自行核对高德开放平台条款及相关权利限制。

## 图片与视觉素材

2026-09-14，项目移除了以下三张来源于网络检索、无法证明再分发权的 PNG：

- `assets/about-flood-zone-infographic.png`
- `assets/bg_deail.png`
- `assets/zone-row-selected.png`

品牌标识现以 `assets/logo.svg` 提供。对外再分发前，项目维护者仍应确认其权利来源和授权范围。

其余替代视觉专为本项目以 `index.html` 中的内联 SVG 与 `styles.css` 中的 CSS 渐变、线条和排版重新制作，没有复制上述三张 PNG 文件。根目录 `logo.svg` 也是项目代码内的简单矢量图形。上述代码原生视觉与项目原创代码采用相同的 PolyForm Noncommercial 1.0.0 许可。

## 第三方在线服务

站点可使用高德地图 JavaScript API。高德地图底图、即时检索结果及相关服务受高德开放平台条款约束，不属于本项目许可证授权范围。生产构建通过同域 Cloudflare Pages Function 转发高德服务请求，避免把 `securityJsCode` 明文写入页面；代理只允许项目当前所需的少量 GET/HEAD 路径且不跟随上游重定向。部署者仍须设置 Key 的域名白名单、额度与告警，并在修复版部署后轮换此前由旧代理使用过的安全码。

项目默认不直接调用 OpenStreetMap 基金会的公共 Nominatim 或公共 Overpass 实例。若部署者配置自有代理或有权使用的服务端点，应自行落实服务许可、限流、缓存、隐私告知与署名要求。
