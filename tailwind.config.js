/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '7.5': '1.875rem', // 30
        '12.5': '3.125rem', // 50
        '15': '3.75rem', // 60
        '25': '6.25rem', //100
      },
      height: {
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '15': '3.75rem',
        '25': '6.25rem',
      },
      margin: {
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '15': '3.75rem',
        '25': '6.25rem',
      },
      padding: {
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '15': '3.75rem',
        '25': '6.25rem',
      },
      gap: {
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '15': '3.75rem',
      }
    },
  },
  plugins: [],
}
