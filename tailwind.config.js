/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#3B3B3B',
        'custom-gray': '#595959',
        'custom-gray2': '#8C8C8C',
        'custom-gray3': '#BFBFBF',
        'custom-white': '#F2F2F2',

      }
    },
  },
  plugins: [],
}