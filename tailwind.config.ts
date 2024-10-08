import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-success",
    "bg-error",
    "bg-info",
  ],
  theme: {
    extend: {
      colors: {
        success: "#34D399",
        error: "#EF4444",
        info: "#3B82F6",
      },
    },
  },
  plugins: [],
};
export default config;
