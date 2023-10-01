import { useRef, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Chip from '@/components/Atoms/Chip'
import { PlayerContext } from '@/contexts/PlayerContext'

import classNames from '@/utils/classNames'

import * as styles from './Graph.css'

interface GraphProps {
  className?: string
}

const Graph = ({ className }: GraphProps) => {
  const { t } = useTranslation()
  const graphRef = useRef(null)
  const { setGraph, buffer, latency } = useContext(PlayerContext)

  useEffect(() => {
    if (graphRef?.current) {
      setGraph(graphRef?.current)
    }
  }, [setGraph])

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.chipsContainer}>
        <Chip label={t('latency', 'Latency')} value={latency ?? ''} />
        <Chip label={t('buffer', 'Buffer')} value={buffer ?? ''} mode="dark" />
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
