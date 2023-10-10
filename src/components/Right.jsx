import React from 'react'
import Cart from './images/icon-cart.svg'

function Right() {
  return (
    <div className=' w-60 p-6  rounded-tr-md  rounded-br-md bg-white' >
        <h4 className='text-sm text-gray-400 text-left tracking-widest pb-4'>PERFUME</h4>

        <h1 className=' text-xl text-left pr-14 font-bold pb-4 '>Gabrielle <br /> Essence Eau <br /> De Parfum</h1>

        <p className='text-gray-700 text-left text-xs pb-4' >A floral, solar voluptuous inmterpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>

        <div className='pb-6 flex gap-4 items-center '>
            <p className=' text-green-600 font-extrabold font text-xl '>$149.99</p> 
            <p className=' text-xs '><s>$169.99</s></p>
        </div>

        <div className='flex'>
          <button className='flex gap-2  bg-green-800  hover:bg-green-600 py-2 px-10 rounded-md items-center'>
            <img src={Cart} alt="cart" />
            <p className=' text-white'>Add to Cart</p>
          </button>
        </div>
    </div>
  )
}

export default Right