/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  screens: {
    phone: {max: "480px"},
    tab: "1024px",
    desktop: "1280px",
    smallPhone: {max: "351px"},
},
  plugins: [],
}