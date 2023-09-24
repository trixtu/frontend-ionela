import { sentContactForm } from '@/lib/api'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { Button } from '@mui/material'
import { FacebookIcon } from 'lucide-react'
import React, { useState } from 'react'

const initValues = { name: '', email: '', subject: '', message: '' }
const initState = { values: initValues }

export default function ContactForm() {
  const toast = useToast()
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState({})

  const { values, isLoading, error } = state

  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }))

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

  const onSubmit = async () => {
    if (!values.name || !values.email || !values.subject || !values.message) {
      toast({
        title: 'Completeaza campurile obligatorii (*)',
        status: 'warning',
        duration: 2000,
        position: 'bottom-right',
      })
    }
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }))

    try {
      await sentContactForm(values)
      setTouched({})
      setState(initState)
      toast({
        title: 'Mesajul a fost trimis.',
        status: 'success',
        duration: 2000,
        position: 'bottom-right',
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }))
    }
  }
  return (
    <>
      {error && (
        <Text color={'red.600'} my={4} fontSize={'xl'}>
          {error}
        </Text>
      )}
      <FormControl isRequired isInvalid={touched.name && !values.name} mb={4}>
        <FormLabel>Nume și prenume</FormLabel>
        <Input
          m={0}
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage fontSize={12} color={'red.600'}>
          Acest câmp este obligatoriu.
        </FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.name && !values.email} mb={4}>
        <FormLabel>E-mail</FormLabel>
        <Input
          type="email"
          name="email"
          m={0}
          value={values.email}
          onChange={handleChange}
          onBlur={onblur}
        />
        <FormErrorMessage fontSize={12} color={'red.600'}>
          Acest câmp este obligatoriu.
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.name && !values.subject}
        mb={4}
      >
        <FormLabel>Subiect</FormLabel>
        <Input
          type="text"
          m={0}
          name="subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage fontSize={12} color={'red.600'}>
          Acest câmp este obligatoriu.
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.name && !values.message}
        mb={4}
      >
        <FormLabel>Mesajul tău</FormLabel>
        <Textarea
          type="text"
          m={0}
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage fontSize={12} color={'red.600'}>
          Acest câmp este obligatoriu.
        </FormErrorMessage>
      </FormControl>
      <Button variant={'contained'} color="gold" onClick={onSubmit}>
        {isLoading && <Spinner size={'xl'} />}
        Trimitec
      </Button>
    </>
  )
}
