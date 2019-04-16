import React, { Component } from 'react'
import Button from '../Button/Button'
import Whitelabel from '../Whitelabel/Whitelabel'
import {Link} from 'react-router-dom'
import Telesales from '../Telesales/Telesales'

import './masthead.scss'

class Masthead extends Component {
  render() {
    return (
      <section className="mastheader" id="masthead">
        <div className="bg-header"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="call">
                      <h2 className="h2">
                        Compre e receba no<br/>conforto de sua casa!
                      </h2>
                      <p className="p">
                        Aqui na Onme você compra online e recebe sem sair de casa com nosso serviço de Delivery. Sua viagem começa aqui!
                      </p>
                      <Link
                        to="/papel-moeda"
                      >
                        <Button
                          value='Saiba mais'
                        />                   
                      </Link>
                      <div className="reserva">
                        <Telesales className={'black'}/>
                      </div>
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
