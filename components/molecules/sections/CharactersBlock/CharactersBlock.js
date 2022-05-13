import React from 'react'
import styles from './CharactersBlock.module.scss'
import CN from 'classnames'
import Image from 'next/image'

export const CharactersBlock = ({ className, children, ...restProps }) => {
  return (
    <div
      className={CN(styles['characters-block'], 'py-[160px]', className)}
      {...restProps}>
      <div className='flex items-end justify-center gap-[40px]'>
        <Image
          unoptimized
          src='/muffin-tech-block-image-002.png'
          alt='image-1'
          width={340}
          height={340}
        />
        <Image
          unoptimized
          src='/muffin-tech-block-image-003.png'
          alt='image-1'
          width={340}
          height={340}
        />
        <Image
          unoptimized
          src='/muffin-tech-block-image-004.png'
          alt='image-1'
          width={340}
          height={340}
        />
        <Image
          unoptimized
          src='/muffin-tech-block-image-001.png'
          alt='image-1'
          width={340}
          height={340}
        />
      </div>
    </div>
  )
}

export default CharactersBlock
