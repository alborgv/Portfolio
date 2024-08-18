/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        'blue-mid': "#132038",
        'blue-start': '#0a2048',
        'blue-end': '#051126'
      },
    },
  },
  plugins: [],
}

