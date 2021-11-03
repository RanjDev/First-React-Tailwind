module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeOut: "fadeOut 3s cubic-bezier(0.5,0,1,-0.25) forwards",
        fadeInP: "fadeInP 2s ease-in-out forwards",
        fadeInT: "fadeInT 2s ease-in-out forwards",
      },
      keyframes: {
        fadeOut: {
          to: { transform: "translateY(-100px)" },
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
