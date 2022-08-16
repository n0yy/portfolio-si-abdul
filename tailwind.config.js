/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FB8500",
        secondary: "#AF7C52",
      },
      fontFamily: {
        dyna: "DynaPuff, sans-serif",
        josefin: "'Josefin Sans', sans-serif",
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
