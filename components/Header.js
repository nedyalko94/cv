import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className=' bg-slate-300 w-4/12'>

    <Image  src={`/image.jpg`} alt="pet" width="600" height="800" className="rounded-full"/>   
           <h1 className='font-bold  '>Nedyalko Todorov</h1>
           <h2>Web Developer</h2>
    </div>
  )
}
