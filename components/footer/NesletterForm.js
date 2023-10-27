import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from 'next/link'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Button } from '@mui/material'
import { sanitize } from '@/utils/miscellaneous'

const NesletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState(null)

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */

  const handleFormSubmit = () => {
    setError(null)

    if (!email) {
      setError('Please enter a valid email address')
      return null
    }

    const isFormValidated = onValidated({ EMAIL: email })

    // On success return true
    return email && email.indexOf('@') > -1 && isFormValidated
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */

  const handleInputKeyEvent = (event) => {
    setError(null)
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      handleFormSubmit()
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */

  const getMessage = (message) => {
    if (!message) {
      return null
    }
    const result = message?.split() ?? null
    if ('0' !== result?.[0]?.trim()) {
      return sanitize(message)
    }
    const formattedMessage = result?.[1]?.trim() ?? null
    return formattedMessage ? sanitize(formattedMessage) : null
  }

  return (
    <div className="flex flex-col justify-center text-neutral-900 mt-10 mr-10 min-h-[220px]">
      <div className="flex items-center gap-2 mb-4 ">
        <Link href={'#'}>
          <FacebookIcon fontSize="large" />
        </Link>
        <Link href={'#'}>
          <InstagramIcon fontSize="large" />
        </Link>
        <Link href={'#'}>
          <YouTubeIcon fontSize="large" />
        </Link>
      </div>
      <label>
        E-mail <span className="text-red-600">*</span>
      </label>
      <input
        onChange={(event) => setEmail(event?.target?.value ?? '')}
        type="email"
        placeholder="Your email"
        onKeyUp={(event) => handleInputKeyEvent(event)}
      />

      <div>
        <Button variant="contained" color="gold" onClick={handleFormSubmit}>
          Mă Abonez
        </Button>
      </div>

      {'error' === status || error ? (
        <div
          className="text-red-700 pt-2"
          dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
        />
      ) : null}
      {'success' === status && error !== status && !error && (
        <div
          className="text-green-200 font-bold pt-2"
          dangerouslySetInnerHTML={{ __html: sanitize(message) }}
        />
      )}
    </div>
  )
}

export default NesletterForm
