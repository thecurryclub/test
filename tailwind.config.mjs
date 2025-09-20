/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: { xl: "1rem", '2xl': "1.25rem" },
      spacing: { '4.5': '1.125rem', '18': '4.5rem' },

      colors: {
        brand: { DEFAULT: "#F97316", dark: "#C2410C", light: "#FFF3E9" },
        spice: "#F59E0B",
        ink: "#0F172A",
      },
      fontFamily: { sans: ["ui-sans-serif","system-ui","Inter","Segoe UI","Arial","sans-serif"] },
      boxShadow: { soft: "0 10px 30px rgba(249,115,22,0.12)" }
    },
  },
  plugins: [],
}
