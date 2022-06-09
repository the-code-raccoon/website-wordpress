/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["VT323"],
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0" },
        },
      },
      animation: {
        "cursor-blink": "blink 1.3s steps(2) infinite",
      },
      colors: {
        maroon: "#B3005C",
        bleu: "#3F88C5"
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
