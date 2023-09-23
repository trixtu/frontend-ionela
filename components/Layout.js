import React from 'react'
import Header from './Header'
import Footer from './footer'

export default function Layout({ children, slider }) {
  return (
    <div className="min-h-full">
      <Header slider={slider} />
      {children}
      <Footer />
    </div>
  )
}
