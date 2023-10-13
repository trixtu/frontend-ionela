import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { Markup } from 'interweave'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import HomeIcon from '@mui/icons-material/Home'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Container, Paper, Typography } from '@mui/material'

export default function CineSunt() {
  const [textareas, setTextareas] = useState([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  let textCineSunt = null

  const id = '65211c86bf2032dcd63eed49'

  useEffect(() => {
    axios.get('/api/textarea').then((response) => {
      setTextareas(response.data)
    })
  }, [])

  if (textareas) {
    textCineSunt = textareas.find((text) => text._id === id)
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
      Cine sunt
    </Typography>,
  ]

  function handleClick(event) {
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
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Typography variant="h5" mb={2}>
              {textCineSunt?.title}
            </Typography>
            <Box
              style={{
                backgroundImage: `url(${textCineSunt?.image[0]})`,
                backgroundPosition: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              height={400}
              borderTopRadius={4}
            />
            <Paper variant="outlined" sx={{ height: '100%', padding: '10px' }}>
              {textCineSunt && <Markup content={textCineSunt?.value} />}
            </Paper>
          </>
        )}
      </Container>
    </Layout>
  )
}
