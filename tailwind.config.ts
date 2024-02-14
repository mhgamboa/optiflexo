import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "10dvh": "10dvh",
        "20dvh": "20dvh",
        "30dvh": "30dvh",
        "40dvh": "40dvh",
        "50dvh": "50dvh",
        "60dvh": "60dvh",
        "70dvh": "70dvh",
        "80dvh": "80dvh",
        "90dvh": "90dvh",
        "100dvh": "100dvh",
      },
    },
  },
  plugins: [],
};
export default config;
