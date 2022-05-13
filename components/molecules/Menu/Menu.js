import React from 'react'
import CN from 'classnames'
import Link from 'next/link'
import styles from './Menu.module.scss'

const MenuLink = ({ href = '', children, onClick, ...restProps }) => {
  return (
    <Link href={href} passHref>
      <a onClick={onClick} className='px-[20px] font-500' {...restProps}>
        {children}
      </a>
    </Link>
  )
}

export const Menu = ({ className }) => {
  return (
    <div className={CN(styles['menu'], 'flex', className)}>
      <MenuLink href='#services'>Services</MenuLink>
      <MenuLink href='#support'>Support</MenuLink>
      <MenuLink href='#technologies'>Technologies</MenuLink>
    </div>
  )
}

export default Menu
