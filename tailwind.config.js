/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        sakura: "sakura 10s linear infinite",
        fadeIn: "fadeIn 1.2s ease-in-out forwards",
        fireworks: "fireworks 1s ease-out forwards",
      },
      keyframes: {
        sakura: {
          "0%": { transform: "translateY(-10%) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fireworks: {
          "0%": { transform: "scale(0)", opacity: 1 },
          "100%": { transform: "scale(3)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};