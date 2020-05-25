import React, { Component } from 'react'
import ReactGA from 'react-ga'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Masthead from '../../components/Masthead/Masthead'
import SectionHowItWorks from '../../components/SectionsHome/SectionHowItWorks'
import SectionCoinsRealTime from '../../components/SectionsHome/SectionCoinsRealTime'
import SectionShipping from '../../components/SectionsHome/SectionShipping'
import Footer from '../../components/Footer/Footer'

import './home.scss';

class Home extends Component {
  render() {
    ReactGA.pageview('/home')
    return (
      <div className="home">
        <DefaultLayout>
          <Masthead />
          <SectionHowItWorks />
          <SectionCoinsRealTime />
          <SectionShipping />
          <Footer />
        </DefaultLayout>
      </div>
    );
  }
}

export default Home;
