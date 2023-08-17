/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoRegular: ["Nunito Regular"],
        nunitoMedium: ["Nunito Medium"],
        nunitoBold: ["Nunito Bold"],
        nunitoBlack: ["Nunito Black"],
        nunitoLight: ["Nunito Light"],
      },
    },
  },
  plugins: [],
}