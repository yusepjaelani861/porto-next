module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./constants/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "10px",
      },
      translate: {
        "100vw": "100vw",
        "100vh": "100vh",
      },
      maxWidth: {
        1000: "1000px",
        1200: "1200px",
      },
      spacing: {
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        76: "76px",
        "screen-header": "calc(100vh - 76px)"
      },
      colors: {
        yellow: {
          1: "#FFDC00",
        },
        orange: {
          1: "#FCB813",
        },
        green: {
          1: "#7BCC29",
        },
        turquoise: {
          1: "#5F9DA9",
        },
        blue: {
          1: "#0253a4"
        }
      },
      backgroundImage: {
        "gradient-black": "linear-gradient(to right, #201c1c, #363636, #000000)",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ["active", "hover"],
      fill: ["active", "hover", "focus"],
      aspectRatio: ["responsive"],
      lineClamp: ["responsive"],
    },
  },
};
