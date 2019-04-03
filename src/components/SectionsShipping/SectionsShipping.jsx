import React, { Component } from 'react';
import Button from '../Button/Button'
import ShippingForm from './ShippingForm'


export default class SectionsShipping extends Component {
  render() {
    return (
      <div className="sectionsShipping">
        <div className="head">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="defaultTitle">
                  <h2 className="h2">Transferência <br/>Internacional</h2>
                  <p className="p">
                    A melhor cotação para enviar ou receber dinheiro do exterior. <br/>
                    Faça suas remessas internacionais pela internet! <br/>
                    Segurança, praticidade e a experiência de quem é especialista em câmbio.
                  </p>
                  <Button
                    theme='primary'
                    value='Cadastre-se'
                  />
                  <br/>
                  <Button
                    border={true}
                    theme='primary'
                    value='Fale com um especialista'
                  />
                  <div className="reserva">
                    <p className="p">Se preferir entre em contato pelo televendas</p>
                    <h4 className="h4">( 11 ) 5051-5299</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="h4 text-center uppercase">Motivos para usar a <b>Remessa Internacional</b></h4>
              </div>
              <div className="aboutShipping">
                <ul className="list-squad">
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Manutenção de Residentes no exterior</b></p>
                    <span className="span">Envio ou recebimento de recursos para manutenção de pessoas físicas no exterior. (Grau de parentesco: 1º ou 2º graus)</span>
                    <Button
                      border={true}
                      theme='secundary'
                      value='Fale com um especialista'
                    />
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Disponibilidade no exterior</b></p>
                    <span className="span">Envio ou recebimento para crédito em conta corrente de mesma titularidade.</span>
                    <Button
                      border={true}
                      theme='secundary'
                      value='Fale com um especialista'
                    />
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Aluguel de Imóvel no exterior</b></p>
                    <span className="span">Envio de dinheiro para pagamento de aluguel de imóveis no exterior</span>
                    <Button
                      border={true}
                      theme='secundary'
                      value='Fale com um especialista'
                    />
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Pagamentos de Inscrições de Cursos e Congressos</b></p>
                    <span className="span">Envio ou recebimento de dinheiro para pagamento de taxas e serviços de educação</span>
                    <Button
                      border={true}
                      theme='secundary'
                      value='Fale com um especialista'
                    />
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Investimentos no exterior</b></p>
                    <span className="span">Envio de dinheiro para investimento no exterior (Mercado Financeiro e de Capitais)</span>
                    <Button
                      border={true}
                      theme='secundary'
                      value='Fale com um especialista'
                    />
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Outros tipos de Envio ou Recebimento de valores</b></p>
                    <span className="span">Com a Remessa Internacional você não precisa se preocupar com o transporte de moedas na sua viagem.</span>
                    <Button
                      border={true}
                      theme='secundary'
                      value='Fale com um especialista'
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="h4 text-center uppercase"><b>Formulário de solicitação</b></h4>
              </div>
            </div>
            <div className="col-md-8 offset-md-2">
              <ShippingForm/>
            </div>
          </div>
        </div>
      </div>    
    )
  }
}
