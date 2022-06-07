import React from 'react'
import { useTranslation } from 'react-i18next'

import { LOG_LEVELS } from '@constants/log'

import { PlayerContext } from '@contexts/PlayerContext'

import cx from '@utils/cx'

import * as styles from './Log.css'

interface LogProps {
  className?: string
}

const Log = ({ className }: LogProps) => {
  const { changeLogLevel, logLevel } = React.useContext(PlayerContext)
  const { t } = useTranslation()

  const renderNavigation = React.useMemo(() => {
    return (
      <ul className={styles.logNavigation}>
        {Object.values(LOG_LEVELS).map(({ id, name }) => (
          <li
            key={id}
            className={styles.logNavigationItem[id === logLevel ? 'active' : 'base']}
            onClick={() => changeLogLevel(id)}
          >
            <span>{name}</span>
          </li>
        ))}
      </ul>
    )
  }, [logLevel, changeLogLevel])

  return (
    <div className={cx(styles.log, className)}>
      <div className={styles.logPanel}>
        <span className={styles.logLevelTitle}>{t('log.log_level')}</span>
        {renderNavigation}
      </div>
      <div className={styles.line} />
      <div className={styles.logBox}>
        <livery-log />
      </div>
    </div>
  )
}

export default Log
