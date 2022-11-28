/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "sans-serif"],
      },
      colors: {
        first: "#509687",
      },
      backgroundImage: {
        first: "url('./images/desktop/image-graphic-design.jpg')",
        second: "url('./images/desktop/image-photography.jpg')",
      },
    },
  },
  plugins: [],
};
