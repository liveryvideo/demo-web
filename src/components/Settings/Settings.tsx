import React from 'react'
import * as styles from './Settings.css'

const Segment = ({ title, data }) => {
  return (
    <div className={styles.segment}>
      <span className={styles.segmentTitle}>{title}</span>
      <span className={styles.segmentData}>{data}</span>
    </div>
  )
}

const Settings = ({ version, engineName, playbackState, quality, latency, buffer }) => {
  return (
    <div className={styles.settings}>
      <Segment title="Version:" data={version || ''} />
      <Segment title="Engine:" data={engineName || ''} />
      <Segment title="Playback State:" data={playbackState || ''} />
      <Segment title="Quality:" data={quality || ''} />
      <Segment title="Latency:" data={latency || ''} />
      <Segment title="Buffer:" data={buffer || ''} />
    </div>
  )
}

export default Settings
