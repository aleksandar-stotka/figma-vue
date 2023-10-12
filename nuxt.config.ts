// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  alias : {
    assets: "/<rootDir></assets"
  },
  css: [
    '@/assets/css/main.css'
  ],

})
