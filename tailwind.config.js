/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      }
    },
    fontFamily: {
      Fira: ["Fira Sans Condensed", "sans-serif"],
      Itim: ["Itim", "cursive"]
    }
  },
  plugins: [],
}