const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { 
        main: ['DM Sans', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
       
    },

    colors: {
        primary: "#1D3557",
        secondary:"#E63946",
        "light-gray": "#F6F6F6"
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
