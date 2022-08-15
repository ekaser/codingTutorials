/** @type {import('tailwindcss').Config} */
module.exports = {
mode: 'jit',
content: [
  "./pages/**/*.{js, ts, jsx, tsx}",
  "./components/**/*.{js, ts, jsx, tsx}",
  "./styles/*.css",
],
  theme: {
    extend: {},
  },
  plugins: [],
}
