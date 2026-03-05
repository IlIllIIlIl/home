import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-background': 'bg-neutral-50 dark:bg-neutral-950',
    'text-foreground': 'text-neutral-700 dark:text-neutral-200',
    'text-muted': 'text-neutral-500 dark:text-neutral-400',
    'typography': ['prose prose-neutral dark:prose-invert', 'prose-h1:font-serif prose-h2:font-serif prose-h3:font-serif prose-h4:font-serif prose-strong:font-serif prose-blockquote:font-mono prose-a:link', 'font-sans text-pretty warp-normal break-normal'],
    'divide': 'divide-y not-dark:divide-neutral-200 dark:divide-neutral-900',
    'link': 'underline decoration-offset-3 decoration-current/50 hover:decoration-current transition-colors',
  },
  presets: [
    presetWind4({
      dark: 'media',
    }),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['Geist Mono', 'Chocolate Classical Sans', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans TC', 'IBM Plex Sans TC'],
        serif: ['Noto Serif KR', 'Noto Serif JP', 'Noto Serif TC', 'Noto Serif SC'],
        mono: ['Geist Mono', 'JetBrains Mono', 'IBM Plex Mono', 'Noto Sans Mono', 'LXGW WenKai Mono TC'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
