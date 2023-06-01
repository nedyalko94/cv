import '@/styles/globals.css'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets:['latin'],
  // weight:['400','700']
})

export default function App({ Component, pageProps }) {
  return(
    <main className={inter.className}>
    <Navbar/>
     <Component {...pageProps} /> 
     <Footer/>

     </main>
     )  
}
    