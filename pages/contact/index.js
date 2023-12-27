import Layout from '@/components/Layout'
import ContactForm from '@/components/ui/contact-form'
import { Heading, Text } from '@chakra-ui/react'
import {
  Grid,
  Paper,
  Typography,
  Container as UiContainer,
} from '@mui/material'
import React from 'react'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import { useRouter } from 'next/router'
import Breadcrumb from '@/components/ui/breadcrumb'

const initValues = { name: '', email: '', subject: '', message: '' }
const initState = { values: initValues }

export async function generateMetadata() {
  return {
    title: 'Contact',
    description: 'Pagina de contact',
  }
}
export default function ContactPage() {
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
    // <Link
    //   underline="hover"
    //   key="2"
    //   color="inherit"
    //   href="/material-ui/getting-started/installation/"
    //   onClick={handleClick}
    // >
    //   Core
    // </Link>,
    <Typography key="3" color="text.primary">
      Contact
    </Typography>,
  ]

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }
  return (
    <Layout>
      <UiContainer>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <div className="flex flex-col items-center justify-center mt-4 mb-2">
          <Grid container>
            <Grid xs={0} md={3}></Grid>
            <Grid xs={12} md={6}>
              <Paper sx={{ padding: '20px' }}>
                <Heading fontWeight={500} fontSize={24} textAlign={'center'}>
                  Contactează-mă
                </Heading>
                <ContactForm />
              </Paper>
            </Grid>
            <Grid xs={0} md={3}></Grid>
          </Grid>
        </div>
      </UiContainer>
    </Layout>
  )
}
