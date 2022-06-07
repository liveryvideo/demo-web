import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  colors: {
    white: '#ffffff',
    melrose: '#929aff',
    moodyBlue: '#6e76da',
    mirage: '#18162d',
    selago: '#f3f6fd',
    mauve: '#db93ff',
    malibu: '#71e3ff',
    selagoLight: '#e8eefc',
    emperor: '#545454',
  },
  fontFamily: "'Raleway', sans-serif",
  fontSize: {
    small: '14px',
    medium: '17px',
    large: '20px',
  },
  lineHeight: {
    small: '17px',
    medium: '20px',
    large: '23px',
  },
  fontWeight: {
    regular: '400',
    bold: '700',
    extraBold: '800',
  },
})
