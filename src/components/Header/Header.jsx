import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MenuDrawer from '../MenuDrawer/MenuDrawer'
import logoImg from './logo-onme-color.png'
import './header.scss'

export default class Header extends Component {
  render() {
    return (
      <header id="main-nav">
        <div className="container">
    
          <MenuDrawer/>
        
          <div className="row">
            <div className="col-md-4">
              <ul className="left">
                <li><Link to="#">Remessa</Link></li>
                <li><Link to="#">Papel moeda</Link></li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <Link to="/" className="logo"><img src={logoImg} alt="New Providence"/></Link>
            </div>
            <div className="col-md-4">
              <ul className="right">
                  <li><Link to="/contato">Entre em contato</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
