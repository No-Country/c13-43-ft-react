/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
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
        darkBlack: "#121212",
        darkNav: "#333333"

      },
      fontSize: {
        '4xl': '2.75rem',
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '5.5rem',
      },
      screens: {
        'test': '875px',
      },
      width: {
        '45': '45%',
        '49': '49%',
      },
      height: {
        '85': '21.5rem',
        '90': '26.5rem',
        '544': '30rem'
      },
      spacing: {
        '100': '35rem',
        '102': '38rem'
      },
      inset: {
        '13': '7.54rem'
      },
    },
  },
  plugins: [],
};
