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
        red: "#E06C75",
        green: "#98C379",
        yellow: "#E5C07B",
        orange: "#D19A66",
        ungu: "#C678DD",
        cycan: "#56B6C2",
        biru: "#61AFEF",
        lightComment: "#abb2bf10"
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
