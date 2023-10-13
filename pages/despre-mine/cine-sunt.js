import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import Breadcrumb from '@/components/ui/breadcrumb'
import axios from 'axios'
import { Markup } from 'interweave'
import { Box, Skeleton } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function CineSunt() {
  const [textareas, setTextareas] = useState([])
  const [text, setText] = useState(null)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const id = '65211c86bf2032dcd63eed49'

  useEffect(() => {
    try {
      axios.get('/api/textarea').then((response) => {
        setTextareas(response.data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])
  const textCineSunt = textareas.find((text) => text._id === id)

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

  console.log(loading)
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
              <Markup content={textCineSunt?.value} />
            </Paper>
          </>
        )}
      </Container>
    </Layout>
  )
}
