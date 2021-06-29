module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFDF65',
        },
        gray: {
          lighter: '#E5E5E5',
          light: '#858377',
          DEFAULT: '#636057',
          dark: '#373A3C',
          darker: '#494846',
        },
        white: {
          DEFAULT: '#FFF',
          dark: '#F8F9FA',
          darker: '#E8E8DB',
          darkest: '#EEEEEE',
        },
        'form-white': {
          DEFAULT: '#F7F7F7',
        },
        'form-text': {
          DEFAULT: '#373A3C',
        },
      },
      height: {
        17: '70px',
      },
      spacing: {
        xs: '5px',
        sm: '8px',
        '15px': '15px',
        '18px': '18px',
      },
      fontSize: {
        '3xl': ['32px', '47px'],
      },
      lineHeight: {
        xl: '47px',
        '2xl': '56px',
      },
      letterSpacing: {
        xs: '0.7px',
        sm: '0.8px',
        lg: '2px',
        xl: '2.25px',
        '2xl': '3px',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
      },
      borderRadius: {
        24: '24px',
        26: '26px',
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
