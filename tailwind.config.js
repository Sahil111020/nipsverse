module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ["'Press Start 2P', cursive;"]
      },
      gridTemplateColumns: {
        '16': '2fr 1fr',
        '61': '1fr 1fr'
      },
      backgroundImage: {
        'featured': "url('./src/imgs/Featured.svg')",
        'roadmap': "url('./src/imgs/RoadMap.svg')",
        'faqframe': "url('./src/imgs/Frame.svg')"
      },
      backgroundSize: {
        '60%': '60%',
        '50%': '50%',
        '20%': '100%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
