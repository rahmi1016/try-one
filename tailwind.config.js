/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bright-blue": "#3A7BFD",
      "check-background": "bg-gradient-to-r from-[#57DDFF] to-[#C058F3]",
      //light theme
      "very-light-gray": "#FAFAFA",
      "very-light-grayish-blue": "#E4E5F1",
      "light-grayish-blue": "#D2D3DB",
      "darkish-grayish-blue": "#9394A5",
      "very-darkish-grayish-blue": "#484B6A",
      //dark theme
      "very-dark-blue": "#161722",
      "very-dark-desaturated-blue": "#25273C",
      "lightish-grayish-blue": "#CACDE8",
      "lightish-grayish-blue-hover": "#E4E5F1",
      "dark-grayish-blue": "#777A92",
      "very-dark-grayish-blue-one": "#4D5066",
      "very-dark-grayish-blue": "#393A4C",
    },
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        "mobile-light": "url('/src/assets/bg-mobile-light.jpg')",
        "mobile-dark": "url('/src/assets/bg-mobile-dark.jpg')",
        "desktop-light": "url('/src/assets/bg-desktop-light.jpg')",
        "desktop-dark": "url('/src/assets/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
