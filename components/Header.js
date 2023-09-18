import React from 'react'
import Navbar from './navbar'
import SliderHome from './slider'
import TopNavBar from './top-navbar'
import { useRouter } from 'next/router'
import { Slider } from '@/models/Slider'
import { mongooseConnect } from '@/lib/mongoose'

export default function Header({ slider }) {
  const router = useRouter()
  return (
    <>
      <TopNavBar />
      <Navbar />
      <SliderHome slider={slider} />
      {/* <header className={router.pathname === '/' ? 'hidden' : 'block'}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div>
      </header> */}
    </>
  )
}

export async function getServerSideProps() {
  await mongooseConnect()
  const id = '65089fd9df4de10e9a43c43b'

  const slider = await Slider.findById({ id })

  console.log(slider)

  return {
    props: {
      slider: JSON.parse(JSON.stringify(slider)),
    },
  }
}
