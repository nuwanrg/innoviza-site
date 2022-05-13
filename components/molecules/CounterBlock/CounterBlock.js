import React from 'react'
import styles from './CounterBlock.module.scss'
import CN from 'classnames'
import { useViewport } from 'hooks/useViewport'

export const CounterBlock = ({
  className,
  children,
  prefix,
  postfix,
  value,
  label,
  ...restProps
}) => {
  const { width, height, isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div
      className={CN(
        styles['counter-block'],
        'flex flex-col text-white items-center sm:items-start sm:text-left',
        className
      )}
      {...restProps}>
      <h5 className='counter-block__value'>{`${prefix || ''}${value || ''}${
        postfix || ''
      }`}</h5>

      <span className='counter-block__label text-off-white max-w-[240px]'>{label}</span>
    </div>
  )
}

export default CounterBlock
