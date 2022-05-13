import React from 'react'
import styles from './blobs.module.scss'

export const Blob3 = props => {
  return (
    <div className={styles['blob__three']}>
      <img src='/blobs/blob-3.png' alt='blob' />
    </div>
  )
}

export default Blob3
