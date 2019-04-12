import React, { Component } from 'react'
import Button from '../Button/Button'

import { Link } from 'react-router-dom'

export default class SectionsPolicy extends Component {
  render() {
    return (
    <div className="sectionsPolicy">
      <div className="head">
        <div className="container pb50">
          <div className="row">
            <div className="col-md-2">
              <div className="icon-policy">
                <i className="icon"></i>
              </div>
            </div>
            <div className="col-md-9">
              <h2 className="h2">Política de Estorno</h2>
              <p className="p">
                A Onme Câmbio, busca sempre a transparência e segurança nas suas operações. conforme as normas impostas pelo Banco Central do Brasil. <br/><br/> 
                Seguem alguns exemplos em que a operação não é finalizada pelo não cumprimento exigido pelo Banco Central ou está fora das regras exigidas pela Onmecâmbio.
              </p>
              <ul className="list">
                <li>Pagamento em dinheiro (depósitos)</li>
                <li><div>Pagamento via uma conta de um terceiro <span>(sem comprovação de conta conjunta)</span></div></li>
                <li>Pagamento após o horário limite</li>
                <li>Pagamento de um valor que difere ao valor da proposta</li>
              </ul>
              <p className="p">Qualquer um dos motivos acima é passivo de estorno e cancelamento da operação.</p>
              <p className="p">Em caso de desistência ou devolução de valor já pago, o mesmo só será devolvido na conta do emissor.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5 offset-md-2">
              <p className="p">Se ainda está com dúvidas entre <br/>em contato com nosso atendimento</p>
            </div>
            <div className="col-md-4">
              <Link to="/contato">
                <Button
                  value="Entrar em contato"
                  theme="primary"
                  size="large"
                  full={true}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}