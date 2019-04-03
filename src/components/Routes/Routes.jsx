import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from '../../pages/Home/Home'
import Delivery from '../../pages/Delivery/Delivery'
import Contact from '../../pages/Contact/Contact'
import Shipping from '../../pages/Shipping/Shipping'
import PaperMoney from '../../pages/PaperMoney/PaperMoney'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/contato" component={Contact} />
        <Route exact path="/delivery" component={Delivery} />
        <Route exact path="/remessa" component={Shipping} />
        <Route exact path="/papel-moeda" component={PaperMoney} />
      </Router>
    )
  }
}

export default Routes