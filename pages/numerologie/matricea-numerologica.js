import Layout from '@/components/Layout'
import { Heading } from '@chakra-ui/react'
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import React from 'react'

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
  const [selectedTag, setSelectedTag] = React.useState('')
  const [selectedMonth, setSelectedMonth] = React.useState('')
  const [selectedYear, setSelectedYear] = React.useState('')

  const handleChangeTag = (event) => {
    setSelectedTag(event.target.value)
  }
  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value)
  }
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
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

  const matriceDataNastere = `${selectedTag}.${selectedMonth}.${selectedYear}.${primulNumarOperativ}${alDoileaNumarOperativ}${alTreileaNumarOperativ}${alPatruleaNumarOperativ}`

  console.log(matriceDataNastere)

  return (
    <Layout>
      <Container>
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
          <Button variant="contained" color="gold">
            Calculeaza Acum
          </Button>
        </div>
        {matriceDataNastere && <p>{matriceDataNastere}</p>}
      </Container>
    </Layout>
  )
}
