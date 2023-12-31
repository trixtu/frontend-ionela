import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Layout from '@/components/Layout'
import { Heading } from '@chakra-ui/react'
import HomeIcon from '@mui/icons-material/Home'
import Breadcrumb from '@/components/ui/breadcrumb'
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'

const tags = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
]

const monts = [
  {
    name: 'Ianuarie',
    value: '1',
  },
  {
    name: 'Februarie',
    value: '2',
  },
  {
    name: 'Martie',
    value: '3',
  },
  {
    name: 'Aprilie',
    value: '4',
  },
  {
    name: 'Mai',
    value: '5',
  },
  {
    name: 'Iunie',
    value: '6',
  },
  {
    name: 'Iulie',
    value: '7',
  },
  {
    name: 'August',
    value: '8',
  },
  {
    name: 'Septembrie',
    value: '9',
  },
  {
    name: 'Octombrie',
    value: '10',
  },
  {
    name: 'Noiembrie',
    value: '11',
  },
  {
    name: 'Decembrie',
    value: '12',
  },
]

const years = Array.from(
  { length: 70 },
  (_, index) => new Date().getFullYear() - index
)
export default function MatriceaNumerologica() {
  const router = useRouter()

  const [selectedTag, setSelectedTag] = React.useState('')
  const [selectedMonth, setSelectedMonth] = React.useState('')
  const [selectedYear, setSelectedYear] = React.useState('')
  const [matriceUnu, setMatriceUnu] = useState(null)
  const [matriceDoi, setMatriceDoi] = useState(null)
  const [matriceTrei, setMatriceTrei] = useState(null)
  const [matricePatru, setMatricePatru] = useState(null)
  const [matriceCinci, setMatriceCinci] = useState(null)
  const [matriceSase, setMatriceSase] = useState(null)
  const [matriceSapte, setMatriceSapte] = useState(null)
  const [matriceOpt, setMatriceOpt] = useState(null)
  const [matriceNoua, setMatriceNoua] = useState(null)

  const handleChangeTag = (event) => {
    setSelectedTag(event.target.value)
  }
  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value)
  }
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
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
      Calculator Numerologic
    </Link>,
    <Typography key="3" color="text.primary">
      Matricea numerologica
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
  ///Year////////////
  const yearArr = String(selectedYear)
    .split('')
    .map((num) => {
      return Number(num)
    })

  const sumYear = yearArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  //--day--//
  const tagArr = String(selectedTag)
    .split('')
    .map((num) => {
      return Number(num)
    })

  const sumTag = tagArr.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    0
  )

  //--month--//

  const monthArr = String(selectedMonth)
    .split('')
    .map((num) => {
      return Number(num)
    })

  const sumMonth = monthArr.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    0
  )

  function handleCalculMatrice() {
    if (selectedTag && selectedMonth && selectedYear) {
      const primulNumarOperativ = sumTag + sumMonth + sumYear
      const alDoileaNumarOperativArr = String(primulNumarOperativ)
        .split('')
        .map((num) => {
          return Number(num)
        })

      const alDoileaNumarOperativ = alDoileaNumarOperativArr.reduce(
        (acumulator, currentValue) => acumulator + currentValue,
        0
      )

      const numarZiOriDoi = tagArr[0] * 2
      const alTreileaNumarOperativ = primulNumarOperativ - numarZiOriDoi
      const alPatruleaNumarOperativArr = String(alTreileaNumarOperativ)
        .split('')
        .map((num) => {
          return Number(num)
        })

      const alPatruleaNumarOperativ = alPatruleaNumarOperativArr.reduce(
        (acumulator, currentValue) => acumulator + currentValue,
        0
      )
      if (
        primulNumarOperativ &&
        alDoileaNumarOperativ &&
        alTreileaNumarOperativ &&
        alPatruleaNumarOperativ
      ) {
        const matrice =
          selectedTag +
          selectedMonth +
          selectedYear +
          primulNumarOperativ +
          alDoileaNumarOperativ +
          alTreileaNumarOperativ +
          alPatruleaNumarOperativ

        const matriceArr = String(matrice)
          .split('')
          .map((num) => {
            return Number(num)
          })

        const counts = {}
        matriceArr.forEach(function (x) {
          counts[x] = (counts[x] || 0) + 1
        })

        if (counts[1] > 0) {
          const unu = Array(counts[1]).fill(1)
          setMatriceUnu(unu)
        } else {
          setMatriceUnu(null)
        }

        if (counts[2] > 0) {
          const doi = Array(counts[2]).fill(2)
          setMatriceDoi(doi)
        } else {
          setMatriceDoi(null)
        }

        if (counts[3] > 0) {
          const trei = Array(counts[3]).fill(3)
          setMatriceTrei(trei)
        } else {
          setMatriceTrei(null)
        }

        if (counts[4] > 0) {
          const patru = Array(counts[4]).fill(4)
          setMatricePatru(patru)
        } else {
          setMatricePatru(null)
        }

        if (counts[5] > 0) {
          const cinci = Array(counts[5]).fill(5)
          setMatriceCinci(cinci)
        } else {
          setMatriceCinci(null)
        }

        if (counts[6] > 0) {
          const sase = Array(counts[6]).fill(6)
          setMatriceSase(sase)
        } else {
          setMatriceSase(null)
        }

        if (counts[7] > 0) {
          const sapte = Array(counts[7]).fill(7)
          setMatriceSapte(sapte)
        } else {
          setMatriceSapte(null)
        }

        if (counts[8] > 0) {
          const opt = Array(counts[8]).fill(8)
          setMatriceOpt(opt)
        } else {
          setMatriceOpt(null)
        }

        if (counts[9] > 0) {
          const noua = Array(counts[9]).fill(9)
          setMatriceNoua(noua)
        } else {
          setMatriceNoua(null)
        }
      }
    }
  }

  return (
    <Layout>
      <Head>
        <title>
          Matricea Numerologica, introdu data nastere si calculeaza |
          Numerologie
        </title>
      </Head>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Heading>Matricea Numerologica</Heading>
        <div className="bg-neutral-200 mt-4 p-6 border">
          <Grid container>
            <Grid item sx={{ marginBottom: '20px' }} xs={12} md={3}>
              DATA NAȘTERII
            </Grid>
            <Grid item sx={{ marginBottom: '20px' }} xs={12} md={7}>
              <Grid container className="gap-2">
                <Grid item xs={2}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel id="demo-simple-select-label-tag">
                      Zi
                    </InputLabel>
                    <Select
                      sx={{ backgroundColor: '#fff' }}
                      labelId="demo-simple-select-label-tag"
                      id="demo-simple-select-tag"
                      value={selectedTag}
                      label="Zi"
                      onChange={handleChangeTag}
                    >
                      {tags.map((tag, index) => (
                        <MenuItem key={index} value={tag}>
                          {tag}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel id="demo-simple-select-label-luna">
                      Luna
                    </InputLabel>
                    <Select
                      sx={{ backgroundColor: '#fff' }}
                      labelId="demo-simple-select-label-luna"
                      id="demo-simple-select-luna"
                      value={selectedMonth}
                      label="Luna"
                      onChange={handleChangeMonth}
                    >
                      {monts.map((month, index) => (
                        <MenuItem key={index} value={month.value}>
                          {month.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel id="demo-simple-select-label-an">An</InputLabel>
                    <Select
                      labelId="demo-simple-select-label-an"
                      id="demo-simple-select-an"
                      sx={{ backgroundColor: '#fff' }}
                      value={selectedYear}
                      label="An"
                      onChange={handleYearChange}
                    >
                      {years.map((year, index) => (
                        <MenuItem key={index} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="gold"
            onClick={handleCalculMatrice}
          >
            Calculeaza Acum
          </Button>
        </div>
        <div className="mt-4 mb-4">
          <table className="table-bordered table-2 matrice text-xs">
            <tbody>
              <tr className="flex">
                <td className="w-32 border bg-red-300 flex flex-col items-center p-3">
                  <b className="text-xl">{matriceUnu ? matriceUnu : <br />}</b>
                  <span className="uppercase">Caracter</span>
                </td>
                <td className="w-32   p-3 border bg-[#fedc99]  flex flex-col items-center">
                  <b className="text-xl">
                    {matricePatru ? matricePatru : <br />}
                  </b>
                  <span className="uppercase">SĂNĂTATE</span>
                </td>
                <td className=" w-32 border bg-[#ebfbdc] p-3 flex flex-col items-center">
                  <b className="text-xl">
                    {matriceSapte ? matriceSapte : <br />}
                  </b>
                  <span className="uppercase">Talent</span>
                </td>
              </tr>
              <tr className="flex min-w-60">
                <td className="w-32 border bg-[#d3f3fe] p-3 flex flex-col items-center">
                  <b className="text-xl">{matriceDoi ? matriceDoi : <br />}</b>
                  <span className="uppercase">ENERGIE</span>
                </td>
                <td className="w-32 border bg-red-300 p-3 flex flex-col items-center">
                  <b className="text-xl">
                    {matriceCinci ? matriceCinci : <br />}
                  </b>
                  <span className="uppercase">INTUIȚIE</span>
                </td>
                <td className="w-32 border bg-[#fedc99] p-3 flex flex-col items-center">
                  <b className="text-xl">{matriceOpt ? matriceOpt : <br />}</b>
                  <span className="uppercase">Simt al Datoriei</span>
                </td>
              </tr>
              <tr className="flex">
                <td className="w-32 border bg-[#ebfbdc] p-3 flex flex-col items-center">
                  <b className="text-xl">
                    {matriceTrei ? matriceTrei : <br />}
                  </b>
                  <span className="uppercase">Memorie</span>
                </td>
                <td className="w-32 border bg-[#d3f3fe] p-3 flex flex-col items-center">
                  <b className="text-xl">
                    {matriceSase ? matriceSase : <br />}
                  </b>
                  <span className="uppercase">SIMȚ PRACTIC</span>
                </td>
                <td className="w-32 border bg-red-300 p-3 flex flex-col items-center">
                  <b className="text-xl">
                    {matriceNoua ? matriceNoua : <br />}
                  </b>
                  <span className="uppercase">MENTAL</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Layout>
  )
}
