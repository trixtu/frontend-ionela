import { Container, Divider, Grid } from '@mui/material'
import React from 'react'
import MaAbonez from './ui/ma-abonez'
import ContactMe from './ui/contact-me'
import TrimiteMesaj from './ui/trimite-mi-mesaj'
import Link from 'next/link'

export default function Footer() {
  return (
    <div
      className="bg-cover bg-top h-full w-full"
      style={{
        backgroundImage:
          ' url(images/copper-color-background-with-blur-and-smooth-texture-for-festive-metallic-graphic-design-element-vector.jpg)',
      }}
    >
      <div
        className="bg-contain  h-[5px]"
        style={{
          backgroundImage: ' url(images/53f3ee01b5165a2abdd4c6d8d9123119.jpg)',
        }}
      />

      <Container>
        <Grid container spacing={2} paddingBottom={4}>
          <Grid item xs={12} md={4}>
            <MaAbonez />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactMe />
          </Grid>
          <Grid item xs={12} md={4}>
            <TrimiteMesaj />
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2} paddingBottom={4} marginBottom={2}>
          <Grid item xs={12} md={11}>
            <div className="flex gap-4">
              <Link className="hover:underline" href={'#'}>
                Politica cookie
              </Link>
              <Link className="hover:underline" href={'#'}>
                Politica de confidențialitate
              </Link>
              <Link className="hover:underline" href={'#'}>
                Termeni și condiții
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={1} textAlign={'center'}>
            &#169; trixTU
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
