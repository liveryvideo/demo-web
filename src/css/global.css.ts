import { globalStyle } from '@vanilla-extract/css'
import { theme } from './theme.css'

globalStyle('body', {
  margin: 0,
  fontFamily: theme.fontFamily,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('html, body, #app, #root, #app', {
  height: '100%',
  backgroundColor: '#221730 !important',
})

globalStyle('code', {
  fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
})

globalStyle('livery-buffer-graph', {
  backgroundColor: 'rgba(255,255,255,0.137)',
  width: '100%',
})

globalStyle('livery-player', {
  justifySelf: 'flex-start',
  minWidth: '0',
  objectFit: 'contain',
  width: '70%',
  zIndex: '999',
  '@media': {
    'only screen and (max-width: 650px)': {
      height: '50vh',
      width: '100%',
    },
  },
})

globalStyle('fieldset', {
  alignItems: 'flex-start',
  borderColor: 'rgba(255,255,255,0.082)',
  display: 'flex',
  justifyContent: 'center',
  margin: '1px 5px 1px 5px',
  maxWidth: '350px',
  minWidth: '150px',
  padding: '5px',
  width: '20vw',
})

globalStyle('legend', {
  fontSize: '15px',
})

globalStyle('button', {
  backgroundColor: '#0000ff',
  border: '1px solid blue',
  color: 'white',
  display: 'block',
  fontFamily: 'Arial , Helvetica , sans-serif',
  fontSize: '14px',
  fontWeight: '600',
  height: '29px',
  marginLeft: '10px',
  minWidth: '55px',
  textTransform: 'uppercase',
  transition: 'transform 0.3s',
  width: '30%',
  '@media': {
    'only screen and (max-width: 600px)': {
      margin: '5px',
      padding: '0px 10px 0px 10px',
    },
  },
})

globalStyle('button:hover', {
  backgroundColor: '#0000dc',
  cursor: 'pointer',
  textDecoration: 'underline',
  transform: 'skewX(-10deg)',
})
