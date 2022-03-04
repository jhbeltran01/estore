import React from 'react'

function ContactUsForm() {
  return (
    <form>
      <div className='grid-2-column-responsive-7'>
        <input
          className='input-field-4 mar-bot-2'
          type="text"
          name="name"
          id="name"
          placeholder='Your Name'
        />
        <input
          className='input-field-4 mar-bot-2'
          type="email"
          name="email"
          id="email"
          placeholder='Your Email'
        />
      </div>

      <input
        className='input-field-4 mar-bot-2'
        type="text"
        name="subject"
        id="subject"
        placeholder='Subject'
      />

      <textarea
        className='input-field-4 mar-bot-2'
        name="message"
        id="message"
        placeholder='Message'
      ></textarea>
      <button className='btn-primary' type="submit">Send Message</button>
    </form>
  )
}

export default ContactUsForm