import '@/styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider, createTheme } from '@mui/material'
import { CartContextProvider } from '@/context/CartContext'
import { LazyMotion, domAnimation } from 'framer-motion'

const theme = createTheme({
  palette: {
    green: {
      main: '#6bc588',
      light: '#7DAA6A',
      dark: '#539b6b',
      contrastText: '#333',
    },
    gold: {
      main: '#f0ba27',
      light: '#edbe3e',
      dark: '#f0ba27',
      contrastText: '#333',
    },
  },
})

export const metadata = {
  title: 'Numerologie | Consiliere',
  description:
    'Descoperiti puterea numerologiei pentru a va ghida viata. Consultati experti in numerologie pentru  consiliere personalizata si intalegeti mai bine traseul vietii dvs. Aflati cum cifrele va pot dezvalui destinul. www.numerologie-consiliere.ro va ofera raspunsurile pe care le cautati.',
  metadataBase: new URL('https://www.numerologie-consiliere.ro'),
  charSet: 'utf-8',
}

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
            <CartContextProvider>
              <LazyMotion features={domAnimation}>
                <Component {...pageProps} />
              </LazyMotion>
              <Analytics />
              <ToastContainer />
            </CartContextProvider>
          </SessionProvider>
        </ThemeProvider>
      </ChakraProvider>
    </div>
  )
}
