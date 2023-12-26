import Layout from "@/components/Layout";
import Breadcrumb from "@/components/ui/breadcrumb";
import { sentContactForm } from "@/lib/api";
import { FormControl, FormErrorMessage, FormLabel, Input, SimpleGrid, Spinner, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import { Alert, Button, Container, Grid, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


const initValues = {
  name:'',
  lastName:'',
  email:'',
  telefon:'',
  subject:'Programare: 1 ȘEDINȚĂ',
  message:''
}

const initState = {values:initValues}

export default function ProgramareOSedinta(){
  const [state,setState] = useState(initState)
  const [touched,setTouched] = useState({})

  const toast = useToast()


  const { values, isLoading, error } = state

  const onBlur = ({target}) => setTouched((prev)=>({
    ...prev,
    [target.name]:true
  }))

  const handleChange = ({target}) => setState((prev)=>({
    ...prev,
    values:{
      ...prev.values,
      [target.name]:target.value,
    }
  }))

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading:true
    }))

    try {
      await sentContactForm(values)
      setTouched({})
      setState(initState)
      toast({
        title:'Messajul a fost trimis.',
        status:'success',
        duration:2000,
        position:'top-right'
      })
    }catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading:false,
        error:error.message
      }))
    }

  }

console.log(values)
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
      Programare 1 ședință
    </Typography>,
  ]

  function handleClick(event) {
    event.preventDefault()
    router.push('/')
  }
  return(
    <Layout>
      <Container>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Typography variant="h5" mb={2}>Doresc o programare</Typography>
        {error && (
          <Alert severity="error"className="mb-2">
            {error}
          </Alert>
        )}
        <Typography variant="subtitle1" mb={1}>Completează formularul de mai jos <strong>si te voi contacta pentru a stabili impreuna detaliile pentru intalnirea noastra.</strong></Typography>
        <Typography mb={2}>
          <strong>1 ȘEDINȚĂ</strong><br/>
          1 ședință are durata de 50 minute și se poate desfășura online (telefonic sau pe zoom).<br/>
          Prețul unei ședințe este de 150 lei.
        </Typography>
        <Grid container  columns={16} spacing={2}>

          <Grid item xs={16} md={8} >
            <FormControl isRequired  isInvalid={touched.name && !values.name}>
              <FormLabel>Nume</FormLabel>
              <Input
                className={touched.name && !values.name ? 'mb-0 border-red-500' : null}
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
                errorBorderColor="red.300"
              />
              <FormErrorMessage className="text-red-500">Name ist required.</FormErrorMessage>
            </FormControl>
          </Grid>
          
          <Grid item xs={16} md={8}>
            <FormControl isRequired isInvalid={touched.lastName && !values.lastName}>
              <FormLabel>Prenume</FormLabel>
              <Input
                className={touched.lastName && !values.lastName ? 'mb-0 border-red-500' : null}
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={onBlur}
                errorBorderColor="red.300"
              />
              <FormErrorMessage className="text-red-500">Lastname ist required.</FormErrorMessage>
            </FormControl>
          </Grid>
        </Grid>

        <FormControl className="hidden">
              <FormLabel>Subiect</FormLabel>
              <Input
              type="disabled"
                name="subject"
                value={initValues.subject}
                onChange={handleChange}
              />
            </FormControl>

        <FormControl isRequired mb={5} isInvalid={touched.email && !values.email}>
          <FormLabel>Email</FormLabel>
          <Input
            className={touched.email && !values.email ? 'mb-0 border-red-500' : null}
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            errorBorderColor="red.300"
            onBlur={onBlur}
          />
          <FormErrorMessage className="text-red-500">Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired mb={5} isInvalid={touched.telefon && !values.telefon}>
          <FormLabel>Telefon</FormLabel>
          <Input
            className={touched.telefon && !values.telefon ? 'mb-0 border-red-500' : null}
            type="text"
            name="telefon"
            value={values.telefon}
            onChange={handleChange}
            errorBorderColor="red.300"
            onBlur={onBlur}
          />
          <FormErrorMessage className="text-red-500">Required</FormErrorMessage>
        </FormControl>

        <FormControl  mb={5}>
          <FormLabel>Mesajul tau (optional)</FormLabel>
          <Textarea
            type="text"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}  
          />
        </FormControl>

        <Button
          variant="contained"
          color="gold"
          disabled={!values.name || !values.email || !values.lastName || !values.telefon}
          onClick={onSubmit}
        >
          {isLoading ? 'Loading...' : 'Trimite Programarea'}
        </Button>
      </Container>
    </Layout>
  )
}