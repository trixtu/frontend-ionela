/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export const metadata = {
  title: 'Numerologie consiliere',
  description: 'Afla care este numarul tau numerologic.',
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:url" content="https://numerologie-consilier.ro/" />
        <meta property="og:title" content="numerologie-consiliere" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="numerologie-consiliere" />
      </Head>
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
