/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-sans)', 'sans-serif'], // esto usa la variable personalizada que pusiste
        },
      },
    },
    plugins: [],
  };
  