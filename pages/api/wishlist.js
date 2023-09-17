import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { WhischedProduct } from '@/models/WischedProduct'
import { mongooseConnect } from '@/lib/mongoose'

export default async function handle(req, res) {
  await mongooseConnect()
  const { user } = await getServerSession(req, res, authOptions)

  if (req.method === 'POST') {
    const { product } = req.body
    const wishedDoc = await WhischedProduct.findOne({
      userEmail: user.email,
      product,
    })
    if (wishedDoc) {
      await WhischedProduct.findByIdAndDelete(wishedDoc._id)
      res.json({ wishedDoc })
    } else {
      await WhischedProduct.create({ userEmail: user.email, product })
      res.json('created')
    }
  }

  if (req.method === 'GET') {
    res.json(
      await WhischedProduct.find({ userEmail: user.email }).populate('product')
    )
  }
}
