import Layout from '@/components/Layout'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import DateOfBirth from './components/date-of-birth'
import HomeIcon from '@mui/icons-material/Home'
import { useRouter } from 'next/router'
import Breadcrumb from '@/components/ui/breadcrumb'

export default function Numerologie() {
  const router = useRouter()
  const numbers = [
    {
      name: 'one',
      href: '/numerologie/1',
      value: 1,
    },
    {
      name: 'two',
      href: '/numerologie/2',
      value: 2,
    },
    {
      name: 'three',
      href: '/numerologie/3',
      value: 3,
    },
    {
      name: 'four',
      href: '/numerologie/4',
      value: 4,
    },
    {
      name: 'five',
      href: '/numerologie/5',
      value: 5,
    },
    {
      name: 'six',
      href: '/numerologie/6',
      value: 6,
    },
    {
      name: 'seven',
      href: '/numerologie/7',
      value: 7,
    },
    {
      name: 'eight',
      href: '/numerologie/8',
      value: 8,
    },
    {
      name: 'nine',
      href: '/numerologie/9',
      value: 9,
    },
    {
      name: 'eleven',
      href: '/numerologie/11',
      value: 11,
    },
    {
      name: 'twenty-two',
      href: '/numerologie/22',
      value: 22,
    },
    {
      name: 'thirty-three',
      href: '/numerologie/33',
      value: 33,
    },
  ]

  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
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
      Numerologie
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
        <div className="flex items-center justify-center p-2">
          <div className="w-[650px] ">
            <Typography
              variant="h5"
              fontWeight={'500'}
              textAlign={'center'}
              marginTop={5}
              paddingBottom={2}
            >
              Numerology: Your Life Path Number
            </Typography>
            <Grid container spacing={2} marginBottom={2}>
              {numbers.map((number, index) => (
                <Grid key={index} xs={3} md={2}>
                  <Link
                    href={number.href}
                    className="flex items-center justify-center"
                  >
                    <div
                      className="rounded-full w-12 h-12 text-center justify-center flex items-center bg-cover bg-center font-bold text-white"
                      style={{
                        backgroundImage:
                          ' url(images/copper-color-background-with-blur-and-smooth-texture-for-festive-metallic-graphic-design-element-vector.jpg)',
                      }}
                    >
                      {number.value}
                    </div>
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: '#EFDF9A',
                textAlign: 'center',
                padding: '20px',
              }}
            >
              <Typography variant="h5">Find Your Life Path Number</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  marginBottom: '20px',
                }}
              >
                Enter your birthdate to calculate your birth path number.
              </Typography>
              <DateOfBirth />
            </Box>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
