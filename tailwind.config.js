/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'poker-gold': {
          DEFAULT: '#c19644', // the primary gold hue
          light: '#dfba6f',
          dark: '#937233'
        },
        'poker-dark': {
          DEFAULT: '#0a0a0a', // extremely dark base
          card: '#161616', // slightly lighter for cards
          border: '#2a2a2a'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
