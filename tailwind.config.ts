import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#F2F2F2',
        'cobalt-dark': '#1C1C1C',
        'cobalt-gray': '#ABABAB',
      },
      fontFamily: {
        sans: ['var(--font-darker-grotesque)', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'serif'],
      },
      fontSize: {
        // Custom typography scale from Figma
        '6xl': ['4.5rem', { lineHeight: '5.625rem', letterSpacing: '-0.02em' }], // 72px/90px
        '5xl': ['3.75rem', { lineHeight: '4.5rem', letterSpacing: '-0.02em' }], // 60px/72px
        '4xl': ['3rem', { lineHeight: '3.75rem', letterSpacing: '-0.02em' }], // 48px/60px
        '3xl': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.02em' }], // 36px/44px
        '2xl': ['1.875rem', { lineHeight: '2.375rem' }], // 30px/38px
        'xl': ['1.5rem', { lineHeight: '2rem' }], // 24px/32px
        'lg': ['1.25rem', { lineHeight: '1.875rem' }], // 20px/30px
        'base': ['1.125rem', { lineHeight: '1.75rem' }], // 18px/28px
        'sm': ['1rem', { lineHeight: '1.5rem' }], // 16px/24px
        'xs': ['0.875rem', { lineHeight: '1.25rem' }], // 14px/20px
        '2xs': ['0.75rem', { lineHeight: '1.125rem' }], // 12px/18px
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
