import Head from 'next/head'
import seo from '@/config/seo'
import Script from 'next/script'

export default function MyHead() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Access-Control-Allow-Origin" content="*"  />
        <link data-n-head="ssr" rel="icon" type="image/x-icon" href=""  />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Primary Meta Tags */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.preview} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seo.url} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.preview} />
      </Head>

      {/* <Script id='1' type="text/javascript" src="/libs/flexible.js" /> */}
      <Script id='1' type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=G-ZFM0SXB9WF" />
      <Script id='2' dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', "G-ZFM0SXB9WF");
      `}}></Script>
    </>
  )
}
