/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "#162466",
          100: "#F5F7FF",
          200: "#E9F7FF",
          300: "#E9F0FF",
          900: "#181B31",
        },
        red: {
          DEFAULT: "#FF3B33",
          100: "#FFF8F8",
          400: "#FFDBD4",
        },
        yellow: {
          DEFAULT: "#FFB545",
          300: "#FFF3CA",
        },
        gray: {
          DEFAULT: "#555555",
          200: "#dcdcdc",
        },
      },
      backgroundImage: {
        home: "url(/public/image/banner-image.png)",
        about: "url(/public/image/about-banner.png)",
      },
    },
  },
  plugins: [],
};
