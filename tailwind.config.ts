/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // change this from "media" to "class"
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: {
    daisyui: {},
  },
};
