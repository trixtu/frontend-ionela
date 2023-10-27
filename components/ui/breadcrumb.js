import React from 'react'
import { Breadcrumbs, Stack } from '@mui/material'

export default function Breadcrumb({ breadcrumbs }) {
  return (
    <Stack spacing={2} className="mb-4 pl-8 mt-4 text-xs border-b border-t">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}
