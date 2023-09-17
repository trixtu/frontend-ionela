import Header from '@/components/Header'
import CardProduct from '@/components/ui/card-product'
import { mongooseConnect } from '@/lib/mongoose'
import { Category } from '@/models/Category'
import { Product } from '@/models/Product'
import { Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CategoryPage({
  category,
  subCategories,
  products: originalProducts,
}) {
  const defaultSorting = '_id-desc'
  const defaultFilterValues = category.properties.map((p) => ({
    name: p.name,
    value: 'all',
  }))
  const [products, setProducts] = useState(originalProducts)
  const [filtersValues, setFiltersValues] = useState(defaultFilterValues)
  const [sort, setSort] = useState(defaultSorting)
  const [loadingProducts, setLoadingProducts] = useState(false)
  const [filtersChanged, setFiltersChanged] = useState(false)

  function handleFilterChange(filterName, filterValue) {
    setFiltersValues((prev) => {
      return prev.map((p) => ({
        name: p.name,
        value: p.name === filterName ? filterValue : p.value,
      }))
    })
    setFiltersChanged(true)
  }
  useEffect(() => {
    if (!filtersChanged) {
      return
    }
    setLoadingProducts(true)
    const catIds = [category._id, ...(subCategories?.map((c) => c._id) || [])]
    const params = new URLSearchParams()
    params.set('categories', catIds.join(','))
    params.set('sort', sort)
    filtersValues.forEach((f) => {
      if (f.value !== 'all') {
        params.set(f.name, f.value)
      }
    })
    const url = `/api/products?` + params.toString()
    axios.get(url).then((res) => {
      setProducts(res.data)
      setLoadingProducts(false)
    })
  }, [filtersValues, sort, filtersChanged, category._id, subCategories])
  return (
    <div>
      <Header />
      <Container>
        <div className="flex items-center justify-between mt-4 ">
          <Typography variant="h6">{category.name}</Typography>
          <div className="flex gap-4">
            {category.properties.map((prop, index) => (
              <div
                className="bg-[#ddd] px-3 py-1 rounded-sm text-[#444] capitalize"
                key={index}
              >
                <span className="mr-2">{prop.name}:</span>
                <select
                  className="bg-transparent border-none fon"
                  onChange={(ev) =>
                    handleFilterChange(prop.name, ev.target.value)
                  }
                  value={filtersValues.find((f) => f.name === prop.name).value}
                >
                  <option value={'all'}>All</option>
                  {prop.values.map((v, index) => (
                    <option key={index}>{v}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="bg-[#ddd] px-3 py-1 rounded-sm text-[#444] capitalize">
              <span>Sort:</span>
              <select
                className="bg-transparent border-none fon"
                value={sort}
                onChange={(ev) => {
                  setSort(ev.target.value)
                  setFiltersChanged(true)
                }}
              >
                <option value="price-asc">price, lowest first</option>
                <option value="price-desc">price, highest first</option>
                <option value="_id-desc">newest first</option>
                <option value="_id-asc">oldest first</option>
              </select>
            </div>
          </div>
        </div>
        <CardProduct products={products} />
      </Container>
    </div>
  )
}

export async function getServerSideProps(context) {
  await mongooseConnect()
  const category = await Category.findById(context.query.id)
  const subCategories = await Category.find({ parent: category._id })
  const catIds = [category._id, ...subCategories.map((c) => c._id)]
  const products = await Product.find({ category: catIds })

  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
      products: JSON.parse(JSON.stringify(products)),
      subCategories: JSON.parse(JSON.stringify(subCategories)),
    },
  }
}
