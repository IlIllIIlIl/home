import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: {
    typography: ['prose prose-neutral dark:prose-invert', 'prose-h1:font-serif prose-h2:font-serif prose-h3:font-serif prose-h4:font-serif prose-strong:font-serif prose-blockquote:font-mono prose-a:link', 'font-sans text-pretty warp-normal break-normal'],
    link: 'underline decoration-offset-3 decoration-current/50 hover:decoration-current transition-colors',
  },
  theme: {
    colors: {
      'background': 'var(--background)',
      'foreground': 'var(--foreground)',
      'card': 'var(--card)',
      'card-foreground': 'var(--card-foreground)',
      'popover': 'var(--popover)',
      'popover-foreground': 'var(--popover-foreground)',
      'primary': 'var(--primary)',
      'primary-foreground': 'var(--primary-foreground)',
      'secondary': 'var(--secondary)',
      'secondary-foreground': 'var(--secondary-foreground)',
      'muted': 'var(--muted)',
      'muted-foreground': 'var(--muted-foreground)',
      'accent': 'var(--accent)',
      'accent-foreground': 'var(--accent-foreground)',
      'destructive': 'var(--destructive)',
      'border': 'var(--border)',
      'input': 'var(--input)',
      'ring': 'var(--ring)',
    },
  },
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['Chocolate Classical Sans', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans TC', 'IBM Plex Sans TC'],
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
