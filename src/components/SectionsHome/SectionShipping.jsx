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
                <ul className="list-default">
                  <li>
                    Não precisa ter conta em banco
                  </li>
                  <li>
                    Pagamento em Dinheiro, Boleto, DOC ou TED
                  </li>
                  <li>
                    Mais de 2.500 pontos de retirada ou saques
                  </li>
                </ul>
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
