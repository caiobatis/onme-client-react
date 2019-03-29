import React, { Component } from 'react'
import Button from '../Button/Button'
import Whitelabel from '../Whitelabel/Whitelabel'
import './masthead.scss'


class Masthead extends Component {
  render() {
    
    return (
      <section className="mastheader">
        <div className="bg-header"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="call">
                    <h2 className="h2">
                      Compre e receba <br/>no conforto de casa
                    </h2>
                    <p className="p">
                      Aqui na Onme você compra online e recebe sem sair de casa. Com nosso serviço de Delivery, o cliente tem comodidade e segurança na compra das moedas.
                    </p>
                    <Button
                      value='O que é papel moeda?'
                    />                   
                    {/* <div className="reserva">
                      <p className="p">Reserve pelo televendas</p>
                      <h4 className="h4">( 11 ) 5051-5299</h4>
                    </div> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="flex-right">
                    <div className="whitelabel">
                      <Whitelabel/>
                    </div>
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

export default Masthead
