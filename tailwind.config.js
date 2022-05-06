module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
    },
    screens: {
      'sm': '50rem',
      // => @media (min-width: 640px) {...}

      'md': '76.7rem',
      // => @media (min-width: 800px) {...}

      'lg': '102.3rem',
      // => @media (min-width: 1024px) {...}

      'xl': '118rem',
      // => @media (min-width: 1280px) {...}

      '2xl': '153.6rem',
      // => @media (min-width: 1536px) {...}
    },
    variants: {
    },
    colors: {
      'black': '#272727',
      'blue': '#3865A7',
      'gold': '#C2AB81',
      'yellow': '#FFFF04',
      'yellowHover': '#F9F900',
      'gray': '#A6A8B0',
      'grayDark': '#747680',
      'grayLight': '#E5E5E5',
      'grayLightest': '#F7F7F7',
      'white': '#FFFFF',
      'purple': '#B18CBE',
      'violet-t': 'rgba(64, 25, 65, 0.5)',
      'red': '#FE5F5F'
    },
    size: {
      'base-size': '1rem',
    }
  },
  plugins: [],
}
