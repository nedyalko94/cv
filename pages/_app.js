import '@/styles/globals.css'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
     <Component {...pageProps} /> 
     <Footer/>

     </>
     )  
}
