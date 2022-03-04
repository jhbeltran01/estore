import React from 'react'

type ContactUsAddressDataProps = {
  title: string,
  address: string,
  email: string,
  number: string
}

function ContactUsAddressData({ title, address, email, number }: ContactUsAddressDataProps) {
  return (
    <div>
      <h2 className='mar-bot-2 ff-source-code fs-25'>{title}</h2>
      <p className='mar-bot-6'>
        <i className='clr-light-red mar-right-2 fa fa-map-marker'></i>
        {address}
      </p>
      <p className='mar-bot-6'>
        <i className='clr-light-red mar-right-2 fa fa-envelope'></i>
        {email}
      </p>
      <p className='mar-bot-6'>
        <i className='clr-light-red mar-right-2 fa fa-phone'></i>
        {number}
      </p>

      <ul className='style-type-none  flex-container-4'>
        <li><button className='btn-social-media clr-light-red border-red'><i className='fab fa-twitter'></i></button></li>
        <li><button className='btn-social-media clr-light-red border-red'><i className='fab fa-facebook-f'></i></button></li>
        <li><button className='btn-social-media clr-light-red border-red'><i className='fab fa-linkedin-in'></i></button></li>
        <li><button className='btn-social-media clr-light-red border-red'><i className='fab fa-instagram'></i></button></li>
        <li><button className='btn-social-media clr-light-red border-red'><i className='fab fa-youtube'></i></button></li>
      </ul>
    </div>
  )
}

export default ContactUsAddressData