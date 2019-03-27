import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logoImg from '../Header/logo-onme-color.png'

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container footer-container">
          <div className="row">
            <div className="col-md-4">
              <img className="logo" src={logoImg} alt=""/>
              <p>A OnMe Câmbio e Travel Service surgiu da divisão da Focco e da Focco X, uma empresa com mais de 8 anos no mercado de câmbio, com profissionais voltados na excelência do atendimento, praticando as melhores taxas do mercado!</p>
            </div>
            <div className="col-md-3 offset-md-1 col-sm-4 col-xs-6 footer-links">
              <ul>
                <li><p className="title">COMPRE POR E-MAIL</p></li>
                <li><Link to="/">contato@onmecambio.com.br</Link></li>
              </ul>
              <ul>
                <li><p className="title">COMPRE POR TELEFONE</p></li>
                <li><Link to="/">(11) 5051-5299</Link></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 footer-links">
              <ul>
                <li><p className="title">ACOMPANHE AS <br/>COTAÇÕES</p></li>
                <li><Link to="/">(11) 99222-3949</Link></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 footer-links">
              <ul>
                <li><p className="title">Produtos</p></li>
                <li><Link to="/">Papel moeda</Link></li>
                <li><Link to="/">Remessa</Link></li>
              </ul>
            </div>
            <div className="col-md-3 offset-md-9 col-xs-12">
              <ul className="socials">
                <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                <li><Link to="/"><i className="fab fa-facebook"></i></Link></li>
                <li><Link to="/"><i className="fab fa-google-plus"></i></Link></li>
                <li><Link to="/"><i className="fab fa-tumblr"></i></Link></li>
                <li><Link to="/"><i className="fab fa-pinterest-p"></i></Link></li>
                <li><Link to="/"><i className="fab fa-linkedin"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}