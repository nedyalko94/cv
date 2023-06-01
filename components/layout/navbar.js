import React from 'react'
import Link from 'next/link'

export default function navbar() {
  return (
    <div className='bg-slate-200 flex justify-center pt-4'>
      <Link href={'/'} className='mx-2 underline  font-bold hover:text-red-600'>CV</Link>
      <Link href={'/Projects'} className='mx-2 underline font-bold hover:text-red-600 '>Projects</Link>
    
    </div>
  )
}
