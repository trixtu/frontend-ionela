import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { Markup } from 'interweave'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { Spinner } from '@chakra-ui/react'
import HomeIcon from '@mui/icons-material/Home'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Box, Container, Paper, Typography } from '@mui/material'

export default function ConsultatiiNumerologice() {
  const [loading, setLoading] = useState(true)
  const [textareas, setTextareas] = useState([])

  const router = useRouter()
  let textConsultatiiNumerologice = null

  const id = '6527bbc9d27717a5600d4998'

  useEffect(() => {
    axios.get('/api/textarea').then((response) => {
      setTextareas(response.data)
      setLoading(false)
    })
  }, [])

  function textFinal() {
    textConsultatiiNumerologice = textareas.find((text) => text._id === id)
  }

  if (textareas) {
    textFinal()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center w-auto h-screen">
        <Spinner fontSize={'9xl'} width={'150px'} height={'150px'} />
      </div>
    )
  }

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
      {textConsultatiiNumerologice?.title}
    </Typography>,
  ]

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }

  return (
    <Layout>
      <Head>
        <title>Consultatii numerologice | Numerologie</title>
      </Head>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" mb={2}>
          {textConsultatiiNumerologice?.title}
        </Typography>
        <Box
          style={{
            backgroundImage: `url(${textConsultatiiNumerologice?.image[0]})`,
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          height={400}
        />
        <Paper
          variant="outlined"
          sx={{ height: '100%', padding: '10px', marginBottom: '40px' }}
        >
          {textConsultatiiNumerologice && (
            <Markup content={textConsultatiiNumerologice?.value} />
          )}
        </Paper>
      </Container>
    </Layout>
  )
}
