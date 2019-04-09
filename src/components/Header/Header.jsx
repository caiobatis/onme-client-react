import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MenuDrawer from '../MenuDrawer/MenuDrawer'
import PreHeader from '../PreHeader/PreHeader'
import logoImg from './logo-onme-color.png'
import './header.scss'

export default class Header extends Component {
  render() {
    return (
      <>
        <PreHeader/>
        <header id="main-nav">
          <div className="container">
      
            <MenuDrawer/>
          
            <div className="row">
              <div className="col-md-4">
                <ul className="left">
                  <li><Link to="/remessa">Remessa</Link></li>
                  <li><Link to="/papel-moeda">Papel moeda</Link></li>
                </ul>
              </div>
              <div className="col-md-4 text-center">
                <Link to="/" className="logo"><img src={logoImg} alt="OnMe Câmbio e Travel Service"/></Link>
              </div>
              <div className="col-md-4">
                <ul className="right">
                  <li><Link to="/delivery">Delivery</Link></li>
                  <li><Link to="/contato">Entre em contato</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
