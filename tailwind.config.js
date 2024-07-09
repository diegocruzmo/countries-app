/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'countries-primary': '#00668A',
        'countries-secondary': '#004E71'
      },
      fontFamily: {
        Roboto: ['Roboto, sans-serif']
      },
      container: {
        padding: '2rem',
        center: true
      },
      screens: {
        sm: '320px',
        md: '768px'
      }
    }
  },
  plugins: []
}
