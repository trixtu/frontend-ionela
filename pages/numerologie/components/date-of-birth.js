import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2

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
  { length: 60 },
  (_, index) => new Date().getFullYear() - index
)

export default function DateOfBirth() {
  const [selectedTag, setSelectedTag] = React.useState('')
  const [selectedMonth, setSelectedMonth] = React.useState('')
  const [selectedYear, setSelectedYear] = React.useState('')
  const [lifePathNumber, setLifePathNumber] = React.useState('')

  const handleChangeTag = (event) => {
    setSelectedTag(event.target.value)
  }
  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value)
  }

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
  }

  /////////////////////////////////////

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

  ////////////////////////////////////////

  function handleCalculate() {
    let lifePath = 0
    const total = sumTag + sumMonth + sumYear
    console.log(total)

    const totalArr = String(total)
      .split('')
      .map((num) => {
        return Number(num)
      })

    if (total === 22) {
      lifePath = total
    } else if (total === 33) {
      lifePath = total
    } else {
      const sumTotal = totalArr.reduce(
        (acumulator, currentValue) => acumulator + currentValue,
        0
      )

      if (sumTotal === 11) {
        lifePath = sumTotal
      } else if (sumTotal === 22) {
        lifePath = sumTotal
      } else if (sumTotal === 33) {
        lifePath = sumTotal
      } else {
        const sumTotalArr = String(sumTotal)
          .split('')
          .map((num) => {
            return Number(num)
          })
        const finalTotal = sumTotalArr.reduce(
          (acumulator, currentValue) => acumulator + currentValue,
          0
        )

        lifePath = finalTotal
      }
    }
    setLifePathNumber(lifePath)
  }

  return (
    <>
      {/* <p>Numbers: {numbers.join(', ')}</p> */}
      <Typography
        textAlign={'left'}
        sx={{
          backgroundColor: '#7e3a06',
          paddingX: 4,
          color: '#fff',
          paddingY: 1,
          marginBottom: 2,
        }}
      >
        Life Path - Calculator
      </Typography>
      <Grid container spacing={2} marginBottom={6}>
        <Grid xs={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="tag">Day</InputLabel>
            <Select
              labelId="tag"
              id="tag"
              value={selectedTag}
              label="Tag"
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

        <Grid xs={6}>
          <FormControl fullWidth size="small">
            <InputLabel id="month">Month</InputLabel>
            <Select
              labelId="month"
              id="month"
              value={selectedMonth}
              label="Month"
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

        <Grid xs={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="month">Year</InputLabel>
            <Select
              labelId="month"
              id="month"
              value={selectedYear}
              label="Month"
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

        <Button
          fullWidth
          variant="contained"
          color="green"
          disabled={selectedTag && selectedMonth && selectedYear ? false : true}
          onClick={handleCalculate}
        >
          Calculate
        </Button>
        {lifePathNumber && (
          <div className="text-left mt-2">
            <Typography variant="subtitle1" fontWeight={600}>
              Life Path Number:
            </Typography>
            <Typography variant="subtitle1">
              {selectedTag + ' ' + selectedMonth.name}
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              Your Life Path Number is:
              <span className="text-2xl font-bold">{lifePathNumber}</span>
            </Typography>
          </div>
        )}
      </Grid>
    </>
  )
}
