import Layout from '@/components/Layout'
import React from 'react'
import { useSession, signOut, signIn } from 'next-auth/react'

export default function Login() {
  const { data: session } = useSession()
  return (
    <Layout>
      <button onClick={signIn}>Login</button>
    </Layout>
  )
}
