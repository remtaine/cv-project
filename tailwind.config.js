const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '3xs': '375px',
      '2xs': '450px',
      'xs': '560px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}