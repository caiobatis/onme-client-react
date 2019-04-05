import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AnimatedSwitch } from 'react-router-transition'
import ScrollToTop from './ScrollToTop'

import Home from '../../pages/Home/Home'
import Delivery from '../../pages/Delivery/Delivery'
import Contact from '../../pages/Contact/Contact'
import Shipping from '../../pages/Shipping/Shipping'
import PaperMoney from '../../pages/PaperMoney/PaperMoney'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route exact path="/" component={Home} />
              <Route exact path="/contato" component={Contact} />
              <Route exact path="/delivery" component={Delivery} />
              <Route exact path="/remessa" component={Shipping} />
              <Route exact path="/papel-moeda" component={PaperMoney} />
            </AnimatedSwitch>

          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default Routes