/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": "#7BD3EA",
        "custom-orange": "#FFB534",
        "custom-green": "#A2FF86",
      },
      textColor: {
        accent: "red",
      },
    },
  },
  plugins: [require("daisyui")],
};
