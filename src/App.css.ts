import { style } from '@vanilla-extract/css'

export const app = style({
  display: 'grid',
  gridGap: '20px',
  gridTemplateAreas: '"info" "player" "graph" "log"',
  '@media': {
    '(min-width: 992px)': {
      gridGap: '40px',
      gridTemplateColumns: '40% 1fr',
      gridTemplateAreas: '"info player" "log graph"',
    },
    '(min-width: 1200px)': {
      gridTemplateColumns: '35% 1fr',
    },
    '(min-width: 1800px)': {
      gridTemplateColumns: '600px 1fr',
    },
  },
})

export const infoSegment = style({
  display: 'flex',
  padding: '20px',
  backgroundColor: '#e8eefc',
  borderRadius: '10px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: '300px',
  overflow: 'hidden',
  '@media': {
    '(min-width: 1200px)': {
      paddingLeft: '30px',
      paddingRight: '30px',
      paddingBottom: '40px',
      paddingTop: '70px',
    },
  },
})

export const playerSegment = style({
  display: 'flex',
  flexDirection: 'column',
  gridArea: 'player'
})

export const playerContainer = style({
  display: 'flex',
  flex: 1,
  minHeight: '300px',
  overflow: 'hidden'
})

export const graphSegment = style({
  gridArea: 'graph',
})

export const logSegment = style({
  gridArea: 'log',
  overflow: 'hidden',
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const logo = style({
  width: '150px',
  marginBottom: '20px',
  '@media': {
    '(min-width: 1200px)': {
      marginBottom: '45px',
    },
  },
})

export const chipBuffer = style({
  gridArea: 'buffer'
})

export const chipLatency = style({
  gridArea: 'latency'
})

export const graph = style({
  gridArea: 'graph'
})
