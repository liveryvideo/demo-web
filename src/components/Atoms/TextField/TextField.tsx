import React from 'react'

import cx from '@utils/cx'

import * as styles from './TextField.css'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const TextField: React.ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = ({ className, ...props }, ref) => {
  return <input ref={ref} {...props} className={cx(styles.input, className)} data-testid="TextField" />
}

export default React.forwardRef(TextField)
