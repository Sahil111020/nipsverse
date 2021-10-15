module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor:{
      'primary': '#180430',
      'secondary': '#12FED9',
      'tertiory': '#DF1571',
      'newPurple': '#EBE1FF'
    },
    extend: {
      fontFamily: {
        'press-start': ["'Press Start 2P', cursive;"],
        'poppins': ["'Poppins', sans-serif"]
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
