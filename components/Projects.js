import React from 'react'
import projects from "./Projects.json"

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>

 

<div className='grid grid-cols-2 gap-3 align-middle justify-center mx-4 mt-4 '>
{  projects !== undefined ? projects.map((url,index)=>
  <div id={index} className=' p-1 border-2 rounded-lg border-slate-700 bg-slate-100 hover:bg-slate-400' key={index}>
    
  
    <h1>Project: {url.name}</h1>
    <div>Technology: {url.technology}</div> 
    <div>Link: <a href={url.project} className='hover:text-blue-700'>{url.project}</a></div>
    
</div>
):<h1> No Project have been found</h1>
    
    }



    </div>
    </div>
  )
}
