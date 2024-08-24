<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#18181b' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

function handleToggle(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  if (!document.startViewTransition) {
    toggleDark()
    return
  }
  const transition = document.startViewTransition(async () => {
    toggleDark()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: color.value === 'dark' ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 360,
        easing: 'ease-in',
        pseudoElement: color.value === 'dark'
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <button class="!outline-none" @click="handleToggle">
    <div
      class="i-ri-sun-fill dark:i-ri-moon-fill"
      hover="scale-110"
      transition="all duration-200"
    />
  </button>
</template>
