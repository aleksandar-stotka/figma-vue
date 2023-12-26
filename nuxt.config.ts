// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    },
  },
})


//'@nuxtjs/tailwindcss',
