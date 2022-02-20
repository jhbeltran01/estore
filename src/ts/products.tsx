import React from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/filter/Filter';
import Header from './components/header/Header'

function App() {
  return (
    <React.Fragment>
      <Header />

      <Filter />
    </React.Fragment>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));