
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-neon': '#38F205',
        'verde-claro': '#2CBF04',
        'verde-base': '#218C03',
        'verde-oscuro': '#0F4001',
        'fondo-oscuro': '#0D0D0D',
      }
    },
  },
  plugins: [],
}