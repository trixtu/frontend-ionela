/* eslint-disable @next/next/no-img-element */
import { Button, Typography } from '@mui/material'
import React from 'react'

export default function SliderHome({ slider }) {
  console.log(slider)
  return (
    <div className="relative">
      <div className="absolute  p-2 top-[150px] left-10 uppercase stroke-black flex flex-col items-center">
        <Typography variant="h3" fontWeight={600} color={'#1D3812'}>
          Totul este in
        </Typography>
        <Typography
          variant="h2"
          fontFamily={'monospace'}
          fontWeight={600}
          color={'#7DAA6A'}
          marginBottom={4}
        >
          Numere
        </Typography>
        <Button variant="contained" color="green">
          Citeste mai mult
        </Button>
      </div>
      <img
        src={slider?.image[0]}
        alt=""
        className="w-full h-[600px] object-fill"
      />
    </div>
  )
}
