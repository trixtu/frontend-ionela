import { Container, Divider, Grid } from '@mui/material'

import React from 'react'
import MaAbonez from './ui/ma-abonez'
import ContactMe from './ui/contact-me'

export default function Footer() {
  return (
    <div
      className="bg-cover bg-center h-80 relative"
      style={{
        backgroundImage: ' url(images/23354d7db9721d4c530850c2b2177e6c.jpg)',
      }}
    >
      <div
        className="bg-contain  h-[5px]"
        style={{
          backgroundImage: ' url(images/53f3ee01b5165a2abdd4c6d8d9123119.jpg)',
        }}
      />

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <MaAbonez />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactMe />
          </Grid>
          <Grid item xs={12} md={4}>
            ssd
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
