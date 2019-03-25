import React, { Component } from 'react'
import Button from '../Button/Button'

import './card.scss'

export default class Card extends Component {
  render() {
    return (
      <div className="cardDefault">
        <div className="image">
          <img src={'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/11/19/104852360-GettyImages-137084202.530x298.jpg'} alt=""/>
        </div>
        <div className="title">
          <h3 className="h3">Papel Moeda</h3>
        </div>
        <div className="flag">
          <div className="item">Frente Corretora</div>
        </div>
        <div className="description">
          <p className="p">Vai viajar e quer receber sua moeda no conforto de sua casa, comprar papel moeda é a melhor opção para você!</p>
        </div>
        <div className="actions">
          <Button
            full={true}
            theme='secundary'
            value='Saiba mais'
          />
        </div>
      </div>
    )
  }
}