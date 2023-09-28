import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="robots" content="all" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
