import { style } from '@vanilla-extract/css'

export const settings = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#e8eefc',
  borderRadius: '10px 10px 0 0',
  gridGap: '20px',
  padding: '20px',
  '@media': {
    '(min-width: 1700px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
})

export const title = style({
  margin: 0,
  fontSize: '24px',
  lineHeight: '25px',
  letterSpacing: '-0.44px'
})

