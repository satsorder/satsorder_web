import Head from './Head'

export default function Layout ({children}) {

  return (
    <>
      <Head></Head>
      {children}
    </>
  )
}
