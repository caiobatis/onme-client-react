import React from 'react'

import './wpp.scss'

const Wpp = props => {
  return (
    <a rel="noopener noreferrer" className="wpp" target="_blank" href="https://wa.me/5511992223949">
      <div>
        <span>ou se preferir</span>
        <p>fale por whatsapp</p>
      </div>
      <div>
        <i className="fab fa-whatsapp icon"></i>
      </div>
    </a>
  )
}
export default Wpp