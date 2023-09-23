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

export default function Numerologie() {
  const numbers = [
    {
      name: 'one',
      href: '/numerologie/1',
      src: 'images/numbers/icon-1-4.jpg',
    },
    {
      name: 'two',
      href: '/numerologie/2',
      src: 'images/numbers/number-2-icon-png-3.jpg',
    },
    {
      name: 'three',
      href: '/numerologie/3',
      src: 'images/numbers/3-icon-3.jpg',
    },
    {
      name: 'four',
      href: '/numerologie/4',
      src: 'images/numbers/number-4-icon-14.jpg',
    },
    {
      name: 'five',
      href: '/numerologie/5',
      src: 'images/numbers/5-icon-4.jpg',
    },
    {
      name: 'six',
      href: '/numerologie/6',
      src: 'images/numbers/6-icon-8.jpg',
    },
    {
      name: 'seven',
      href: '/numerologie/7',
      src: 'images/numbers/7-icon-4.jpg',
    },
    {
      name: 'eight',
      href: '/numerologie/8',
      src: 'images/numbers/icon-8-2.jpg',
    },
    {
      name: 'nine',
      href: '/numerologie/9',
      src: 'images/numbers/icon-9-11.jpg',
    },
    {
      name: 'eleven',
      href: '/numerologie/11',
      src: 'images/numbers/pngegg.png',
    },
    {
      name: 'twenty-two',
      href: '/numerologie/22',
      src: 'images/numbers/number-2-icon-1.jpg',
    },
    {
      name: 'thirty-three',
      href: '/numerologie/33',
      src: 'images/numbers/3-icon-1.jpg',
    },
  ]

  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <Layout>
      <Grid container height={220}>
        <Grid xs={12} sm={7} md={5}>
          <div className="bg-[#7DAA6A] h-[220px] min-w-[200px] p-6 flex flex-col items-center justify-center ">
            <Typography
              variant="h3"
              fontStyle={'oblique'}
              color={'#E1C158'}
              padding={1}
              sx={{
                textShadow: '5px 4px 10px #333',
              }}
            >
              NUMEROLOGY
            </Typography>
            <Typography variant="h6" textAlign={'center'}>
              Birth path number, angel numbers, master numbers and more
            </Typography>
          </div>
        </Grid>
        <Grid xs={0} sm={5} md={7}>
          <div className="h-[220px]">
            <img
              src="/images/1241723.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </Grid>
      </Grid>
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
          <Grid container spacing={2}>
            {numbers.map((number, index) => (
              <Grid key={index} xs={3} md={2}>
                <Link href={number.href}>
                  <img src={number.src} alt={number.name} />
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
    </Layout>
  )
}
