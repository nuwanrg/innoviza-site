import React from 'react'

export const Quote = ({ size, color = '#000', width, height, className }) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      className={className}
      viewBox={`0 0 ${size || width} ${size || height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M40.9456 20.417C40.9456 9.141 31.8056 0 20.5286 0C9.25162 0 1.06662 8.826 0.111621 20.062C-1.34638 37.207 11.6786 51.562 27.4916 56.129C22.1016 52.87 18.3416 47.202 17.7146 40.61C18.6376 40.741 19.5716 40.834 20.5286 40.834C31.8056 40.834 40.9456 31.694 40.9456 20.417Z'
        fill={color}
      />
      <path
        d='M84.0765 20.417C84.0765 9.141 74.9365 0 63.6585 0C52.3825 0 44.1965 8.826 43.2405 20.062C41.7825 37.207 54.8075 51.562 70.6215 56.129C65.2315 52.87 61.4725 47.202 60.8445 40.61C61.7675 40.741 62.7025 40.834 63.6585 40.834C74.9365 40.834 84.0765 31.694 84.0765 20.417Z'
        fill={color}
      />
    </svg>
  )
}

export default Quote
