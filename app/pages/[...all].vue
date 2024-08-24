<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main h-full flex flex-col items-center justify-center>
    <div text-6xl>
      <div i-ri-inbox-2-fill inline-block />
    </div>
    <h1 text-4xl font-black>
      404
    </h1>
    <div mt-2 text-xl text-gray-800 dark:text-gray-300>
      这里什么也没有
    </div>
    <div>
      <button
        mt-8 text-lg
        text="blue-700 hover:blue-500 active:blue-800 dark:blue-500 dark:hover:blue-400 dark:active:blue-700"
        transition-all duration-360
        @click="router.back()"
      >
        返回
      </button>
    </div>
  </main>
</template>
