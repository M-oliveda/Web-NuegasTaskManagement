import { default as defaultTheme } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./web/src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
