module.exports = {
  purge: [
    './dist/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      //'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      //'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans:      ['CooperHewitt', 'sans-serif'],
      display:   ['lmroman', 'serif'],
      'lm-demi': ['lm-demi', 'serif'],
      'lm-caps': ['lm-caps', 'serif'],
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
