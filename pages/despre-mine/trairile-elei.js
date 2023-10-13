import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Box, Container, Paper, Typography } from '@mui/material'
import Breadcrumb from '@/components/ui/breadcrumb'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import axios from 'axios'
import { Markup } from 'interweave'

export default function TrairileElei() {
  const [textareas, setTextareas] = useState([])

  const id = '65268cb75603464a39337d4e'
  let trairileElei = null

  useEffect(() => {
    try {
      axios.get('/api/textarea').then((response) => {
        setTextareas(response.data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (textareas) {
    trairileElei = textareas.find((text) => text._id === id)
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClickHome}
    >
      <div className="flex items-center gap-1">
        <HomeIcon fontSize="small" />
        Home
      </div>
    </Link>,
    <Typography key="3" color="text.primary">
      TrairileElei
    </Typography>,
  ]

  function handleClickHome(event) {
    event.preventDefault()
    router.push('/')
  }

  return (
    <Layout>
      <Head>
        <title>Cine sunt? | Numerologie</title>
      </Head>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" mb={2}>
          {trairileElei?.title}
        </Typography>
        <Box
          style={{
            backgroundImage: `url(${trairileElei?.image[0]})`,
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          height={400}
          borderTopRadius={4}
        />
        <Paper variant="outlined" sx={{ height: '100%', padding: '10px' }}>
          {trairileElei && <Markup content={trairileElei?.value} />}
        </Paper>
      </Container>
    </Layout>
  )
}
