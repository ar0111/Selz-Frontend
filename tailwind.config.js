/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': 'rgb(255 255 255)',
      'gray': '#e5e7eb',
      'gray-100': '#f3f4f6',
      'midnight': '#232f3e',
      'metal': '#565584',
      'red': '#dc2626',
      'silver': '#334155',
      'warning': '#fbbf24',
      'black': '#000000',
      'slate': '#0f172a',
      'amber':'#b45309',
      'cyan':{
        100:'#cffafe',
        200:'#a5f3fc',
        300:'#67e8f9',
        400:'#22d3ee',
        500:'#06b6d4'
      },
      'Indigo':{
        100:'#e0e7ff',
        200:'#c7d2fe',
        300:'#a5b4fc',
        400:'#818cf8',
        500:'#6366f1',
        600:'#4f46e5'
      }
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}

