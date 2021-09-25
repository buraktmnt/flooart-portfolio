module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        custom_md: '200px 1fr ',
        custom_lg: '300px 1fr ',
        custom_sm_mobile: '25% 70%  ',
      },
      brightness: {
        20: '.20',
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover'],
      brightness: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
