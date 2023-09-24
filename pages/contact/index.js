import Layout from '@/components/Layout'
import { sentContactForm } from '@/lib/api'
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { Container as UiContainer } from '@mui/material'
import React, { useState } from 'react'

const initValues = { name: '', email: '', subject: '', message: '' }
const initState = { values: initValues }

export default function ContactPage() {
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
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }))

    try {
      await sentContactForm(values)
      setTouched({})
      setState(initState)
      toast({
        title: 'Message sent.',
        status: 'success',
        duration: 2000,
        position: 'top-right',
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
    <Layout>
      <UiContainer>
        <Container maxW={'450px'} marginBottom={4}>
          <Heading fontWeight={500} fontSize={24}>
            Contact
          </Heading>
          {error && (
            <Text color={'red.300'} my={4} fontSize={'xl'}>
              {error}
            </Text>
          )}
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage color={'#d80b49'}>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.name && !values.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={onblur}
            />
            <FormErrorMessage color={'#d80b49'}>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.name && !values.subject}>
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage color={'#d80b49'}>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.name && !values.message}>
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage color={'#d80b49'}>Required</FormErrorMessage>
          </FormControl>
          <Button
            variant={'contained'}
            isLoading={isLoading}
            colorScheme="green"
            size="sm"
            disabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Container>
      </UiContainer>
    </Layout>
  )
}
