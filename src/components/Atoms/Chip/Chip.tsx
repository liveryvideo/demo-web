import React from 'react'
import cx from '@utils/cx'

import * as styles from './Chip.css'

interface ChipProps {
  mode?: 'light' | 'dark'
  label: string
  value?: string | number
  className?: string
}

const Chip = ({ mode = 'light', label, value, className }: ChipProps) => {
  return (
    <div className={cx(styles.chipContainer[mode], className)} data-testid="Chip">
      <span className={styles.label} data-testid="ChipLabel">
        {label}
      </span>
      <span className={styles.value} data-testid="ChipValue">
        {value}
      </span>
    </div>
  )
}

export default Chip
