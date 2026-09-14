# 全国蓄滞洪区地图

全国蓄滞洪区地图的页面、图片和地图数据。仓库已清理旧历史，从运行文件快照重新开始维护。

页面代码、图片和地图数据合计约 6.6 MB。无需安装 npm 依赖，也无需构建（将源代码转换为发布文件）。

## 本地启动

macOS 启动脚本需要 Python 3，用于提供本地网页服务。

1. 将 `data/map-config.example.js` 复制为 `data/map-config.js`；已有配置时跳过复制。
2. 编辑 `data/map-config.js`，在 `key` 和 `securityJsCode` 的引号内填写高德地图 Web 端（JS API）的 Key 和安全码。
3. 双击 `启动地图.command`。
4. 在浏览器打开 http://127.0.0.1:8000 。

停止服务：在启动窗口按 Control + C。若提示端口已占用，先关闭之前启动的服务。

未填写地图配置时，页面会提示「需要配置高德地图 Key」。地图及在线查询需要网络连接；此副本不是离线地图。若配置后地图仍加载失败，检查页面提示中的 Key、安全码、域名白名单和网络连接。

## 文件用途

- `index.html`：页面入口。
- 根目录的 `.js` 和 `.css`：交互逻辑与视觉样式。
- `assets/`：页面使用的图片。
- `data/`：地图数据与本地高德配置。

## Cloudflare Pages 部署

通过 Git 集成导入本仓库，生产分支选择 `main`，框架选择 `None`。使用以下构建设置：

- 根目录：`./`。
- 安装命令：`node --version`（无需安装依赖）。
- 构建命令：`node scripts/build.mjs`。
- 输出目录：`dist`。
- 环境变量 `AMAP_KEY`：填写高德 Web 端 Key。该值会随网页下发，不应当作服务端密钥。
- 加密 Secret `AMAP_SECURITY_JS_CODE`：填写高德安全码。安全码仅由 `functions/_AMapService/` 下的 Cloudflare Pages Function 在服务端读取，不会写入发布页面。
- 可选环境变量：`AMAP_SERVICE_HOST`，默认值为同域路径 `/_AMapService`，通常无需设置。

可选环境变量 `OSM_NOMINATIM_ENDPOINT` 和 `OSM_OVERPASS_ENDPOINT` 仅用于接入部署者自有的代理或已获授权的兼容服务。默认留空时，站点不会直接请求 OSM 基金会的公共 Nominatim 或公共 Overpass 实例；地点搜索仍使用高德，已有地图数据和推定范围不受影响。

构建脚本只发布页面资源，并从环境变量生成不含安全码的浏览器配置；缺少 `AMAP_KEY` 时会停止构建。`dist/_routes.json` 仅让 `/_AMapService/*` 请求触发 Function，其他静态资源不计入 Functions 调用。Git 仓库中不保存密钥。部署后，在高德配置中核对网站域名白名单，并确认访问 `/_AMapService/` 时由 Pages Function 响应。后续推送到 `main` 会由关联的 Cloudflare Pages 项目自动部署。

Cloudflare 控制台路径：`Workers & Pages → 项目 → Settings → Variables and Secrets`。把 `AMAP_SECURITY_JS_CODE` 保存为加密 Secret，并为 Production 和需要的 Preview 环境分别配置。Pages Functions 需要 Git 集成或 Wrangler 部署；Cloudflare Pages 的仪表盘 Direct Upload 不支持 Functions。

已克隆精简版仓库的目录可正常使用 Git 提交和同步。仍保留清理前历史的旧副本应重新克隆，避免把旧历史合并回远程。不要将填写后的 `data/map-config.js` 提交到仓库，现有 `.gitignore` 已排除此文件。

## 许可证与第三方资料

项目维护者原创且有权许可的代码采用 [PolyForm Noncommercial License 1.0.0](./LICENSE)：允许非商业使用、修改和分发，不允许商业使用。该许可证属于 source-available（源代码可用）许可证，不是 OSI 认可的开源许可证。

网络资料、地图数据、高德服务及 `assets/` 中尚未完成权属核验的图片不自动适用上述代码许可证。公开或再分发前请阅读 [第三方资料与授权说明](./THIRD_PARTY_NOTICES.md)。
