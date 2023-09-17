/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import HomeIcon from '@mui/icons-material/Home'
import Breadcrumb from '@/components/ui/breadcrumb'
import { CartContext } from '@/context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Divider, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Input from '@/components/ui/Input'
import { useForm } from 'react-hook-form'
import { data } from 'autoprefixer'
import { GpsFixed, Search } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2'

const apiKey = process.env.GMAP_API_KEY
const mapApiJs = 'https://maps.googleapis.com/maps/api/js'

function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    Object.assign(script, {
      type: 'text/javascript',
      async: true,
      src,
    })
  })
}

export default function CartPage() {
  const {
    cartItems,
    addProduct,
    removeProduct,
    removeProductFromCart,
    clearCart,
    setCartItems,
  } = useContext(CartContext)
  const [products, setProducts] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [sale, setSale] = useState(0)

  const router = useRouter()

  useEffect(() => {
    if (cartItems.length > 0) {
      axios.post('/api/cart', { ids: cartItems }).then((response) => {
        setProducts(response.data)
      })
    } else {
      setProducts([])
    }
  }, [cartItems])

  useEffect(() => {
    successPayment()
  }, [])

  function successPayment() {
    if (typeof window === 'undefined') {
      return
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true)
      setCartItems([])
    }
  }

  function moreOfThisProduct(id) {
    addProduct(id)
  }

  function lessOfThisProduct(id) {
    removeProduct(id)
  }

  function removeFromCart(id) {
    removeProductFromCart(id)
  }

  let productsTotal = 0

  for (const productId of cartItems) {
    const price =
      products.find((p) => p._id === productId && !p.sale)?.price ||
      products.find((p) => p._id === productId && p.sale)?.sale ||
      0
    productsTotal += price
  }

  async function goToPayment(data) {
    const { name, email, city, postalCode, address, country } = data

    const response = await axios.post('/api/checkout', {
      name,
      email,
      city,
      postalCode,
      address,
      country,
      cartItems,
    })
    if (response.data.url) {
      window.location = response.data.url
    }
  }

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }
  let off = 0
  function productSale(product) {
    if (product.sale) {
      const sale = (100 - (product.sale * 100) / product.price).toFixed(0)
      return (off = sale)
    }
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
    // <Link
    //   underline="hover"
    //   key="2"
    //   color="inherit"
    //   href="/material-ui/getting-started/installation/"
    //   onClick={handleClick}
    // >
    //   Core
    // </Link>,
    <Typography key="3" color="text.primary">
      Cart
    </Typography>,
  ]

  if (isSuccess) {
    return (
      <Layout>
        <Paper variant="outlined" className="p-8">
          <Typography variant="h6">Thanks for your order!</Typography>
          <Typography variant="subtitle1">
            We will email you when your order will be sent
          </Typography>
        </Paper>
      </Layout>
    )
  }

  return (
    <Layout>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="min-h-screen ">
        <Grid container spacing={2} columns={16}>
          <Grid xs={16} md={11}>
            <Paper variant="outlined">
              {!cartItems?.length && (
                <div className="p-4">Your cart is empty!</div>
              )}
              {products?.length > 0 && (
                <>
                  {products.map((product) => (
                    <div key={product._id}>
                      <div className="flex p-4">
                        <div className="flex-none">
                          <div className="w-32 h-32 flex items-center justify-center text-center object-cover border p-2 shadow-md">
                            <img
                              className="h-full"
                              src={product.images[0]}
                              alt="image"
                            />
                          </div>
                        </div>

                        <div className="flex-1 ml-4">
                          <div className="h-32 flex flex-col justify-between">
                            <Typography
                              variant="subtitle1"
                              className="font-semibold"
                            >
                              {product.title}
                            </Typography>
                            <Typography variant="subtitle2">
                              Livrare imediata
                            </Typography>
                            <div className="flex items-center gap-4">
                              <span className="bg-lime-600 text-white rounded-sm py-0 px-2 text-sm">
                                Bestseller
                              </span>
                              <span className="bg-lime-600 text-white rounded-sm py-0 px-2 text-sm">
                                New
                              </span>
                              {product.sale && (
                                <span className="bg-red-600 text-white rounded-sm py-0 px-2 text-sm">
                                  {productSale(product)}%
                                </span>
                              )}
                            </div>
                            <Typography variant="caption">
                              {product.sale ? (
                                <div>
                                  <span className=" font-semibold">
                                    <span className=" font-normal">
                                      Einzelpreis:
                                    </span>{' '}
                                    {product.sale} RON
                                  </span>
                                  <span className="ml-2 ">
                                    pret vechi
                                    <span className="ml-2 streichpreis">
                                      {product.price} RON
                                    </span>
                                  </span>
                                </div>
                              ) : (
                                <span>Einzelpreis: {product.price} RON</span>
                              )}
                            </Typography>
                          </div>
                        </div>

                        <div className="flex-none">
                          <div className="w-20 h-32 flex flex-col items-center justify-between">
                            <div>
                              <span className="text-sm font-semibold">
                                {(
                                  cartItems.filter((id) => id === product._id)
                                    .length *
                                  (product.sale ? product.sale : product.price)
                                ).toFixed(2)}{' '}
                                RON
                              </span>
                            </div>
                            <div>
                              <div
                                type="text"
                                className="w-12 h-6 border-2 border-gray-500 text-center rounded-sm"
                              >
                                {
                                  cartItems.filter((id) => id === product._id)
                                    .length
                                }
                              </div>
                              <div className="flex items-center justify-center bg-gray-100">
                                <button
                                  className="border px-2 py-0"
                                  onClick={() => {
                                    lessOfThisProduct(product._id),
                                      toast.success(
                                        `  ${
                                          cartItems.filter(
                                            (id) => id === product._id
                                          ).length - 1
                                        } x ${product.title} in cos`
                                      )
                                  }}
                                >
                                  -
                                </button>
                                <button
                                  className="border px-2 py-0"
                                  onClick={() => {
                                    moreOfThisProduct(product._id),
                                      toast.success(
                                        `  ${
                                          cartItems.filter(
                                            (id) => id === product._id
                                          ).length + 1
                                        } x ${product.title} in cos`
                                      )
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <FavoriteBorderIcon
                                color="inherit"
                                fontSize="medium"
                                className="cursor-pointer hover:text-textGold"
                              />
                              <button
                                onClick={() => {
                                  removeFromCart(product._id),
                                    toast.info(
                                      'Produsul a fost eliminat din cos'
                                    )
                                }}
                              >
                                <DeleteIcon
                                  className="cursor-pointer"
                                  fontSize="medium"
                                  color="error"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Divider className="w-[95%] ml-[2.5%]" />
                    </div>
                  ))}
                </>
              )}
            </Paper>
          </Grid>
          {!!cartItems?.length && (
            <Grid xs={16} md={5}>
              <Paper variant="outlined">
                <form onSubmit={handleSubmit(goToPayment)}>
                  <div className="p-4">
                    <input
                      className={errors.name?.message && 'mb-0 text-red-500'}
                      {...register('name', {
                        required: 'This is required.',
                        minLength: {
                          value: 4,
                          message: 'Min length is 4',
                        },
                      })}
                      placeholder="Name"
                    />
                    <p className="text-sm text-red-500">
                      {errors.name?.message}
                    </p>
                    <input
                      className={errors.email?.message && 'mb-0 text-red-500'}
                      {...register('email', {
                        required: 'This is required.',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email',
                        },
                      })}
                      placeholder="Email"
                    />
                    <p className="text-sm text-red-500">
                      {errors.email?.message}
                    </p>

                    {/* <div className="search">
                      <span className="fixed">
                        <Search />
                      </span>
                      <input type="text" placeholder="Search location..." />
                      <button type="button">
                        <GpsFixed />
                      </button>
                    </div> */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-1">
                        <input
                          className={
                            errors.postalCode?.message && 'mb-0 text-red-500'
                          }
                          {...register('postalCode', {
                            required: 'This is required.',
                            minLength: {
                              value: 5,
                              message: 'Invalid Code',
                            },
                          })}
                          placeholder="Postal Code"
                        />
                        <p className="text-sm text-red-500">
                          {errors.postalCode?.message}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <input
                          className={
                            errors.city?.message && 'mb-0 text-red-500'
                          }
                          {...register('city', {
                            required: 'This is required.',
                            minLength: {
                              value: 3,
                              message: 'Invalid city',
                            },
                          })}
                          placeholder="City"
                        />
                        <p className="text-sm text-red-500">
                          {errors.city?.message}
                        </p>
                      </div>
                    </div>
                    <input
                      className={errors.address?.message && 'mb-0 text-red-500'}
                      {...register('address', {
                        required: 'This is required.',
                        minLength: {
                          value: 3,
                          message: 'Invalid street',
                        },
                      })}
                      placeholder="Street Address"
                    />
                    <p className="text-sm text-red-500">
                      {errors.address?.message}
                    </p>
                    <input
                      className={errors.country?.message && 'mb-0 text-red-500'}
                      {...register('country', {
                        required: 'This is required.',
                        minLength: {
                          value: 3,
                          message: 'Invalid country',
                        },
                      })}
                      placeholder="Country"
                    />
                    <p className="text-sm text-red-500">
                      {errors.country?.message}
                    </p>
                    <input
                      type="hidden"
                      name="products"
                      value={cartItems.join(',')}
                    />
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <Typography variant="button">
                      <b>
                        {cartItems.length === 1
                          ? cartItems.length + ' Articol '
                          : cartItems.length + ' Articole '}
                        | {productsTotal.toFixed(2)} ron
                      </b>
                    </Typography>
                  </div>
                  <div className="flex items-center justify-center px-4 pb-4">
                    <Button
                      variant="contained"
                      className="primary w-full"
                      type="submit"
                    >
                      Checkout
                    </Button>
                  </div>
                </form>
              </Paper>
            </Grid>
          )}
        </Grid>
      </div>
    </Layout>
  )
}
