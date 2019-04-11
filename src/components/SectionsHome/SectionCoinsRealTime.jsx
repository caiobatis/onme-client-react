import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

    console.log(listCoins)
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
                  <p onClick={this.handleClick}><span>Para cotações em outros estados simule aqui.</span></p>
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
                    {
                      listCoins.map((e, i)=>(
                        <CoinPrice
                          key={i}
                          title={e.currency}
                          coin={e.productCode}
                          price={e.sellPrice}
                          iof={e.iof}
                        />
                      ))
                    }
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