import { style } from '@vanilla-extract/css'

export const app = style({
  height: '100%',
  textAlign: 'center',
})

export const demoPageWrap = style({
  backgroundImage:
    '-webkit-linear-gradient(-45deg,22112c0%,22112c60%,30183e60%,30183e65%,29173865%,29173870%,22173070%,22173075%,18162775%,18162780%,22112c80%)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '@media': {
    'only screen and (max-width: 650px)': {
      backgroundImage:
        '-webkit-linear-gradient(-25deg,22112c0%,22112c60%,30183e60%,30183e65%,29173865%,29173870%,22173070%,22173075%,18162775%,18162780%,22112c80%)',
      height: 'auto',
    },
  },
})

export const graphSegment = style({
  alignItems: 'center',
  display: 'flex',
  height: '40%',
  justifyContent: 'center',
  minHeight: '300px',
})

export const info = style({
  background: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-evenly',
  minWidth: '300px',
  overflow: 'hidden',
  width: '20%',
  '@media': {
    'only screen and (max-width: 650px)': {
      paddingBottom: '20px',
      paddingTop: '20px',
      width: '90%',
    },
  },
})

export const playerSegment = style({
  alignItems: 'auto',
  backgroundColor: 'transparent',
  display: 'flex',
  height: '55%',
  justifyContent: 'space-around',
  minHeight: '300px',
  width: '100%',
  '@media': {
    'only screen and (max-width: 650px)': {
      alignItems: 'center',
      flexDirection: 'column',
      height: 'auto',
    },
  },
})
