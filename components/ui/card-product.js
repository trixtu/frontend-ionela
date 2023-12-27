/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { toast } from 'react-toastify'
import { Rating } from '@mui/material'
import { CartContext } from '@/context/CartContext'
import React, { useContext, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function CardProduct({ products }) {
  const [isWished, setIsWished] = useState(false)
  const { addProduct, cartProducts } = useContext(CartContext)

  function addToWishList(ev) {
    ev.preventDefault()
    setIsWished((prev) => !prev)
  }
  return (
    <section 
      className="
        flex 
        flex-col 
        items-center 
        bg-white
      "
    >
      <div 
        className="
          mt-10 
          grid 
          max-w-md 
          grid-cols-1 
          gap-4 
          px-2 
          sm:max-w-lg 
          sm:px-5 
          md:max-w-screen-xl 
          md:grid-cols-2 
          md:px-5 
          lg:grid-cols-4 
          lg:gap-4
        "
      >
        {products.map((product) => (
          <article
            key={product._id}
            className="
              mb-4 
              overflow-hidden 
              rounded-sm border 
              text-gray-700 
              shadow-md 
              duration-500 
              ease-in-out 
              #hover:shadow-xl 
              relative
            "
          >
            <Link
              className="
                relative 
                mx-2 
                mt-2 
                flex 
                items-center 
                justify-center 
                h-60 
                overflow-hidden 
                rounded-sm
              "
              href={'/product/' + product._id}
            >
              <div>
                <button
                  className="
                    w-10 
                    h-10 
                    p-3 
                    absolute 
                    top-0 
                    right-2 
                    cursor-pointer 
                    text-textGold
                  "
                  onClick={addToWishList}
                >
                  {isWished ? (
                    <FavoriteBorderIcon fontSize="medium" />
                  ) : (
                    <FavoriteIcon fontSize="medium" />
                  )}
                </button>

                <img
                  className="
                    object-cover 
                    w-full 
                    place-items-center 
                    h-full
                  "
                  src={product.images[0]}
                  alt="product image"
                />
              </div>
              <span 
                className="
                  absolute 
                  top-0 
                  left-0 
                  m-2 
                  rounded-full 
                  bg-green 
                  px-2 
                  text-center 
                  text-sm 
                  font-medium 
                  text-textGold
                "
              >
                39% OFF
              </span>
            </Link>

            <div className="p-4">
              <div className="pb-2">
                <Link
                  href="#"
                  className="
                    text-lg 
                    hover:text-green-600 
                    font-medium 
                    duration-500 
                    ease-in-out
                  "
                >
                  {product.title}
                </Link>
              </div>
              <ul 
                className="
                  m-0 
                  flex 
                  list-none 
                  items-center 
                  justify-between 
                  px-0 
                  pt-6 
                  pb-1
                "
              >
                <li className="text-left">
                  <span className="text-sm text-gray-400">{product.price}</span>
                  <p className="m-0 text-base font-medium">{product.price}</p>
                </li>
                <Rating />
              </ul>
              <button
                className='
                  bg-lime-700 
                  text-yellow-300 
                  py-1 
                  px-4 
                  font-semibold 
                  rounded-sm 
                  shadow-sm 
                  border 
                  hover:opacity-90 
                  w-full
                '
                onClick={() => {
                  addProduct(product._id),
                    toast.success(
                      `  ${
                        cartProducts.filter((id) => id === product._id).length +
                        1
                      } x ${product.title} in cos`
                    )
                }}
              >
                Add To Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
