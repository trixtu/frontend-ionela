import React from 'react'
import Header from './Header'
import Footer from './footer'

export default function Layout({ children, slider }) {
  return (
    <>
      <Header slider={slider} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
