import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Hidden,
  Paper,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import React from 'react'

export default function SliderHome({ slider }) {
  return (
    <Container>
      <Paper
        variant="outlined"
        sx={{
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <div className="md:flex items-center justify-between">
          <CardMedia
            component={'img'}
            image={slider?.image[0]}
            alt=""
            sx={{
              width: '400px',
              padding: 1,
            }}
          />
          <div className="flex flex-col mr-8 gap-3">
            <Button href={'/numerologie'} variant="contained" color="green">
              Numerologie
              <ChevronRight size={20} />
            </Button>
            <Button href={'#'} variant="contained" color="green">
              Consiliere pentru dezvoltare personala
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </Paper>
    </Container>
  )
}
