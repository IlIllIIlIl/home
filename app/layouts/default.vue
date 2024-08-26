<template>
  <div h-screen flex flex-col>
    <div class="w-full flex items-center justify-between p-4 md:hidden">
      <LayoutMainDarkToggle />
    </div>

    <div class="flex flex-1">
      <div
        hidden transition-all lg:block
        w="lg:70 xl:80"
        p="lg:4 xl:5"
        border="r border-white dark:border-black"
      >
        <div
          absolute select-none transition-all
          left="xl:10 lg:6"
          top="xl:10 lg:6"
        >
          <LayoutMainLeftTitle />
        </div>
        <div
          absolute transition-all
          left="xl:10 lg:6"
          bottom="xl:10 lg:6"
        >
          <LayoutMainDarkToggle />
        </div>
      </div>
      <div hidden md:block>
        <LayoutMainNavbar />
      </div>
      <div flex-1 p-18>
        <slot />
      </div>
    </div>
  </div>
</template>
