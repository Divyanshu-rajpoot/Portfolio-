/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { 
      'gilroy': ['Gilroy', 'sans-serif'],
      'opensans': ['Open Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

