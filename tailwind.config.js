/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          50: "#eef2f7",
          100: "#d5dce8",
          200: "#abb8d1",
          300: "#8195ba",
          400: "#5771a3",
          500: "#3a5282",
          600: "#2a3d66",
          700: "#1c2f52",
          800: "#192f59",
          900: "#0f1b2d",
          950: "#080f1a",
        },
        gold: {
          50: "#fdf8ed",
          100: "#f9edcc",
          200: "#f2d994",
          300: "#e8c45f",
          400: "#dbb13a",
          500: "#c9a84c",
          600: "#a8882e",
          700: "#876d24",
          800: "#6e5921",
          900: "#5d4b1f",
        },
        crimson: {
          50: "#fef2f3",
          100: "#fde6e7",
          200: "#fbd0d4",
          300: "#f7a9b0",
          400: "#f17885",
          500: "#e84a5c",
          600: "#d60a20",
          700: "#b8081b",
          800: "#980a1a",
          900: "#810e1d",
        },
        cream: "#f8f7f4",
        charcoal: "#1a1a2e",
      },
    },
  },
  plugins: [],
};

export default config;