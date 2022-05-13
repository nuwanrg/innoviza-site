import React from 'react'
import styles from './blobs.module.scss'

export const Blob1 = props => {
  return (
    <div className={styles['blob__one']}>
      <img src='/blobs/blob-1.png' alt='blob' />
    </div>
  )
}

export default Blob1
