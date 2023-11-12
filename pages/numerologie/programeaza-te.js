import Layout from '@/components/Layout'
import { Container, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/breadcrumb'
import { useRouter } from 'next/router'
import CalendlyForm from '@/components/CalendlyForm'
import MailchimpSubscribe from '@/components/ui/contact-form/mailchimp-subscribe'
import ContactFormMailchimpSubscribe from '@/components/ui/contact-form/mailchimp-subscribe'

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
      <Container className="mb-4">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" mb={2}>
          Doresc o programare
        </Typography>
        <ContactFormMailchimpSubscribe />
      </Container>
    </Layout>
  )
}
