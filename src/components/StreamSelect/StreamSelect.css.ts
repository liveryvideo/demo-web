import { style } from '@vanilla-extract/css'

export const optionsBar = style({
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255,0.137)',
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  height: '65px',
  justifyContent: 'center',
  marginBottom: '10px',
  minHeight: '65px',
  paddingBottom: '5px',
  '@media': {
    'only screen and (max-width: 600px)': {
      flexDirection: 'column',
      height: '65px',
      minHeight: '65px',
      overflow: 'hidden',
    },
  },
})

export const streamSelectCustom = style({
  alignItems: 'center',
  display: 'flex',
  height: '30px',
  justifyContent: 'center',
})

export const streamSelectDropdown = style({
  alignItems: 'center',
  display: 'flex',
  height: '30px',
  justifyContent: 'center',
  minWidth: '150px',
  width: '60%',
})

export const streamSelectWrap = style({
  alignItems: 'center',
  display: 'flex',
  selectors: {
  },
  '@media': {
    'only screen and (max-width: 600px)': {
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'center',
      width: 'auto',
    },
  },
})

export const streamSelectInput = style({
  backgroundColor: 'whitesmoke',
  border: '0',
  height: '25px',
  marginLeft: '5px',
  width: '50%',
})
export const streamSelectSelect = style({
  backgroundColor: 'white',
  borderColor: '30183e',
  color: 'black',
  fontSize: '0.9em',
  height: '25px',
  marginLeft: '5px',
  width: '80%',
})
