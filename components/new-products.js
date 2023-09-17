import React from 'react'
import ProductBox from './ui/product-box'

export default function NewProducts({
  products,
  wishedProducts = [],
  ratings,
}) {
  return (
    <section className="flex flex-col px-4 bg-white items-center">
      <div className="grid items-center gap-x-8 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.length > 0 &&
          products.map((p, index) => (
            <ProductBox
              key={index}
              {...p}
              ratings={ratings}
              wished={wishedProducts.includes(p._id)}
            />
          ))}
      </div>
    </section>
  )
}
