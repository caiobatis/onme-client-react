import React from 'react'
import Wpp from '../Wpp/Wpp'

import './telesales.scss'

const Telesales = props => {
  return (
    <div className="phones">
      <div>
        <p className="p">Fale com nosso televendas</p>
        <h4 className="h4">( 11 ) 5078-7000</h4>
      </div>
      <Wpp/>
    </div>
  )
}
export default Telesales