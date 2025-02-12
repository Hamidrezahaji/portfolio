/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFA3', // رنگ آکسنتی (سبز)
        secondary: '#1E1E1E', // رنگ تیره برای پس‌زمینه
        text: '#FFFFFF', // متن سفید
        gray: '#A0A0A0', // خاکستری برای متن‌های فرعی
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // فونت اصلی
      },
    },
  },
  plugins: [],
};