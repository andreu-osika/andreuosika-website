import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montreal: ['var(--font-montreal)', 'sans-serif'],
      },
      colors: {
        // Design system color tokens
        'brand-purple': '#9977ea',
        'brand-pink': '#e70aac',
        'light-grey': '#fafcff',
        'grey-1': '#162027',
        'grey-2': '#3b4752',
        'grey-3': '#5d6973',
        'grey-6': '#becbd5',
      },
      fontSize: {
        // Menu items — the hero 80px italic type
        'menu': ['80px', { lineHeight: '110px', letterSpacing: '-0.01em' }],
        'menu-sm': ['48px', { lineHeight: '64px' }],
        'menu-xs': ['36px', { lineHeight: '48px' }],
        // Project body copy
        'project-body': ['28px', { lineHeight: '50px', fontWeight: '100' }],
        // Labels
        'label-caps': ['14px', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.08em' }],
        'role': ['28px', { lineHeight: '50px', fontWeight: '100' }],
      },
      maxWidth: {
        'content': '1400px',
        'outer': '1680px',
        'bar': '1520px',
        'constrained': '1024px',
      },
      spacing: {
        'bar-h': '60px',
        'page-x': '140px',
        'page-x-md': '80px',
        'page-x-sm': '20px',
        'section-gap': '20%',
      },
      keyframes: {
        // Gradient animation for the bottom bar
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        // Fade-in for content sections (replacing Webflow opacity:0 animations)
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Marquee scroll
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 10rem))' },
        },
      },
      animation: {
        'gradient-bar': 'gradientShift 15s ease infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'marquee': 'marqueeScroll 40s linear infinite',
        'marquee-reverse': 'marqueeScroll 40s linear infinite reverse',
      },
    },
  },
  plugins: [],
}

export default config
