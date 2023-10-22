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
  title: 'Numerologie consiliere',
  description: 'Afla care este numarul tau numerologic.',
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
              <Component {...pageProps} />
              <Analytics />
              <ToastContainer />
            </CartContextProvider>
          </SessionProvider>
        </ThemeProvider>
      </ChakraProvider>
    </div>
  )
}
