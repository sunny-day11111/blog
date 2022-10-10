const themeConfig = require("./themeConfig")
module.exports = {
  base: '/myblog/',
  title: 'comp-vuepress',
  description: 'fighting!!!',
  keywords: "关键字", // 关键字
  theme: 'reco',
  
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/home.gif",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],

  themeConfig: themeConfig

}