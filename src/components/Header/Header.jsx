import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logoImg from './logo-onme-color.png'
import './header.scss'

export default class Header extends Component {
  render() {
    return (
      <header id="main-nav">
        <div className="container">
    
          <Link id="navigation" to="#">
            <i className="icon-hamburguer">
              <span/>
              <span/>
              <span/>
            </i>
          </Link>
    
          <div id="slide_out_menu">
            <Link to="#" className="menu-close">
              <i className="icon-hamburguer">
                <span/>
                <span/>
                <span/>
              </i>
            </Link>
            <div className="logo"><img src="images/logo-white.png" alt=""/></div>
            <ul>
              <li><Link to="#">Tour</Link></li>
              <li><Link to="#">Features</Link></li>
              <li><Link to="#">Pricing</Link></li>
              <li><Link to="#">Help</Link></li>
              <li><Link to="#">Contacts</Link></li>
              <li><Link to="#" className="btn btn-blue"><i className="fa fa-apple"></i> Get App</Link></li>
            </ul>
    
            <div className="slide_out_menu_footer">
              <div className="more-info">
                <p>Made with love by <Link to="http://getcraftwork.com">Craft Work</Link></p>
                <p>Developed by <Link to="http://ruibogasdesign.net/">Rui Bogas</Link></p>
              </div>
              <ul className="socials">
                <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                <li><Link to="#"><i className="fa fa-tumblr"></i></Link></li>
                <li><Link to="#"><i className="fa fa-pinterest-p"></i></Link></li>
                <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
              </ul>
            </div>
          </div>
    
          <div className="row">
            <div className="col-md-4">
              <ul className="left">
                <li><Link to="#">Remessa</Link></li>
                <li><Link to="#">Papel moeda</Link></li>
                {/* <li><Link to="#">Pricing</Link></li> */}
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <Link to="/" className="logo"><img src={logoImg} alt="New Providence"/></Link>
            </div>
            <div className="col-md-4">
              <ul className="right">
                  <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
