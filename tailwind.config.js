/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgTopHeader: '#464855',
        textGray: '#e5e5e5',
        textBlack: '#121212',
        textGold: '#de8a14',
        green: '#cff1df',
      },
    },
  },
  plugins: [],
}
