const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
mode: 'jit',
content: [
  "./pages/**/*.{js, ts, jsx, tsx}",
  "./components/**/*.{js, ts, jsx, tsx}",
  "./styles/*.css",
],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
      },
    },
  },
  plugins: [],
}
