import React, { Component } from 'react';
import Button from '../Button/Button'
import Whitelabel from '../Whitelabel/Whitelabel'
import Card from '@material-ui/core/Card/Card'
import { Link } from "react-router-dom"

export default class SectionsPaper extends Component {
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
                  Pra isso basta clicar no botão comprar agora ou cadastre-se e espere o melhor momento para comprar!
                  </p>
                  <div className="reserva">
                    <p className="p">Se preferir entre em contato pelo televendas</p>
                    <h4 className="h4">( 11 ) 5051-5299</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-5 offset-md-1">
                <Card className="whitelabel">
                  <Whitelabel/>
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
                    <span className="span">Você não circula com papel moeda na rua. A transferência é via  TED e a entrega é feita por portadores treinados e discretos.</span>
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p uppercase"><b>MAIS COMODIDADE</b></p>
                    <span className="span">Você não precisa sair do lugar pra pedir sua moeda. No conforto da sua casa ou do trabalho sua moeda chega sem complicação.</span>
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
        <div className="card-travel">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="h2">Cartão de Viagem</h3>
                <p className="p">Praticidade, segurança e agilidade. O cartão pré-pago Visa Travel Money é recarregável em diversas moedas.</p>
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
