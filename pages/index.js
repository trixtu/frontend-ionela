import Layout from '@/components/Layout'
import NewProducts from '@/components/new-products'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'
import { WhischedProduct } from '@/models/WischedProduct'
import { Review } from '@/models/Review'

export default function HomePage({ products, wishedNewProducts, ratings }) {
  return (
    <Layout>
      <NewProducts
        products={products}
        wishedProducts={wishedNewProducts}
        ratings={ratings}
      />
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  await mongooseConnect()
  const products = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  })

  const session = await getServerSession(ctx.req, ctx.res, authOptions)

  const wishedNewProducts = session?.user
    ? await WhischedProduct.find({
        userEmail: session.user.email,
        product: products.map((p) => p._id.toString()),
      })
    : []

  // const productId = products.map((p) => p._id.toString())

  const ratings = await Review.find({}, null, {
    sort: { _id: -1 },
  })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      ratings: JSON.parse(JSON.stringify(ratings)),
      wishedNewProducts: wishedNewProducts.map((i) => i.product.toString()),
    },
  }
}
