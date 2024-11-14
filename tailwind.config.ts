import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #f59e0b, #ec4899)',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],  
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        preto: "var(--preto)",
        amarelo: "var(--amarelo)",
        branco: "var(--branco)",
      },
      screens: {
        'xs': {'max': '365px'}, 
        'media': {'max': '860px'}, 
      },
    },
  },
  plugins: [],
};
export default config;
