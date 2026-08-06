/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d1117',
        slate: '#161d27',
        mist: '#d9e2ec',
        sand: '#f5f1e8',
        steel: '#7c8b9b',
        accent: '#86a8c8',
        glow: '#d2b48c',
      },
      boxShadow: {
        panel: '0 20px 70px rgba(15, 23, 42, 0.18)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(134, 168, 200, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(134, 168, 200, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
