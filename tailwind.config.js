/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '196': '48rem',
      }
    },
  },
  plugins: [],
  purge: [ './src/**/*.{js,jsx,ts,tsx}' ],
  darkMode: ['class', '[data-theme="dark"]'],
}
