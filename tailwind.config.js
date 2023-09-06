/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#6009AE",
        primaryOrange: "#FF6107",
        secondaryBlack: "#121212",
        secondaryWhite: "#F8F8F8",
        secondaryGray: "#f2f1fa",
        tertiaryGray: "#686868",
        tertiaryWhite: "#FFFFFF",
      },
      fontSize: {
        '4xl': '2.75rem',
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
