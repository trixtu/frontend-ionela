import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import TopNavBar from './top-navbar'
import Navbar from './navbar'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <>
      <TopNavBar />
      <Navbar />
      {/* <header className={router.pathname === '/' ? 'hidden' : 'block'}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div>
      </header> */}
    </>
  )
}
