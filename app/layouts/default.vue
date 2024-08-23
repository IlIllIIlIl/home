<template>
  <div h-screen flex flex-col>
    <div class="w-full flex items-center justify-between p-4 md:hidden">
      <LayoutMainDarkToggle />
    </div>

    <div class="flex flex-1">
      <div class="hidden w-64 p-4 md:block">
        <div absolute bottom-4 left-4>
          <LayoutMainDarkToggle />
        </div>
      </div>
      <div class="flex-1 overflow-auto p-4 md:mx-auto md:max-w-4xl">
        <slot />
      </div>
    </div>
  </div>
</template>
