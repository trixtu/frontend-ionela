import Layout from '@/components/Layout'
import ContactForm from '@/components/ui/contact-form'
import { Heading, Text } from '@chakra-ui/react'
import { Paper, Container as UiContainer } from '@mui/material'
import React from 'react'

const initValues = { name: '', email: '', subject: '', message: '' }
const initState = { values: initValues }

export default function ContactPage() {
  return (
    <Layout>
      <UiContainer>
        <div className="flex flex-col items-center justify-center mt-4 mb-2">
          <Paper sx={{ width: '500px', padding: '20px' }}>
            <Heading fontWeight={500} fontSize={24} textAlign={'center'}>
              Contactează-mă
            </Heading>

            <Text textAlign={'center'} fontSize={'md'} color={'#909090'}>
              Jungholzstr. 1
            </Text>
            <Text textAlign={'center'} fontSize={'md'} color={'#909090'}>
              76726 Germersheim, Germany
            </Text>
            <Text textAlign={'center'} fontSize={'md'} color={'#909090'}>
              +49 170 401 5687
            </Text>

            <ContactForm />
          </Paper>
        </div>
      </UiContainer>
    </Layout>
  )
}
