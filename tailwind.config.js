/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'principal': ["Roboto", 'sans-serif'],
        'segunda': ["Rammetto One", 'sans-serif'],
      },
      boxShadow: {
        '4xl': '0px 0px 100px 0px rgba(0, 0, 0, 1)',
      },
      colors: {
        'primary': '#7e61e7',
        'primary-light': '#a993fe',
        'primary-dark': '#342864',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite', // Cambia '3s' a la duración que desees
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        "no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        }
      }
      addUtilities(newUtilities)
    }
  ],

}



