<script lang="ts" setup>
import { app } from '@/constants'
</script>

<template>
  <div flex="~ col" items-start space-y-8>
    <div relative>
      <LayoutMainAvatar />
    </div>
    <div text-left>
      <h1 text-4xl font-bold>
        {{ app.name }}
      </h1>
      <p mt-3 break-words text-lg text-gray-600 dark:text-gray-400>
        {{ app.description }}
      </p>
    </div>
  </div>
</template>

<style>

</style>
