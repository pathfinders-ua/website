// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/color-mode',
      '@nuxtjs/google-fonts',
      '@nuxt/content',
      '@vueuse/nuxt',
   ],
   googleFonts: {
      families: {
         'Open Sans': [400, 500, 600, 700],
         'IBM Plex Sans': true,
      },
      display: 'swap',
      preconnect: true,
      download: true,
   },
   colorMode: {
      classSuffix: '',
   },
   experimental: {
      payloadExtraction: false,
   },
   app: {
      head: {
         htmlAttrs: {
            lang: 'uk',
         },
         link: [
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0055a0' },
         ],
         meta: [
            { name: 'description', content: "Пам'ятні перлини для слідопитів та шукачів пригод на 2023 рік" },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'theme-color', content: '#1e293b' },
         ],
      },
   },
})
