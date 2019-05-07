import React, { Component } from 'react'
import ReactGA from 'react-ga'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Footer from '../../components/Footer/Footer'
import SectionsPolicy from '../../components/SectionsPolicy/SectionsPolicy'

import './refundPolicy.scss'

export default class RefundPolicy extends Component {
  render() {
    ReactGA.pageview('/politica-de-estorno')
    return (
      <div className="paperMoney">
        <DefaultLayout>
          <SectionsPolicy/>
          <Footer/>
        </DefaultLayout>
      </div>
    )
  }
}