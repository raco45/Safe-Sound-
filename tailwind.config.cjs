/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize:{
      "2xsm": ["10px"],
      xsm: ["12px"],
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
    fontWeight:{
      medium: ['500'],
      semibold: ['600'],
      bold: ['700'],
      extrabold: ['800'],
    },
    extend: {},
    fontFamily: {
      heading: ["Bodoni Moda", "serif"],
      buttonfont: ['Lato', 'sans-serif'],
      maintext: ['Source Sans Pro', 'sans-serif']
    },
  },
  plugins: [],
};
