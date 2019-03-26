import React, { Component } from 'react';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Masthead from '../../components/Masthead/Masthead'
import SectionHowItWorks from '../../components/SectionsHome/SectionHowItWorks'
import SectionCoinsRealTime from '../../components/SectionsHome/SectionCoinsRealTime'
import SectionShipping from '../../components/SectionsHome/SectionShipping'

import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <DefaultLayout>
          <Masthead/>
          <SectionHowItWorks/>
          <SectionCoinsRealTime/>
          <SectionShipping/>
        
        </DefaultLayout>
      </div>
    );
  }
}

export default Home;
