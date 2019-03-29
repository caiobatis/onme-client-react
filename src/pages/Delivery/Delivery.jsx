import React, { Component } from 'react';

import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import SectionsDelivery from '../../components/SectionsDelivery/SectionsDelivery'
import Footer from '../../components/Footer/Footer'
import './delivery.scss'


export default class Delivery extends Component {
  render() {
    return (
      <div className="delivery">
        <DefaultLayout>
          <SectionsDelivery/>
          <Footer/>
        </DefaultLayout>
      </div>
    )
  }
}
