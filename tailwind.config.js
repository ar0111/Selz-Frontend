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
      'purple': '#3f3cbb',
      'midnight': '#232f3e',
      'metal': '#565584',
      'red': '#dc2626',
      'silver': '#334155',
      'warning': '#fbbf24',
      'black': '#000000',
      'slate': '#0f172a',
      'amber':'#b45309'
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}

