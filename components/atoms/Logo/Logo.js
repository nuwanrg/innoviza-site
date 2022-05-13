import React from 'react'
import Image from 'next/image'
import { useViewport } from 'hooks/useViewport'

export const Logo = React.forwardRef(({ onClick, href, className }, ref) => {
  const { width, height, isMobile, isTablet, isDesktop } = useViewport()
  
  return (
    <a className={className} href={href} onClick={onClick} ref={ref}>
      <Image
        src='/logo.png'
        alt='Muffin Tech Logo'
        width={163}
        height={30}
        unoptimized
      />
    </a>
  )
})

Logo.displayName = 'Logo'

export default Logo
