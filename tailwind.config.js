/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "1200px",
        },
      },
      colors: {
        blue: {
          DEFAULT: "#162466",
          100: "#F5F7FF",
          200: "#E9F7FF",
          300: "#E9F0FF",
          500: "#5956E8",
          600: "#FFD1C8",
          900: "#181B31",
        },
        green: {
          700: "#38E55E",
        },
        red: {
          DEFAULT: "#FF3B33",
          100: "#FFF8F8",
          400: "#FFDBD4",
          700: "#FF1850",
        },
        yellow: {
          DEFAULT: "#FFB545",
          300: "#FFF3CA",
          700: "#FFDC60",
        },
        gray: {
          DEFAULT: "#555555",
          200: "#dcdcdc",
        },
      },
      backgroundImage: {
        home: "url(/public/image/banner-image.png)",
        about: "url(/public/image/about-banner.png)",
        service: "url(/public/image/services-banner.png)",
        contact: "url(/public/image/career-banner.png)",
        career: "url(/public/image/career-banner.png)",
        policy: "url(/public/image/career-banner.png)",
        banner: "url(/public/image/service-cta-banner.png)",
        testimonial: "url(/public/image/Subscribe-bg-img.png)",
      },
    },
  },
  plugins: [],
};
