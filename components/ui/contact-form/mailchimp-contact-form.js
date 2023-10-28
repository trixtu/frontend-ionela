import { sanitize } from '@/utils/miscellaneous'
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import React from 'react'

export default function MailchimpContactForm({ status, message, onValidated }) {
  const [value, setValue] = React.useState(null)
  const [name, setName] = React.useState(null)
  const [prenume, setPrenume] = React.useState(null)
  const [dataNastere, setDataNastere] = React.useState(null)
  const [email, setEmail] = React.useState(null)
  const [telefon, setTelefon] = React.useState(null)
  const [textarea, setTextarea] = React.useState(null)

  const [error, setError] = React.useState(null)

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

    if (!telefon) {
      setError('This field is required.')
    }

    const isFormValidated = onValidated({
      EMAIL: email,
      PHONE: telefon,
      FNAME: prenume,
      LNAME: name,
      MMERGE6: value,
      MMERGE7: textarea,
      MMERGE8: dataNastere,
    })

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
    <section className="mb-8 mt-6">
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
      <FormControl>
        <label id="demo-radio-buttons-group-label">
          Cum iti pot fi de folos?<span>*</span>
        </label>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={value}
          onChange={(event) => setValue(event.target.value)}
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
      </FormControl>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label id="nume-form">
            Nume<span>*</span>
          </label>
          <input
            id="nume-form"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label id="prenume-form">
            Prenume<span>*</span>
          </label>
          <input
            id="prenume-form"
            type="text"
            value={prenume}
            onChange={(event) => setPrenume(event.target.value)}
          />
        </div>
      </div>
      <label id="data-nastere">
        ZIUA - LUNA - ANUL nasterii<span>*</span>
      </label>
      <input
        id="data-nastere"
        type="text"
        value={dataNastere}
        onChange={(event) => setDataNastere(event.target.value)}
      />
      <label id="email">
        Email<span>*</span>
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onKeyUp={(event) => handleInputKeyEvent(event)}
      />
      <label id="telefon">
        Telefon<span>*</span>
      </label>
      <input
        id="telefon"
        type="text"
        value={telefon}
        onChange={(event) => setTelefon(event.target.value)}
      />
      <label id="textarea">
        Povestește-mi pe scurt situatia la care doresti sa lucrăm împreună
        <span>*</span>
      </label>
      <textarea
        id="textarea"
        value={textarea}
        onChange={(event) => setTextarea(event.target.value)}
      />
      <Button variant="contained" color="gold" onClick={handleFormSubmit}>
        Trimite Programare
      </Button>
    </section>
  )
}
