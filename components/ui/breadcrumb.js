import React from 'react'
import { Breadcrumbs, Stack } from '@mui/material'

export default function Breadcrumb({ breadcrumbs }) {
  return (
    <Stack spacing={2} className="mb-4 ml-8 mt-4">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}
