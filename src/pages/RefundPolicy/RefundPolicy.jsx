import React, { Component } from 'react'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Footer from '../../components/Footer/Footer'
import SectionsPolicy from '../../components/SectionsPolicy/SectionsPolicy'

import './refundPolicy.scss'

export default class RefundPolicy extends Component {
  render() {
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