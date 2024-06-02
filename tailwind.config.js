/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#f65351",
        "primary-blue": "#0a317b",
        "xtra-light-grayish-blue": "#f7fafd",
        "light-grayish-blue-1": "#e5effa",
        "light-grayish-blue-2": "#dde7ee",
        "grayish-blue": "#939dae",
        "dark-grayish-blue": "#5e6778",
        "very-dark-grayish-blue": "#1c202b",
      },
    },
    screens: {
      desktop: "1280px",
      laptop: "1024px",
      tablet: "800px",
    },
  },
  plugins: [],
};
