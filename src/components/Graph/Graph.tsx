import React from 'react'

import Chip from '@components/Atoms/Chip'
import { PlayerContext } from '@contexts/PlayerContext'

import cx from '@utils/cx'

import * as styles from './Graph.css'

const Graph = ({ className }) => {
  const graphRef = React.useRef(null)
  const { setGraph, buffer, latency } = React.useContext(PlayerContext)

  React.useEffect(() => {
    if (graphRef?.current) {
      setGraph(graphRef?.current)
    }
  }, [])

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.chipsContainer}>
        <Chip label="Buffer" value={buffer} />
        <Chip label="Latency" value={latency} mode="dark" />
      </div>
      <div className={styles.graphContainer}>
        <livery-buffer-graph
          backgroundColor="white"
          textColor="#18162d"
          audioColor="#db93ff"
          bufferColor="#929aff"
          latencyColor="#18162d"
          width="100%"
          ref={graphRef}
        />
      </div>
    </div>
  )
}

export default Graph
