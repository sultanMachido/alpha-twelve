/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textBlack: "#334155",
        bgBlackPrimary: "#484554",
        bgBlackSecondary: "#383544",
      },
    },
  },
  plugins: [],
};
