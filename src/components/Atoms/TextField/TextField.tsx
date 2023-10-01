import { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef } from 'react'

import classNames from '@/utils/classNames'

import * as styles from './TextField.css'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = ({ className, ...props }, ref) => {
  return <input ref={ref} {...props} className={classNames(styles.input, className)} data-testid="TextField" />
}

export default forwardRef(TextField)
