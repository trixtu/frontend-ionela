import Layout from '@/components/Layout'
import { Container, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/breadcrumb'
import { useRouter } from 'next/router'
import CalendlyForm from '@/components/CalendlyForm'

export default function ProgrameazaTe() {
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
      Programeaza-te
    </Typography>,
  ]

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }

  return (
    <Layout>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" mb={2}>
          Programeaza-Te
        </Typography>
      </Container>
      <div className="-mt-14 mb-5">
        <CalendlyForm className="m-0" />
      </div>
    </Layout>
  )
}
