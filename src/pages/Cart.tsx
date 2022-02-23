import Header from '@Components/header/Header'
import React from 'react'
import ReactDOM from 'react-dom'

const Cart = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  )
}

ReactDOM.render(
  <React.StrictMode>
    < Cart />
  </React.StrictMode>,
  document.getElementById('root')
)