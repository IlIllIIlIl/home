import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: {
    'typography': ['prose prose-neutral dark:prose-invert', 'prose-h1:font-serif prose-h2:font-serif prose-h3:font-serif prose-h4:font-serif prose-strong:font-serif prose-blockquote:font-mono prose-a:link', 'font-sans text-pretty warp-normal break-normal'],
    'divide': 'divide-y divide-border',
    'divide-dot': 'mr-2 after:(content-["·"] ml-2 text-border) last:(mr-0 after:content-none)',
    'link': 'underline decoration-offset-3 decoration-current/50 hover:decoration-current transition-colors',
    'button': 'inline-flex items-center justify-center gap-2 px-2 py-0.5 whitespace-nowrap transition-[color,background-color,transform] disabled:(pointer-events-none op-50) active:translate-y-px',
    'button-ghost': ['button', 'text-muted-foreground hover:(bg-muted/50 text-foreground)'],
    'button-primary': ['button', 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/80'],
    'button-secondary': ['button', 'bg-secondary text-secondary-foreground border border-input hover:bg-secondary/80'],
    'button-outline': ['button', 'border border-input bg-background hover:(bg-secondary text-secondary-foreground)'],
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
        sans: ['IBM Plex Sans', 'Chocolate Classical Sans', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans TC'],
        serif: ['IBM Plex Serif', 'Noto Serif KR', 'Noto Serif JP', 'Noto Serif TC', 'Noto Serif SC'],
        mono: ['IBM Plex Mono', 'Noto Sans Mono', 'Geist Mono', 'JetBrains Mono', 'LXGW WenKai Mono TC', 'IBM Plex Sans TC'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
