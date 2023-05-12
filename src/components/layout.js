import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import Image from 'next/image'

export default function Layout ({children}) {
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
