import { Button, Typography } from '@mui/material'
import React from 'react'
import ContactForm from './contact-form'

export default function TrimiteMesaj() {
  return (
    <div className="mt-10 mr-10 text-neutral-900 border-l-4 border-[#f0ba27] pl-4 flex flex-col min-h-[220px]">
      <Typography variant="h5" fontWeight={500} marginBottom={3}>
        Trimite-mi un mesaj
      </Typography>
      <ContactForm />
    </div>
  )
}
