module.exports = {

    theme: 'vdoing', // 使用依赖包主题
  
    title: "craboss-blog",
    description: '一个致力于分享 计算机理论知识&实践 的博客网站',
    // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  
    head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
        ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
        // ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
        // ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ],

    // 主题配置
    themeConfig: {
      nav: [
        { text: '指南', link: '/pages/a00001/' },
        { text: '资源', link: '/pages/db78e2/' },
        { text: '案例', link: '/pages/5d571c/' },
        { text: '问答', link: '/pages/9cc27d/' },
      ],

      sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题)

      logo: '/img/logo.png', // 导航栏logo
      repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
      searchMaxSuggestions: 10, // 搜索结果显示最大数
      lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

      sidebar: { mode: 'structuring', collapsable: false } // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    }
  }