import React from 'react'

import { PlayerContext } from '@contexts/PlayerContext'

import * as styles from './PlayerSettingsInfo.css'

const Segment = ({ title, data }) => {
  return (
    <div className={styles.segment}>
      <span className={styles.segmentTitle}>{title}:</span>
      <span className={styles.segmentData}>{data}</span>
    </div>
  )
}

const PlayerSettingsInfo = () => {
  const { engineName, playbackState, quality, version } = React.useContext(PlayerContext)

  return (
    <div className={styles.container}>
      <Segment title="Version" data={version} />
      <Segment title="Engine" data={engineName} />
      <Segment title="Playback State" data={playbackState} />
      <Segment title="Quality" data={quality} />
    </div>
  )
}

export default PlayerSettingsInfo
