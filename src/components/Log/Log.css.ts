import { style, styleVariants } from '@vanilla-extract/css'
import { theme } from '@css/theme.css'

export const log = style({
  display: 'flex',
  backgroundColor: 'transparent',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
})

export const logBox = style({
  overflowY: 'scroll',
  textAlign: 'left',
  '@media': {
    '(max-width: 991px)': {
      height: '200px',
    },
    '(min-width: 992px)': {
      flex: 1,
    },
  },
})

export const logPanel = style({
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    '(min-width: 500px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    '(min-width: 992px)': {
      flexDirection: 'column',
    },
    '(min-width: 1200px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
})

export const line = style({
  height: '7px',
  margin: '0 0 7px',
  borderRadius: '10px',
  backgroundColor: theme.colors.selagoLight,
})

export const logNavigation = style({
  display: 'flex',
  position: 'relative',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '@media': {
    '(min-width: 768px)': {
      marginRight: '30px',
    },
  },
})

const logNavigationItemBase = style({
  display: 'flex',
  height: '35px',
  padding: '0 10px',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    '(min-width: 768px)': {
      width: '60px',
    },
    '(min-width: 1500px)': {
      width: '75px',
    },
    '(min-width: 1700px)': {
      width: '90px',
    },
  },
})

export const logNavigationItem = styleVariants({
  base: [
    logNavigationItemBase,
    {
      color: theme.colors.melrose,
      textDecoration: 'underline',
    },
  ],
  active: [
    logNavigationItemBase,
    {
      color: theme.colors.mirage,
      fontWeight: 700,
      backgroundColor: theme.colors.selagoLight,
      borderRadius: '10px 10px 0 0',
    },
  ],
})

export const logLevelTitle = style({
  lineHeight: '35px',
})
