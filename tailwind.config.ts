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
        "dark-magenta": "#8E398E",
        "soft-pink": "#ee68a4",
        "dark-grayish-magenta": "#937b92",
        "light-grayish-magenta": "#f7f2f7",
      },
    },
  },
  plugins: [],
};
export default config;
