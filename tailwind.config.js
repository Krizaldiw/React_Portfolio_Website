/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#14b8a6",
        headingColor: "#081e21",
        smallTextColor: "#193256",
        alertColor: "#dc2626",
        notifColor: "#2563eb",
      }
    },
  },
  plugins: [],
}