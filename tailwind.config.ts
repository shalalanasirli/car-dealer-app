import type { Config } from "tailwindcss"

const config: Config = {
  content: [
      "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
