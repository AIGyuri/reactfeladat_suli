module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "dark-red": "#8B0000",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
};