import React, { Component } from 'react';
import Button from '../Button/Button'
import Wpp from '../Wpp/Wpp'


export default class SectionsDelivery extends Component {
  render() {
    return (
      <div className="sectionsDelivery">
        <div className="container pb50">
          <div className="">
            <div className="col-md-2">
              <div className="icon-delivery">
                <i className="icon"></i>
              </div>
            </div>
            <div className="col-md-10">
              <h2 className="h2">Delivery</h2>
              <p className="p">
                A OnmeCâmbio, busca proporcionar praticid﻿ade e principalmente segurança aos seus clientes. <br/>
                Você recebe sua compra sem sair de casa ou trabalho, com toda a comodidade e sempre de forma transparente no dia e local previamente combinados. <br/>
                Os nossos portadores possuem toda a capacitação técnica e treinamentos que permitem realizar a entrega de seu pedido de forma segura e sigilosa.
              </p>
            </div>
          </div>
        </div>
        <div className="politics">
          <div className="container">
            <div className="row">
              <h3 className="h3">Informações importantes:</h3>
              <ul className="list-politics">
                <li> <b>Frete Grátis</b> - O valor do frete é gratuito para valores acima de US$ 1.000 ou valor equivalente em outras moedas para a capital paulista. Para outras regiões, o valor mínimo pode variar de acordo com a região.</li>
                <li><b>Custo por Região</b> - Valores abaixo do valor mínimo por região, o custo do delivery pode variar de acordo com a região de entrega. (Entre R$ 30,00 à R$ 55,00).</li>
                <li><b>Documento para receber</b> - Para recebimento de sua compra, deve ser apresentado um documento atualizado com foto no ato da entrega.</li>
                <li><b>Recebimento por terceiros</b> - Apenas o comprador titular do contrato de câmbio poderá receber os valores. Caso o titular não possa receber a moeda, deverá ser indicado um terceiro que receberá a compra, mediante autorização nomeada pelo titular do contrato de câmbio. Solicite a carta de autorização de entrega a terceiros, através do nossos atendentes.</li>
                <li><b>Agendamento de horário</b> - Por questões de segurança, não informamos o itinerário do entregador, sendo assim, não é possível informar o horário exato da entrega, são normas da seguradora de nossa corretora parceira.</li>
                <li><b>Horário de entrega</b> - A entrega é realizada dentro do horário comercial de segunda à sexta das 10:00 às 18:00hs.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container pt50 pb50">
          <div className="row">
            <div className="col-md-4 offset-md-2">
              <Button
                onClick={()=>console.log('lol')}
                value="Dúvidas frequentes"
                theme="primary"
                size="large"
                full={true}
              />
            </div>
            <div className="col-md-4">
              <div className="reserva">
                <div className="phones">
                  <div>
                    <p className="p">Fale com nosso televendas</p>
                    <h4 className="h4">( 11 ) 5051-5299</h4>
                  </div>
                  <Wpp/>
                </div>
              </div>            
            </div>
          </div>
        </div>
      </div>
    )
  }
}
