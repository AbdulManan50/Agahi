/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppines: ["Poppins, sans-serif"],
      },
    },
    fontFamily: {
      Merriweather: ["Merriweather"],
    },
    animation: {
      kenburns: 'kenburns 20s ease-in-out infinite',
    },
    keyframes: {
      kenburns: {
        '0%': {
          background: ' scale(1) translate(0, 0)', 
        },
        '50%': {
          background: 'scale(1.1) translate(5%, 5%)', 
        },
        '100%': {
          background: 'scale(1) translate(0, 0)',
        },
      },
    },
  },
  plugins: [],
};
