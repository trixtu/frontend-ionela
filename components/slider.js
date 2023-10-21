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
import Image from 'next/image'

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
          <div className="flex mr-8 gap-3">
            <div>
              <Image
                src={'/images/key-2471007_1280.jpg'}
                alt=""
                width={600}
                height={400}
              />
            </div>
            <div className="flex flex-col items-left justify-center gap-4">
              <Button href={'/numerologie'} variant="contained" color="gold">
                Calculator numerologic
                <ChevronRight size={20} />
              </Button>
              <Button href={'/numerologie'} variant="contained" color="gold">
                Numerologie
                <ChevronRight size={20} />
              </Button>
              <Button href={'#'} variant="contained" color="gold">
                Consiliere pentru dezvoltare personala
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </Container>
  )
}
