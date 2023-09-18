/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { CartContext } from '@/context/CartContext'
import axios from 'axios'
import Image from 'next/image'
import { Box, Button, CardMedia, Rating, Typography } from '@mui/material'
import { toast } from 'react-toastify'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import StarIcon from '@mui/icons-material/Star'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
}

export default function ProductBox({
  ratings,
  products,
  _id,
  title,
  description,
  price,
  sale,
  images,
  wished = false,
  onRemoveFromWishlist = () => {},
}) {
  const { addProduct, cartItems } = useContext(CartContext)
  const url = '/product/' + _id
  const [isWished, setIsWished] = useState(wished)

  // useEffect(() => {
  //   axios.get(`/api/ratings`).then((res) => {
  //     setRatings(res.data)
  //   })
  // }, [])

  function addToWishlist(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    const nextValue = !isWished
    if (nextValue === false && onRemoveFromWishlist) {
      onRemoveFromWishlist(_id)
    }
    axios
      .post('/api/wishlist', {
        product: _id,
      })
      .then(() => {})
    setIsWished(nextValue)
  }

  let off = 0
  if (sale) {
    off = (100 - (sale * 100) / price).toFixed(0)
  }

  let value = null
  const reviews = ratings?.filter((r) => r.product === _id)
  if (reviews) {
    const review = reviews.map((r) => r.stars)
    for (const star of review) {
      if (review !== null) {
        const length = star / review.length
        if (length) value += length
      }
    }
  }

  if (value >= 1.1 && value <= 1.4) value = 1.5
  if (value >= 1.6 && value <= 1.9) value = 2
  if (value >= 2.1 && value <= 2.4) value = 2.5
  if (value >= 2.6 && value <= 2.9) value = 3
  if (value >= 3.1 && value <= 3.4) value = 3.5
  if (value >= 3.6 && value <= 3.9) value = 4
  if (value >= 4.1 && value <= 4.4) value = 4.5
  if (value >= 4.6 && value <= 4.9) value = 5

  return (
    <article className="mb-4 overflow-hidden rounded-sm border max-w-[300px] min-w-full  text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl relative">
      <Link className="" href={'/product/' + _id}>
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '70%',
          }}
          image={images[0]}
        />
        {/* <div className="relative h-48  mx-2 mt-2 flex items-center justify-center text-center">
            <img
              src={images[0]}
              alt={title}
              className="object-fill w-full h-full rounded-sm"
              loading="lazy"
            />
          </div> */}
        <button
          className="absolute top-0 right-0 mt-2 rounded-full px-2 text-center text-sm font-medium text-textGold"
          onClick={addToWishlist}
        >
          {isWished ? (
            <FavoriteIcon fontSize="medium" />
          ) : (
            <FavoriteBorderIcon fontSize="medium" />
          )}
        </button>
      </Link>

      <div className="p-2 ">
        <div className="grid grid-cols-12 gap-2">
          {off !== 0 ? (
            <span className="flex items-center justify-center col-span-3 text-center w-full shadow-md text-[12px] text-textGold rounded-sm border border-textGold">
              -{off}%
            </span>
          ) : null}

          <Typography
            className="col-span-9"
            variant="overline"
            component={'h3'}
            lineHeight={2}
            fontWeight="500"
            color={'#222'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            height={22}
            whiteSpace={'nowrap'}
          >
            <Link href={'/product/' + _id}>{title}</Link>
          </Typography>
        </div>

        <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-1 w-full">
          <li className="text-left flex items-center gap-2 justify-between">
            {sale && <p className="m-0 text-lg font-bold">{sale} RON</p>}
            <span
              className={
                sale
                  ? 'text-sm text-gray-800 streichpreis'
                  : 'm-0 text-lg font-bold'
              }
            >
              {price} RON
            </span>
          </li>
        </ul>
        <li className="text-left list-none mb-1 w-full">
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating
              size="small"
              readOnly
              value={value}
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 1 }} fontSize={14}>
              {labels[value]}
            </Box>
          </Box>
        </li>
        <Button
          className="w-full"
          color="green"
          variant="contained"
          size="small"
          onClick={() => {
            addProduct(_id),
              toast.success(
                `  ${
                  cartItems.filter((id) => id === _id).length + 1
                } x ${title} in cos`
              )
          }}
        >
          <ShoppingCartIcon fontSize="small" />
          <span>Adauga in cos</span>
        </Button>
      </div>
    </article>
  )
}
