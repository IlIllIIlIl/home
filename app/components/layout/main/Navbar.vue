<script lang="ts" setup>
import { app } from '~/constants'

const route = useRoute()
</script>

<template>
  <div
    v-if="route.path === ''"
    class="relative h-16 w-screen flex items-center justify-between bg-transparent px-8 backdrop-blur-sm !fixed"
    border="b gray-200 dark:border-black"
  >
    <nav class="position-initial flex-row flex-wrap gap-x-6">
      <div class="flex flex-row">
        <div
          v-for="link in app.pages"
          :key="link.text"
          class="relative mr-8 cursor-pointer text-4.5 transition-all duration-360"
          op="70 hover:100"
        >
          <NuxtLink
            :to="link.href"
            class="flex items-center"
          >
            <div :class="link.icon" class="mr-2" />
            <span>{{ link.text }}</span>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>

</style>
