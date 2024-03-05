/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '42px',
        xl: '32px',
      },
    },
    extend: {
      colors: {
        primaryText: '#2E2D4D',
        primary: '#337357',
        secondary: '#6D9F71',
        greyBorder: '#E4E3D3',
      },
    },
    plugins: [],
  }}
