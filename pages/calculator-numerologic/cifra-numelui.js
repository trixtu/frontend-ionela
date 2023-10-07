import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import HomeIcon from '@mui/icons-material/Home'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Button, Container, Typography } from '@mui/material'
import { Box, Collapse, Heading, Input, Text } from '@chakra-ui/react'

export default function CifraNumelui() {
  const router = useRouter()
  const [nume, setNume] = useState('')
  const [prenume, setPrenume] = useState('')
  const [resultNume, setResultNume] = useState(null)
  const [resultPrenume, setResultPrenume] = useState(null)

  function letterValue(str) {
    var anum = {
      a: 1,
      A: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 1,
      k: 2,
      l: 3,
      m: 4,
      n: 5,
      o: 6,
      p: 7,
      q: 8,
      r: 9,
      s: 1,
      t: 2,
      u: 3,
      v: 4,
      w: 5,
      x: 6,
      y: 7,
      z: 8,
    }
    if (str?.length == 1) return anum[str] || ' '
    return str?.split('').map(letterValue)
  }

  function handleClickCalculeaza() {
    let sumPrenumeFinal = 0
    let sumNumeFinal = 0

    const firstNumeArr = letterValue(nume.toLowerCase())
    const firstPrenumeArr = letterValue(prenume.toLowerCase())

    if (prenume.length > 0 && firstPrenumeArr.length >= 2) {
      const firstSumPrenume = firstPrenumeArr.reduce(
        (acumulator, currentValue) => acumulator + currentValue,
        0
      )

      if (firstSumPrenume > 9) {
        const secondSumPrenumeArr = String(firstSumPrenume)
          .split('')
          .map((num) => {
            return Number(num)
          })
        const secondSumPrenume = secondSumPrenumeArr.reduce(
          (acumulator, currentValue) => acumulator + currentValue,
          0
        )

        if (secondSumPrenume > 9) {
          const thirdSumPrenumeArr = String(secondSumPrenume)
            .split('')
            .map((num) => {
              return Number(num)
            })
          const thirdSumPrenume = thirdSumPrenumeArr.reduce(
            (acumulator, currentValue) => acumulator + currentValue,
            0
          )
          sumPrenumeFinal = thirdSumPrenume
        } else {
          sumPrenumeFinal = secondSumPrenume
        }
      }
    }

    if (nume.length > 0 && firstNumeArr.length >= 2) {
      const firstSumNume = firstNumeArr.reduce(
        (acumulator, currentValue) => acumulator + currentValue,
        0
      )

      if (firstSumNume > 9) {
        const secondSumNumeArr = String(firstSumNume)
          .split('')
          .map((num) => {
            return Number(num)
          })
        const secondSumNume = secondSumNumeArr.reduce(
          (acumulator, currentValue) => acumulator + currentValue,
          0
        )

        if (secondSumNume > 9) {
          const thirdSumNumeArr = String(secondSumNume)
            .split('')
            .map((num) => {
              return Number(num)
            })
          const thirdSumNume = thirdSumNumeArr.reduce(
            (acumulator, currentValue) => acumulator + currentValue,
            0
          )
          sumNumeFinal = thirdSumNume
        } else {
          sumNumeFinal = secondSumNume
        }
      }
    }

    setResultNume(sumNumeFinal)
    setResultPrenume(sumPrenumeFinal)
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
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClickNumerogie}
    >
      Calculator numerologic
    </Link>,
    <Typography key="3" color="text.primary">
      Cifra numelui
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

  return (
    <Layout>
      <Head>
        <title>
          Calculator cifra nume, introdu nume, prenume si calculeaza |
          Numerologie
        </title>
      </Head>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Heading as={'h1'} fontSize={'2xl'} marginBottom={2}>
          Cifra numelui
        </Heading>
        <Box bg={'#e5e5e5'} padding={4}>
          <div className="block md:flex items-center gap-4">
            <div className="w-full">
              <label>Prenume</label>
              <Input
                bg={'#fff'}
                size="sm"
                value={prenume}
                onChange={(ev) => setPrenume(ev.target.value)}
              />
            </div>

            <div className="w-full">
              <label>Nume</label>
              <Input
                bg={'#fff'}
                size="sm"
                value={nume}
                onChange={(ev) => setNume(ev.target.value)}
              />
            </div>
          </div>

          <Button
            onClick={handleClickCalculeaza}
            variant="contained"
            color="gold"
          >
            Calculeaza
          </Button>
        </Box>
        <Collapse
          in={resultPrenume}
          transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
        >
          <Box
            style={{
              backgroundImage:
                ' url(/images/360_F_101044570_T9unk816eB6uiN0J29omibuDfzDkpxu9.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            p="20px"
            color="#fff6c9"
            mt="4"
            rounded="md"
            shadow="md"
            fontSize={'2xl'}
          >
            {resultPrenume > 0 && (
              <Heading as="h1" size="3xl" noOfLines={1} count={1}>
                Cifra Prenume:{' '}
                <span className="font-semibold text-black">
                  {resultPrenume}
                </span>
              </Heading>
            )}
          </Box>
        </Collapse>
        <Collapse
          in={resultNume}
          transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
        >
          <Box
            style={{
              backgroundImage:
                ' url(/images/360_F_101044570_T9unk816eB6uiN0J29omibuDfzDkpxu9.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            p="20px"
            color="#fff6c9"
            mt="4"
            rounded="md"
            shadow="md"
            fontSize={'2xl'}
          >
            {resultNume > 0 && (
              <Heading as="h1" size="3xl" noOfLines={1} count={1}>
                Cifra Nume:{' '}
                <span className="font-semibold text-black">{resultNume}</span>
              </Heading>
            )}
          </Box>
        </Collapse>
      </Container>
    </Layout>
  )
}