/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        alpha: {
          950: "rgba(250, 250, 250, 0.04)",
          900: "rgba(211, 222, 244, 0.09)",
          800: "rgba(209, 218, 236, 0.11)",
          700: "rgba(211, 222, 250, 0.18)",
          600: "rgba(215, 226, 252, 0.27)",
          500: "rgba(231, 233, 255, 0.42)",
          400: "rgba(234, 236, 251, 0.53)",
          300: "rgba(242, 244, 255, 0.66)",
          200: "rgba(246, 248, 253, 0.8)",
          100: "rgba(250, 251, 252, 0.9)",
          50: "rgba(254, 254, 255, 0.97)",
        },
        charcoal: {
          950: "rgba(10, 10, 10, 1)",
          900: "rgba(19, 20, 22, 1)",
          800: "rgba(23, 24, 26, 1)",
          700: "rgba(38, 40, 45, 1)",
          600: "rgba(58, 61, 68, 1)",
          500: "rgba(97, 98, 107, 1)",
          400: "rgba(124, 125, 133, 1)",
          300: "rgba(160, 161, 168, 1)",
          200: "rgba(197, 198, 202, 1)",
          100: "rgba(225, 226, 227, 1)",
          50: "rgba(246, 246, 247, 1)",
        },
      },
      fontFamily: {
        h1: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
