import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f4ff',
          100: '#f0e5ff',
          200: '#dfc7ff',
          300: '#c9a4ff',
          400: '#b080ff',
          500: '#9d5dff',
          600: '#8b3fff',
          700: '#7a2aff',
          800: '#6b1fff',
          900: '#5a1a99',
        },
        secondary: {
          50: '#eff6ff',
          100: '#ddeeff',
          200: '#bce0ff',
          300: '#8accff',
          400: '#4dabff',
          500: '#2489ff',
          600: '#0662e6',
          700: '#0551cc',
          800: '#064aa3',
          900: '#07407a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      spacing: {
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
