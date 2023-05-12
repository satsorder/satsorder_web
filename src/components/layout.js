import Head from './Head'
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
      {children}
    </>
  )
}
