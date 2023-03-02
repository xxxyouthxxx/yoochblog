const path = require('path')
const pinyin = require('chinese-to-pinyin')
const figlet = require('figlet')

const sidebar = require('./sidebar')
const headLink = require('./headLink')
const configureWebpack = require('./webpack.config.js')
const { chainMarkdown, extendMarkdown } = require('./extendMarkdown')

const isDEV = process.env.NODE_ENV === 'development'


const HOST = ''
// const HOST = 'https://mgear-blogs.obs-website.cn-east-3.myhuaweicloud.com'

console.log(figlet.textSync("Welcome!"))

module.exports = {
  /** develop config */

  base: '/',
  dest: './dist',

  /** page config */

  title: 'YoochBlog',
  description:
    'Yooch Blog 是Yooch的个人专栏。其中有技术文章和一些个人动态。',
  keywords: 'Yooxh,pixel,像素,开发,前端,游戏，开发进度',
  robots: 'index,archive',
  author: 'YOOCH',
  copyright: '转载请标明来源',
  head: headLink,

  shouldPrefetch: false,

  /** theme config */

  theme: path.join(__dirname, './components/Theme/Enhance'),
  themeConfig: {
    lastUpdated: '本文最后更新于',
    smoothScroll: true,
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/articles/' },
      { text: 'Links', link: '/friends/' }
    ].concat(isDEV ? [
      { text: 'Maps', link: '/maps/' },
      { text: 'HireMe', link: '/hire-me/' },
    ] : []),
    sidebar: {
      '/': sidebar.getSidebar(),
      // '/flows/': sidebar.getSidebar(),
      // '/articles/': sidebar.getSidebar(),
      // '/awesome/': sidebar.getSidebar(),
      // '/gists/': sidebar.getSidebar(),
      // '/music/': sidebar.getSidebar(),
      // '/secrets/': sidebar.getSidebar(),
      '/ideas/': [],
      '/friends/': []
    },
    nextLinks: false,
    prevLinks: false
  },
  locales: {
    '/': {
      lang: 'zh-cmn-Hans'
    }
  },

  /** markdown config */

  markdown: {
    anchor: {
      permalink: false
    },
    toc: false,
    extendMarkdown
  },
  chainMarkdown,

  /** plugins */

  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        // TODO dayjs
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).format('MMMM DD YYYY HH:mm')
      }
    },
    'named-chunks': {
      pageChunkName: page => {
        const defaultName = page.key.slice(1)
        const pinyinName = pinyin(page.title || defaultName, { removeTone: true }).replace(/[^a-zA-Z0-9]/g, '')
        return pinyinName
      },
      layoutChunkName: layout => `layout-${layout.componentName}`
    },
    'vuepress-plugin-medium-zoom': {
      selector:
        '.theme-default-content > img,' +
        '.theme-default-content > p > img,' +
        '.theme-default-content > ul > li > img,' +
        '.theme-default-content > ol > li > img,' +
        '.theme-default-content > figure > img,' +
        '.theme-default-content > p > figure > img,' +
        '.theme-default-content > ul > li > figure > img,' +
        '.theme-default-content > ol > li > figure > img',
      delay: 1000,
      options: {
        margin: 24,
        background: 'var(--color-background)',
        scrollOffset: 0
      }
    },
    'vuepress-plugin-comment': {
      choosen: 'valine',
      options: {
        el: '#valine-vuepress-comment',
        appId: 'mAwWAN2mioThMFBbJDSaCCrE-gzGzoHsz',
        appKey: '3D8pYGhizcGPlA8ibtS1Cpkw',
        placeholder: '保持学习、不断进步、保持谦虚',
        avatar: 'robohash',
        pageSize: '50',
        highlight: false,
        visitor: true
      }
    },
    'rss-feed': {
      username: 'Lionad',
      hostname: HOST,
      selector: '.content__default',
      count: 10,
      filter: page => {
        const shouldConvert = /^articles\/([^\/]*\.md$)/.test(page.relativePath)
        if (/image-format/.test(page.relativePath)) {
          return false
        }
        if (/error-handling/.test(page.relativePath)) {
          return false
        }
        return shouldConvert
      }
    },
    sitemap: {
      hostname: HOST,
      changefreq: 'weekly'
    },
    robots: {
      host: HOST,
      disallowAll: false,
      sitemap: '/sitemap.xml',
      policies: [
        {
          userAgent: '*',
          disallow: ['/gists/', '/hire-me/', '/maps/']
        }
      ]
    },
    'vuepress-plugin-mathjax': {
      target: 'chtml',
      macros: {
        '*': '\\times'
      }
    }
  },

  /** Configuration */

  configureWebpack,
  chainWebpack(config, isServer) {
    console.log('Webpack config env isServer:', isServer)
    if (!isServer) {
      // FIXME no use !?
      // @see https://github.com/vuejs/vuepress/issues/2388
      // config.devServer.proxy({
      //   '/images': {
      //     changeOrigin: true,
      //     target: 'http://image.lionad.art',
      //     pathRewrite: {
      //       '^/images': ''
      //     }
      //   }
      // })
    }
  },

  extraWatchFiles: ['./styles/*']
}
