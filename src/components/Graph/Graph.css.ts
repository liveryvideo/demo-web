import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
})

export const chipsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gridGap: '15px',
})

export const graphContainer = style({
  overflow: 'hidden',
})
