/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",

    // shared UI package
    "../../packages/ui/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {},
  },

  plugins: [],
}