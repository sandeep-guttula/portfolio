/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
// const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
      colors: {
        outerBackground: "#010C15",
        primary: "#011627",
        textWhite: "#E5E9F0",
        borderColor: "#1E2D3D",
        textSecondary: "#607B96",
        textBlue: "#4D5BCE",
        textGreen: "#43D9AD",
        textBrown: "#E99287",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
