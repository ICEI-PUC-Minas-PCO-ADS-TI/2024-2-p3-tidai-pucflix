/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        '5%': '5%',
        '200px': '200px'
      },
      colors: {
        'deafaultPurple': '#21005f',
        'defaultBg' : '#151515',
      },
    },
  },
  plugins: [],
}

