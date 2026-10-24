import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'IO Club · Share 2026',
  description: 'IO Club 2026 年分享与学习记录',
  base: '/share-2026/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '分享', link: '/shares/' },
      { text: '参与贡献', link: '/guide/contributing' }
    ],
    sidebar: [
      {
        text: '分享内容',
        items: [
          { text: '分享目录', link: '/shares/' },
          { text: '很酷，不搞编译器', link: '/shares/too_cool_to_do_compilers' }
        ]
      },
      { text: '参与项目', items: [{ text: '参与贡献', link: '/guide/contributing' }] }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/io-club/share-2026' }],
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/io-club/share-2026/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: { text: '最后更新于' },
    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '本页目录' }
  }
})
