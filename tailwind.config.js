/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        theme1: {
          primary: "#1e3a8a",
          background: "#ffffff",
          text: "#000000",
        },
        theme2: {
          primary: "#1e3a8a",
          background: "#000000",
          text: "#ffffff",
        },
        theme3: {
          primary: "#f4bf37",
          background: "#000000",
          text: "#ffffff",
          secondaryText: "#1e3a8a",
        },
      },
    },
  },
  plugins: [require("tw-animate-css")],
};

