import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from '../../pages/Home/Home'
import Delivery from '../../pages/Delivery/Delivery'
import Contact from '../../pages/Contact/Contact'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/contato" component={Contact} />
        <Route exact path="/delivery" component={Delivery} />
      </Router>
    )
  }
}

export default Routes