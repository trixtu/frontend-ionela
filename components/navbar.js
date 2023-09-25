/* eslint-disable @next/next/no-img-element */
import { Badge, Container, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { CartContext } from '@/context/CartContext'
import { X } from 'lucide-react'
import { AlignJustify, BellIcon } from 'lucide-react'
import { Fragment } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useSession, signOut, signIn } from 'next-auth/react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import Search from './ui/search'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Grid from '@mui/material/Unstable_Grid2'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
  //const [current, setCurrent] = useState(false)

  const { cartItems } = useContext(CartContext)
  const { data: session } = useSession()
  const router = useRouter()

  const user = {
    name: session?.user?.name,
    email: session?.user?.email,
    imageUrl: session?.user?.image,
  }

  const navigation = [
    { name: 'Acasa', href: '/', current: router.pathname === '/' && true },
    {
      name: 'Despre mine',
      href: '/despre-mine',
      current: router.pathname === '/despre-mine' && true,
    },
    {
      name: 'Numerologie',
      href: '/numerologie',
      current: router.pathname === '/numerologie' && true,
    },
    {
      name: 'Matricea Numerologica',
      href: '/numerologie/matricea-numerologica',
      current: router.pathname === '/numerologie/matricea-numerologica' && true,
    },
    {
      name: 'Consiliere Dezvoltare Personala',
      href: '/consiliere',
      current: router.pathname === '/consiliere' && true,
    },
    {
      name: 'Blog',
      href: '/blog',
      current: router.pathname === '/blog' && true,
    },
    {
      name: 'Shop',
      href: '/shop',
      current: router.pathname === '/shop' && true,
    },
    {
      name: 'Contact',
      href: '/contact',
      current: router.pathname === '/contact' && true,
    },
  ]

  const userNavigation = session?.user
    ? [
        { name: 'Your Profile', href: '/account' },
        { name: 'Settings', href: '#' },
        {
          name: 'Sign out',
          onclick: () => signOut(),
          href: '#',
        },
      ]
    : [
        {
          name: session?.user ? 'Sign out' : 'Sign in',
          onclick: () => (session?.user ? signOut() : {}),
          href: session?.user ? '#' : '/auth/login',
        },
      ]

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-white border-b shadow sticky top-0 z-10"
      >
        {({ open }) => (
          <>
            <Container className="h-[116px] lg:h-[70px]">
              <Grid
                container
                height={70}
                display={'flex'}
                justifyContent={'space-between'}
                backgroundColor="white"
                paddingTop={'2px'}
              >
                <Grid
                  xs={5}
                  md={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '4px',
                  }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="p-2 w-[220px] h-[60px]">
                        <div className="flex items-center justify-center capitalize h-full">
                          <Link
                            href={'/'}
                            className="flex flex-col items-center"
                          >
                            <img
                              src="/images/2.png"
                              alt=""
                              width={28}
                              height={28}
                            />
                            <Typography
                              variant="subtitle2"
                              className="text-center"
                              fontWeight={'bold'}
                              lineHeight={'1'}
                              fontSize={16}
                            >
                              NUMEROLOGIE
                            </Typography>

                            <Typography
                              variant="subtitle2"
                              className="text-center "
                              fontSize={10}
                            >
                              CONSILIERE DEZVOLTARE PERSONALĂ
                            </Typography>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>

                <Grid
                  xs={3}
                  md={7}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                  }}
                >
                  <div className=" hidden lg:block w-full">
                    <Search />
                  </div>
                </Grid>

                <Grid
                  xs={3}
                  md={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className=" flex items-center  gap-2">
                    <Menu as="div" className="relative ml-3 hidden xl:block">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item, index) => (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <Link
                                  onClick={item.onclick}
                                  href={item.href || '#'}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <Link href={'/cart'}>
                      <IconButton
                        aria-label="cart"
                        className="text-textBlack bg-transparent "
                      >
                        <Badge badgeContent={cartItems.length} color="error">
                          <img
                            src="/images/cart.png"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </Badge>
                      </IconButton>
                    </Link>
                    {/* Mobile menu button */}
                    <div className="-mr-2 flex xl:hidden">
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gold p-2 text-black hover:bg-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 outline-none">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <X className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <AlignJustify
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </Grid>
                <Grid
                  xs={12}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                  }}
                >
                  <div className="lg:hidden w-full">
                    <Search />
                  </div>
                </Grid>
              </Grid>

              {/* <div className="flex h-20 items-center justify-between "> */}
              {/* <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="p-2 w-[220px] h-[60px]">
                      <div className="flex items-center justify-center capitalize h-full">
                        <Link href={'/'} className="flex flex-col items-center">
                          <img
                            src="/images/2.png"
                            alt=""
                            width={28}
                            height={28}
                          />
                          <Typography
                            variant="subtitle2"
                            className="text-center"
                            fontWeight={'bold'}
                            lineHeight={'1'}
                            fontSize={16}
                          >
                            NUMEROLOGIE
                          </Typography>

                          <Typography
                            variant="subtitle2"
                            className="text-center "
                            fontSize={10}
                          >
                            CONSILIERE DEZVOLTARE PERSONALĂ
                          </Typography>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Search />
                <div className="flex w-full lg:block lg:w-[130px]">
                  <div className="ml-4 flex items-center md:ml-6 gap-2">
                    <Menu as="div" className="relative ml-3 hidden xl:block">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item, index) => (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <Link
                                  onClick={item.onclick}
                                  href={item.href || '#'}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <Link href={'/cart'}>
                      <IconButton
                        aria-label="cart"
                        className="text-textBlack bg-transparent "
                      >
                        <Badge badgeContent={cartItems.length} color="error">
                          <img
                            src="/images/cart.png"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </Badge>
                      </IconButton>
                    </Link>
                  </div>
                </div> */}
              {/* </div> */}
            </Container>

            {/* mobile menu */}
            <Disclosure.Panel className="xl:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-gray-300">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-800 text-white'
                        : 'text-black hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              {/* user menu mobile */}
              <div className="border-t border-gray-700 pb-3 pt-4 bg-gray-300">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-black">
                      {user.email}
                    </div>
                  </div>
                  {/* <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    {/* <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                  {/* </button> */}
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      onClick={() => {}}
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="hidden xl:flex items-center justify-center border-b ">
        <div className="ml-10 flex items-baseline">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-[#67cd89] text-gray-900 font-semibold'
                  : 'text-gray-900 font-semibold hover:bg-[#67cd89] hover:text-gray-900',
                ' px-3 py-2 text-sm font-semibold'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
