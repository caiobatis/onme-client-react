import React from 'react';
import './preHeader.scss'

const PreHeader = props => {
  return (
    <div className="preHeader">
      <div className="container">
        <div className="flex">
          <p className="p">Compre pelo televendas</p>
          <p className="icon"><i className="phone-icon"></i></p>
          <p className="p">11 5078-7000</p>
          <p className="icon"><i className="phone-icon"></i></p>
          <p className="p">11 99976-0000</p>
        </div>
      </div>
    </div>
  )
}
export default PreHeader