# 第三方资料与授权说明

Required Notice: Copyright © 2026 lazyq666.

## 项目原创代码

本项目中由项目维护者原创并有权许可的源代码，依照 [PolyForm Noncommercial License 1.0.0](./LICENSE) 提供。该许可证允许为非商业目的使用、修改和分发代码，但不允许商业使用。

## 地图数据与参考资料

`data/` 中的数据由项目维护者根据公开网络资料整理，其中每条记录尽可能保留了来源网址、资料名称、推定方法和不确定性说明。原始网页、政府文件、论文、地图数据和其他第三方内容的权利仍归各自权利人所有，不因收录来源链接而自动改用本项目许可证。

部分位置线索或几何数据来自 OpenStreetMap。OpenStreetMap 数据依据 ODbL 1.0 提供，使用时应保留“© OpenStreetMap contributors”署名，并遵守其数据库许可要求：<https://www.openstreetmap.org/copyright>。

## 图片与视觉素材

`assets/` 中的图片来自网络检索或外部参考。当前仓库没有完整记录每张图片的作者、原始网址和再分发许可，因此这些图片不在本项目授予的 PolyForm Noncommercial 许可范围内。除非适用法律允许，接收者不得仅凭本项目许可证复制或再分发这些图片。

当前待核验文件：

- `assets/about-flood-zone-infographic.png`
- `assets/bg_deail.png`
- `assets/logo.png`
- `assets/zone-row-selected.png`

公开发布前，维护者应为每张图片补充可核验的来源与许可，取得权利人授权，或替换为原创、公共领域或许可兼容的素材。仅注明“来源于网络”或“仅供公益使用”通常不等同于获得复制和再分发许可。

## 第三方在线服务

站点可使用高德地图 JavaScript API。高德地图底图、检索结果及相关服务受高德开放平台条款约束，不属于本项目许可证授权范围。生产构建通过同域 Cloudflare Pages Function 转发高德服务请求，避免把 `securityJsCode` 明文写入页面；部署者仍须设置 Key 的域名白名单、额度与告警。

项目默认不直接调用 OpenStreetMap 基金会的公共 Nominatim 或公共 Overpass 实例。若部署者配置自有代理或有权使用的服务端点，应自行落实服务许可、限流、缓存、隐私告知与署名要求。
