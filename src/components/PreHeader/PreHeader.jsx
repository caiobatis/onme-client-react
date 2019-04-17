import React from 'react';
import './preHeader.scss'
import Socials from '../Socials/Socials';

const PreHeader = props => {
  return (
    <div className="preHeader">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="flex">
              <p className="p">Compre pelo televendas</p>
              <p className="icon"><i className="fa fa-phone"></i></p>
              <p className="p">11 5078-7000</p>
              <p className="icon"><i className="fab fa-whatsapp"></i></p>
              <p className="p">
                <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">11 99222-3949</a>
              </p>
            </div>
          </div>
          <div className="col-md-3 offset-md-3">
            <Socials/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PreHeader