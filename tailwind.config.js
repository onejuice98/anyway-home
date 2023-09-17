/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(100, 228, 166)",
        secondary: "rgb(140, 218, 255)",
        danger: "rgb(255, 94, 94)",
        third: "rgb(125, 198, 191)",
        four: "rgb(141, 110, 99)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        moving: {
          "0%": { transform: "translateX(-120px) rotate(360deg)" },
          "25%": { transform: "translateX(120px) rotate(180deg)" },
          "50%": { transform: "translateY(120px) rotate(0deg)" },
          "75%": { transform: "transLateX(-120px) rotate(-180deg)" },
          "100%": { transform: "translateY(0px) rotate(-360deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        moving: "moving 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
