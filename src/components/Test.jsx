import React from 'react'
import Left from './Left'
import Right from './Right'

function Test() {
  return (
    <div className=' md:flex flex-auto bg-slate-300 max-w-full max-h-full justify-center pt-40 pb-40 '>
       <Left />
       <Right />
    </div>
  )
}

export default Test