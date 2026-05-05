import type { Config } from "tailwindcss"

// Tailwind v4: theme is configured in globals.css via @theme
// This file is kept for any plugin additions
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
}

export default config
