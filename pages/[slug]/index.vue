<template>
  <main>
    <h1 style="margin-bottom: 20px">{{ article.title }}</h1>
    <p style="margin-bottom: 40px">
      <time :datetime="article.publishedAt" v-text="article.publishedAt" />
    </p>
    <div class="post" v-html="article.content" />
  </main>
</template>

<script setup>
const config = useRuntimeConfig()
const client = {
  serviceDomain: config.serviceDomain,
  apiKey: config.apiKey,
}

const route = useRoute()
const slug = route.params.slug
const { data: article } = await useFetch(`/blogs/${slug}`, {
  baseURL: `https://${client.serviceDomain}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": client.apiKey,
  },
})
</script>

<style lang="scss" scoped>
* {
  margin: 0 auto;
  max-width: 800px;
}

:deep(.post) {
h2{font-size:24px;font-weight:700;margin:40px 0 1pc;border-bottom:1px solid #ddd}p,pre{line-height:1.8;letter-spacing:.2px}pre{background:#fafafa;border:1px solid #ddd;padding:1pc}
}
</style>