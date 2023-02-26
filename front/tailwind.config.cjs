/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    extend: {
      colors: {
        transparent: 'transparent',
        'darkBg': '#1F1F1F',
        'lightBg': '#35343C',
        'hred': "#C40249",
        'hblue': "#0340d4"
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },

    },
  },
  plugins: [],
}