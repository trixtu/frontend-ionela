import Layout from '@/components/Layout'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'
import { WhischedProduct } from '@/models/WischedProduct'
import { Review } from '@/models/Review'
import { Slider } from '@/models/Slider'
import Head from 'next/head'
import SliderHome from '@/components/slider'
import { NextSeo } from 'next-seo'
import HomePageUnu from '@/components/home-page-unu'

const SEO = () => {
  <>
    <NextSeo
      description=""
      openGraph={{
        images: [
          {
            url: '',
          },
        ],
      }}
    />
  </>
}

export default function HomePage({
  products,
  wishedNewProducts,
  ratings,
  slider,
}) {
  return (
    <Layout slider={slider}>
      <Head>
        <title>Home</title>
      </Head>

      <SliderHome slider={slider} />
      {/* <NewProducts
        products={products}
        wishedProducts={wishedNewProducts}
        ratings={ratings}
      /> */}
      <HomePageUnu />
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  await mongooseConnect()
  const id = '65089fd9df4de10e9a43c43b'
  const slider = await Slider.findById(id)
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
      slider: JSON.parse(JSON.stringify(slider)),
      products: JSON.parse(JSON.stringify(products)),
      ratings: JSON.parse(JSON.stringify(ratings)),
      wishedNewProducts: wishedNewProducts.map((i) => i.product.toString()),
    },
  }
}
