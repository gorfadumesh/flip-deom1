/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Color Code
      colors: {
        black: "#000",
        white: "#fff",
        darkblue: "#172337"
      },

      // Font Size [Font-Size, Line-Hight]
      fontSize: {
        10: ["10px", "14px"],
        11: ["11px", "15px"],
        13: ["13px", "18px"],
        15: ["15px", "24px"],
        17: ["17px", "26px"],
        22: ["22px", "30px"],
        27: ["27px", "40px"],
        42: ["42px", "62px"],
        58: ["58px", "86px"],
      },

      // Border Radius
      borderRadius: {
        4: "4px",
        6: "6px",
        10: "10px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
      },

      // Z-Index
      zIndex: {
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },

    // Media Query Screen Size
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }

      xs: "375px",
      // => @media (min-width: 375px) { ... }

      ssm: "475px",
      // => @media (min-width: 475px) { ... }

      sm: "576px",
      // => @media (min-width: 576px) { ... }

      mmd: "767px",
      // => @media (min-width: 767px) { ... }

      md: "991px",
      // => @media (min-width: 991px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  darkMode: "class",
  plugins: [],
};