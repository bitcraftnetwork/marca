/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F8FFF4", // Mint Cream - Soft Background
        primary: {
          DEFAULT: "#f6985f", // Peach
          50: "#fff3ec",
          100: "#ffe4d6",
          200: "#ffd4bf",
          300: "#fec5aa",
          400: "#fdb692",
          500: "#fca77a",
          600: "#f6985f",
          700: "#ed8944",
          800: "#dc7a2e",
          900: "#c36a1b",
        },
        secondary: {
          DEFAULT: "#dcdc89", // Cream
          100: "#fdfdeb",
          200: "#fbfbd7",
          300: "#f9f9c3",
          400: "#f7f7af",
          500: "#f5f59b",
          600: "#dcdc89",
          700: "#c3c377",
          800: "#aaaa65",
          900: "#919153",
        },
        helper: {
          DEFAULT: "#dedebd", // Ivory
          100: "#ffffff",
          200: "#fefef6",
          300: "#fcfceb",
          400: "#f9f9e1",
          500: "#f6f6d6",
          600: "#dedebd",
          700: "#c6c6a4",
          800: "#adad8b",
          900: "#959572",
        },
        dark: "#333333", // Davy's Gray - for text, footer, nav
      },
      container: {
        center: true,
        padding: "16px",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
