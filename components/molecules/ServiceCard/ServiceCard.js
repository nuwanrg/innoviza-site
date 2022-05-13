import React from 'react'
import styles from './ServiceCard.module.scss'
import CN from 'classnames'
import { Tick } from 'components/icons'

export const ServiceCard = ({
  className,
  children,
  heading,
  list,
  ...restProps
}) => {
  return (
    <div
      className={CN(
        styles['service-card'],
        'rounded-[28px] pl-[48px] pt-[80px] pb-[64px]',
        className
      )}
      {...restProps}>
      <h5 className='mb-[40px] mt-[-104px] font-600'>{heading}</h5>

      <ul
        className={CN(styles['service-card__list'], 'flex flex-col gap-[8px]')}>
        {list.map(({ label }, index) => (
          <li key={index} className='flex items-center'>
            <Tick /> <span className='pl-[12px]'>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceCard
