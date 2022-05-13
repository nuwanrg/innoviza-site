import React from 'react'
import styles from './FooterBg.module.scss'
import CN from 'classnames'

export const FooterBg = ({ className, children, ...restProps }) => {
  return (
    <div
      className={CN(
        styles['footer-bg'],
        'absolute left-0 right-0 mt-[-560px] z-[-1]',
        className
      )}
      {...restProps}>
      <img
        src='/footer.png'
        alt='Footer bg image'
        className='w-full h-[679px]'
      />
    </div>
  )
}

export const FooterBgMobile = ({ className, children, ...restProps }) => {
  return (
    <div
      className={CN(
        styles['footer-bg__mobile'],
        'top-[-240px] md:top-[-240px] bg-cover bg-no-repeat bg-center z-[-1]',
        className
      )}
      {...restProps}
    />
  )
}

export default FooterBg
