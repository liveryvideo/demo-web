import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
})

export const segment = style({
  position: 'relative',
  letterSpacing: '0.3px',
  margin: 0,
  '@media': {
    '(min-width: 768px)': {
      marginRight: '25px',
      selectors: {
        '&:last-child': {
          marginRight: 0,
        },
        '&:after': {
          position: 'absolute',
          right: '-16px',
          content: '-'
        },
        '&:last-child:after': {
          display: 'none',
        },
      }
    },
  },
})

export const segmentTitle = style({
  marginRight: '5px',
})

export const segmentData = style({

})
