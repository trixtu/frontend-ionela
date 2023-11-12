import React from 'react'
import Header from './Header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen mb-5">{children}</main>
      <Footer />
    </>
  )
}
