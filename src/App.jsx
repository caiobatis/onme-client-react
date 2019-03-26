import React, { Component } from 'react'
import Routes from './components/Routes/Routes'
import '@atlaskit/css-reset'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    )
  }
}

export default App
