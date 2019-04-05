import React, { Component } from 'react'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Footer from '../../components/Footer/Footer'
import SectionsPaper from '../../components/SectionsPaper/SectionsPaper'

import './refundPolicy.scss'

export default class RefundPolicy extends Component {
  render() {
    return (
      <div className="paperMoney">
        <DefaultLayout>
          <Footer/>
        </DefaultLayout>
      </div>
    )
  }
}