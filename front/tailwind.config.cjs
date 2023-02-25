/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'darkBg': '#1F1F1F',
        'lightBg': '#35343C',
        'hred': "#C40249",
        'hblue': "#023DC4"
      },
    },
  },
  plugins: [],
}