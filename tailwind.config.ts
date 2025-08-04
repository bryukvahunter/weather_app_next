/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      scrollSnapType: {
        x: "x mandatory",
      },
      scrollSnapAlign: {
        start: "start",
      },
    },
  },
  plugins: [],
};
