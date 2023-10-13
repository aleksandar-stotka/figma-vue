// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  alias : {
    assets: "/<rootDir></assets"
  },
  css: [
    'bootstrap-icons/font/bootstrap-icons.css', // Import Bootstrap Icons CSS
    // Other CSS files if needed
  ],


})
