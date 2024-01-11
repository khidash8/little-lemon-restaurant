/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#495e57",
        "primary-yellow": "#f4ce14",
        "secondary-orange": "#fbdABB",
        "secondary-red": "#ee9972",
        "secondary-light": "#edefee",
        "secondary-dark": "#333333",
      },
      fontFamily: {
        body: ["Karla", "sans-serif"],
        heading: ["DM Serif Display", "serif"],
        marakazi: ["Marakazi", "serif"],
      },
    },
  },
  plugins: [],
};
