import React, { Component } from 'react';
import Button from '../Button/Button'
import Whitelabel from '../Whitelabel/Whitelabel'
import Card from '@material-ui/core/Card/Card'
import Telesales from '../Telesales/Telesales'
import { Link } from "react-router-dom"
import scrollToElement from 'scroll-to-element'

export default class SectionsPaper extends Component {

  componentDidMount() {
    console.log(window.location.hash)
    window.location.hash && scrollToElement(`${window.location.hash}`, {
      offset: -170,
      duration: 1000
    })
  }
  

  render() {
    return (
      <div className="sectionsPaper">
        <div className="head">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="defaultTitle">
                  <h2 className="h2">Mais facilidade <br/>pro seu dia-dia</h2>
                  <p className="p">
                    Clicou, comprou, chegou. Tudo muito fácil, prático e seguro. <br/>
                    Para isso basta clicar no botão Comprar Agora ou acompanhe com nossa equipe o melhor momento para finalizar sua compra! 
                  </p>
                 <p className="p">Trabalhamos com mais de 20  moedas, compramos e vendemos com taxas especiais.</p>
                 <ul>
                  <li>Dólar Americano (USD)</li>
                  <li>Euro (EUR)</li>
                  <li>Dólar Canadense (CAD)</li>
                  <li>Dólar Australiano (AUD)</li>
                  <li>Dólar Neozelandês (NZD)</li>
                  <li>Libra Esterlina (GBP)</li>
                  <li>Peso Argentino (ARS)</li>
                  <li>Rande Sul-Africano (ZAR)</li>
                  <li>Iuan (CNY)</li>
                  <li>Iene (JPY)</li>
                  <li>Peso Colombiano (COP)</li>
                  <li>Peso Mexicano (MXN)</li>
                  <li>Peso Chileno (CLP)</li>
                  <li>Peso Uruguaio (UYU)</li>
                  <li>Franco Suíço (CHF)</li>
                 </ul>
                  <div className="reserva">
                    <Telesales className={'black'}/>
                  </div>

                </div>
              </div>
              <div className="col-md-5 offset-md-1">
                <Card className="whitelabel">
                  <Whitelabel
                    button="primary"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="h4 text-center uppercase">Porque comprar online?</h4>
              </div>
              <div className="why-buy">
                <ul className="list-squad">
                  <li>
                    <i className="icon"></i>
                    <p className="p uppercase"><b>Mais praticidade</b></p>
                    <span className="span">Foi pensando na correria dos dias de hoje que criamos uma plataforma, simples, rápida e descomplicada.</span>
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p uppercase"><b>mais segurança</b></p>
                    <span className="span">Você não circula com papel moeda na rua. O pagamento é via Banco através de TED e você conta com a credibilidade de comprar numa instituição devidamente registrada junto ao Banco Central.</span>
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p uppercase"><b>MAIS COMODIDADE</b></p>
                    <span className="span">Você não precisa sair do lugar pra pedir sua moeda, nossa entrega é feita por portadores treinados e discretos no conforto da sua casa ou do trabalho sua moeda chega sem complicação.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="delivery">
          <div className="container">
            <div className="col-md-8 offset-md-2">
              <Link to="/delivery">
                <div className="delivery-button-lg">
                  <div className="icon"></div>
                  <div className="info">
                    <p className="p">clique aqui para esclarecer todas suas</p>
                    <h3 className="h3">Dúvidas sobre nosso delivery</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-travel" id="cartao">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="h2">Cartão pré-pago</h3>
                <p className="p">Praticidade, segurança e agilidade. O cartão pré-pago Visa Travel Money é recarregável em diversas moedas. Pode ser utilizado tanto para saques (rede Plus) quanto para compras em débito (rede Visa) em mais de 200 países em todo o mundo. A maneira mais moderna de gerenciar seu dinheiro em viagens ao exterior.</p>
                <h4 className="h4"><b>Cartão Multimoedas</b></h4>
                <p className="p">Dólar, Euro e Libra no mesmo cartão</p>
                <div className="buy-now">
                  <Button
                    value="Peça agora o seu!"
                    theme="primary"
                  />
                </div>
              </div>
              <div className="col-md-5 offset-md-1">
                <Card className="travel-box">
                  <div className="h3">Vantagens</div>
                  <ul className="list">
                    <li>Senha de segurança e sistema de código antifraude;</li>
                    <li>Tem as mesmas funcionalidades de um cartão de débito convencional;</li>
                    <li>Evita o risco de transportar quantias mais altas em espécie;</li>
                    <li>Gestão e controle de gastos para funcionários que viajam com regime de diárias;</li>
                    <li>Ideal para utilizar como premiação em ações de marketing de marcas e empresas;</li>
                    <li>Perfeito para gerenciar gastos de estrangeiros em visita ao Brasil;</li>
                    <li>Eficaz para pagamento de mesada em outra moeda para dependentes.</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>  
    
    )
  }
}
