import React, { Component } from 'react'
import { HashRouter as Router, Route } from "react-router-dom"
import Home from '../../pages/Home/Home'
import Contact from '../../pages/Contact/Contact'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/contato" component={Contact} />
      </Router>
    )
  }
}

export default Routes