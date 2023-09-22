import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Hidden,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import React from 'react'

export default function SliderHome({ slider }) {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <CardMedia
        component={'img'}
        image={slider?.image[0]}
        alt=""
        sx={{
          maxHeight: '600px',
          objectFit: 'fill',
        }}
      />
      <div className="absolute bottom-20 right-20  flex-col gap-2 hidden md:flex">
        <Button href={'/numerologie'} variant="contained" color="gold">
          Numerologie
          <ChevronRight size={20} />
        </Button>
        <Button href={'#'} variant="contained" color="gold">
          Consiliere pentru dezvoltare personala
          <ChevronRight size={20} />
        </Button>
      </div>
    </Box>
  )
}
