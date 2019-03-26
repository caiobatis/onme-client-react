import React, { Component } from 'react'
import usd from './ico_usd.png'
import eur from './ico_eur.png'
import gbp from './ico_gbp.png'
import brl from './ico_brl.png'
import nzd from './ico_nzd.png'
import cad from './ico_cad.png'
import aud from './ico_aud.png'

import './coinPrice.scss'

export default class CoinPrice extends Component {
  render() {
    const {
      coin,
      title,
      price
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
          <p className="price">{price}</p>
        </div>

      </div>
    )
  }
}
