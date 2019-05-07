import React, { Component } from 'react'
import ReactGA from 'react-ga'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import SectionsDelivery from '../../components/SectionsDelivery/SectionsDelivery'
import Footer from '../../components/Footer/Footer'
import './delivery.scss'


export default class Delivery extends Component {
  render() {
    ReactGA.pageview('/delivery')
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
