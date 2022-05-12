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
  backgroundColor: '#221730 !important'
})

globalStyle('code', {
  fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
})
