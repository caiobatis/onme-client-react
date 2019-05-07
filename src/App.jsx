import React, { Component } from 'react'
import Routes from './components/Routes/Routes'
import ReactGA from 'react-ga'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'

class App extends Component {
  render() {

    ReactGA.initialize('UA-125270117-1')

    return (
      <div>
        <Routes/>
      </div>
    )
  }
}

export default App
