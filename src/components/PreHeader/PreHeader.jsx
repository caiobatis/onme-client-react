import React from 'react';
import './preHeader.scss'

const PreHeader = props => {
  return (
    <div className="preHeader">
      <div className="container">
        <div className="flex">
          <p className="p">Compre pelo televendas</p>
          <p className="icon"><i className="fa fa-phone"></i></p>
          <p className="p">11 5078-7000</p>
          <p className="icon"><i className="fab fa-whatsapp"></i></p>
          <p className="p"><a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">11 99976-0000</a></p>
        </div>
      </div>
    </div>
  )
}
export default PreHeader