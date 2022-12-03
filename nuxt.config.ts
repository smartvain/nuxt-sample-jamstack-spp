// https://nuxt.com/docs/api/configuration/nuxt-config
const { API_KEY, SERVICE_DOMAIN } = process.env

export default defineNuxtConfig({
  target: 'static',
  app: {
    baseURL: '/nuxt-sample-jamstack-spp/',
    cdnURL: 'https://smartvain.github.io/nuxt-sample-jamstack-spp/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  runtimeConfig: {
    apiKey: API_KEY,
    serviceDomain: SERVICE_DOMAIN,
    public: {
      apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
      serviceDomain: process.env.NODE_ENV !== 'production' ? SERVICE_DOMAIN : undefined,
    }
  }
})
