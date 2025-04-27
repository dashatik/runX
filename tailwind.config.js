/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"], // это важно!
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          runx: {
            background: "#0E0E10",
            mint: "#28E2A0",
            blue: "#2F80ED",
            grayText: "#9FA6B2",
          },
        },
      },
    },
    plugins: [],
  };
  