import React from 'react';
import wppImg from '../Commons/wpp.svg'

import './wpp.scss'

const Wpp = props => {
  return (
    <a rel="noopener noreferrer" className="wpp" target="_blank" href="https://wa.me/5511992223949">
      <img src={wppImg} alt=""/>
    </a>
  )
}
export default Wpp