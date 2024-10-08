import { default as defaultTheme } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./web/src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: {
          100: "#DCE4FF",
          200: "#BAC8FF",
          300: "#98ABFF",
          400: "#9F84FD",
          DEFAULT: "#546FFF",
          600: "#3D53DB",
          700: "#2A3BB7",
          800: "#1A2793",
          900: "#10197A",
        },
        success: {
          100: "#F5FCD2",
          200: "#E8FAA6",
          300: "#D3F178",
          400: "#BCE455",
          DEFAULT: "#9CD323",
          600: "#7FB519",
          700: "#659711",
          800: "#4C7A0B",
          900: "#3B6506",
        },
        error: {
          100: "#FFE7D3",
          200: "#FFC8A6",
          300: "#FFA37A",
          400: "#FF7F59",
          DEFAULT: "#FF4423",
          600: "#DB2719",
          700: "#B71112",
          800: "#930B16",
          900: "#7A0619",
        },
        warning: {
          100: "#FFF8D7",
          200: "#FFEFB0",
          300: "#FFE488",
          400: "#FFD96B",
          DEFAULT: "#FFC73A",
          600: "#DBA32A",
          700: "#B7821D",
          800: "#936312",
          900: "#7A4D0B",
        },
        information: {
          100: "#DCF3FF",
          200: "#BAE5FF",
          300: "#98D3FF",
          400: "#7EC2FF",
          DEFAULT: "#54A6FF",
          600: "#3D81DB",
          700: "#2A60B7",
          800: "#1A4393",
          900: "#102E7A",
        },
        secondary: {
          100: "#DFE1F3",
          200: "#C2C6E8",
          300: "#8E92BC",
          400: "#54577A",
          DEFAULT: "#141522",
          600: "#0E0F1D",
          700: "#0A0A18",
          800: "#060713",
          900: "#040815",
        },
      },
      keyframes: {
        fadeout: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeout: "fadeout 2000ms ease-in-out forwards",
      },
      gridTemplateColumns: {
        main: "255px repeat(3,minmax(0px,1fr))",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(({ addVariant }) => {
      addVariant("search-cancel", "&::-webkit-search-cancel-button");
    }),
  ],
};
