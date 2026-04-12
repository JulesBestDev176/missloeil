import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D6A4F",
        accent: "#52B788",
        hover: "#95D5B2",
        bg: "#F8FFF9",
        dark: "#1B4332",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
        dancing: ["var(--font-dancing)"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 70% 30% / 50% 30% 70% 50%" },
          "50%": { borderRadius: "40% 60% 30% 70% / 70% 50% 30% 50%" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        blob: "blob 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
