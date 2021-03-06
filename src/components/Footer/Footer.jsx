import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logoImg from '../Header/logo-onme-color.png'
import Socials from '../Socials/Socials';

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div className="container footer-container">
            <div className="row">
              <div className="col-md-5 about-we">
                <img className="logo" src={logoImg} alt=""/>
                <p>A OnMe Câmbio e Travel Service veio trazer soluções financeiras para sua viagem de forma prática e segura sendo um correspondente cambial registrado junto ao Banco Central e parceira de grandes corretoras renomadas no mercado, com profissionais voltados na excelência do atendimento, praticando as melhores taxas do mercado!</p>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6 footer-links">
                <ul>
                  <li><p className="title">Nossos conteúdos</p></li>
                  <li><Link to="/"><p>Home</p></Link></li>
                  <li><Link to="/papel-moeda"><p>Papel moeda</p></Link></li>
                  <li><Link to="/remessa"><p>Remessa Internacional</p></Link></li>
                  <li><Link to="/delivery"><p>Delivery</p></Link></li>
                  <li><Link to="/politica-de-estorno"><p>Politicas de estorno</p></Link></li>
                  <li><Link to="/contato"><p>Entre em contato</p></Link></li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 footer-links">
                <ul>
                  <li><p className="title">Fale conosco</p></li>
                  <li><p>(11) 5078-7000</p></li>
                  <li><p><span>em dias úteis, das 9h às 18h</span></p></li>
                  <li><a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949"><p>(11) 99222-3949 <i className="fab fa-whatsapp"></i> </p></a></li>
                  <li><a rel="noopener noreferrer" target="_blank" href="mailto:contato@onmecambio.com.br"><p>contato@onmecambio.com.br</p></a></li>
                </ul>
              </div>
              <div className="col-md-3 offset-md-9 col-xs-12">
                <Socials/>
              </div>
            </div>
          </div>
        </footer>
        <div className="copy">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ul>
                  <li><i className="icon icon-frente"></i></li>
                  <li><i className="icon icon-fair"></i></li>
                  <li><i className="icon icon-banco"></i></li>
                  <li><i className="icon icon-banco2"></i></li>
                  <li><i className="icon icon-banco3"></i></li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="p"><span>Copyright © 2019 - Todos os Direitos Reservados.</span></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
