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
        "main-blue": "#202F55",
        "main-white": "#F5F5F5",
        "side-bar": "#A6ACBB",
        "hover-text": "#E0D426",
        "sub-yellow": "#E0D426",
      },
      fontFamily: {
        sans: ["K2D-Medium"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
