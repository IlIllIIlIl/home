import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        black: '#18181b',
      },
      border: {
        white: '#e5e7eb',
        black: '#27272a',
      },
    },
  },
  shortcuts: [],
  safelist: [
    'i-ri-headphone-fill',
    'i-ri-home-4-fill',
    'i-ri-article-fill',
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
