/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#162466",
          200: "#E9F7FF",
          300: "#E9F0FF",
          900: "#181B31",
        },
        red: {
          DEFAULT: "#FF3B33",
          400: "#FFDBD4",
        },
        yellow: {
          300: "#FFF3CA",
        },
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
