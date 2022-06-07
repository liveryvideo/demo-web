import React from 'react'

import cx from '@utils/cx'

import * as styles from './GradientButton.css'

interface ButtonProps {
  children?: React.ReactNode
  className?: string
}

const GradientButton: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, className, ...props },
  ref
) => {
  return (
    <button className={cx(styles.button, className)} {...props} ref={ref} data-testid="GradientButton">
      {children}
    </button>
  )
}

export default React.forwardRef(GradientButton)
