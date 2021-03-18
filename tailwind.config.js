module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '30r': '30rem',
      'full': '100%',
     },
     maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '30r': '30rem',
      'full': '100%',
     },
    animation: {
      float: 'float 3s infinite',
      refloat: 'refloat 3s infinite',
    },
    keyframes: {
      float: {
        '0%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
        '50%': {
          transform: 'translateY(-15px)',
          animationTimingFunction: 'ease-in-out',
        },
        '100%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
      },
      refloat: {
        '0%': {
          transform: 'translateY(-15px)',
          animationTimingFunction: 'ease-in-out',
        },
        '50%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
        '100%': {
          transform: 'translateY(-15px)',
          animationTimingFunction: 'ease-in-out',
        },
      },
    }
  },
  corePlugins: {},
  plugins: [],
}