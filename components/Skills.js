import React from 'react'
import { SiNextdotjs } from 'react-icons/si'
import { FaReact, FaBootstrap, FaNode } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiExpress, SiThreedotjs, SiJavascript, SiHtml5, SiCss3 ,SiMongodb,SiMysql,SiWindows} from 'react-icons/si'
import {BsGit,BsGithub} from 'react-icons/bs'

export default function skills() {
  return (
    <div>
          
    <h1 className='bg-black text-x text-white font-bold p-1'> Professional Skills & Technologies</h1>
    <div className='grid grid-cols-3 gap-1  px-4 py-4'>
    <div className=" flex gap-2"><SiNextdotjs className=''/><div>NextJS</div></div>
    <div className=" flex gap-2"><FaReact className='text-blue-400'/><div>ReactJS</div></div>
    <div className=" flex gap-2"><FaBootstrap className='text-purple-700'/><div>Bootstrap 5</div></div>
    <div className=" flex gap-2"><FaNode className='text-green-700'/><div>NodeJS</div>  </div>
    <div className=" flex gap-2"><SiTypescript className='text-blue-800'/><div>Typescript</div></div>
    <div className=" flex gap-2"><SiTailwindcss className='text-blue-400'/><div>Tailwind</div></div>
    <div className=" flex gap-2"><SiExpress/><div>ExpressJS</div></div>
    <div className=" flex gap-2"><SiThreedotjs/><div>ThreeJS</div></div>
    <div className=" flex gap-2"><SiJavascript className='text-yellow-400 bg-black'/><div>Javascript</div></div>
    <div className=" flex gap-2"><SiHtml5  className='text-red-500'/><div>HTML5</div></div>
    <div className=" flex gap-2"><SiCss3 className='text-blue-500'/><div>CSS3</div></div>
    <div className=" flex gap-2"><SiMongodb className='text-green-700'/><div>MongoDB</div></div>
    <div className=" flex gap-2"><SiMysql className='text-blue-500'/><div>MySQL</div></div>
    <div className=" flex gap-2"><BsGit className='text-red-600'/><div>Git</div></div>
    <div className=" flex gap-2"><BsGithub className='text-black'/><div>GitHub</div></div>
    <div className=" flex gap-2"><SiWindows className='text-blue-500'/><div>Windows</div></div>

    </div>

  </div>
  )
}
