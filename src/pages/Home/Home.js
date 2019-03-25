import React, { Component } from 'react';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import Masthead from '../../components/Masthead/Masthead'
import HowItWorks from '../../components/HowItWorks/HowItWorks'

import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <DefaultLayout>
          <Masthead/>
          <HowItWorks/>
        
        </DefaultLayout>
      </div>
    );
  }
}

export default Home;
