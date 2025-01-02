import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1e1b4b",
        primary: "#8b5cf6",
        secondary: "#3730a3",
        container: "#4338ca",
      },
    },
  },
  plugins: [],
} satisfies Config;
