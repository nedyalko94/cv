import React from 'react'

export default function Languages() {
  return (
    <div>
    <h1 className='bg-black text-x text-white font-bold p-1'> Languages knowledge </h1>
    <div className='p-7'>
        
        <div>Dutch </div>
        <div className='w-80 bg-white'><div className='w-36 display-block  bg-blue-800 text-white'><span className='ps-28'>50%</span></div></div>
        <div>French</div>
        <div className='w-80 bg-white'><div className='w-44 display-block  bg-blue-800 text-white'><span className='ps-28'>60%</span></div></div>
        <div>English</div>
        <div className='w-80 bg-white'><div className='w-72 display-block  bg-blue-800 text-white'><span className='ps-28'>80%</span></div></div>
        <div>Bulgarian</div>
        <div className='w-80 bg-white'><div className='w-80 display-block  bg-blue-800 text-white border-r-2 border-white'><span className='ps-28'>99%</span></div></div>
    </div>
  </div>
  )
}
