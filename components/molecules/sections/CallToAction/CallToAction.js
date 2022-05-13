import React from 'react'
import styles from './CallToAction.module.scss'
import CN from 'classnames'
import { Button } from 'components/atoms'
import Link from 'next/link'

export const CallToAction = ({ className, children, id, ...restProps }) => {
  return (
    <div
      className={CN(styles['call-to-action'], 'mt-[40px] lg:mt-[80px]', className)}
      id={id || 'support'}
      {...restProps}>
      <div
        className={CN(
          'container relative rounded-[28px] flex justify-center items-center pt-[80px] pb-[120px] md:py-[120px] lg:py-[140px] flex-col z-[200]',
          styles['container']
        )}>
        <h3 className='mb-[40px] text-center'>
          Let&apos;s build Open Web together
        </h3>

        <div
          className={CN(
            styles['call-to-action__actions'],
            'flex lg:items-center flex-col lg:flex-row items-center'
          )}>
          <Link href='https://calendly.com/amithw' passHref>
            <Button
              appearance='primary'
              mode='filled'
              size='sm'
              className='w-full lg:w-auto'>
              Schedule a discussion
            </Button>
          </Link>

          <span className='text-white font-500 py-[20px] lg:py-0 lg:px-[20px]'>OR</span>

          <Link href='https://t.me/muffin_tech' passHref>
            <Button
              appearance='default'
              mode='outline'
              size='sm'
              className='w-full lg:w-auto'>
              Talk to us now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
