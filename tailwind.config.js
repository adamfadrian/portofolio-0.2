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
        purple: "#132f4c",
        blue: "#001E3C",
        purple2: "#132f4c",
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
