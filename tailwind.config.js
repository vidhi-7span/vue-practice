/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', "sans"],
        ProtestRiot: ['"Protest Riot"', "sans"],
      },
    },
  },
  plugins: [],
};
