import React from 'react'
import Image from 'next/image'
import CN from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { TestimonialBlock } from 'components/molecules'
import { Blob5, Blob5Mobile } from 'components/atoms'
import { useViewport } from 'hooks/useViewport'

import styles from './Testimonials.module.scss'
import 'swiper/css'
import 'swiper/css/autoplay'

export const Testimonials = ({ className, children, ...restProps }) => {
  const { isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div
      className={CN(
        styles['testimonials'],
        'md:pt-[160px] lg:pt-[260px] relative px-[32px] lg:px-0',
        className
      )}
      {...restProps}>
      {(isMobile || isTablet) && <Blob5Mobile />}
      {/* {isDesktop && <Blob5 />} */}

      {isMobile && (
        <span className='flex justify-center'>
          <Image
            unoptimized
            src='/muffin-tech-image-003.png'
            alt='hero'
            width={375}
            height={375}
          />
        </span>
      )}

      <div
        className={CN(
          'container relative rounded-[12px] lg:rounded-[28px] pb-[60px] lg:pb-[100px] mt-[80px] w-auto lg:w-full',
          styles['container']
        )}>
        {isDesktop && (
          <div className='absolute top-[-300px] right-0 testimonials__vector'>
            <Image
              unoptimized
              src='/muffin-tech-image-003.png'
              alt='hero'
              width={425}
              height={425}
            />
          </div>
        )}

        {isTablet && (
          <div className='absolute top-[-224px] right-0 testimonials__vector'>
            <Image
              unoptimized
              src='/muffin-tech-image-003.png'
              alt='hero'
              width={300}
              height={300}
            />
          </div>
        )}

        <h3 className='testimonials__heading lg:pl-[95px] lg:max-w-[460px] max-w-[300px] mb-[20px] relative top-[-38px] lg:top-[-66px] z-100 text-center sm:text-left'>
          Companies who baked with us
        </h3>

        <div className='testimonials__wrapper lg:px-[95px]'>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            loop={true}
            slidesPerView={(isDesktop && 3) || (isTablet && 2) || 1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: styles['slider__nav__bullet'],
              bulletActiveClass: styles['slider__nav__bullet--active'],
            }}>
            <SwiperSlide>
              <TestimonialBlock
                data={{
                  quote:
                    'Muffin has been an essential partner for us as we look to move fast',
                  logo: '/logos/dropp.png',
                  name: 'DROPP',
                  width: 90,
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialBlock
                data={{
                  quote:
                    'A critical resource as we integrate smart contracts into our supply networks',
                  logo: '/logos/labfriend.svg',
                  name: 'LabFriend',
                  width: 120,
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialBlock
                data={{
                  quote:
                    'Muffin is a valuable back up resource for when our we needs extra hands to meet deadlines',
                  logo: '/logos/avocado.png',
                  name: 'Avocado Guild',
                  width: 140,
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
