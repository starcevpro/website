import daisyui from "daisyui"
import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#E9293B', // Основной красный
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#44944A', // Основной зеленый
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        dark: {
          50: '#f8fafc',  // Самый светлый оттенок
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1E293B', // Основной тёмный цвет
          900: '#0f172a',
          950: '#020617',  // Самый тёмный оттенок
        },
      }
    }
  },
  plugins: [
    daisyui, animations
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "color-scheme": "dark",
          "primary": "#E9293B",
          "primary-content": "#ffffff",
          "secondary": "#44944A",
          "secondary-content": "#ffffff",
          "accent": "#37cdbe",
          "neutral": "#334155",
          "neutral-content": "#dee3e6",
          "base-100": "#1E293B",
          "base-200": "#1a2436",
          "base-300": "#161f30",
          "base-content": "#ffffff",
        }
      },
      {
        light: {
          "color-scheme": "light",
          "primary": "#E9293B",
          "primary-content": "#ffffff",
          "secondary": "#44944A",
          "secondary-content": "#ffffff",
          "accent": "#37cdbe",
          "neutral": "#dee3e6", // Изменено на светлый оттенок
          "neutral-content": "#1E293B", // Контрастный тёмный цвет для контента
          "base-100": "#ffffff",
          "base-200": "#f2f2f2",
          "base-300": "#e5e6e6",
          "base-content": "#1f2937",
        }
      }
    ],
  }
}
