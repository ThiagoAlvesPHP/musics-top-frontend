/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: '#8cceb3',
        second: '#a5dac6',
        third: '#bfe7d9',
        fourth: '#d8f3ec',
        fifth: '#f1ffff',
      },
    },
  },
  plugins: [],
}

