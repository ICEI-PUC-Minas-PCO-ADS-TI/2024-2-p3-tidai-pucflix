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
        'defaultPurple': '#21005f',
        'defaultBg' : '#151515',
      },
      width: {
        "5px": "5px"
      }
    },
  },
  plugins: [],
}

