import { style } from '@vanilla-extract/css'
import { theme } from '@css/theme.css'

export const button = style({
  padding: '20px',
  fontSize: '12px',
  lineHeight: '15px',
  textAlign: 'center',
  textTransform: 'uppercase',
  transition: '0.5s',
  backgroundSize: '200% auto',
  color: theme.colors.white,
  boxShadow: '0 0 20px #eee',
  border: 'none',
  borderRadius: '10px',
  backgroundImage: `linear-gradient(to right, ${theme.colors.mauve} 0%, ${theme.colors.malibu} 51%, ${theme.colors.mauve} 100%)`,
  fontWeight: 700,
  letterSpacing: '2px',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundPosition: 'right center',
    },
    '&:active': {
      backgroundImage: `linear-gradient(to right, ${theme.colors.melrose} 0%, ${theme.colors.melrose} 51%, ${theme.colors.melrose} 100%)`,
    },
  },
})
