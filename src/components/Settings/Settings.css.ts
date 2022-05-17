import { style } from '@vanilla-extract/css'

export const settings = style({
  backgroundColor: 'transparent',
  color: 'white',
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const segment = style({
  borderBottom: '1px solid whitesmoke',
  width: '85%',
  height: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const segmentTitle = style({
  fontSize: '17px',
})

export const segmentData = style({
  fontSize: '12px',
  marginLeft: '10px',
})
