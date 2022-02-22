module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      backgroundImage: {
        hell: "url('./src/Img/hell.gif')",
        rainforest: "url('./src/Img/rainforest.gif')",
      },
      colors: {
        bodyColor: "#252525",
        borderColor: "#B64530",
        mainColor: "#38a4a4",
        headerColor: "#ff9441",
        bottomColor: "#de5239",
      },
    },
  },
  plugins: [],
};
