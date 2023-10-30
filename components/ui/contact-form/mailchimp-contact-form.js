import { sanitize } from '@/utils/miscellaneous'
import { toast } from 'react-toastify'
import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import React from 'react'

export default function MailchimpContactForm({ status, message, onValidated }) {
  const [value, setValue] = React.useState('')
  const [name, setName] = React.useState('')
  const [prenume, setPrenume] = React.useState('')
  const [dataNastere, setDataNastere] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [telefon, setTelefon] = React.useState('')
  const [textarea, setTextarea] = React.useState('')

  const [error, setError] = React.useState(null)
  const [messageForm, setMessageForm] = React.useState(null)
  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */

  const handleFormSubmit = () => {
    setError(null)

    if (!value) {
      setError('value')
      setMessageForm('This field is required')
      return null
    } else {
      setMessageForm(null)
    }

    if (!name) {
      setError('name')
      setMessageForm('Name ist required.')
      return null
    } else {
      setMessageForm(null)
    }

    if (!prenume) {
      setError('prenume')
      setMessageForm('Lastname ist required.')
      return null
    } else {
      setMessageForm(null)
    }

    if (!dataNastere) {
      setError('data-nastere')
      setMessageForm('This field ist required.')
      return null
    } else {
      setMessageForm(null)
    }

    if (!email) {
      setError('email')
      setMessageForm('Email ist required.')
      return null
    } else {
      setMessageForm(null)
    }

    if (!telefon) {
      setError('telefon')
      setMessageForm('Phone ist required.')
      return null
    } else {
      setMessageForm(null)
    }

    if (!textarea) {
      setError('textarea')
      setMessageForm('This field ist required.')
      return null
    } else {
      setMessageForm(null)
    }

    const isFormValidated = onValidated({
      MMERGE6: value,
      EMAIL: email,
      PHONE: telefon,
      FNAME: prenume,
      LNAME: name,
      MMERGE7: textarea,
      MMERGE8: dataNastere,
    })

    // On success return true
    if (status === 'success') {
      setValue('')
      setName('')
      setPrenume('')
      setDataNastere('')
      setEmail('')
      setTelefon('')
      setTextarea('')
    }

    return value && email && email.indexOf('@') > -1 && isFormValidated
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
    <section className="mb-8 mt-6">
      {'success' === status && error !== status && !error && (
        <div dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
      )}
      {'error' === status && (
        <Alert severity="error">
          <div dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        </Alert>
      )}
      <FormControl>
        <label
          className="text-lg font-semibold"
          id="demo-radio-buttons-group-label"
        >
          Cum iti pot fi de folos?
          <span className="ml-1 text-red-600 text-lg font-semibold">*</span>
        </label>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={(event) => handleInputKeyEvent(event)}
        >
          <FormControlLabel
            value="Sedinta de consultanta numerologica 1:1"
            control={<Radio />}
            label="Sedinta de consultanta numerologica 1:1"
          />
          <FormControlLabel
            value="Doresc Analiza numerologica personalizata- raport scris"
            control={<Radio />}
            label="Doresc Analiza numerologica personalizata- raport scris"
          />
          <FormControlLabel
            value="Matricea bioenergoinformationala- raport scris"
            control={<Radio />}
            label="Matricea bioenergoinformationala- raport scris"
          />
          <FormControlLabel
            value="Instruire numerologica de baza"
            control={<Radio />}
            label="Instruire numerologica de baza"
          />
        </RadioGroup>
        {error === 'value' ? (
          <span className="text-red-700">{messageForm}</span>
        ) : null}
      </FormControl>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label id="nume-form" className="text-lg font-semibold">
            Nume
            <span className="ml-1 text-red-600 text-lg font-semibold">*</span>
          </label>
          <input
            id="nume-form"
            type="text"
            value={name}
            className={error === 'name' ? 'border-red-600 mb-0' : null}
            onChange={(event) => setName(event.target.value)}
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
          {error === 'name' ? (
            <span className="text-red-700">{messageForm}</span>
          ) : null}
        </div>
        <div>
          <label id="prenume-form" className="text-lg font-semibold">
            Prenume
            <span className="ml-1 text-red-600 text-lg font-semibold">*</span>
          </label>
          <input
            className={error === 'prenume' ? 'border-red-600 mb-0' : null}
            id="prenume-form"
            type="text"
            value={prenume}
            onChange={(event) => setPrenume(event.target.value)}
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
          {error === 'prenume' ? (
            <span className="text-red-700">{messageForm}</span>
          ) : null}
        </div>
      </div>
      <div>
        <label id="data-nastere" className="text-lg font-semibold">
          ZIUA - LUNA - ANUL nasterii
          <span className="ml-1 text-red-600 text-lg font-semibold">*</span>
        </label>
        <input
          id="data-nastere"
          type="text"
          className={error === 'data-nastere' ? 'border-red-600 mb-0' : null}
          value={dataNastere}
          onChange={(event) => setDataNastere(event.target.value)}
          onKeyUp={(event) => handleInputKeyEvent(event)}
        />
        {error === 'data-nastere' ? (
          <span className="text-red-700">{messageForm}</span>
        ) : null}
      </div>
      <div>
        <label id="email" className="text-lg font-semibold">
          Email
          <span className="ml-1 text-red-600 text-lg font-semibold">*</span>
        </label>
        <input
          className={
            error === 'email'
              ? 'border-red-600 mb-0 focus:border-red-600'
              : null
          }
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onKeyUp={(event) => handleInputKeyEvent(event)}
        />
        {error === 'email' ? (
          <div
            className="text-red-700"
            dangerouslySetInnerHTML={{
              __html: error || getMessage(message),
            }}
          />
        ) : null}
      </div>
      <div>
        <label id="telefon" className="text-lg font-semibold">
          Telefon
          <span className="ml-1 text-red-600 text-lg font-semibold">*</span>
        </label>
        <input
          id="telefon"
          type="text"
          className={error === 'telefon' ? 'border-red-600 mb-0' : null}
          value={telefon}
          onChange={(event) => setTelefon(event.target.value)}
          onKeyUp={(event) => handleInputKeyEvent(event)}
        />
        {error === 'telefon' ? (
          <span className="text-red-700">{messageForm}</span>
        ) : null}
      </div>
      <div>
        <label id="textarea" className="text-lg font-semibold">
          Povestește-mi pe scurt situatia la care doresti sa lucrăm împreună
          <span className="ml-1 text-red-600 text-lg font-semibold">*</span>
        </label>
        <textarea
          id="textarea"
          className={error === 'textarea' ? 'border-red-600 mb-0' : null}
          value={textarea}
          onChange={(event) => setTextarea(event.target.value)}
          onKeyUp={(event) => handleInputKeyEvent(event)}
        />
        {error === 'textarea' ? (
          <span className="text-red-700">{messageForm}</span>
        ) : null}
      </div>
      <Button variant="contained" color="gold" onClick={handleFormSubmit}>
        Trimite Programare
      </Button>
    </section>
  )
}
