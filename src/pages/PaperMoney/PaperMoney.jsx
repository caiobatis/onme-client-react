import React, { Component } from 'react'
import ReactGA from 'react-ga'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Footer from '../../components/Footer/Footer'
import SectionsPaper from '../../components/SectionsPaper/SectionsPaper'

import './paperMoney.scss'

export default class PaperMoney extends Component {
  render() {
    ReactGA.pageview('/papel-moeda')
    return (
      <div className="paperMoney">
        <DefaultLayout>
          <SectionsPaper/>
          <Footer/>
        </DefaultLayout>
      </div>
    )
  }
}