/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head'
import seo from '@/config/seo'

export default function MyHead() {
  return (
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

      {/* fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZFM0SXB9WF"></script>
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', "G-ZFM0SXB9WF");
      `}}></script>

      {/* <script src="/libs/flexible.js"></script> */}
    </Head>
  )
}
