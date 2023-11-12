/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'ambar-primary': '#fbb200',
        'red-secundary': '#f22e3e'
      }
    },
  },
  plugins: [],
}

