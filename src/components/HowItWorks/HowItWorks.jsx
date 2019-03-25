import React, { Component } from 'react'
import Card from '../Card/Card'
import './howItWorks.scss'

export default class HowItWorks extends Component {
  render() {
    return (
      <section className='howItWorks'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="defaultTitle">
                <h2 className="h2">Como funciona?</h2>
                <p className="p">Somos um correspondente cambial, temos algumas soluções para que você obtenha sua moeda internacional, seja em mãos ou em conta.</p>
                <span className="span">Dúvidas? <a href="">Entre em contato</a></span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="cards">
                  <div className="col-md-3">
                    <Card/>
                  </div>
                  <div className="col-md-3">
                    <Card/>
                  </div>
                  <div className="col-md-3">
                    <Card/>
                  </div>
                  <div className="col-md-3">
                    <Card/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
