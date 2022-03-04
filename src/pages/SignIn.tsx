import Header from '@Components/header/Header'
import LogInSection from '@Page-section/Signin/LogInSection'
import SignInSection from '@Page-section/Signin/SignInSection'
import React from 'react'
import ReactDOM from 'react-dom'

function SignIn() {
  return (
    <React.Fragment>
      {
        ReactDOM.createPortal(
          <Header />,
          document.getElementById('search-bar')!
        )
      }

      <div className='grid-2-column-responsive-9 pad-3'>
        <div className='pad-10 mar bg-white-2'>
          <SignInSection />
        </div>
        <div className='pad-10 mar bg-white-2 height-m-content'>
          <LogInSection />
        </div>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
  document.getElementById('root')
)