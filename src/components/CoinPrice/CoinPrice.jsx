import React, { Component } from 'react'
import NumberFormat from 'react-number-format'
import usd from './ico_usd.png'
import eur from './ico_eur.png'
import gbp from './ico_gbp.png'
import nzd from './ico_nzd.png'
import cad from './ico_cad.png'
import aud from './ico_aud.png'

import './coinPrice.scss'

export default class CoinPrice extends Component {
  render() {
    const {
      coin,
      price,
      iof
    } = this.props

    let img = usd 

    switch (coin.toLowerCase()) {
      case 'usd':
        img = usd
        break;
      case 'eur':
        img = eur
        break;
      case 'gbp':
        img = gbp
        break;
      case 'nzd':
        img = nzd
        break;
      case 'aud':
        img = aud
        break;
      case 'cad':
        img = cad
        break;
    
      default:
        break;
    }
    console.log((price * (iof/100)) + price, price, iof)
    
    return (
      <div className="CoinPrice">
        <div className="top">
          <img src={img} alt={coin}/>
          <div className="title">
            <h3 className="h3">{coin}</h3>
            <p className="p">Turismo</p>
          </div>
        </div>
        <div className="bottom">
          <p className="price">
            <NumberFormat
              value={(price * (iof/100)) + price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'R$ '}
              decimalScale={3}
            />
          </p>
        </div>

      </div>
    )
  }
}
