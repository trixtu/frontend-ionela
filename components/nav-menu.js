import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavMenu() {
  const router = useRouter()
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
  return (
    <div className="hidden xl:block">
      <div className="ml-10 flex items-baseline">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-[#67cd89] text-gray-900 font-semibold'
                : 'text-gray-900 font-semibold hover:bg-[#67cd89] hover:text-gray-900',
              ' px-3 py-4 text-sm font-semibold'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
