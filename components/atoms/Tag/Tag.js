import React from 'react'
import styles from './Tag.module.scss'
import CN from 'classnames'

export const Tag = ({ className, children, ...restProps }) => {
  return (
    <div
      className={CN(
        styles['tag'],
        'rounded-full text-sm py-[8px] px-[40px] font-500',
        className
      )}
      {...restProps}>
      {children}
    </div>
  )
}

export default Tag
