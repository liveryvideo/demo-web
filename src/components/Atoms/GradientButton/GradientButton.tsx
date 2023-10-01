import { forwardRef, useRef, ButtonHTMLAttributes, ForwardedRef, ReactNode } from 'react'
import classNames from '@/utils/classNames'

import * as styles from './GradientButton.css'

export interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ children = 'normal', className, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const commonRef = ref || buttonRef

    return (
      <button className={classNames(styles.button, className)} {...props} ref={commonRef} data-testid="GradientButton">
        {children}
      </button>
    )
  }
)

export default GradientButton
