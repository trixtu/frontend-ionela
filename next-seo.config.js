import { DefaultSeoProps } from 'next-seo'

const config = {
  description:
    'Descoperiti puterea numerologiei pentru a va ghida viata. Consultati experti in numerologie pentru  consiliere personalizata si intalegeti mai bine traseul vietii dvs. Aflati cum cifrele va pot dezvalui destinul. www.numerologie-consiliere.ro va ofera raspunsurile pe care le cautati.',
  defaultTitle: 'Numerologie | Consiliere',
  canonical: 'https://www.numerologie-consiliere.ro',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://www.numerologie-consiliere.ro/favicon.ico',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://numerologie-consiliere.ro',
    title: 'Numerologie | Consiliere',
    siteName: 'Numerologie | Consiliere',
    description:
      'Descoperiti puterea numerologiei pentru a va ghida viata. Consultati experti in numerologie pentru  consiliere personalizata si intalegeti mai bine traseul vietii dvs. Aflati cum cifrele va pot dezvalui destinul. www.numerologie-consiliere.ro va ofera raspunsurile pe care le cautati.',
    images: [
      {
        url: '',
        alt: '',
        type: 'image/jpg',
        secureUrl: '',
      },
    ],
  },
  twitter: {
    handle: '',
    site: '',
    cardType: '',
  },
}

export default config
