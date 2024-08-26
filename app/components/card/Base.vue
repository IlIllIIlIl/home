<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: '1x1',
    validator: (value: string) => ['1x1', '1x2', '2x1', '2x2'].includes(value),
  },
})

const sizeClass = computed(() => {
  const baseClass = 'pb-100%' // 1:1 aspect ratio
  switch (props.size) {
    case '1x1':
      return [baseClass, 'row-span-1']
    case '1x2':
      return [baseClass, 'row-span-2']
    case '2x1':
      return [baseClass, 'col-span-2']
    case '2x2':
      return [baseClass, 'col-span-2 row-span-2']
    default:
      return baseClass
  }
})

const tiltX = ref(0)
const tiltY = ref(0)
const isPressed = ref(false)

function updateTilt(event: MouseEvent) {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const distanceX = x - centerX
  const distanceY = y - centerY

  const maxTilt = 5
  const tiltFactorX = (distanceX / centerX) * maxTilt
  const tiltFactorY = (distanceY / centerY) * maxTilt

  tiltX.value = -tiltFactorY
  tiltY.value = tiltFactorX

  const sizeMultiplier = getSizeMultiplier(props.size)
  tiltX.value *= sizeMultiplier
  tiltY.value *= sizeMultiplier
}

function handleMouseDown(event: MouseEvent) {
  isPressed.value = true
  updateTilt(event)
}

function handleMouseMove(event: MouseEvent) {
  if (isPressed.value) {
    updateTilt(event)
  }
}

function handleMouseUp() {
  isPressed.value = false
  tiltX.value = 0
  tiltY.value = 0
}

const handleMouseLeave = handleMouseUp

function getSizeMultiplier(size: string): number {
  switch (size) {
    case '1x1': return 1
    case '1x2': return 0.5
    case '2x1': return 0.5
    case '2x2': return 0.25
    default: return 1
  }
}

const cardStyle = computed(() => ({
  transform: `perspective(1000px) rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg)`,
}))
</script>

<template>
  <div
    relative w-full
    :class="[sizeClass, { 'cursor-pointer': !isPressed }]"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseLeave"
  >
    <div
      absolute inset-0 flex flex-col transition-all duration-300 ease-out
      rounded="lg sm:xl md:2xl"
      p="2 sm:3 md:4"
      border="~ border-white dark:border-black"
      shadow="hover:lg dark:hover:dark"
      transition="all duration-360"
      :class="[
        { '!transition-none': isPressed },
      ]"
      :style="cardStyle"
    >
      <div flex-grow text-xs md:text-base sm:text-sm>
        <slot />
      </div>
    </div>
  </div>
</template>
