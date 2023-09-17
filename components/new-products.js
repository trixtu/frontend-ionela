import React from 'react'
import ProductBox from './ui/product-box'
import { Box, Grid } from '@mui/material'

export default function NewProducts({
  products,
  wishedProducts = [],
  ratings,
}) {
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        paddingX={{ xs: 4 }}
      >
        {products.length > 0 &&
          products.map((p, index) => (
            <Grid item xs={4} sm={4} lg={3} md={4} key={index}>
              <ProductBox
                {...p}
                ratings={ratings}
                wished={wishedProducts.includes(p._id)}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  )
}
