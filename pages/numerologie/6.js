import Layout from "@/components/Layout";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Breadcrumb from "@/components/ui/breadcrumb";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Six() {
  const router = useRouter()

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
    <Typography key="3" color="text.primary">
      Cifra destinului 6
    </Typography>,
  ]

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }
  return <Layout><Container>
  <Breadcrumb breadcrumbs={breadcrumbs} />
  <div
    className='
      flex
      justify-center
      items-center
      mt-4
      h-full
    '
  >
    <Image
      src={'/images/foto-numere/6.jpg'}
      alt=""
      width={550}
      height={600}
      priority
      loading="eager"
    />
  </div>
</Container></Layout>
}
