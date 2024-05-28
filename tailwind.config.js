/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': 'rgba(86, 59, 255, 1)',
        'body': 'rgba(247, 248, 251, 1)',
        'orange': 'rgba(255, 112, 73, 1)',
        'green': 'rgba(32, 201, 151, 1)',
        'primary': 'rgba(21, 19, 75, 1)',
        'secondary': 'rgba(90, 88, 129, 1) '
      },
      fontFamily: {
        rbold: 'rbold',
        rmedium: 'rmedium',
        regular: 'regular'
      },
    }
  },
  plugins: [],
}