import { RecoilRoot } from 'recoil';
import '../styles/font.scss'
import '../styles/globals.css'
import '../styles/page.scss'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
