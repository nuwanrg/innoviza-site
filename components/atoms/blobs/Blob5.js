/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './blobs.module.scss'

export const Blob5 = props => {
  return (
    <div className={styles['blob__five']}>
      <img src='/blobs/blob-5.png' alt='blob' />
    </div>
  )
}
export const Blob5Mobile = props => {
  return (
    <div className={styles['blob__five__mobile']}>
      <img src='/blobs/blob-5.png' alt='blob' />
    </div>
  )
}

export default Blob5
