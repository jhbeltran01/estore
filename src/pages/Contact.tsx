import ReactDOM from 'react-dom'
import '@Utils/toggleMobileNavMenu'
import Header from '@Components/header/Header'
import ContactUsAddressData from '@Page-section/ContactUs/ContactUsAddressData'
import ContactUsForm from '@Page-section/ContactUs/ContactUsForm'
import React from 'react'

function Contact() {
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      <div className='grid-3-column-responsive-3 pad-3'>
        <div className='mar-res bg-white-2 pad-10'>
          <ContactUsAddressData
            title='Our Office'
            address='123 Office, Los Angeles, CA, USA'
            email='office@example.com'
            number='+123-456-7890'
          />
        </div>
        <div className='mar-res bg-white-2 pad-10'>
          <ContactUsAddressData
            title='Our Store'
            address='123 Store, Los Angeles, CA, USA'
            email='store@example.com'
            number='+123-456-7890'
          />
        </div>

        <div className='mar-res bg-white-2 pad-10'>
          <ContactUsForm />
        </div>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
)