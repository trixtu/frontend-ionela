import Layout from '@/components/Layout'
import { Container } from '@mui/material'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function CalculatorNumerologic() {
  return (
    <Layout>
      <Head>
        <title>
          Calculator numerologic, introdu data nastere,nume si calculeaza |
          Numerologie
        </title>
      </Head>
      <Container>
        <h1>Calculator Numerologic</h1>
        <Link href="/numerologie/cifra-numelui">Cifra Numelui</Link>
      </Container>
    </Layout>
  )
}
