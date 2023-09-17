import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Review } from '@/models/Review'
import Layout from '@/components/Layout'
import { Product } from '@/models/Product'
import { getServerSession } from 'next-auth'
import { Category } from '@/models/Category'
import HomeIcon from '@mui/icons-material/Home'
import TabPanel from '@/components/ui/tab-panel'
import { mongooseConnect } from '@/lib/mongoose'
import ProductBox from '@/components/ui/product-box'
import { authOptions } from './api/auth/[...nextauth]'
import { WhischedProduct } from '@/models/WischedProduct'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Breadcrumb from '@/components/ui/breadcrumb'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}
export default function Shop({
  mainCategories,
  categoriesProducts,
  subCategory,
  categories,
  wishedNewProducts,
  ratings,
}) {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const router = useRouter()

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <div className="flex items-center gap-1">
        <HomeIcon fontSize="small" />
        Home
      </div>
    </Link>,
    <Typography key="3" color="text.primary">
      Shop
    </Typography>,
  ]
  return (
    <Layout>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12 }}>
        <Grid item xs={4} sm={3}>
          <Box sx={{ backgroundColor: 'white' }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: 'divider',
              }}
            >
              {mainCategories.map((cat, index) => (
                <Tab
                  sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    '&:hover': { color: '#25c2a0' },
                  }}
                  key={cat._id}
                  label={cat.name}
                  {...a11yProps({ index })}
                />
              ))}
            </Tabs>
          </Box>
        </Grid>
        {/* tab panel */}
        <Grid item xs={4} sm={9}>
          {mainCategories.map((cat, index) => (
            <TabPanel key={cat._id} value={value} index={index}>
              <div className="flex items-center justify-between bg-[#25c2a0] px-3">
                <Typography
                  variant="h6"
                  component={'h3'}
                  className="capitalize"
                >
                  {cat.name}
                </Typography>

                <Link className="hover:underline" href={'/category/' + cat._id}>
                  Show all
                </Link>
              </div>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {categoriesProducts[cat._id].map((p, index) => (
                  <Grid xs={4} sm={4} md={4} key={index}>
                    <ProductBox
                      {...p}
                      wished={wishedNewProducts.includes(p._id)}
                      ratings={ratings}
                    />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </Layout>
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
