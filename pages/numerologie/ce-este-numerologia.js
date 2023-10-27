import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Box, Container, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Markup } from 'interweave'
import { Spinner } from '@chakra-ui/react'

export default function CeEsteNumerologia() {
  const [textareas, setTextareas] = useState([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()
  let textCeEsteNumerologia = null

  const id = '6527b9f9d27717a5600d4975'

  useEffect(() => {
    axios.get('/api/textarea').then((response) => {
      setTextareas(response.data)
      setLoading(false)
    })
  }, [])

  function textFinal() {
    textCeEsteNumerologia = textareas.find((text) => text._id === id)
  }

  if (textareas) {
    textFinal()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center w-auto h-screen">
        <Spinner fontSize={'6xl'} width={'100px'} height={'100px'} />
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
      Ce este numerologia
    </Typography>,
  ]

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }

  return (
    <Layout>
      <Head>
        <title>Ce este numerologia | Numerologie</title>
      </Head>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" mb={2}>
          {textCeEsteNumerologia?.title}
        </Typography>
        <Box
          style={{
            backgroundImage: `url(${textCeEsteNumerologia?.image[0]})`,
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
          {textCeEsteNumerologia && (
            <Markup content={textCeEsteNumerologia?.value} />
          )}
        </Paper>
      </Container>
    </Layout>
  )
}
