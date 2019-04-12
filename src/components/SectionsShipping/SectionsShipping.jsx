import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '../Button/Button'
import ShippingForm from './ShippingForm'
import Telesales from '../Telesales/Telesales'
import { Link } from 'react-router-dom'
import { sendShipping } from '../../actions/ShippingActions'


class SectionsShipping extends Component {
  constructor(props) {
    super(props)
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {

    const {
      sendShipping
    } = this.props

    sendShipping(values)
  }

  render() {
    return (
      <div className="sectionsShipping">
        <div className="head">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="defaultTitle">
                  <h2 className="h2">Remessa <br/>Internacional</h2>
                  <p className="p">
                    Envie ou receba recursos do exterior e pague suas contas em qualquer lugar do mundo de forma segura com profissionais preparados para atendê-lo! 
                  </p>
                  <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">
                    <Button
                      theme='primary'
                      value='Faça uma cotação'
                    />
                  </a>
                  <br/>
                  <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">
                    <Button
                      border={true}
                      theme='primary'
                      value='Fale com um especialista'
                    />
                  </a>
                  <div className="reserva">
                    <Telesales className={'black'}/>
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
                <h4 className="h4 text-center uppercase">Qual seu motivo para usar a <b>Remessa Internacional</b></h4>
              </div>
              <div className="aboutShipping">
                <ul className="list-squad">
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Manutenção de Residentes no exterior</b></p>
                    <span className="span">Envio ou recebimento de recursos para manutenção de pessoas físicas no exterior. (Grau de parentesco: 1º grau). <br/>
                      <span>IRRF:	Isento para todas as operações <br/>IOF:	Alíquota de 0,38% para todas operações</span>
                    </span>
                    <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">
                      <Button
                        border={true}
                        theme='secundary'
                        value='Fale com um especialista'
                      />
                    </a>

                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Disponibilidade no exterior</b></p>
                    <span className="span">
                    Envio ou recebimento para crédito em conta corrente de mesma titularidade. <br/>
<span>IRRF: 	Isento para todas as operações <br/>
IOF:	Alíquota de 1,10% para saída de capital (venda) Alíquota de 0,38% para retorno de capital (compra)</span>
                    
                    </span>
                    <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">
                      <Button
                        border={true}
                        theme='secundary'
                        value='Fale com um especialista'
                      />
                    </a>
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Aluguel de Imóvel no exterior</b></p>
                    <span className="span">
                    
                    
                    Envio de dinheiro para pagamento de aluguel de imóveis no exterior <br/>

<span>IRRF: Alíquota de 25% (pgto. conta credor) ou 33,3333% (pgto. conta devedor)
Obs: Podem haver alíquotas diferenciadas para países com acordo para evitar bitributação. <br/>
IOF: Alíquota de 0,38% para todas operações</span>

                    </span>
                    <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">
                      <Button
                        border={true}
                        theme='secundary'
                        value='Fale com um especialista'
                      />
                    </a>
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Pagamentos de Inscrições de Cursos e Congressos</b></p>
                    <span className="span">
                    Envio ou recebimento de dinheiro para pagamento de taxas e serviços de educação <span>(taxa escolar, exames, inscrição em curso, simpósio, congresso, seminário, treinamento, conclave e assemelhados)</span> <br/>
<span>IRRF: Isento para todas as operações <br/>
IOF: Alíquota de 0,38% todas as operações (isento para as operações de compra se referente a exportação de serviços)</span>
                    </span>
                    <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">
                      <Button
                        border={true}
                        theme='secundary'
                        value='Fale com um especialista'
                      />
                    </a>
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Investimentos no exterior</b></p>
                    <span className="span">
                    
                    Envio de dinheiro para investimento no exterior (Mercado Financeiro e de Capitais) <br/>
<span>IRRF: Isento para todas as operações IOF: <br/>
Alíquota de 0,38% para todas operações</span>
                    
                    </span>
                    <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">
                      <Button
                        border={true}
                        theme='secundary'
                        value='Fale com um especialista'
                      />
                    </a>
                  </li>
                  <li>
                    <i className="icon"></i>
                    <p className="p"><b>Pagamentos de serviços técnicos profissionais</b></p>
                    <span className="span">
                    Envio de dinheiro para pagamento de técnicos profissionais e administrativos.
                    <span>
                      IRRF: Alíquota de 15% pgto. conta Credor / alíquota de 17,647% pgto. conta devedor Alíquota de 25% pgto.
                      Para países Paraísos Fiscais (pgto. Conta credor / alíquota de 33,3333% pgto. Conta devedor) 
                      CIDE: Alíquota de 10% conforme as Leis Nos. 10.168, de 29/12/2000 e 10.332 de 19/12/2001 regulamentada pelo decreto nº 4.195, de 11/04/2002
                      IOF: Alíquota de 0,38% para a operação de venda (isento para as operações de compra)
                    </span>                    
                    </span>
                    <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">
                      <Button
                        border={true}
                        theme='secundary'
                        value='Fale com um especialista'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
              <div className="text-center">
                <h3 className="p uppercase"><b>Outro motivo?</b></h3>
                <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5511992223949">
                  <Button
                    theme='secundary'
                    value='Fale com um especialista'
                  />
                </a>
              </div>
          </div>
        </div>
        <div className="form" id="solicitar-remessa">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb30">
                <h4 className="h4 text-center uppercase"><b>Formulário de solicitação</b></h4>
                <p className="p text-center">Pré solicitação de orçamento</p>
              </div>
            </div>
            <div className="col-md-8 offset-md-2">
              <ShippingForm onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>    
    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  sendShipping
}, dispatch)

export default connect(null, mapDispatchToProps)(SectionsShipping) 