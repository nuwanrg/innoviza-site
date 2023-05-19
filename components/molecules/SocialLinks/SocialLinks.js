import React from 'react'
import styles from './SocialLinks.module.scss'
import CN from 'classnames'
import {
  Telegram,
  Facebook,
  Twitter,
  Mail,
  LinkedIn,
  Calendly,
} from 'components/icons'
import Link from 'next/link'

const SocialLink = ({ href = '', icon = null }) => {
  return (
    <Link href={href}>
      <a className='px-[14px]'>{icon}</a>
    </Link>
  )
}

export const SocialLinks = ({ className, children, ...restProps }) => {
  return (
    <div
      className={CN(styles['social-links'], 'flex items-center', className)}
      {...restProps}>
      <SocialLink
        href='https://twitter.com/Muffin__Tech'
        icon={<Twitter color='#00ACEE' />}
      />
      <SocialLink
        href='https://t.me/muffin_tech'
        icon={<Telegram color='#229ED9' />}
      />
      <SocialLink
        href='https://www.linkedin.com/company/muffin-tech'
        icon={<LinkedIn color='#0072b1' />}
      />
      {/* <SocialLink
        href='https://calendly.com/agentx'
        icon={<Calendly color='#fff' />}
      /> */}
    </div>
  )
}

export default SocialLinks
