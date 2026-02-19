/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lobster: '#C0392B',
        seafoam: '#A8D5BA',
        cream: '#FDF6EC',
        warm: {
          50: '#FAF8F5',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
      },
      fontFamily: {
        display: ['Lobster', 'cursive'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
