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

  return (
    <Layout>
      <Grid container height={220}>
        <Grid xs={12} sm={7} md={5}>
          <div
            className="bg-cover h-[220px] min-w-[200px] p-6 flex flex-col items-center justify-center "
            style={{
              backgroundImage:
                ' url(images/360_F_101044570_T9unk816eB6uiN0J29omibuDfzDkpxu9.jpg)',
            }}
          >
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
    </Layout>
  )
}
