# Crystal 多语言用户手册

基于 Astro + Starlight，为司机与调度人员提供系统使用说明。当前仅完成司机手册章节框架，实际步骤、截图和注意事项待完善；调度手册仅预留入口。

## 语言与目录

| 语言 | 内容位置 | 访问路径 |
| --- | --- | --- |
| 简体中文（默认） | [src/content/docs/](./src/content/docs/) 根目录 | `/` |
| English | [src/content/docs/en/](./src/content/docs/en/) | `/en/` |
| ไทย | [src/content/docs/th/](./src/content/docs/th/) | `/th/` |
| Tiếng Việt | [src/content/docs/vi/](./src/content/docs/vi/) | `/vi/` |

每种语言使用相同的章节相对路径，以支持切换语言时保留当前章节：

| 相对路径 | 章节 |
| --- | --- |
| `index.md` 或 `index.mdx` | 用户手册首页 |
| `drivers/index.md` | 手册概览 |
| `drivers/installation.md` | 安装与权限 |
| `drivers/account.md` | 登录与账号 |
| `drivers/tasks.md` | 运输任务 |
| `drivers/tracking.md` | 定位与在途 |
| `drivers/help.md` | 异常与帮助 |
| `dispatchers/index.md` | 调度手册（筹备中） |

语言、站点标题和侧栏顺序在 [astro.config.mjs](./astro.config.mjs) 中统一配置。越南语使用标准语言代码 `vi`，中文页面的语言标记为 `zh-CN`。原示例地址 `/guides/example/` 和 `/reference/example/` 分别重定向至司机概览和帮助章节。

## 内容维护

1. 先根据实际司机端核实流程，再补充中文章节；不要将规划中的功能写成既有功能。
2. 每个操作说明应包含适用条件、实际按钮名称、操作步骤、结果确认、截图和异常处理。
3. 同步更新英文、泰语、越南语的对应文件，保持章节路径一致；未完成的内容保留本语言的“待完善”提示。
4. 在界面、应用版本、支持设备和联系方式核实前，不发布推测性操作说明。译文发布前应由熟悉业务的对应语言人员校对。
5. 新增章节时，在四种语言中建立对应页面，并更新配置中的侧栏和各语言的首页、概览目录。Starlight 对缺少译文的页面可回退到默认中文，但不应将回退内容视作已完成翻译。

## 图片存放规范

手册截图统一放在 [src/assets/manuals/](./src/assets/manuals/)，采用 `<角色>/<语言>/<章节>/<图片名>` 结构，与正文分开管理，由 Astro 在引用时处理和优化。

当前图片目录：

```text
src/assets/manuals/
└── drivers/
    ├── zh-cn/
    │   └── installation/
    │       └── app-installation.jpg
    └── en/
        └── installation/
            ├── app-installation.jpg
            ├── app-permissions.jpg
            └── app-battery-settings.jpg
```

### 目录与命名

- **角色**：`drivers`（司机）、`dispatchers`（调度）。调度截图有实际素材时再建目录。
- **语言**：`zh-cn`、`en`、`th`、`vi`，不要使用 `cn` 或 `vn`。中文正文虽然位于默认根目录，截图仍明确归入 `zh-cn`。泰语、越南语目录按需创建，不放空白占位图片。
- **章节**：与正文路径一致，例如 `installation`、`account`、`tasks`、`tracking`、`help`。
- **文件名**：使用小写英文与连字符，描述画面内容，例如 `app-permissions.jpg`；不重复语言和角色。相同画面的不同语言版本使用相同文件名。
- **步骤与平台**：仅在需要区分时加入，例如 `task-details-01.jpg`、`app-permissions-android.jpg`，不使用含义不明的 `image1`、`new`、`final`。
- **格式**：JPEG 图片统一使用 `.jpg` 扩展名；PNG、WebP 保留原格式。现有 `.jpeg`、`.jfif` 已确认是 JPEG，仅改名、未转码或压缩。
- **隐私**：发布前遮挡账号、电话、车牌、位置及业务敏感信息。不要仅因图片已归档就视为内容已审核。

原文档目录下的四张截图已迁移到上述目录；旧空目录已移除。截图仍未插入正式说明，需确认画面与实际步骤后再引用。

### 在正文中引用

从中文的 [安装与权限](./src/content/docs/drivers/installation.md) 引用：

```md
![司机端应用安装界面](../../../assets/manuals/drivers/zh-cn/installation/app-installation.jpg)
```

从英文的 [Installation and permissions](./src/content/docs/en/drivers/installation.md) 引用：

```md
![Driver app installation screen](../../../../assets/manuals/drivers/en/installation/app-installation.jpg)
```

以上是引用示例，尚未插入页面。图片替代文本应使用正文语言，说明画面用途；不要用 `/src/assets/...` 作为浏览器 URL。MDX 同样可以使用上述 Markdown 图片语法。

仅用于站点图标或必须保持原样、固定公开 URL 的资源放入 [public/](./public/)，手册截图不放在这里。各语言优先引用对应语言截图，缺少时保留“待补截图”说明，不悄悄使用其他语言图片。

## 本地开发与构建

需要满足当前 Astro 依赖要求的 Node.js 版本（`>=22.23.4`）。首次使用运行 `pnpm install` 安装依赖。

| 命令 | 用途 |
| --- | --- |
| `pnpm astro dev --background` | 后台启动开发服务，默认地址 `http://localhost:4321` |
| `pnpm astro dev status` | 查看开发服务状态 |
| `pnpm astro dev logs` | 查看开发日志 |
| `pnpm astro dev stop` | 停止开发服务 |
| `pnpm build` | 构建生产站点至 `dist/`，验证内容配置与页面生成 |

提交前运行 `pnpm build`，并检查四种语言的首页、侧栏、同章节语言切换和站内链接。

## 打印文章 / 保存为 PDF

文章标题下方提供对应语言的“打印 / 保存为 PDF”按钮，调用浏览器原生打印窗口，不使用第三方 PDF 服务，也不会自动下载文件。按钮会等待页面字体和正文图片加载；准备失败时显示错误提示。关闭 JavaScript 时，可使用浏览器菜单或 `Ctrl+P`（macOS 为 `Cmd+P`）打印。

1. 打开需要导出的单篇文章，点击打印按钮。
2. 在打印窗口中选择“另存为 PDF”或系统 PDF 打印机。
3. 建议使用 A4、纵向、默认缩放；关闭浏览器“页眉和页脚”，避免附加网址和日期。需要保留提示框底色时启用“背景图形”。
4. 确认预览中的标题、正文、图片和语言字符无缺失后保存。长文章会自然分页为一个多页 PDF 文件。

打印规则通过 [src/styles/print.css](./src/styles/print.css) 在 Starlight 内置打印样式上扩展：隐藏站点导航、目录、页脚和按钮，使用浅色背景、A4 页边距，处理标题分页、表格换行和图片缩放。正常屏幕阅读仍使用原有主题；按钮由 [src/components/ArticlePageTitle.astro](./src/components/ArticlePageTitle.astro) 扩展默认标题组件。

打印字体使用本机字体回退，不下载或打包字体。中文优先 Noto Sans CJK SC / Noto Sans SC，其次微软雅黑或苹方；泰语优先 Noto Sans Thai，其次 Leelawadee UI 或 Tahoma；英文和越南语优先 Noto Sans，其次 Segoe UI 或 Arial。因此不同电脑的换行和分页可能不同。等待字体加载不等于检查字符覆盖；导出前须检查中文、泰文上下附标和越南文音标，尤其是在 Linux 上。缺字时安装相应 Noto 字体后重新打开页面打印。浏览器通常会嵌入所用字体的子集，但仍应在另一台电脑上检查 PDF 的显示及文字复制；需要验证嵌入时可使用 `pdffonts`。如后续要求不同设备输出完全一致，再引入经许可、自托管的固定版本字体。

参考：[Starlight 多语言指南](https://starlight.astro.build/guides/i18n/) · [Astro 内容集合](https://docs.astro.build/en/guides/content-collections/)。
