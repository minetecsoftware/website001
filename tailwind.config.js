/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors, // ⬅️ mantiene todos los colores por defecto de Tailwind
      green: {
        50: '#f0fdf4',
        100: '#F8F8F8', /* Gris Menu */
        200: '#898A8D', /* Gris */
        300: '#F97630',
        400: '#4ade80',
        500: '#F97630', /* Naranja */
        600: '#898A8D', /* Gris */
        700: '#898A8D',
        800: '#898A8D', /* Gris */
        900: '#14532d',
        950: '#052e16',
        'brand-primary': 'F8F8F8',
        'brand-hover': '#F97630',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },


      keyframes: {
        'fade-out-up': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-out-up': 'fade-out-up 0.3s ease forwards',
        'fade-in-down': 'fade-in-down 0.3s ease forwards',
      },

    },
  },
  plugins: [],
};

