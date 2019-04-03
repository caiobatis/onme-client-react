import React, { Component } from 'react';

import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import SectionsShipping from '../../components/SectionsShipping/SectionsShipping'
import Footer from '../../components/Footer/Footer'
import './shipping.scss'


export default class Shipping extends Component {
  render() {
    return (
      <div className="shipping">
        <DefaultLayout>
          <SectionsShipping/>
          <Footer/>
        </DefaultLayout>
      </div>
    )
  }
}
