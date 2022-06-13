import { globalStyle } from '@vanilla-extract/css'
import { theme } from './theme.css'

globalStyle('body', {
  margin: 0,
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.medium,
  lineHeight: theme.lineHeight.medium,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  '@media': {
    '(max-width: 991px)': {
      fontSize: theme.fontSize.tiny,
      lineHeight: theme.lineHeight.tiny,
    },
  },
})

globalStyle('html, body, #app, #root, #app', {
  minHeight: '100vh',
  backgroundColor: theme.colors.white,
})

globalStyle('#root', {
  padding: '10px',
})

globalStyle('code', {
  fontFamily: '"Raleway", sans-serif',
})

globalStyle('livery-buffer-graph', {
  backgroundColor: 'rgba(255,255,255,0.137)',
  width: '100%',
})

globalStyle('livery-player', {
  width: '100%',
  minWidth: 0,
  objectFit: 'contain',
  zIndex: 999,
  justifySelf: 'flex-start',
})

globalStyle('a', {
  color: theme.colors.melrose,
})

globalStyle('a:hover', {
  color: theme.colors.moodyBlue,
})

globalStyle('a:active', {
  color: theme.colors.mirage,
})

globalStyle('p', {
  margin: '0 0 25px',
})

globalStyle('livery-log::part(clipboard-button)', {
  display: 'none',
})
