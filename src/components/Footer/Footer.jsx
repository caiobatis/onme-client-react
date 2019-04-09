import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logoImg from '../Header/logo-onme-color.png'
import Socials from '../Socials/Socials';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container footer-container">
          <div className="row">
            <div className="col-md-4">
              <img className="logo" src={logoImg} alt=""/>
              <p>A OnMe Câmbio e Travel Service veio trazer soluções financeiras para sua viagem de forma prática e segura sendo um correspondente cambial registrado junto ao Banco Central e parceira de grandes corretoras renomadas no mercado, com profissionais voltados na excelência do atendimento, praticando as melhores taxas do mercado!</p>
            </div>
            <div className="col-md-3 offset-md-1 col-sm-4 col-xs-6 footer-links">
              <ul>
                <li><p className="title">COMPRE POR E-MAIL</p></li>
                <li><Link to="/">contato@onmecambio.com.br</Link></li>
              </ul>
              <ul>
                <li><p className="title">COMPRE POR TELEFONE</p></li>
                <li><Link to="/">(11) 5078-7000</Link></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 footer-links">
              <ul>
                <li><p className="title">ACOMPANHE AS <br/>COTAÇÕES</p></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">(11) 99976-0000</a></li>
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
              <Socials/>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
