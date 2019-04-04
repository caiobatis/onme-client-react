import React, { Component } from 'react';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Footer from '../../components/Footer/Footer'
import SectionsPaper from '../../components/SectionsPaper/SectionsPaper'

import './paperMoney.scss'

export default class PaperMoney extends Component {
  render() {
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