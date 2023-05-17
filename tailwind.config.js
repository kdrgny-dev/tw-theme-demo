const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    textColor: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      logo: "var(--color-logo)",
      menu: "var(--color-menu)",
      ...colors,
    },
    backgroundColor: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      buttonColor: "var(--color-button)",
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
