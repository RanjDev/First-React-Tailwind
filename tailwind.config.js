module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeOut: "fadeOut 4s cubic-bezier(0.5,0,1,-0.25) forwards",
        fadeInP: "fadeInP 2s ease-in forwards",
        fadeInT: "fadeInT 2s ease-in forwards",
      },
      keyframes: {
        fadeOut: {
          to: { transform: "translateY(-70px)" },
        },
        fadeInP: {
          "0%": { transform: "translateX(300px)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeInT: {
          "0%": { transform: "translateX(-300px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["hover", "focus"],
    },
  },
  plugins: [],
};