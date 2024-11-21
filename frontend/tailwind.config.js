/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      colors: {
        accent: '#99667a',
        'duo-accent': '#744457',
        'confirm-color': '#5aa071',
        'duo-confirm-color': '#518060',
        'deny-color': '#b33a3a',
        'duo-deny-color': '#8a3434',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
};
