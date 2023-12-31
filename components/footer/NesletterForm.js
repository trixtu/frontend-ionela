import Link from 'next/link'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { sanitize } from '@/utils/miscellaneous'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

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
        <Link href={'https://www.facebook.com/profile.php?id=100093896307800'}>
          <FacebookIcon fontSize="large" />
        </Link>
        <Link href={'https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Felacojocaru%3Figshid%3DNzZlODBkYWE4Ng%253D%253D%26fbclid%3DIwAR146nBz4X-yx9I-XdnHH8XxgEtBDauWkwpMkBTZWN_XOg0pYhgac0vvR_4&h=AT1vYqG9E_rQFntgBQwIqkm7LVxRnMcsn4RoZXBb6uy7SDVouqT0KKdeYwIZJsGqHaJwkNqabDzNSHfLMUQlVsIyZnn2ZZ_vWiiUeOnauD24bGy8IqNxxc3AC0sOGn2AVbI'}>
          <InstagramIcon fontSize="large" />
        </Link>
        <Link href={'https://www.youtube.com/channel/UCv-3HpKbqaQWbiIOBkOzxig'}>
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
