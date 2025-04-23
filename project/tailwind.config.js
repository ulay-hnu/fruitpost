/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf5ff',
          100: '#d0e8ff',
          200: '#a6d6ff',
          300: '#75bbff',
          400: '#3c99ff',
          500: '#0a7bef',
          600: '#0062cc',
          700: '#004ca6',
          800: '#003d85',
          900: '#00336d',
        },
        secondary: {
          50: '#f2fcfd',
          100: '#def5f7',
          200: '#beeaef',
          300: '#8ddbe3',
          400: '#54c2d0',
          500: '#33a1b2',
          600: '#298696',
          700: '#256d79',
          800: '#225965',
          900: '#1e4a54',
        },
        accent: {
          50: '#fdf8ee',
          100: '#f9edd4',
          200: '#f3d9a9',
          300: '#ebc074',
          400: '#e3a54a',
          500: '#dc8d2a',
          600: '#c67121',
          700: '#a3561e',
          800: '#85461e',
          900: '#6e3a1c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'wave': 'wave 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}