module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor:{
      'primary': '#180430',
      'secondary': '#12FED9',
      'tertiory': '#DF1571',
      'newPurple': '#EBE1FF',
      'customBlack':'#040404',
    },
    textColor:{
      'primary1': '#f2f2f2',
      'primary2': '#ffffff',
      'customBlack':'#020202',
      'secondary1': '#12FED9',
      'tertiory1': '#DF1571',
      'newPurple1': '#EBE1FF',
      'twitter': '#1DA1F2',
      'discord': '#7289DA',
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
        'memberframe': "url('./src/imgs/Frame.svg')",
        'mint': "url('./src/imgs/Mint.svg')",
        'featuredlow': "url('./src/imgs/Featuredlow.svg')"
      },
      backgroundSize: {
        '90%': '90%',
        '50%': '50%',
        '55%': '55%',
        '65%': '65%',
        '80%': '80%',
        '120%': '120%',
        '150%': '150%',
        '100%': '100%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
