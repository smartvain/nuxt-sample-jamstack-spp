// https://nuxt.com/docs/api/configuration/nuxt-config
const { API_KEY, SERVICE_DOMAIN } = process.env

export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: API_KEY,
    serviceDomain: SERVICE_DOMAIN,
    public: {
      apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
      serviceDomain: process.env.NODE_ENV !== 'production' ? SERVICE_DOMAIN : undefined,
    },
  },
  app: {
    cdnURL: '/nuxt-sample-jamstack-spp/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
