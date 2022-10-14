/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',

        cyan: {
          500 : '#81D8F7',
          300 : '#C6F0FF',
        },
        gray: {
          900 : '#121214',
          800 : '#202024',
          400 : '#7C7C8A',
          200 : '#C4C4C4',
          100 : '#E1E1E6',
        }
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
