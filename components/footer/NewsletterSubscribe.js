import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NesletterForm from './NesletterForm'

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_URL
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {}
        return (
          <NesletterForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )
      }}
    />
  )
}

export default NewsletterSubscribe
