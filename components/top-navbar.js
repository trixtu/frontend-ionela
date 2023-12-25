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
      className="text-[#fff6c9] bg-cover"
      style={{
        backgroundImage:
          ' url(/images/360_F_101044570_T9unk816eB6uiN0J29omibuDfzDkpxu9.jpg)',
        width: 'auto',
        height: 'auto',
      }}
    >
      <Container className="py-1">
        <Grid container spacing={1} columns={16}>
          <Grid item xs={8}>
            <ul className="flex gap-2">
              <Link href={'https://www.facebook.com/profile.php?id=100093896307800'}>
                <FacebookRoundedIcon fontSize="12px" />
              </Link>
              <Link href={'https://www.youtube.com/channel/UCv-3HpKbqaQWbiIOBkOzxig'}>
                <YouTubeIcon fontSize="12px" />
              </Link>
              <Link href={'https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Felacojocaru%3Figshid%3DNzZlODBkYWE4Ng%253D%253D%26fbclid%3DIwAR146nBz4X-yx9I-XdnHH8XxgEtBDauWkwpMkBTZWN_XOg0pYhgac0vvR_4&h=AT1vYqG9E_rQFntgBQwIqkm7LVxRnMcsn4RoZXBb6uy7SDVouqT0KKdeYwIZJsGqHaJwkNqabDzNSHfLMUQlVsIyZnn2ZZ_vWiiUeOnauD24bGy8IqNxxc3AC0sOGn2AVbI'}>
                <InstagramIcon fontSize="12px" />
              </Link>
            </ul>
          </Grid>
          <Grid item xs={8} className=" text-right">
            <ul className="flex justify-end gap-2 text-sm">
              {/* <Link href={'/'} className="flex gap-1 items-center">
                <PhoneAndroidIcon fontSize="12px" />
                +401704015687
              </Link> */}
              <Link href={'/'} className="flex gap-1 items-center">
                <EmailIcon fontSize="12px" />
                numerologie.contact@gmail.com
              </Link>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <div
        className="bg-contain  h-[5px]"
        style={{
          backgroundImage: ' url(/images/53f3ee01b5165a2abdd4c6d8d9123119.jpg)',
          width: 'auto',
        }}
      />
    </div>
  )
}
