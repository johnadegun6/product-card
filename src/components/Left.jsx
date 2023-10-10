import React from 'react'
import image from './images/image-product-desktop.jpg'

function Left() {
  return (
    <div className=' w-60'>
        <img src={image} alt="left" className=' rounded-tl-md  rounded-bl-md ' />
    </div>
  )
}

export default Left