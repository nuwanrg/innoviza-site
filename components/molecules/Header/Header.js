import React, { useEffect } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import CN from 'classnames'
import { Button, Logo } from 'components/atoms'
import { Menu } from 'components/molecules'
import { useViewport } from 'hooks/useViewport'

export const Header = props => {
  const { width, height, isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div className={CN(styles['header'], 'relative z-10')}>
      <div className='container flex items-center justify-between py-[40px] lg:py-[60px]'>
        <Link href='/' passHref>Block365
          {/* <Logo className='flex items-center' /> */}
        </Link>

        {!isMobile && <Menu />}

        <div className='flex items-center'>
          <Link href='https://calendly.com/amithw' passHref>
            {isDesktop ? (
              <Button appearance='ghost' size='sm'>
                Contact Us
              </Button>
            ) : (
              <a>Let&apos;s Talk</a>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
