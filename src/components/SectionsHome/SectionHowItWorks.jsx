import React, { Component } from 'react'
import { Link } from "react-router-dom"
import ProductCard from '../Cards/ProductCard'

export default class SectionHowItWorks extends Component {
  render() {
    return (
      <section className='howItWorks'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="defaultTitle">
                <h2 className="h2">Como funciona?</h2>
                <p className="p">Somos um correspondente cambial, temos algumas soluções para que você obtenha sua moeda internacional, seja em mãos ou em conta.</p>
                <span className="span">Dúvidas? <Link to="/contato">Entre em contato</Link></span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="cards">
                  <div className="col-md-3">
                    <ProductCard/>
                  </div>
                  <div className="col-md-3">
                    <ProductCard/>
                  </div>
                  <div className="col-md-3">
                    <ProductCard/>
                  </div>
                  <div className="col-md-3">
                    <ProductCard/>
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
