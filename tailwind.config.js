/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor : "rgba(0,0,0,0.3)",
        borderColor : "rgba(0,0,0,0.45)",
      }
    },
  },
  plugins: [],
}