module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      backgroundImage: {
        hell: "url('./src/Img/hell.gif')",
        pokeBG: "url('./src/Img/pokeBG.png)",
      },
      colors: {
        bodyColor: "#252525",
        borderColor: "#B64530",
        mainColor: "#38a4a4",
        headerColor: "#ff9441",
        bottomColor: "#de5239",
        bg1Color: "#e8f4ec",
        bg2Color: "#448c8c",
        spanColor: "#c0b484",
      },
    },
  },
  plugins: [],
};

// TODO: Delete unused colors
