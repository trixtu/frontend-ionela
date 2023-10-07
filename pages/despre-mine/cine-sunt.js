import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import { Container, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import Breadcrumb from '@/components/ui/breadcrumb'

export default function CineSunt() {
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
      Cine sunt
    </Typography>,
  ]

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }

  function handleClickNumerogie(event) {
    event.preventDefault()
    router.push('/calculator-numerologic')
  }
  return (
    <Layout>
      <Head>
        <title>Cine sunt eu? | Numerologie</title>
      </Head>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Paper variant="outlined" sx={{ height: '100%', padding: '10px' }}>
          cdcdsfsdfdsfdsfdsf
        </Paper>
      </Container>
    </Layout>
  )
}
