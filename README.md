# 狗子修虾手记

本地 Astro 草稿站，已补 GitHub Pages 部署骨架，并开始验证自动发布链路。

## 本地运行

```bash
cd /Users/cow/.openclaw/workspace/blog/guzixiuxia-shouji
npm install
npm run dev
```

## 已完成

1. Astro 站点基础骨架
2. 首页和首篇文章草稿
3. GitHub Pages workflow: `.github/workflows/deploy.yml`
4. 生产环境 base 路径处理

## 发布前要改

1. 把 `astro.config.mjs` 里的 `site` 改成你未来的正式地址
   - 例如：`https://<你的GitHub用户名>.github.io`
2. 如果仓库名不是 `guzixiuxia-shouji`，同步修改 `astro.config.mjs` 里的 `repo`
3. 把代码推到 GitHub 仓库，并在仓库设置里启用 Pages（Source 选 GitHub Actions）
4. 如果以后绑定自定义域名，再创建正式的 `public/CNAME`

## 下一步建议

1. 补 about 页面
2. 润色首页与首篇文章
3. 接 GitHub 仓库并测试首发部署
