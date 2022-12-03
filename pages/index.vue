<template>
  <div>
    <h3>MicroCMS+Nuxt3 SSG</h3>
    <ol>
      <li v-for="article in data.contents" :key="article.id">
        <nuxt-link :to="`/${article.id}`">{{ article.title }}</nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const client = {
  serviceDomain: config.serviceDomain,
  apiKey: config.apiKey,
}

const { data } = await useFetch('/blogs', {
  baseURL: `https://${client.serviceDomain}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": client.apiKey,
  },
})
</script>