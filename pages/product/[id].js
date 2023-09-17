import Header from '@/components/Header'
import ProductImages from '@/components/product-images'
import ProductReviews from '@/components/product-reviews'
import { CartContext } from '@/context/CartContext'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import { Button, Container, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#eee] pt-5">
        <Container>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7">
              <Paper variant="outlined" className="p-4">
                <ProductImages images={product.images} />
              </Paper>
            </div>
            <div className="col-span-5">
              <Typography variant="h4" fontWeight="500">
                {product.title}
              </Typography>
              <Typography variant="subtitle1">{product.description}</Typography>
              {product.price}
              <Button
                variant="contained"
                color="success"
                onClick={() => addProduct(product._id)}
              >
                Add To Cart
              </Button>
            </div>
          </div>
          <ProductReviews product={product} />
        </Container>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  await mongooseConnect()
  const { id } = context.query
  const product = await Product.findById(id)
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  }
}
