/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      "600px": { max: "600px" },
    },
    extend: {
      boxShadow: {
        "around-shadow": "-1px -1px 1px 1px #ffffffc0, 1px 1px 1px 1px #00000061",
        "inner-shadow": " -1px -1px 1px 1px #ffffffc0 inset, 1px 1px 1px 1px #00000061 inset",
      },
    },
  },
  plugins: [],
};
