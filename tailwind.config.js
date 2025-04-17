/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors, // ⬅️ mantiene todos los colores por defecto de Tailwind
      green: {
        50: '#f0fdf4',
        100: '#F8F8F8', /* Gris Menu*/
        200: '#898A8D', /* Gris */
        300: '#F97630',
        400: '#4ade80',
        500: '#F97630', /* Naranja */
        600: '#898A8D', /* Gris */
        700: '#898A8D',
        800: '#898A8D', /* Gris */
        900: '#14532d',
        950: '#052e16',

        'brand-primary': 'F8F8F8', // Color Gris
        'brand-hover': '#F97630',   // ColorFris Hover
      },
    },
    extend: {},
  },
  plugins: [],
};