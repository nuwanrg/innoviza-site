/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './SummaryInNumbers.module.scss'
import CN from 'classnames'
import { CounterBlock } from 'components/molecules'
import Image from 'next/image'
import { useViewport } from 'hooks/useViewport'

export const SummaryInNumbers = ({ className, children, ...restProps }) => {
  const { width, height, isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div
      className={CN(
        styles['summary-in-numbers'],
        'pt-[40px] md:pt-0 pb-[80px] lg:py-[160px] relative z-[1000]',
        className
      )}
      {...restProps}>
      {isMobile && (
        <span className='flex justify-center'>
          <Image
            unoptimized
            src='/muffin-tech-image-002.png'
            alt='summary-in-numbers'
            width={375}
            height={375}
          />
        </span>
      )}

      <div className='container flex flex-col md:flex-row pt-[60px] lg:pt-0'>
        {!isMobile && (
          <div className='summary-in-numbers__left'>
            <Image
              unoptimized
              src='/muffin-tech-image-002.png'
              alt='summary-in-numbers'
              width={600}
              height={600}
            />
          </div>
        )}

        <div className='summary-in-numbers__right max-w-[512px] flex flex-col justify-center text-center md:text-left lg:ml-auto'>
          <h3 className='mb-[20px]'>Quick and easy to get started</h3>

          <p className='mb-[40px] sm:mb-[60px] lg:mb-[80px]'>
            Flexible options that work for you. Allocate resources by the day,
            month, or year.
          </p>

          <div className='summary-in-numbers__counter-blocks grid sm:grid-cols-2 gap-[20px] sm:gap-[40px]'>
            <CounterBlock
              value='Pay in Crypto'
              label='USDT, BTC, ETH or Equity'
            />
            <CounterBlock value='Fast' label='Our team can work at your pace' />
            <CounterBlock
              value='Quality'
              label='All developers technically assessed'
            />
            <CounterBlock
              value='Self Manage'
              label='Our team work alongside your existing team'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryInNumbers
