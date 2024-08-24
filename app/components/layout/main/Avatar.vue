<script lang="ts" setup>
import { app } from '@/constants'

const isStatusHovered = ref(false)
</script>

<template>
  <NuxtLink to="/">
    <img
      :src="app.avatar"
      h-38 w-38 rounded-full transition-all duration-360
      border="~ gray-300 hover:(blue-400 5) dark:(border-black 2)"
      shadow="lg hover:xl hover:blue-2 hover:dark:blue-950"
    >
  </NuxtLink>
  <div
    absolute bottom-0 left-0 h-8 flex items-center justify-center rounded-full backdrop-blur-sm backdrop-filter transition-all duration-360
    border="~ border-white dark:border-black"
    bg="white dark:primary-black op-70 dark:op-90"
    :class="[
      isStatusHovered ? 'w-auto px' : 'w-8',
    ]"
    @mouseenter="isStatusHovered = true"
    @mouseleave="isStatusHovered = false"
  >
    <div :class="app.status.icon" />
    <span
      v-if="isStatusHovered"
      ml-1 text-base
    >
      {{ app.status.text }}
    </span>
  </div>
</template>

<style>

</style>
