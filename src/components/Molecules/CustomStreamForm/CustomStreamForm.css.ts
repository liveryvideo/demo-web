import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gridGap: '30px',
})

export const streamSelectCustom = style({
  display: 'flex',
  flexDirection: 'column',
  gridGap: '20px',
  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'row',
    },
  },
})

export const streamSelectSelect = style({
  // backgroundColor: 'white',
  // borderColor: '30183e',
  // color: 'black',
  // fontSize: '0.9em',
  // height: '25px',
  // marginLeft: '5px',
  // width: '80%',
})

export const formContainer = style({
  border: 'none',
  padding: 0,
  margin: 0,
})

export const formLegend = style({
  margin: '0 0 20px',
})

export const streamSelectCustomInput = style({
  flex: 1,
})

export const streamSelectCustomButton = style({
  width: '100%',
  '@media': {
    '(min-width: 768px)': {
      width: '155px',
    },
  },
})
