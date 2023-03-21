import { useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { LOG_LEVELS } from '@/constants/log'

import classNames from '@/utils/classNames'

import * as styles from './Log.css'
import { PlayerConfigurationContext } from '@/contexts/PlayerConfigurationContext'

interface LogProps {
  className?: string
}

const Log = ({ className }: LogProps) => {
  const { logLevel, setLogLevel } = useContext(PlayerConfigurationContext)

  const { t } = useTranslation()

  const renderNavigation = useMemo(() => {
    return (
      <ul className={styles.logNavigation}>
        {Object.values(LOG_LEVELS).map(({ id, name }) => (
          <li
            key={id}
            className={styles.logNavigationItem[id === logLevel ? 'active' : 'base']}
            onClick={() => setLogLevel(id)}
          >
            <span>{name}</span>
          </li>
        ))}
      </ul>
    )
  }, [logLevel])

  return (
    <div className={classNames(styles.log, className)}>
      <div>
        <div className={styles.logPanel}>
          <span className={styles.logLevelTitle}>{t('log.log_level')}</span>
          {renderNavigation}
        </div>
        <div className={styles.line} />
      </div>
      <div className={styles.logBox}>
        <livery-log />
      </div>
    </div>
  )
}

export default Log
