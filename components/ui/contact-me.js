import { Typography } from '@mui/material'
import React from 'react'

export default function ContactMe() {
  return (
    <div className="mt-10 mr-10 text-neutral-900 border-l-4 border-[#f0ba27] pl-4 flex flex-col min-h-[220px]">
      <Typography variant="h5" fontWeight={500} marginBottom={3}>
        Contactează-mă
      </Typography>
      <Typography variant="subtitle1" marginBottom={2}>
        Relații comenzi și livrare
      </Typography>
      <Typography variant="subtitle2">
        Telefon: <span>0754 244 333</span>
      </Typography>
      <Typography variant="subtitle2">
        E-mail: <span>vanzari@numerologie-consiliere.ro</span>
      </Typography>
    </div>
  )
}