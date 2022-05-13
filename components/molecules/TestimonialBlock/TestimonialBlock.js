/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './TestimonialBlock.module.scss'
import CN from 'classnames'
import { Quote } from 'components/icons'

export const TestimonialBlock = ({
  className,
  children,
  data = {},
  ...restProps
}) => {
  const { quote = '', name = '', logo = '', height, width } = data

  return (
    <div
      className={CN(
        styles['testimonial-block'],
        'pt-[20px] pl-[20px] select-none',
        className
      )}
      {...restProps}>
      <span className='absolute top-0 left-0 z-[-1] opacity-20'>
        <Quote width={84} height={56} />
      </span>
      <p className='testimonial-block__quote mb-[32px]'>{quote}</p>

      {logo && (
        <span className='testimonial-block__logo'>
          <img
            src={logo}
            alt={name}
            width={width || 100}
            height={height || 32}
            className='object-fit'
          />
        </span>
      )}
    </div>
  )
}

export default TestimonialBlock
