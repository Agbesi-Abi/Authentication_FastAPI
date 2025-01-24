import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        pathway: ["Pathway Gothic One", "serif"], // Add your font here
      },
      colors: {
        background: "var(--primary)",
        foreground: "var(--secondary)",
        dark: "var(--dark)",
        pink: "rgba(217, 65, 135, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
