import { style } from '@vanilla-extract/css'
import { theme } from '@css/theme.css';

export const select = style({
  position: 'relative',
  width: '100%',
})

export const button = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  padding: '20px 75px 20px 20px',
  fontSize: '12px',
  lineHeight: '15px',
  textAlign: 'left',
  height: '55px',
  textTransform: 'uppercase',
  transition: '0.5s',
  backgroundSize: '200% auto',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  backgroundImage: `linear-gradient(to right, ${theme.colors.mauve} 0%, ${theme.colors.malibu} 51%, ${theme.colors.mauve} 100%)`,
  fontWeight: 700,
  letterSpacing: '2px',
  cursor: 'pointer',
  zIndex: 2,
})

export const chevron = style({
  position: 'absolute',
  right: 0,
  top: 0,
  width: '55px',
  height: '55px',
  display: 'flex',
  borderRadius: '0 10px 10px 0',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255, 0.2)',
})

export const options = style({
  width: '100%',
  listStyle: 'none',
  padding: '25px 0 15px',
  margin: 0,
  position: 'absolute',
  backgroundSize: '200% auto',
  backgroundColor: theme.colors.white,
  backgroundImage:
    'linear-gradient(to right, rgba(219, 147, 255, 0.5) 0%, rgba(113, 227, 255, 0.5) 51%, rgba(219, 147, 255, 0.5) 100%)',
  top: '45px',
  borderRadius: '0 0 10px 10px',
  zIndex: 1,
  selectors: {
    '&:hover': {},
  },
})

export const option = style({
  margin: '0 2px',
  cursor: 'pointer',
  fontSize: '14px',
  lineHeight: '17px',
  padding: '14px 18px',
  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.white,
    },
    '&[aria-disabled]': {
      opacity: 0.5,
    },
  },
})
