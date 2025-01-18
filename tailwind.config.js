/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      colors: {
        primary: "#FEA928", // Custom primary color
        secondary: "#1F2937", // Custom secondary color
        accent: {
          light: "#FFEDD5",
          DEFAULT: "#FB923C",
          dark: "#EA580C",
        },
      },
    },
    plugins: [],
  },
};
