import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Layout ({children}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <>
      <Head></Head>
      <Header></Header>
      <main className="w-full">
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}
