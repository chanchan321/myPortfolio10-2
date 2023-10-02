/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes:{
       
               // -----
        showtext:{
          '0%': { transform: 'translateY(150%)'},
          '100%': { transform: 'translateY(0%)'},
        },
        // -----
        showImg:{
          '0%': { transform: 'translate(150%)'},
          '100%': { transform: 'translateX(0%)'},
        },
               // -----
        showImg2:{
          '0%': { transform: 'translateY(150%)'},
          '100%': { transform: 'translateY(0%)'},
        },
               // -----
        appearLine:{
          '0%': { opacity:0 },
          '10%': { opacity:0 },
          '20%': { opacity:1 },
          '30%': { opacity:1 },
          '40%': { opacity:1 },
          '100%': { opacity:1 },
        },

      },
      animation: {
      
        'show-text': 'showtext 1s ease',
        'show-img': 'showImg 1.5s ease',
        'show-img2': 'showImg2 1.5s ease',

        'appearline': 'appearLine 2s ease-in-out',

      },
    },
    colors: {
      dark:'#001C30',
      light:'#F6F4EB'
    }
  },
  plugins: [],
}

