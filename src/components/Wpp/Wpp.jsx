import React from 'react'
import classNames from 'classnames'
import './wpp.scss'

const Wpp = props => {

  const wppClasses = classNames('wpp', props.className)

  return (
    <a rel="noopener noreferrer" className={wppClasses} target="_blank" href="https://wa.me/5511992223949">
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