/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#5B21B6",
        blue: "#081529",
      },
      backgroundImage: {
        bg: "url('/portofolio/public/IrM.gif')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    darkTheme: "light",
  },
};
