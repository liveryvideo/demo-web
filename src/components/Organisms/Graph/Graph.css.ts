import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gridGap: '15px',
  '@media': {
    '(min-width: 992px)': {
      gridGap: 0,
      alignItems: 'top',
      flexDirection: 'row',
    },
  },
})

export const chipsContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gridGap: '15px',
  justifyContent: 'center',
  order: 2,
  '@media': {
    '(min-width: 992px)': {
      justifyContent: 'flex-start',
      flexDirection: 'column',
      order: 1,
    },
  },
})

export const graphContainer = style({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  minHeight: '200px',
  order: 1,
  '@media': {
    '(min-width: 992px)': {
      order: 2,
    },
  },
})

export const graph = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
})
