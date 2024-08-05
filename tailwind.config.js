/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    screens: {
      // From Small to big
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "gray-shade": {
          1: "#525866",
          2: "#1c1f26",
        },
      },
    },
  },
  plugins: [],
};
