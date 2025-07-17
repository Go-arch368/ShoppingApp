/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets:[require("nativewind/preset")],
  theme: {
    extend: {
     colors: {
    teal: "#108B8E",
        purple: "#9A16CA",
        gray: "#586274",
        white: "#FFFFFF",
        darkGray: "#383837",
        gray700: "#374151",
        gradientStart: "#ECDCFF",
        green: "#22C55E",
      },
      gap: {
        '[9px]': '9px',
      },
    },
  },
  plugins: [],
}

