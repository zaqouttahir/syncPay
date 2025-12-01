/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'text-main': '#00291F',
        'text-gray': '#6B7280',
        'custom-green': '#00C897',
        'custom-red': '#E74C3C',
      },
    },
  },
  plugins: [],
};
