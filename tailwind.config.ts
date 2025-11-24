import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#af3689',
        secondary: '#da8138',
        success: '#54a404',
        alert: '#e60909',
      },
    },
  },
  plugins: [],
} satisfies Config;
