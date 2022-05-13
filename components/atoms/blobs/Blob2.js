import React from 'react'
import styles from './blobs.module.scss'

export const Blob2 = props => {
  return (
    <div className={styles['blob__two']}>
      <img src='/blobs/blob-2.png' alt='blob' />
    </div>
  )
}

export default Blob2
