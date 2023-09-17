import Header from '@/components/Header'
import CardProduct from '@/components/ui/card-product'
import ProductBox from '@/components/ui/product-box'
import { mongooseConnect } from '@/lib/mongoose'
import { Category } from '@/models/Category'
import { Product } from '@/models/Product'
import { Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'
import { WhischedProduct } from '@/models/WischedProduct'
import { Review } from '@/models/Review'

export default function CategoriesPage({
  mainCategories,
  categoriesProducts,
  subCategory,
  categories,
  wishedNewProducts,
  ratings,
}) {
  return (
    <>
      <Header />
      <Container>
        {mainCategories.map((cat) => (
          <div key={cat._id}>
            <div className="flex items-center gap-3">
              <Typography variant="h6" component={'h3'}>
                {cat.name}
              </Typography>
              <div className="underline">
                <Link href={'/category/' + cat._id}>Show all</Link>
              </div>
            </div>
            <section className="flex flex-col px-4 bg-white">
              <div className="grid items-center gap-x-8 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categoriesProducts[cat._id].map((p) => (
                  <ProductBox
                    key={p._id}
                    {...p}
                    wished={wishedNewProducts.includes(p._id)}
                    ratings={ratings}
                  />
                ))}
                <Link
                  className="bg-[#ddd] h-[160px] flex items-center justify-center rounded-sm"
                  href={'/category/' + cat._id}
                >
                  Show all &rarr;
                </Link>
              </div>
            </section>
          </div>
        ))}
      </Container>
    </>
  )
}

export async function getServerSideProps(ctx) {
  await mongooseConnect()
  const ratings = await Review.find({}, null, { sort: { _id: -1 } })
  const categories = await Category.find()
  const mainCategories = categories.filter((c) => !c.parent)
  const categoriesProducts = {} //catId => [products]
  const allFetchedProducts = []
  const subCategory = categories.filter(
    (subCat) => subCat.parent === categories._id
  )
  for (const mainCat of mainCategories) {
    const mainCatId = mainCat._id.toString()
    const childCatIds = categories
      .filter((c) => c?.parent?.toString() === mainCatId)
      .map((c) => c._id)

    const categoriesIds = [mainCatId, ...childCatIds]
    const products = await Product.find({ category: categoriesIds }, null, {
      limit: 3,
      sort: { _id: -1 },
    })
    allFetchedProducts.push(...products.map((p) => p._id.toString()))
    categoriesProducts[mainCat._id] = products
  }

  const session = await getServerSession(ctx.req, ctx.res, authOptions)
  const wishedNewProducts = session.user
    ? await WhischedProduct.find({
        userEmail: session.user.email,
        product: allFetchedProducts,
      })
    : []

  return {
    props: {
      mainCategories: JSON.parse(JSON.stringify(mainCategories)),
      categoriesProducts: JSON.parse(JSON.stringify(categoriesProducts)),
      subCategory: JSON.parse(JSON.stringify(subCategory)),
      categories: JSON.parse(JSON.stringify(categories)),
      wishedNewProducts: wishedNewProducts.map((i) => i.product.toString()),
      ratings: JSON.parse(JSON.stringify(ratings)),
    },
  }
}
