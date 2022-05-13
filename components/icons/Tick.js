import React from 'react'

export const Tick = ({ size = 28, color = '#000' }) => {
  return (
    <svg
      width='28'
      height='34'
      viewBox='0 0 28 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect x='1' y='4' width='26' height='26' rx='13' fill='#efe0ff' />
      <path
        d='M12.1548 20.3464L19.0277 13.4727C19.344 13.1564 19.8568 13.1563 20.1732 13.4725C20.4898 13.7889 20.4899 14.302 20.1735 14.6184L12.8708 21.9211C12.4754 22.3165 11.8343 22.3165 11.4389 21.9211L7.57267 18.0549C7.25639 17.7386 7.25639 17.2258 7.57267 16.9095C7.88895 16.5932 8.40173 16.5932 8.71801 16.9095L12.1548 20.3464Z'
        fill='#8000FF'
      />
    </svg>
  )
}

export default Tick
