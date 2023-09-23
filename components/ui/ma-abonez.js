import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from 'next/link'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Button } from '@mui/material'

export default function MaAbonez() {
  return (
    <div className="flex flex-col justify-center text-neutral-900 mt-10 mr-10 min-h-[220px]">
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
        Nume si Prenume <span className="text-red-600">*</span>
      </label>
      <input />
      <label>
        E-mail <span className="text-red-600">*</span>
      </label>
      <input />

      <div>
        <Button variant="contained" color="gold">
          Mă Abonez
        </Button>
      </div>
    </div>
  )
}
