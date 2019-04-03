import React, { Component } from 'react';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Footer from '../../components/Footer/Footer'

import './paperMoney.scss'

export default class PaperMoney extends Component {
  render() {
    return (
      <div className="shipping">
        <DefaultLayout>
          <div className="pt50 pb50 mt50 mb50"></div>
          <Footer/>
        </DefaultLayout>
      </div>
    )
  }
}