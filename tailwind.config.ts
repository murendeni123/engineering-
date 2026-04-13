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
        bg: "#080808",
        "surface-1": "#0E0E0E",
        "surface-2": "#141414",
        "surface-3": "#1C1C1C",
        orange: { DEFAULT: "#FF6200", light: "#FF7A33", dark: "#CC4E00" },
        dark: "#080808",
        charcoal: "#0E0E0E",
        metal: "#2C2C2C",
        "metal-light": "#3D3D3D",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
        display: ["Bebas Neue", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "metal-texture":
          "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)",
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 8px #39FF14)" },
          "50%": { opacity: "0.7", filter: "drop-shadow(0 0 20px #39FF14)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;
