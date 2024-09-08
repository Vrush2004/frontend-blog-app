/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: '#006600',
        dark:{
          light:'#009900',
          hard:'#003300',
          soft:'#004d00',
        },
      },
      fontFamily:{
        opensans:["'Open Sans'", "sans-serif"],
        roboto:["'roboto'","sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui:{
    themes:[],
    base:false,
    styled:true,
    utils:true,
  }
}

