/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize:{
      "2xsm": ["10px"],
      xsm: ["12px"],
    },
    extend: {},
    fontFamily: {
      heading: ["Bodoni Moda", "serif"],
    },
  },
  plugins: [],
};
