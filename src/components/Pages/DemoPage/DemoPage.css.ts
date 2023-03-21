import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/styles/theme.css'

export const row = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  gridGap: '20px',
  '@media': {
    [breakpoints.tablet]: {
      flexDirection: 'row',
    },
  },
})

export const rowT = style({
  paddingBottom: '0px',
  '@media': {
    [breakpoints.tablet]: {
      paddingBottom: '0px',
    },
    [breakpoints.desktop]: {
      paddingBottom: '0px',
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
  '@media': {
    [breakpoints.tablet]: {
      width: '45%',
    },
    [breakpoints.desktop]: {
      width: '40%',
    },
  },
})

export const playerSegment = style({
  display: 'flex',
  flexDirection: 'column',
  gridArea: 'player',

  flex: 1,
})

export const playerContainer = style({
  display: 'flex',
  flex: 1,
  minHeight: '300px',
  overflow: 'hidden',
})

export const graphSegment = style({
  display: 'flex',
  flex: 1,

  order: -1,
  '@media': {
    [breakpoints.tablet]: {
      order: 2,
    },
  },
})

export const logSegment = style({
  overflow: 'hidden',
  '@media': {
    [breakpoints.tablet]: {
      width: '45%',
    },
    [breakpoints.desktop]: {
      width: '40%',
    },
  },
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const formsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gridGap: '20px',
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
