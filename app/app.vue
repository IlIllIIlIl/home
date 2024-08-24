<script setup lang="ts">
import { app } from '~/constants'

useHead({
  title: app.name,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #18181b;
  color: white;
}
</style>
