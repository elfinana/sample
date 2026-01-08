/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'],
      pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        white: {
          50: '#e4e4e5',
          
          
        },
        grey: {
          50: '#f9fafb',
          100: '#f8f8ff99',
          200: '#e5e8eb',
          300: '#d1d6db',
          400: '#b0b8c1',
          500: '#8b95a1',
          600: '#6b7684',
          700: '#4e5968',
          800: '#333d4b',
          900: '#191f28',
        },
        blue: {
          50: '#3485fa',
          100: '#c9e2ff',
          200: '#90c2ff',
          300: '#64a8ff',
          400: '#4593fc',
          500: '#3182f6',
          600: '#2272eb',
          700: '#1b64da',
          800: '#1957c2',
          900: '#194aa6',
        },
        red: {
          50: '#ffeeee',
          100: '#ffd4d6',
          200: '#feafb4',
          300: '#fb8890',
          400: '#f66570',
          500: '#f04251',
          600: '#e42939',
          700: '#d22030',
          800: '#bc1b2a',
          900: '#a51926',
        },
        greyOpacity: {
          50: 'rgba(0, 23, 51, 0.02)',
          100: 'rgba(2, 32, 71, 0.05)',
          200: 'rgba(0, 27, 55, 0.1)',
          300: 'rgba(0, 29, 58, 0.18)',
          400: 'rgba(0, 25, 54, 0.31)',
          500: 'rgba(3, 24, 50, 0.46)',
          600: 'rgba(0, 19, 43, 0.58)',
          700: 'rgba(3, 18, 40, 0.7)',
          800: 'rgba(0, 12, 30, 0.8)',
          900: 'rgba(2, 9, 19, 0.91)',
        },
      },
    },
  },
  plugins: [],
}

