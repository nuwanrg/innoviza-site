import React from 'react'
import styles from './Button.module.scss'
import CN from 'classnames'

export const Button = ({
  children,
  mode,
  appearance,
  size,
  className,
  ...restProps
}) => {
  return (
    <button
      className={CN(
        styles['button'],
        {
          [styles['button--outline']]: mode === 'outline',
          [styles['button--filled']]: mode === 'filled',
          [styles['button--primary']]: appearance === 'primary',
          [styles['button--default']]: appearance === 'default' || !appearance,
          [styles['button--ghost']]: appearance === 'ghost',
          [styles['button--sm']]: size === 'sm',
        },
        className
      )}
      {...restProps}>
      {children}
    </button>
  )
}

export default Button
