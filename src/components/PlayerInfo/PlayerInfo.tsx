import React from 'react'
import PlayerSettingsInfo from '@components/PlayerSettingsInfo'
import * as styles from './PlayerInfo.css'

interface PlayerInfoProps {
  title: string
}

const PlayerInfo = ({ title }: PlayerInfoProps) => (
  <div className={styles.settings}>
    <h2 className={styles.title}>{title}</h2>
    <PlayerSettingsInfo />
  </div>
)

export default PlayerInfo
