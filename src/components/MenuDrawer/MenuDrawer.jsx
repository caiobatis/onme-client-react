import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { Link } from "react-router-dom"
import logoImg from '../Header/logo-onme-color.png'


export default class MenuDrawer extends Component {

  state = {
    open: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }


  render() {
    return (
      <div>
        <a className="navigation" onClick={this.toggleDrawer('open', true)}>
          <i className="icon-hamburguer">
            <span/>
            <span/>
            <span/>
          </i>
        </a>

        <Drawer open={this.state.open} onClose={this.toggleDrawer('open', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('open', false)}
            onKeyDown={this.toggleDrawer('open', false)}
          >
            <div className="menuDrawer">
              <div className="logo"><img src={logoImg}alt=""/></div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/papel-moeda">Papel moeda</Link></li>
                <li><Link to="/remessa">Remessa</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
      
              <div className="slide_out_menu_footer">
                <ul className="socials">
                  <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-google-plus"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-tumblr"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-linkedin"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    )
  }
}
