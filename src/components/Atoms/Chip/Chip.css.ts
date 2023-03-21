import { style, styleVariants } from '@vanilla-extract/css'
import { theme } from '@/styles/theme.css'

const chipContainerBase = style({
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  height: '90px',
})

export const chipContainer = styleVariants({
  light: [
    chipContainerBase,
    {
      backgroundColor: theme.colors.melrose,
      color: theme.colors.white,
    },
  ],
  dark: [
    chipContainerBase,
    {
      backgroundColor: theme.colors.selago,
      color: theme.colors.mirage,
    },
  ],
})

export const label = style({
  fontWeight: theme.fontWeight.bold,
  lineHeight: '25px',
})

export const value = style({
  fontSize: '30px',
  lineHeight: '30px',
  fontWeight: theme.fontWeight.extraBold,
})
