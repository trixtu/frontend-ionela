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
          <div className="flex flex-col items-center justify-center gap-3 md:grid grid-cols-6">
            <div className="col-span-4 w-full text-center p-2">
              <Image
                src={'/images/key-2471007_1280.jpg'}
                alt=""
                width={700}
                height={400}
                loading="lazy"
              />
            </div>
            <div className=" col-span-2 w-full">
              <div className="flex flex-col items-left justify-center gap-4 p-2">
                <Button
                  href={'/numerologie'}
                  variant="contained"
                  color="gold"
                  sx={{ fontSize: '12px' }}
                >
                  Calculator numerologic
                  <ChevronRight size={20} />
                </Button>
                <Button
                  href={'/numerologie'}
                  variant="contained"
                  color="gold"
                  sx={{ fontSize: '12px' }}
                >
                  Numerologie
                  <ChevronRight size={20} />
                </Button>
                <Button
                  href={'#'}
                  variant="contained"
                  color="gold"
                  sx={{ fontSize: '12px' }}
                >
                  Consiliere pentru dezvoltare personala
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </Container>
  )
}
