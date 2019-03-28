import React, { Component } from 'react'
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout'
import SectionsContact from '../../components/SectionsContact/SectionsContact'

import './contact.scss'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <DefaultLayout>
          <SectionsContact/>

        </DefaultLayout>
      </div>
    );
  }
}

export default Contact;
