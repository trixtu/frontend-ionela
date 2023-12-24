import Layout from "@/components/Layout";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Spinner } from "@chakra-ui/react";
import { CleaningServices } from "@mui/icons-material";
import { Box, Container, Paper, Typography } from "@mui/material";
import axios from "axios";
import { Markup } from "interweave";
import { HomeIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AnalizaNumerologicaPerdsonalizata (){
  const [textareas,setTextareas] = useState()
  const [loading,setLoading] = useState(true)

  const router = useRouter()

  const id = '6553b2e0d98554b9087d68b5'
  let textAnalizaNumerologica = null

  useEffect(() => {
    axios.get('/api/textarea').then((response) => {
      setTextareas(response.data)
      setLoading(false)
    })
  }, [])

  
  function textFinal() {
    textAnalizaNumerologica = textareas.find((text) => text._id === id)
    
  }

  if(textareas){
   textFinal()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center w-auto h-screen">
        <Spinner fontSize={'6xl'} width={'100px'} height={'100px'} />
      </div>
    )
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
    <Typography key="3" color="text.primary">
      Ce este numerologia
    </Typography>,
  ]

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }
 
console.log(textAnalizaNumerologica)
  return (
    <Layout>
       <Head>
        <title>Ce este numerologia | Numerologie</title>
      </Head>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" mb={2}>
          {textAnalizaNumerologica?.title}
        </Typography>
        {textAnalizaNumerologica?.image[0] && (
          <Box
          style={{
            backgroundImage: `url(${textAnalizaNumerologica?.image[0]})`,
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          height={400}
          />  
        )}
       
        <Paper
          variant="outlined"
          sx={{ height: '100%', padding: '10px', marginBottom: '40px' }}
        >
          {textAnalizaNumerologica  && (
            <Markup content={textAnalizaNumerologica?.value} />
          )}
        </Paper>
      </Container>
    </Layout>
  )
}