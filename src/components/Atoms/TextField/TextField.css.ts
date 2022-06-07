import { style } from '@vanilla-extract/css'
import { theme } from '@css/theme.css'

export const input = style({
  boxSizing: 'border-box',
  height: '55px',
  width: '100%',
  padding: '17px 23px 13px',
  lineHeight: '25px',
  border: 'none',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      color: theme.colors.emperor,
    },
  },
})
