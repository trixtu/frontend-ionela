import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from 'next/link'

import YouTubeIcon from '@mui/icons-material/YouTube'
export default function MaAbonez() {
  return (
    <div className="flex flex-col justify-center text-white mt-10 mr-10">
      <div className="flex items-center gap-2 mb-4 ">
        <Link href={'#'}>
          <FacebookIcon fontSize="large" />
        </Link>
        <Link href={'#'}>
          <InstagramIcon fontSize="large" />
        </Link>
        <Link href={'#'}>
          <YouTubeIcon fontSize="large" />
        </Link>
      </div>
      <label>
        Nume si Prenume <span>*</span>
      </label>
      <input />
      <label>
        E-mail <span>*</span>
      </label>
      <input />
    </div>
  )
}
