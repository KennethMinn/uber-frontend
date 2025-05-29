/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0286FF",
        secondary: "#AAAAAA",
        success: "#38A169",
        danger: "#F56565",
        warning: "#EAB308",
      },
    },
  },
  plugins: [],
};
