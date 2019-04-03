import React, { Component } from 'react';

import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Footer from '../../components/Footer/Footer'
import './shipping.scss'


export default class Shipping extends Component {
  render() {
    return (
      <div className="delivery">
        <DefaultLayout>
          <Footer/>
        </DefaultLayout>
      </div>
    )
  }
}
