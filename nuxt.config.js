require('tailwindcss');
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32' , href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16' , href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#ffff04', href: '/safari-pinned-tab.svg' },
    ]
  },

  telemetry: false,
  extractCSS: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/main.css',
    '~/assets/scss/app.scss',
    'normalize.css/normalize.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/tailwind.config.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  target: 'static',
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/svg-sprite',
    '@nuxtjs/axios',
    '@nuxt/postcss8',
    // '@nuxtjs/proxy',


  ],
  axios: {
    // Все настройки смотрите здесь https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_URL,
  },
  proxy: `${process.env.PORT}/static/*/**.json`,


  svgSprite: {
    input: '~/assets/icons/',
  },

  server: {
    port: process.env.PORT, // default: 3000
    host: '0.0.0.0',  // default: localhost,
    timing: false
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
