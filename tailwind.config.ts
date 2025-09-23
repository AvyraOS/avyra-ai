import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        'instrument-serif': ['var(--font-instrument-serif)', 'serif'],
        'sans': ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        'serif': ['var(--font-instrument-serif)', 'serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
