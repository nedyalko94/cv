import React from 'react'
import Link from 'next/link'

export default function navbar() {
  return (
    <div className='bg-slate-200 flex justify-center'>
      <Link href={'/'} className='mx-2 underline text-slate-600'>CV</Link>
      <Link href={'/Projects'} className='mx-2 underline'>Projects</Link>
    
    </div>
  )
}
