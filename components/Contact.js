import React from 'react'

export default function Contact() {
  return (
    <div >
    <h1 className="bg-black text-x text-white font-bold p-1">Contact Information. </h1>
    <ul className='p-7'>
        <li>Github : <a href="https://github.com/nedyalko94" className="underline text-blue-800 hover:text-red-600">nedyalko94</a> </li>
        <li>Email <a href="mailto:nedyalko.todorov94@gmail.com" className="underline text-blue-800 hover:text-red-600">nedyalko.todorov94@gmail.com</a></li>
        <li>LinkedIn: <a href = "https://www.linkedin.com/in/nedyalko-todorov-719662178/" target="_blank" className="underline text-blue-800 hover:text-red-600">nedyalko-todorov-719662178</a></li>
    </ul>
    </div>
  )
}
