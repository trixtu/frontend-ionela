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

export default function CeEsteNumerologia() {
  const [textareas, setTextareas] = useState([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  let textCeEsteNumerologia = null

  const id = '6527b9f9d27717a5600d4975'

  useEffect(() => {
    axios.get('/api/textarea').then((response) => {
      setTextareas(response.data)
    })
  }, [])

  if (textareas) {
    textCeEsteNumerologia = textareas.find((text) => text._id === id)
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
  console.log(textCeEsteNumerologia)

  return (
    <Layout>
      <Head>
        <title>Ce este numerologia | Numerologie</title>
      </Head>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography>{textCeEsteNumerologia?.title}</Typography>
        <Box
          style={{
            backgroundImage: `url(${textCeEsteNumerologia?.image[0]})`,
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          height={400}
          borderTopRadius={4}
        />
        <Paper variant="outlined" sx={{ height: '100%', padding: '10px' }}>
          {textCeEsteNumerologia && (
            <Markup content={textCeEsteNumerologia?.value} />
          )}
        </Paper>
      </Container>
    </Layout>
  )
}
