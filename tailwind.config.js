/*eslint-env node*/
module.exports = {
  content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundPosition: {
        "right-30": "30px center",
        "left-50": "-50px center",
      },
    },
  },
};
