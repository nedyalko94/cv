import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <>
      <div className=' bg-slate-200 flex justify-left   pt-3'>

<Image  src={`/image.jpg`} alt="pic" width="100" height="150" className="rounded-full"/> 

  <div  className='flex flex-col items-center justify-center mx-2  px-2 '>
    <h2 className='font-bold '>Nedyalko Todorov</h2>
       <h2>Web Developer</h2></div>

  </div>  
      


    </>
  
  )
}
