/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-right":
          "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-in-left":
          "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-to-up": "slide-to-up 1s both  ",
        "slide-in-from-left": "slide-in-from-left 1s both",
      },
      keyframes: {
        "slide-right": {
          "0%": {
            transform: "translateX(-100px)",
          },
          to: {
            transform: "translateX(0px)",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-1000px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-to-up": {
          "0%": {
            transform: "translateX(0px)",
          },
          to: {
            transform: "translateX(-100)",
          },
        },
        "slide-in-from-left": {
          "0%": {
            transform: "translateX(100px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
    },
    colors: {
      "soft-blue": "#7fb3d5",
      "muted-green": "#a7c957",
      "pale-lavender": "#d3bcc0",
      "warm-gray": "#c9ccd3",
      "creamy-white": "#f5f5f5",
    },
  },
  plugins: [],
});
