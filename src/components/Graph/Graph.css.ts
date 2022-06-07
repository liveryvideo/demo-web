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
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
})

export const graph = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width:'100%',
  height:'100%',
})
