# 发布 GitHub 主页与 Pages

本包包含可以直接上传的完整版本。尚未通过当前 GitHub 连接提交或发布。

## 一个仓库，两种展示

目标仓库：`GeeMakerLee/GeeMakerLee`，设为 **Public**。

- 根目录 `README.md` 显示在 `github.com/GeeMakerLee` 的个人主页。
- `docs/` 是完整中英文静态网站。Pages 开启后地址为 `https://geemakerlee.github.io/GeeMakerLee/`。
- 四张流程图在 `docs/assets/diagrams/`，GitHub README 和网站复用同一套图。
- 四篇项目详解在 `docs/projects/`，GitHub 直接渲染 Markdown。

这套展示内容不包含投递记录、私人面试复盘或原始简历 PDF。

## 本地预览

解压后直接打开 `docs/index.html`。页面不需要安装 Node、配置 API key 或访问外部字体与 CDN。

中文为默认语言；顶部 `EN` 切换英文。项目区可切换工程 / 产品视角。点击流程图可看全图，项目详情可展开。

也可以在项目根目录运行 `python -m http.server 8000`，打开 `http://localhost:8000/docs/`。

## 发布方式

1. 如果已有同名仓库，先读取现有内容并合并；不要覆盖无关文件。否则在自己的账号下创建名为 `GeeMakerLee` 的公开仓库。
2. 将包内文件放到仓库根目录，使 `README.md` 和 `docs/` 处于同一层。不要把外层 `GeeMakerLee/` 再上传为一个子目录。
3. 提交到 `main` 分支。
4. 仓库 **Settings → Pages → Build and deployment**：Source 选择 **Deploy from a branch**，Branch 选择 **main**，Folder 选择 **/docs**，保存。
5. 等待部署完成，并在 Pages 页面确认实际网站地址。`README.md` 已预设上述项目网站链接。

如果手动从 GitHub 网页上传，请使用 **Add file → Upload files**；先解压，再上传文件和文件夹，不要只上传 ZIP。

GitHub 连接要能访问 `GeeMakerLee/GeeMakerLee` 才能代为提交。仓库创建和 Pages 配置还需要相应账号权限。当前未读取到该账号下的可访问仓库，不能据此断定仓库不存在。

## 后续补截图

见 `docs/assets/screenshots/README.md`。将真实截图放入对应目录，再修改 `docs/media.js` 即可；页面默认不显示空白截图或虚构界面。

## 更新文字或流程图

1. 修改 `scripts/projects.json` 中的中英文内容。
2. 修改 `scripts/diagrams.mjs` 中的流程图布局。
3. 运行 `node scripts/build.mjs`。
4. 提交变更。GitHub 个人主页与 Pages 共用这些输出。

构建脚本只使用 Node.js 内置模块。会重建 `README.md`、`docs/index.html`、项目详解与 SVG；不会改动 `docs/media.js` 或截图。手工添加到生成文件的内容，请先保留到源数据或在重建后重新加入。

## 给 HR 的链接

发布成功后优先使用 GitHub 主页或 Pages 项目链接。

- 中文：`https://geemakerlee.github.io/GeeMakerLee/`
- 英文：`https://geemakerlee.github.io/GeeMakerLee/?lang=en`
- 产品视角：`https://geemakerlee.github.io/GeeMakerLee/?view=product`
- 单个项目：在网站地址后加 `#story2game`、`#ai-market`、`#social-twin` 或 `#rule-builder`。

本包资源均可本地加载；GitHub 在中国大陆不同网络下的访问情况仍可能不同，不能承诺所有 HR 的网络都能稳定打开。网站也能原样部署到其他静态托管，所有站内资源使用相对路径。

官方说明：

- [GitHub Profile README](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)
- [GitHub Pages 发布源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

