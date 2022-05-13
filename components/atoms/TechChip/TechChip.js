/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './TechChip.module.scss'
import CN from 'classnames'

export const TechChip = ({ className, children, item, ...restProps }) => {
  const { label, logo } = item || {}

  return (
    <div
      className={CN(
        styles['tech-chip'],
        'rounded-[200px] h-[48px] lg:h-[60px] items-center justify-center flex px-[28px] lg:px-[40px]',
        className
      )}
      {...restProps}>
      <img
        src={logo}
        className='w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] mr-[12px]'
        alt={label}
      />
      <span className='text-sm lg:text-base'>{label}</span>
    </div>
  )
}

export default TechChip
