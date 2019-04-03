import React, { Component } from 'react';
import Button from '../Button/Button'


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
                    <p className="p"><b>Manutenção de Residentes no exterior</b></p>
                    <span className="span">Envio ou recebimento de recursos para manutenção de pessoas físicas no exterior. (Grau de parentesco: 1º ou 2º graus)</span>
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
      </div>    
    )
  }
}
