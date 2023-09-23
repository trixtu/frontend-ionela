import { Button, Typography } from '@mui/material'
import React from 'react'

export default function TrimiteMesaj() {
  return (
    <div className="mt-10 mr-10 text-neutral-900 border-l-4 border-[#f0ba27] pl-4 flex flex-col min-h-[220px]">
      <Typography variant="h5" fontWeight={500} marginBottom={3}>
        Trimite-mi un mesaj
      </Typography>

      <label>
        Nume si Prenume <span className="text-red-600">*</span>
      </label>
      <input placeholder="Ex: Ionela Cojocaru" />
      <label>
        De unde esti? <span className="text-red-600">*</span>
      </label>
      <input placeholder="Ex: Bucuresti" />
      <label>
        Numar de telefon <span className="text-red-600">*</span>
      </label>
      <input placeholder="Ex: 0766516627" />
      <label>
        E-mail <span className="text-red-600">*</span>
      </label>
      <input type="email" placeholder="Ex: trixtu@gmail.com" />
      <div className="flex flex-col mb-4">
        <label>
          Mesajul tău <span className="text-red-600">*</span>
        </label>
        <textarea />
      </div>
      <div>
        <Button variant="contained" color="gold">
          Trimite
        </Button>
      </div>
    </div>
  )
}
