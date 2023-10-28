import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import MailchimpContactForm from './mailchimp-contact-form'
import { Typography } from '@mui/material'

const ContactFormMailchimpSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_CONTACT_URL

  return (
    <>
      <div className="flex flex-col gap-4">
        <Typography variant="overline">
          „Trauma creează schimbări pe care nu le alegi; vindecarea creează o
          schimbare pe care o alegi.”
        </Typography>

        <Typography variant="p">
          Completează formularul de mai jos și voi reveni cu un telefon pentru a
          stabili o data si o ora pentru intalnirea noastra.
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
    </>
  )
}

export default ContactFormMailchimpSubscribe
