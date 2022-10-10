module.exports = {
  type: 'blog',
  author: "nicePerson",
  logo: "/miao.jpg",
  authorAvatar: '/miao.jpg',
  
  // 密钥
  // keyPage: {
  //   keys: ["8EE0114BCFCB0844EC22422C5BB5DBDC"], // 1.3.0 版本后需要设置为密文
  //   color: "#42b983", // 登录页动画球的颜色
  //   lineColor: "#42b983", // 登录页动画线的颜色
  // },
  // 移动端优化
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
   // 博客配置
   blogConfig: {
    category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认文案 “分类”
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: '标签'      // 默认文案 “标签”
    },
    socialLinks: [     // 信息栏展示社交信息
      { icon: 'reco-github', link: 'https://github.com/recoluan' },
      { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
    ]
  },
  subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容

  nav: [
    // 一级导航
    { text: '首页', link: '/',icon:'reco-home' },
    // { text: '指南', link: '/guide/' },
    // 只有Front Matter中设置了 categories 与 title，且没有设置 publush === false 和 home: true 的文章才会在时间轴中显示。
    { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },//时间轴
    // 下拉列表导航
    {
      text: '了解更多',
      items: [
        { text: 'github', link: 'https://github.com/ShuQingX/vue-comp-test', target: '_blank' },
        { text: 'preview', link: 'https://shuqingx.github.io/vue-comp-test/', target: '_blank' }
      ],
      icon:'reco-other'
    }
  ],
  // 禁用导航，与上面的配置是互斥行为。
  // navbar: false
  sidebar: {
    '/guide/': [
      {
        title: '组件',
        collapsable: false,
        children: [
          ['../guide/Button.md', 'Button'],
          ['../guide/Card.md', 'Card']
        ]
      },
    ],
  },
  // 友情链接
  friendLink: [
    {
      title: 'vuepress-theme-reco',
      desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      link: 'https://vuepress-theme-reco.recoluan.com'
    },
    {
      title: '午后南杂',
      desc: 'Enjoy when you can, and endure when you must.',
      email: 'recoluan@qq.com',
      link: 'https://www.recoluan.com'
    },
  ],
   // 备案
   record: 'ICP 备案文案',
   recordLink: 'ICP 备案指向链接',
   cyberSecurityRecord: '公安部备案文案',
   cyberSecurityLink: '公安部备案指向链接',
   // 项目开始时间，只填写年份
   startYear: '2017'
}