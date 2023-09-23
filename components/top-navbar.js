/* eslint-disable react/jsx-no-undef */
import { Container, Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import EmailIcon from '@mui/icons-material/Email'

export default function TopNavBar() {
  return (
    <div
      className="bg-greenHell border-b-2 border-gold text-[#fff6c9] bg-cover"
      style={{
        backgroundImage:
          ' url(images/360_F_101044570_T9unk816eB6uiN0J29omibuDfzDkpxu9.jpg)',
      }}
    >
      <Container className="py-1">
        <Grid container spacing={1} columns={16}>
          <Grid item xs={8}>
            <ul className="flex gap-2">
              <Link href={'/'}>
                <FacebookRoundedIcon fontSize="12px" />
              </Link>
              <Link href={'/'}>
                <YouTubeIcon fontSize="12px" />
              </Link>
              <Link href={'/'}>
                <InstagramIcon fontSize="12px" />
              </Link>
            </ul>
          </Grid>
          <Grid item xs={8} className=" text-right">
            <ul className="flex justify-end gap-2 text-sm">
              <Link href={'/'} className="flex gap-1 items-center">
                <PhoneAndroidIcon fontSize="12px" />
                +401704015687
              </Link>
              <Link href={'/'} className="flex gap-1 items-center">
                <EmailIcon fontSize="12px" />
                cubitt12@gmail.com
              </Link>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
