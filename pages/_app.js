import { CartContextProvider } from '@/context/CartContext'
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div>
      <SessionProvider session={session}>
        <CartContextProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </CartContextProvider>
      </SessionProvider>
    </div>
  )
}
