import React from 'react'
import Head from 'next/head'
import Project from '@/components/Projects'

export default function Projects() {
  return (
    <>
    <Head>
    <title>Projects</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <div className=' bg-slate-200   min-h-screen'>
    <Project/>
    </div>



  </>
  )
}
