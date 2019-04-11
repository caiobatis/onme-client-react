import React, { Component } from 'react'
import Button from '../Button/Button'

export default class SectionShipping extends Component {
  render() {
    return (
      <section className='sectionShipping'>
        <div className="bg-shipping"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="defaultTitle">
                <h2 className="h2">Remessa internacional</h2>
                <p className="p">Pagamentos, Recebimentos e Transferências Internacionais com segurança, praticidade e a experiência de quem é especialista em câmbio.<br/>
                </p>
                <br/>
                <Button
                  theme='secundary'
                  value='Saiba mais'
                />              
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
