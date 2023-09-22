import { CartContextProvider } from '@/context/CartContext'
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    green: {
      main: '#438029',
      light: '#7DAA6A',
      dark: '#3E7726',
      contrastText: '#E1C158',
    },
    gold: {
      main: '#D4AF37',
      light: '#E1C158',
      dark: '#B29700',
      contrastText: '#333',
    },
  },
})
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <CartContextProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </CartContextProvider>
        </SessionProvider>
      </ThemeProvider>
    </div>
  )
}
