# 参与贡献

## 本地运行

安装 Node.js 24 或更高版本，然后在仓库根目录运行：

```sh
npm ci
npm run docs:dev
```

打开终端显示的本地地址，即可预览网站。修改 Markdown 后，页面会自动更新。

## 添加分享

1. 在 `docs/shares/` 中新建 Markdown 文件，例如 `my-topic.md`。
2. 在分享目录 `docs/shares/index.md` 中添加链接，例如 `[我的分享](./my-topic.md)`。
3. 在 `docs/.vitepress/config.mts` 的侧边栏中同步添加文章入口。
4. 运行 `npm run docs:build`，检查是否存在构建错误或无效链接。
5. 提交 Pull Request，合并到 `main` 后由 GitHub Actions 自动构建。

## 预览构建结果

```sh
npm run docs:build
npm run docs:preview
```

生产预览使用 `/share-2026/` 路径，请打开终端显示的完整地址。
