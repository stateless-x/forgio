import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Force gold classes to always be included in build
    'bg-gold-500',
    'bg-gold-600',
    'bg-gold-700',
    'hover:bg-gold-600',
    'hover:bg-gold-700',
    'active:bg-gold-700',
    'text-gold-500',
    'text-gold-600',
    'border-gold-500',
    'border-gold-600',
    'ring-gold-500',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFAF00',
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFAF00',  // Primary brand gold
          600: '#FFBF33',  // Secondary brand gold
          700: '#CC8C00',
          800: '#996900',
          900: '#664600',
        },
      },
      fontFamily: {
        sans: ['Noto Sans Thai', 'Noto Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
