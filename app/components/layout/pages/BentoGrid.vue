<script setup lang="ts">
import { computed } from 'vue'

const gridClass = computed(() => [
  'grid-cols-2',
  'sm:grid-cols-2',
  'md:grid-cols-3',
  'lg:grid-cols-4',
  'xl:grid-cols-4',
  '[--min-card-size:120px]',
  'sm:[--min-card-size:150px]',
  'md:[--min-card-size:180px]',
  'lg:[--min-card-size:200px]',
  'xl:[--min-card-size:230px]',
  '[grid-template-columns:repeat(auto-fit,minmax(var(--min-card-size),1fr))]',
])
</script>

<template>
  <div
    class="grid w-full gap-2 p-2 md:gap-4 sm:gap-3 md:p-4 sm:p-3"
    :class="gridClass"
  >
    <slot />
  </div>
</template>
