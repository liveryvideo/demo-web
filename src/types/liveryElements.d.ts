import { DetailedHTMLProps } from 'react'

export type CustomElement<T = {}> = DetailedHTMLProps<T, HTMLElement>

export interface LiveryPlayer {
  streamId: string
}

export interface LiveryBufferGraph {
  audioColor?: string | null
  backgroundColor?: string | null
  bubbles?: boolean
  bufferColor?: string | null
  latencyColor?: string | null
  maxRows?: number
  textColor?: string | null
  updateInterval?: number
  videoColor?: string | null
  width?: string
}

export interface LiveryLog {
  maxLineLength?: number
  maxLines?: number
  maxLogLines?: number
}

export declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['livery-player']: CustomElement<LiveryPlayer>
      ['livery-buffer-graph']: CustomElement<LiveryBufferGraph>
      ['livery-log']: CustomElement<LiveryLog>
    }
  }
}
