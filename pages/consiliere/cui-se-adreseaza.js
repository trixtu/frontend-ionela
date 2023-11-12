import Layout from '@/components/Layout'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { Markup } from 'interweave'
import { useRouter } from 'next/router'
import { Box, Spinner } from '@chakra-ui/react'
import HomeIcon from '@mui/icons-material/Home'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Container, Paper, Typography } from '@mui/material'

export default function CuiSeAdreseaza() {
  const [textareas, setTextareas] = useState([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()
  let cuiSeAdreseaza = null

  const id = '652e9eebba265f34484b63a5'

  useEffect(() => {
    axios.get('/api/textarea').then((response) => {
      setTextareas(response.data)
      setLoading(false)
    })
  }, [])

  function textFinal() {
    cuiSeAdreseaza = textareas.find((text) => text._id === id)
  }

  if (textareas) {
    textFinal()
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
      Ce este si cui se adreseaza?
    </Typography>,
  ]

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center w-auto h-screen">
        <Spinner fontSize={'6xl'} width={'100px'} height={'100px'} />
      </div>
    )
  }

  return (
    <Layout>
      <Head>
        <title>Ce este si cui se adreseaza? | Numerologie</title>
      </Head>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" mb={2}>
          {cuiSeAdreseaza?.title}
        </Typography>
        <Box
          style={{
            backgroundImage: `url(${cuiSeAdreseaza?.image[0]})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          height={400}
        />
        <Paper
          variant="outlined"
          sx={{ height: '100%', padding: '10px', marginBottom: '40px' }}
        >
          {cuiSeAdreseaza && <Markup content={cuiSeAdreseaza?.value} />}
        </Paper>
      </Container>
    </Layout>
  )
}
