import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { PlayerContext } from '@/contexts/PlayerContext'

import * as styles from './PlayerSettingsInfo.css'

interface SegmentProps {
  title: string
  data: string | number | null
}

const Segment = ({ title, data }: SegmentProps) => {
  return (
    <div className={styles.segment}>
      <span className={styles.segmentTitle}>{title}:</span>
      {data && <span className={styles.segmentData}>{data}</span>}
    </div>
  )
}

const PlayerSettingsInfo = () => {
  const { t } = useTranslation()
  const { engineName, playbackState, quality, version } = useContext(PlayerContext)

  return (
    <div className={styles.container}>
      <Segment title={t('PlayerSettingsInfo.version', 'Version')} data={version} />
      <Segment title={t('PlayerSettingsInfo.engine', 'Engine')} data={engineName} />
      <Segment title={t('PlayerSettingsInfo.playbackState', 'Playback State')} data={playbackState} />
      <Segment title={t('PlayerSettingsInfo.quality', 'Quality')} data={quality} />
    </div>
  )
}

export default PlayerSettingsInfo
