import type { Config } from "tailwindcss";

const config: Config = {
  important: false,
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "3/4": "3/4"
      },
      colors: {
        "green-lt": "rgba(44, 211, 120, 0.78)",
        "sell-red": "rgba(255, 0, 0, 0.78)"
      },
      boxShadow: {
        "inset": "inset 0px 0px 3px #a7a7a7",
      },
      backgroundColor: {
        "lite-black": "#0f0e0e",
        "btn-red": "rgb(233 0 0)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
