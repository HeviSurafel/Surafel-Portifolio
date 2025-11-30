// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          text: '#1a1a1a',
          accent: '#0070f3',
        },
        dark: {
          bg: '#0a0a0a',
          text: '#ffffff',
          accent: '#3291ff',
        }
      }
    },
  },
  plugins: [],
}