import React, { Component } from 'react';
import Header from '../Header/Header'

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        { this.props.children }
      </div>
    )
  }
}

export default DefaultLayout;
