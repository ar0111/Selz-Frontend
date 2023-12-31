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
      }
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}

