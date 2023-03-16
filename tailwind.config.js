/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'medium-yellow': '#ffc017',
        'medium-black': '#080808',
        'medium-dark': '#191919',
        'medium-grey': '#292929',
      },
    },
  },
  plugins: [],
}
