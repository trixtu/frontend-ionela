import { mongooseConnect } from '@/lib/mongoose'
import { Textarea } from '@/models/Textarea'

export default async function handle(req, res) {
  await mongooseConnect()

  if (req.method === 'GET') {
    res.json(await Textarea.find())
  }
}
