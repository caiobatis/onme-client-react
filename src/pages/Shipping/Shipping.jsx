import React, { Component } from 'react'
import ReactGA from 'react-ga'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import SectionsShipping from '../../components/SectionsShipping/SectionsShipping'
import Footer from '../../components/Footer/Footer'
import './shipping.scss'


export default class Shipping extends Component {
  render() {
    ReactGA.pageview('/remessa')
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
