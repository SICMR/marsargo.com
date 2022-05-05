const meta_stuff = {
  description: 'Angry - Out Now',
  image: '/img-2.jpg',
}
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'marsargo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'author', name: 'author', content: 'Mars Argo' },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Mars Argo',
      },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Mars Argo' },
      { hid: 'theme-color', name: 'theme-color', content: '#201F94' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'description',
        name: 'description',
        content: meta_stuff.description,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: meta_stuff.description,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: meta_stuff.description,
      },
      { hid: 'og:title', name: 'og:title', content: 'Mars Argo' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Mars Argo' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: meta_stuff.image,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: meta_stuff.image,
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/global.scss'],
  styleResources: {
    scss: ['~/assets/styles/resources/_mixins.scss'],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
