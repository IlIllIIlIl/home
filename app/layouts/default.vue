<template>
  <div h-screen flex flex-col>
    <div class="w-full flex items-center justify-between p-4 md:hidden">
      <LayoutMainDarkToggle />
    </div>

    <div class="flex flex-1">
      <div
        hidden transition-all md:block
        w="sm:64 md:70 lg:90"
        p="sm:4 md:5 lg:6"
        border="r border-white dark:border-black"
      >
        <div
          absolute select-none transition-all
          left="14 lg:12 md:8"
          top="14 lg:12 md:8"
        >
          <LayoutMainLeftTitle />
        </div>
        <div
          absolute transition-all
          left="14 lg:12 md:8"
          bottom="14 lg:12 md:8"
        >
          <LayoutMainDarkToggle />
        </div>
      </div>
      <div hidden md:block>
        <LayoutMainNavbar />
      </div>
      <div flex-1 overflow-auto p-4 md:mx-auto md:max-w-4xl>
        <slot />
      </div>
    </div>
  </div>
</template>
