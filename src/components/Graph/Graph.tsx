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
  }, [setGraph])

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.chipsContainer}>
        <Chip label="Latency" value={latency} />
        <Chip label="Buffer" value={buffer} mode="dark" />
      </div>
      <div className={styles.graphContainer}>
        <div className={styles.graph}>
          <livery-buffer-graph
            backgroundColor="white"
            textColor="#18162d"
            audioColor="#db93ff"
            bufferColor="#18162d"
            latencyColor="#929aff"
            width="100%"
            ref={graphRef}
          />
        </div>
      </div>
    </div>
  )
}

export default Graph
