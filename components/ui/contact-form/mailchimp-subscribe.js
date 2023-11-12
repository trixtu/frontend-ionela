import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import MailchimpContactForm from './mailchimp-contact-form'
import { Typography } from '@mui/material'

const ContactFormMailchimpSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_CONTACT_URL

  return (
    <div className="mb-4">
      <div className="flex flex-col gap-4">
        <Typography variant="p">
          Completează formularul de mai jos{' '}
          <strong>
            si te voi contacta pentru a stabili impreuna detaliile pentru
            intalnirea noastra.
          </strong>
        </Typography>
      </div>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={(props) => {
          const { subscribe, status, message } = props || {}
          return (
            <MailchimpContactForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )
        }}
      />
    </div>
  )
}

export default ContactFormMailchimpSubscribe
