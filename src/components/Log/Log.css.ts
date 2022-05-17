import { style } from '@vanilla-extract/css'

export const log = style({
  alignItems: 'center',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: '50%',
  justifyContent: 'center',
  width: '100%',
  '@media': {
    'only screen and (max-width: 650px)': {
      height: '250px',
      marginTop: '20px',
    },
  },
})

export const logBox = style({
  backgroundColor: 'rgba(75,75,75,0.349)',
  borderTop: '1px solid grey',
  color: 'white',
  height: '85%',
  overflowY: 'scroll',
  textAlign: 'left',
  width: '90%',
})

export const logLevelWrap = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom: '5px',
  position: 'relative',
  width: '90%',
})

export const logLevelTitle = style({
  color: 'white',
})

export const logLevelSelect = style({
  backgroundColor: 'white',
  borderColor: '#30183e',
  color: 'black',
  fontSize: '1em',
  textAlign: 'center',
  width: '50%',
})
