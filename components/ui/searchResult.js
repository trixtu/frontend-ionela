import { Heading, Image } from '@chakra-ui/react'
import { Divider } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function earchResult({ products, isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div className="absolute border w-full bg-white h-[500px] overflow-y-scroll">
          {products.length > 0 &&
            products.map((product) => (
              <Link
                key={product._id}
                href={`/product/${product._id}`}
                onClick={() => setIsOpen(false)}
              >
                <div>
                  <div className="flex gap-2 p-2 hover:bg-green">
                    <Image
                      src={product.images[0]}
                      alt=""
                      width={20}
                      height={20}
                    />
                    <Heading as="h4" size="md">
                      {product.title}
                    </Heading>
                  </div>
                  <Divider />
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  )
}
