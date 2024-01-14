import Layout from '@/components/Layout'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Container, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import { useRouter } from 'next/router'
import React from 'react'

export default function Four() {
  const router = useRouter()

  const breadcrumbs = [
    <Link
      underline="hover"  
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <div className="flex items-center gap-1">
        <HomeIcon fontSize="small" />
        Home
      </div>
    </Link>,
    <Typography key="3" color="text.primary">
      Cifra destinului 4
    </Typography>,
  ]

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }

  return <Layout>
    <Container>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div 
        className='
          flex 
          justify-center 
          items-center 
          mt-4 
          h-full
        '
      >
        <Image
          src={'/images/foto-numere/numarul4.jpeg'}
          alt=""
          width={350}
          height={600}
          priority
          loading="eager"
        />
      </div>
    </Container>
  </Layout>
}
