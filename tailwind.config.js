/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
      animation: {
        kenburns: "kenburns 20s ease-in-out infinite",
      },
      keyframes: {
        kenburns: {
          "0%": {
            transform: "scale(1) translate(0, 0)",
          },
          "50%": {
            transform: "scale(1.1) translate(5%, 5%)",
          },
          "100%": {
            transform: "scale(1) translate(0, 0)",
          },
        },
      },
    },
    fontFamily: {
      Merriweather: ["Merriweather"],
    },
    screens: {
      sm: "426px",
      md: "769px",
      xl: "1280px",
    },
  },
  plugins: [],
};
