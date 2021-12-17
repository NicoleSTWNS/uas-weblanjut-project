const tailwindcss = require('tailwindcss');

module.exports = {
  purge: [],
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
       })
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}