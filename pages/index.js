import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Skills from '@/components/Skills'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import EducationAndCurses from '@/components/EducationAndCurses'
import Languages from '@/components/Languages'
import ProfessionalExperience from '@/components/ProfessionalExperience'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=' bg-slate-300   min-h-screen'>

        <Header />

        <Contact />
        <EducationAndCurses />
        <Languages />
        <ProfessionalExperience />
        <h1>Career Objective</h1>
        <Skills />



        <h1>Hobbies & Interests</h1>


      </div>



    </>
  )
}
