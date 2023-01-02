const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{tsx}'],
  safelist: [],
  theme: {
    extend: {
      colors: {
        trans: {
          'black-08': 'rgba(0,0,0,.8)'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ]
}
