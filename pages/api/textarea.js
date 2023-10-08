import { mongooseConnect } from '@/lib/mongoose'
import { Textarea } from '@/models/Textarea'
import React from 'react'

export default async function handle(req, res) {
  await mongooseConnect()

  if (req.method === 'GET') {
    res.json(await Textarea.find())
  }
}
