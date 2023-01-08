import React from 'react'
import styles from './Services.module.scss'
import CN from 'classnames'
import { Tag, Blob3, Blob4 } from 'components/atoms'
import { ServiceCard, Accordion } from 'components/molecules'
import { useViewport } from 'hooks/useViewport'

export const Services = ({ className, children, ...restProps }) => {
  const { width, height, isMobile, isTablet, isDesktop } = useViewport()

  const servicesList = [
    {
      title: 'Smart Contract Development',
      icon: '👾',
      list: [
        { label: 'Solidity, Rust' },
      ],
    },
    {
      title: 'Web3 API Intergration',
      icon: '👷‍♂️',
      list: [{ label: 'Moralis' }],
    },
    {
      title: 'Backend Services Development for Web3',
      icon: '🎨',
      list: [{ label: 'XD & Figma' }, { label: 'NFT Character development' }],
    },
    {
      title: 'NFTs',
      icon: '😍',
      list: [{ label: ' React, JavaScript, HTML5, Angular, Ruby, PHP' }],
    },

    {
      title: 'Rust & Solidity Engineers',
      icon: '⚙️',
      list: [
        {
          label:
            'Rust development projects, Solidity Ethereum blockchain development.',
        },
      ],
    },
  ]

  return (
    <div
      className={CN(
        styles['services'],
        'pt-[120px] lg:pt-[180px] pb-[60px] relative',
        className
      )}
      {...restProps}
      id='services'>
      <Blob3 />
      <Blob4 />

      <div className='container px-[95px] relative z-[1000]'>
        <div className='services__heading max-w-[560px] flex flex-col items-center justify-center gap-[40px] mx-auto mb-[60px] lg:mb-[120px]'>
          <Tag>Best in class</Tag>
          <h2 className='text-center'>
            Our Services
          </h2>
        </div>

        <Accordion list={servicesList} />
      </div>
    </div>
  )
}

export default Services
