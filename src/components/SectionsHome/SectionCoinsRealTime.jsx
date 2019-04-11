import React, { Component } from 'react'
import { connect } from 'react-redux'
import CoinPrice from '../CoinPrice/CoinPrice'
import Telesales from '../Telesales/Telesales'
import scrollToElement from 'scroll-to-element'

class SectionCoinsRealTime extends Component {

  handleClick() {
    scrollToElement('#masthead', {
      offset: 0,
      duration: 1000
    })
  }

  render() {
    const {
      listCoins
    } = this.props


    const codes = ['USD', 'GBP', 'EUR', 'NZD', 'AUD', 'CAD']

    return (
      <section className='coinsRealTime'>
        <div className="bg-header"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="defaultTitle">
                <h2 className="h2">Cotações Turismo</h2>
                <p className="p">
                  Trabalhamos com todas as moedas, veja o valor atual das principais. <br/>Procura por outra moeda?
                  <br/>
                  <b onClick={this.handleClick}><span>Para cotações em outros estados simule aqui.</span></b>
                </p>
                <div className="reserva">
                  <Telesales/>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="">
                <div className="coins">
                  <div className="list-coins">
                    { listCoins.map((item, i)=> {
                      return codes.map(code => {
                        return code === item.productCode &&
                          <CoinPrice
                            key={i}
                            title={item.currency}
                            coin={item.productCode}
                            price={item.sellPrice}
                            iof={item.iof}
                          />
                      })
                    })}
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-12">
              <div className="text-right bottom">
                <p className="p">Valores com IOF, cotação para São Paulo, atualizados a cada 4 minutos e 30 segundos. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


const mapStateToProps = state => {
  const whitelabel = state.WhitelabelReducer
  return {
    listCoins: whitelabel.list
  }
}

export default connect(mapStateToProps)(SectionCoinsRealTime) 