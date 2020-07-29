module.exports = {
  title: "James's Blog",
  description: "",
  base: "/jamesBlog/",
  repo: "https://github.com/a9261020/jamesBlog",
  dest: "dist",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    vssueConfig: {
      platform: "github",
      owner: "a9261020",
      repo: "jamesBlog",
      clientId: "c0c7421d06a1607b1b39",
      clientSecret: "6eda094eea6baa19da4a8e61680971e0d3995bbc",
    },
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "Series",
        icon: "reco-message",
        items: [
          { text: "JavaScript30", link: "/Series/JavaScript30/" },
          { text: "金魚腦", link: "/Series/金魚腦/" },
        ],
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/blogs/": ["打包工具-Gulp", "CSS-文字換行、空白換行"],
      "/Series/JavaScript30/": ["01 Drum Kit"],
      "/Series/金魚腦/": [
        "01-圖文滿版區塊",
        "02-互動圖文卡片",
        "03-人員介紹卡片",
        "04-交錯漂浮版",
        "05-超通用橫式版面",
        "06-網頁頁尾版塊",
        "07-導覽列",
        "08-網站麵包屑",
        "09-導覽列變化",
        "10-方塊酥版面",
        "11-破格式設計",
        "12-表格怎麼切",
        "13-側邊選單怎麼切",
        "14-多層次收合選單",
        "15-收合式側邊選單",
        "16-訂單進度條",
        "17-登入表單",
        "18-訊息對話紀錄",
        "19-時間軸",
        "20-旋轉拼接方塊",
        "21-不規則邊緣",
        "22-文字排版",
        "23-快速版面拼拼樂",
      ],
    },
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认 “标签”
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "James",
    // 作者头像
    authorAvatar: "/avatar.png",
    // 备案号
    record: "Github",
    recordLink: "https://github.com/a9261020",
    // 项目开始时间
    startYear: "2020",
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
  },
};
