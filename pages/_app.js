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
