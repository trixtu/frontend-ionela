import { Breadcrumbs, Stack } from '@mui/material'
import React from 'react'

export default function Breadcrumb({ breadcrumbs }) {
  return (
    <Stack spacing={2} className="mb-4 ml-8">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}
