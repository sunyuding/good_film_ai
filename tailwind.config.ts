import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cinema: {
          black: "#0a0a0a",
          dark: "#111111",
          gray: "#1a1a1a",
          mid: "#2a2a2a",
          light: "#f5f5f5",
        },
        gold: {
          DEFAULT: "#d4a843",
          light: "#f0d078",
          dark: "#a68a3a",
        },
        accent: {
          DEFAULT: "#4c6ef5",
          light: "#748ffc",
          dark: "#3b5bdb",
        },
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "glow": "glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
