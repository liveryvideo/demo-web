import React from 'react'

import { LOG_LEVELS } from '@constants/log'

import * as styles from './Log.css'

const Log = ({ callback }) => {
  const [currentLoglevel, setCurrentLoglevel] = React.useState(LOG_LEVELS.error.id)

  const handleLevelChange = React.useCallback(
    event => {
      setCurrentLoglevel(event.target.value)
      setUrlParams(event.target.value)
      callback(event.target.value)
    },
    [callback]
  )

  const setUrlParams = level => {
    let params = new URLSearchParams(window.location.search)
    params.set('log', level)
    window.history.pushState(level, level, '?' + params)
  }

  return (
    <div className={styles.log}>
      <div className={styles.logLevelWrap}>
        <span className={styles.logLevelTitle}>Log level: </span>
        <select className={styles.logLevelSelect} onChange={handleLevelChange} value={currentLoglevel} id="log-level">
          {Object.values(LOG_LEVELS).map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.logBox}>
        {/*
           // @ts-ignore */}
        <livery-log />
      </div>
    </div>
  )
}

export default Log
