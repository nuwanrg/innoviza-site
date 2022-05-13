import React from 'react'

export const Facebook = ({ size = 28, color = '#000', className }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.9997 2.87646C7.55617 2.87646 2.33301 8.09963 2.33301 14.5431C2.33301 20.366 6.59951 25.1925 12.1773 26.0686V17.9148H9.21401V14.5431H12.1773V11.973C12.1773 9.0493 13.918 7.43463 16.5838 7.43463C17.8602 7.43463 19.1948 7.66213 19.1948 7.66213V10.5321H17.7248C16.2747 10.5321 15.8232 11.4316 15.8232 12.3545V14.5431H19.0583L18.5415 17.9148H15.8232V26.0686C21.3998 25.1936 25.6663 20.3648 25.6663 14.5431C25.6663 8.09963 20.4432 2.87646 13.9997 2.87646Z'
        fill={color}
      />
    </svg>
  )
}

export default Facebook
