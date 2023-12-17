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
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#334155',
      'bubble-gum': '#ff77e9',
      'bermuda': '#fbbf24',
      'slate': '#0f172a',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

