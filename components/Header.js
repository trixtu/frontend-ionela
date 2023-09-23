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

      <header className={router.pathname === '/' ? 'block h-full' : 'hidden'}>
        <SliderHome slider={slider} />
      </header>
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
