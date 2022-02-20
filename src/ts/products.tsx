import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/Header'

function App() {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));