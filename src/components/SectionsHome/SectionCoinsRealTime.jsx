import React, { Component } from 'react'
import CoinPrice from '../CoinPrice/CoinPrice'
import { Link } from "react-router-dom"
import Wpp from '../Wpp/Wpp'

const products = [  
  {  
     "productCode":"USD",
     "value":0,
     "sellPrice":3.991045,
     "iof":1.1,
     "currency":"DÓLAR AMERICANO",
     "currencyAbbreviation":"$",
     "maxToSell":3000,
     "minToSell":200,
     "quotationId":"4e4f5f77-caf0-4199-ab8d-22c1241dd8ed",
     "multiples":[  
        100
     ]
  },
  {  
     "productCode":"EUR",
     "value":0,
     "sellPrice":4.518293,
     "iof":1.1,
     "currency":"EURO",
     "currencyAbbreviation":"€",
     "maxToSell":3000,
     "minToSell":200,
     "quotationId":"f0fd7436-dc10-4ef9-a958-e085ccb5d22e",
     "multiples":[  
        100
     ]
  },
  {  
     "productCode":"GBP",
     "value":0,
     "sellPrice":5.412174,
     "iof":1.1,
     "currency":"LIBRA ESTERLINA",
     "currencyAbbreviation":"£",
     "maxToSell":3000,
     "minToSell":100,
     "quotationId":"c6a1f822-33e7-4a51-8d06-d217c586aedc",
     "multiples":[  
        50
     ]
  },
  {
    "productCode": "CAD",
    "value": 0,
    "sellPrice": 3.069602,
    "iof": 1.1,
    "currency": "DOLAR CANADENSES",
    "currencyAbbreviation": "CAD",
    "maxToSell": 3000,
    "minToSell": 200,
    "quotationId": "0edcaff2-d065-42b2-9040-878c62ae9139",
    "multiples": [
      50
    ]
  },
  {
    "productCode": "AUD",
    "value": 0,
    "sellPrice": 2.932253,
    "iof": 1.1,
    "currency": "DOLARES AUSTRALIANOS",
    "currencyAbbreviation": "AUD",
    "maxToSell": 3000,
    "minToSell": 200,
    "quotationId": "1ce0f1dc-3fd3-4626-971d-ea9513ed3e2d",
    "multiples": [
      50
    ]
  },
  {
    "productCode": "NZD",
    "value": 0,
    "sellPrice": 3.139205,
    "iof": 1.1,
    "currency": "DOLARES NEOZELANDESES",
    "currencyAbbreviation": "NZD",
    "maxToSell": 3900,
    "minToSell": 400,
    "quotationId": "f8ed38df-a0cf-4cc6-892c-c3f71086192f",
    "multiples": [
      50
    ]
  }
]

export default class SectionCoinsRealTime extends Component {
  render() {
    return (
      <section className='coinsRealTime'>
        <div className="bg-header"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="defaultTitle">
                <h2 className="h2">Cotações Turismo</h2>
                <p className="p">Trabalhamos com todas as moedas, veja o valor atual das principais. <br/>Procura por outra moeda?</p>
                <div className="reserva">
                  <p className="p">Fale com nosso televendas</p>
                  <div className="phones">
                    <h4 className="h4">( 11 ) 5051-5299</h4>
                    <Wpp/>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="">
                <div className="coins">
                  <div className="list-coins">
                    {
                      products.map((e, i)=>(
                        <CoinPrice
                          key={i}
                          title={e.currency}
                          coin={e.productCode}
                          price={e.sellPrice}
                        />
                      ))
                    }
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-12">
              <div className="text-right bottom">
                {/* <p className="p">Quer uma cotação melhor? <Link to="/contato">Entre em contato</Link></p> */}
                <p className="p">Valores sem IOF, cotação para São Paulo, atualizados a cada 10 minutos. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
