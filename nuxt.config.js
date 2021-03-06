module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'blog',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  //  插件
  plugins: [{
    src: '~plugins/ElementUI',
    ssr: false,
  }, {
    src: '~plugins/CssDoodle',
    ssr: false
  }],
  //  全局样式表
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'static/css/base.css',
    'static/css/index.css',
    'static/css/m.css',
    'static/css/ele.css'
  ],
  /*
   ** Build configuration
   */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    //  放置element-ui 被打包多次
    vendor: ['element-ui']
  },

}
