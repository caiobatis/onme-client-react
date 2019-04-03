import React, { Component } from 'react';

import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import SectionsDelivery from '../../components/SectionsDelivery/SectionsDelivery'
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
