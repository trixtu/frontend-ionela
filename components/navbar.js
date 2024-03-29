/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { X } from 'lucide-react'
import Search from './ui/search'
import { useRouter } from 'next/router'
import { Avatar } from '@chakra-ui/react'
import { AlignJustify } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import Grid from '@mui/material/Unstable_Grid2'
import React, { useContext, useState } from 'react'
import { CartContext } from '@/context/CartContext'
import { useSession, signOut } from 'next-auth/react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  Badge,
  Container,
  Divider,
  IconButton,
  Typography,
} from '@mui/material'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { cartItems } = useContext(CartContext)
  const { data: session } = useSession()
  const router = useRouter()
  const [toggle, setToggle] = useState([])

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  const user = {
    name: session?.user?.name,
    email: session?.user?.email,
    imageUrl: session?.user?.image,
  }

  const hScreen = '22px'
  const navigation = [
    { name: 'Acasa', href: '/', current: router.pathname === '/' && true },
    {
      name: 'Despre mine',
      href: '',
      current:
        (router.pathname === '/despre-mine' && true) ||
        (router.pathname === '/despre-mine/cine-sunt' && true) ||
        (router.pathname === '/despre-mine/trairile-elei' && true),
      submenu: [
        {
          name: 'Cine sunt eu?',
          href: '/despre-mine/cine-sunt',
          current: router.pathname === '/despre-mine/cine-sunt' && true,
        },
        {
          name: 'TrairileElei',
          href: '/despre-mine/trairile-elei',
          current: router.pathname === '/despre-mine/trairile-elei' && true,
        },
      ],
    },
    {
      name: 'Numerologie',
      href: '',
      current:
        (router.pathname === '/numerologie/analiza-numerologica-personalizata' && true) ||
        (router.pathname === '/numerologie/ce-este-numerologia' && true) ||
        (router.pathname === '/numerologie/consultatii-numerologice' && true),

      submenu: [
        {
          name: 'Ce este numerologia?',
          href: '/numerologie/ce-este-numerologia',
          current: router.pathname === '/numerologie/ce-este-numerologia' && true,
        },
        {
          name: 'Consultatii numerologice 1:1',
          href: '/numerologie/consultatii-numerologice',
          current: router.pathname === '/numerologie/consultatii-numerologice' && true,
        },
        {
          name: 'Analiza numerologica personalizata (prezentare scrisa)',
          href: '/numerologie/analiza-numerologica-personalizata',
          current: router.pathname === '/numerologie/analiza-numerologica-personalizata' && true,
        },
      ],
    },
    {
      name: 'Calculator numerologic',
      href: '',
      current:
        (router.pathname === '/calculator-numerologic' && true) ||
        (router.pathname === '/calculator-numerologic/cifra-destinului' && true) ||
        (router.pathname === '/calculator-numerologic/matricea-numerologica' && true) ||
        (router.pathname === '/calculator-numerologic/cifra-numelui' && true),
      submenu: [
        {
          name: 'Cifra destinului',
          href: '/calculator-numerologic/cifra-destinului',
          current: router.pathname === '/calculator-numerologic/cifra-destinului' && true,
        },
        {
          name: 'Matricea Numerologica',
          href: '/calculator-numerologic/matricea-numerologica',
          current: router.pathname === '/calculator-numerologic/matricea-numerologica' && true,
        },
        {
          name: 'Cifra numelui',
          href: '/calculator-numerologic/cifra-numelui',
          current: router.pathname === '/calculator-numerologic/cifra-numelui' && true,
        },
      ],
    },
    {
      name: 'Consiliere dezvoltare personala',
      href: '',
      current:
        (router.pathname === '/consiliere' && true) ||
        (router.pathname === '/consiliere/cui-se-adreseaza' && true) ||
        (router.pathname === '/consiliere/consiliere-dezvoltare-personala' && true),
      submenu: [
        {
          name: 'Ce este si cui se adreseaza?',
          href: '/consiliere/cui-se-adreseaza',
          current: router.pathname === '/consiliere/cui-se-adreseaza' && true,
        },
        {
          name: 'Consiliere pentru dezvoltare personala 1:1',
          href: '/consiliere/consiliere-dezvoltare-personala',
          current: router.pathname === '/consiliere/consiliere-dezvoltare-personala' && true,
        },
      ],
    },
    // {
    //   name: 'Blog',
    //   href: '/blog',
    //   current: router.pathname === '/blog' && true,
    // },
    // {
    //   name: 'Magazin online',
    //   href: '/shop',
    //   current: router.pathname === '/shop' && true,
    // },
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

  const clickHandler = (i) => {
    let tempToggle = [...toggle]
    if (tempToggle[i]) {
      tempToggle[i] = false
    } else {
      tempToggle[i] = true
    }
    setToggle(tempToggle)
  }

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-white border-b shadow sticky top-0 z-40"
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
                  xs={6}
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
                      <div className="p-4 w-[220px] h-[60px]">
                        <div className="flex items-center justify-center capitalize h-full">
                          <Link
                            href={'/'}
                            className="flex flex-col items-center"
                          >
                            <div className="w-[28px] h-[28px]">
                              <Image
                                src="/images/2_1_60x60.png"
                                width={28}
                                height={28}
                                loading="lazy"
                                alt=""
                              />
                            </div>
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
                  xs={1}
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
                  xs={4}
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
                          <span className="absolute -inset-1.5 " />
                          <span className="sr-only">Open user menu</span>
                          <Avatar
                            src={user.imageUrl}
                            width="30px"
                            height="30px"
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
                        <Menu.Items className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                          {/* <img
                            src="/images/cart.png"
                            alt=""
                            width={30}
                            height={30}
                          /> */}
                          <ShoppingCart className="w-8 h-8 text-black" />
                        </Badge>
                      </IconButton>
                    </Link>
                    {/* Mobile menu button */}
                    <div className="-mr-2 flex xl:hidden">
                      <Disclosure.Button 
                        className="
                          relative 
                          inline-flex 
                          items-center 
                          justify-center 
                          rounded-md 
                          bg-gold p-2 
                          text-black 
                          hover:bg-gold 
                          hover:text-white 
                          focus:outline-none 
                          focus:ring-2 
                          focus:ring-white 
                          focus:ring-offset-2 
                          focus:ring-offset-gray-800 
                          outline-none
                        "
                      >
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
            </Container>

            {/* mobile menu */}

            <Disclosure.Panel 
              className={`xl:hidden h-screen overflow-y-scroll`}
            >
              <div 
                className="
                  space-y-1 
                  px-2 
                  pb-3 
                  pt-2 
                  sm:px-3 
                  bg-emerald-50
                ">
                {navigation.map((item, i) => (
                  <div key={item.name}>
                    <Disclosure.Button
                      as="a"
                      onClick={item.submenu && clickHandler}
                      href={item?.href}
                      className={classNames(
                        item.current
                          ? 'bg-emerald-500 text-white'
                          : 'text-black hover:bg-emerald-200 hover:text-black',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                      {item.submenu && <KeyboardArrowDownIcon />}
                    </Disclosure.Button>
                    {item.submenu
                      ? item.submenu.map((submenu, index) => (
                          <Disclosure.Button
                            key={index}
                            as="a"
                            href={submenu.href}
                            className={classNames(
                              submenu.current
                                ? ' text-greenDark'
                                : 'text-black hover:bg-emerald-200 hover:text-black',
                              'block rounded-md px-10 py-2 text-base font-medium'
                            )}
                            aria-current={submenu.current ? 'page' : undefined}
                          >
                            {submenu.name}
                          </Disclosure.Button>
                        ))
                      : null}
                  </div>
                ))}
              {/* user menu mobile */}
              <div className="border-t border-gray-700 pb-3 pt-4 bg-emerald-100">
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
                
              </div>
              
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="hidden xl:flex items-center justify-center border-b bg-white sticky top-[71px] z-10 shadow">
        <div className="ml-10 flex items-baseline nav__menu">
          {navigation.map((item) => (
            <li key={item.name} className="nav__menu-item list-none relative">
              <Link
                href={item?.href}
                className={classNames(
                  item.current
                    ? 'bg-[#67cd89] text-gray-900 font-semibold'
                    : 'text-gray-900 font-semibold hover:bg-[#67cd89] hover:text-gray-900',
                  ' px-3 py-[5px] text-sm font-semibold '
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
                {item.submenu && <KeyboardArrowDownIcon fontSize="small" />}
              </Link>
              {item.submenu && (
                <ul 
                  className="
                    nav__submenu 
                    absolute 
                    border 
                    w-[300px] 
                    px-2 py-2 
                    shadow-lg 
                    rounded-sm 
                    bg-white 
                    z-50
                  "
                >
                  {item.submenu.map((submenu, index) => (
                    <Link key={index} href={submenu.href}>
                      <li
                        className={classNames(
                          submenu.current
                            ? 'text-[#46915f] font-semibold'
                            : 'text-gray-900 font-semibold hover:text-[#46915f]',
                          'px-1 text-sm font-semibold nav__submenu-item py-1 '
                        )}
                      >
                        {submenu.name}
                      </li>
                      <Divider />
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </div>
      </div>
    </>
  )
}
