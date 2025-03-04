/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#1e40af', // Royal blue for light mode
          dark: '#60a5fa'     // Lighter blue for dark mode
        },
        'secondary': '#4a5568',
        'accent': '#4f46e5', // Adjusted accent to complement royal blue
        'accent-hover': '#3730a3',
        'accent-light': '#a5b4fc',
        'background': {
          DEFAULT: '#f8f7f4',
          dark: '#111827'
        },
        'background-alt': {
          DEFAULT: '#ffffff',
          dark: '#1f2937'
        },
        'text': {
          DEFAULT: '#2d3748',
          dark: '#f3f4f6'
        },
        'text-light': {
          DEFAULT: '#4a5568',
          dark: '#d1d5db'
        },
        'text-lighter': {
          DEFAULT: '#718096',
          dark: '#9ca3af'
        },
        'border': {
          DEFAULT: '#e2e8f0',
          dark: '#374151'
        },
        'border-dark': {
          DEFAULT: '#cbd5e0',
          dark: '#4b5563'
        },
      },
      fontFamily: {
        sans: ['"Rubik"', 'system-ui', 'sans-serif'],
        display: ['"Rubik"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'paper': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'paper-md': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'paper-lg': '0 4px 6px rgba(0, 0, 0, 0.03)',
        'skill': '0 2px 10px rgba(30, 64, 175, 0.15)',
      },
      backgroundImage: {
        'dots-pattern': "radial-gradient(#cbd5e0 0.5px, transparent 0.5px)",
        'dots-pattern-dark': "radial-gradient(#4b5563 0.5px, transparent 0.5px)",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}