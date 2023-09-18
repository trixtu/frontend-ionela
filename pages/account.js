import Layout from '@/components/Layout'
import Input from '@/components/ui/Input'
import ProductBox from '@/components/ui/product-box'
import { Divider, LinearProgress, Paper, Typography } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import { useSession, signOut, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Breadcrumb from '@/components/ui/breadcrumb'
import HomeIcon from '@mui/icons-material/Home'
import { useRouter } from 'next/router'
export default function AccountPage() {
  const { data: session } = useSession()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [country, setCountry] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [wishedProducts, setWishedProducts] = useState([])
  const [orders, setOrders] = useState([])

  const router = useRouter()

  useEffect(() => {
    if (session) {
      setAddress()
    }
  }, [session])

  useEffect(() => {
    fetchWishlist()
  }, [])

  function fetchWishlist() {
    axios.get('/api/wishlist').then((response) => {
      setWishedProducts(response.data.map((wp) => wp.product))
    })
    axios.get('/api/orders').then((response) => {
      setOrders(response.data)
    })
  }

  function setAddress() {
    axios.get('/api/address').then((response) => {
      setName(response.data.name)
      setEmail(response.data.userEmail)
      setCity(response.data.city)
      setPostalCode(response.data.postalCode)
      setStreetAddress(response.data.streetAddress)
      setCountry(response.data.country)
      setLoaded(true)
    })
  }

  async function logOut() {
    await signOut()
  }
  async function login() {
    await signIn('google')
  }

  function saveAddress(ev) {
    ev.preventDefault()
    const data = { name, email, streetAddress, postalCode, country, city }
    axios.put('/api/address', data)
    toast.success('Wow so easy!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    })
  }

  function productRemovedFromWishlist(idToRemove) {
    setWishedProducts((products) => {
      return [...products.filter((p) => p._id.toString() !== idToRemove)]
    })
  }

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
      Account
    </Typography>,
  ]
  return (
    <Layout>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 px-4 md:col-span-8">
          <Paper variant="outlined">
            <div className="p-4">
              <section className="flex flex-col px-4 bg-white">
                <div className="grid items-center gap-x-8 p-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:p-0">
                  {wishedProducts.length > 0 &&
                    wishedProducts.map((p) => (
                      <ProductBox
                        key={p._id}
                        {...p}
                        wished={true}
                        onRemoveFromWishlist={productRemovedFromWishlist}
                      />
                    ))}
                </div>
              </section>
            </div>
          </Paper>
        </div>
        <div className="col-span-12 md:col-span-4 px-4">
          <Paper>
            <div className="p-4">
              <Typography variant="h6" component={'h3'} className="mb-4">
                Account Detail
              </Typography>
              {!loaded && session && <LinearProgress color="success" />}
              {loaded && (
                <>
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={(ev) => setName(ev.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <Input
                      type="text"
                      placeholder="Postal Code"
                      value={postalCode}
                      name="postalCode"
                      onChange={(ev) => setPostalCode(ev.target.value)}
                    />
                    <div className="col-span-2">
                      <Input
                        type="text"
                        placeholder="City"
                        value={city}
                        name="city"
                        onChange={(ev) => setCity(ev.target.value)}
                      />
                    </div>
                  </div>
                  <Input
                    type="text"
                    placeholder="Street Address"
                    value={streetAddress}
                    name="address"
                    onChange={(ev) => setStreetAddress(ev.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Country"
                    value={country}
                    name="country"
                    onChange={(ev) => setCountry(ev.target.value)}
                  />
                </>
              )}
            </div>
            {loaded && (
              <>
                <div className="flex items-center justify-center px-4 pb-4">
                  <button className="primary w-full" onClick={saveAddress}>
                    Save
                  </button>
                </div>
              </>
            )}
            <Divider />
            {session && (
              <button className="error-trixtu mt-2 ml-4 mb-2" onClick={logOut}>
                Logout
              </button>
            )}
            {!session && (
              <button className="primary mt-2 ml-4 mb-2" onClick={login}>
                Login
              </button>
            )}
          </Paper>
        </div>
      </div>
    </Layout>
  )
}
