import React, { Component } from 'react'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import SectionsContact from '../../components/SectionsContact/SectionsContact'
import Footer from '../../components/Footer/Footer'
import ReactGA from 'react-ga'
import './contact.scss'

class Contact extends Component {
  render() {
    ReactGA.pageview('/contato')
    return (
      <div className="contact">
        <DefaultLayout>
          <SectionsContact/>

          <Footer/>
        </DefaultLayout>
      </div>
    );
  }
}

export default Contact;
