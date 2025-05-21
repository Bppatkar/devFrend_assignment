/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
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
      gray: require("tailwindcss/colors").gray,
      red: require("tailwindcss/colors").red,
      blue: require("tailwindcss/colors").blue,
      green: require("tailwindcss/colors").green,
      purple: require("tailwindcss/colors").purple,
      yellow: require("tailwindcss/colors").yellow,
      teal: require("tailwindcss/colors").teal,
      orange: require("tailwindcss/colors").orange,
    },
  },
};
export const plugins = [require("tw-animate-css")];
