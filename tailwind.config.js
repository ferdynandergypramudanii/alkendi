/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        khaki: "#c3b091",
        "golden-brown": "#966919",
        beige: "#e4d5b7",
        "beige-tua": "#9f9580",
      },
    },
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
      },
    },
    fontFamily: {
      Fira: ["Fira Sans Condensed", "sans-serif"],
      Itim: ["Itim", "cursive"],
    },
  },
  plugins: [],
};
