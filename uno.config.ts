import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-background': 'bg-neutral-50 dark:bg-neutral-950',
    'text-foreground': 'text-neutral-700 dark:text-neutral-200',
    'text-muted': 'text-neutral-500 dark:text-neutral-400',
  },
  presets: [
    presetWind4({
      dark: 'media',
    }),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
