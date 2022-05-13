import React from 'react'
import styles from './[FTName].module.scss'
import CN from 'classnames'

export const [FTName] = ({className, children, ...restProps}) => {
  return (
    <div className={CN(styles['<FTName | kebabcase>'], '', className)} {...restProps}>
      <FTName | kebabcase> is working...
    </div>
  )
}

export default [FTName]
