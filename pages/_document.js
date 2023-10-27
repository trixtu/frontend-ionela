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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="numerologie personala, interpretare cifre numerologie, ghid numerologic, consultanta numerologica, semnificatia numerelor, analiza numerologica, calcul numerologic, numerologie si destin, cifre si viata, numerologie expert, cunoastere numerologica, numerologie pentru dezvoltare personala, numerologie online"
        />
        <meta property="og:url" content="https://numerologie-consilier.ro/" />
        <meta property="og:title" content="numerologie-consiliere" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Descoperiti puterea numerologiei pentru a va ghida viata. Consultati experti in numerologie pentru  consiliere personalizata si intalegeti mai bine traseul vietii dvs. Aflati cum cifrele va pot dezvalui destinul. www.numerologie-consiliere.ro va ofera raspunsurile pe care le cautati."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
