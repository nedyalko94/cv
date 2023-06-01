import React from 'react'

export default function Contact() {
  return (
    <div >
    <h1 className=" font-bold ">Contact Information. </h1>
    <div className='px-3'>
        <div>Github : <a href="https://github.com/nedyalko94" className="underline text-blue-800 hover:text-red-600">nedyalko94</a> </div>
        <div>Email: <a href="mailto:nedyalko.todorov94@gmail.com" className="underline text-blue-800 hover:text-red-600">nedyalko.todorov94@gmail.com</a></div>
        <div>LinkedIn: <a href = "https://www.linkedin.com/in/nedyalko-todorov-719662178/" target="_blank" className="underline text-blue-800 hover:text-red-600">nedyalko-todorov-719662178</a></div>
    </div>
    </div>
  )
}
