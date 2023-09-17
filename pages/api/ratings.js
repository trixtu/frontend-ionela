import { mongooseConnect } from '@/lib/mongoose'
import { Review } from '@/models/Review'

export default async function handle(req, res) {
  await mongooseConnect()

  if (req.method === 'GET') {
    const { product } = req.body
    res.json(await Review.find(product))
  }
}
