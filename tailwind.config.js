/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-blue": "#202F55",
        "main-white": "#F5F5F5",
        "side-bar": "#A6ACBB",
        "hover-text": "#EECFBF",
      },
      fontFamily: {
        sans: ["K2D-Medium"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
