import React, { Component } from 'react';

import Button from '../Button/Button';
import FieldText from '../Fields/FieldText'
import FieldSelect from '../Fields/FieldSelect'
import Form from '@atlaskit/form'

const cities = [
  { label: 'São Paulo', value: 'sao-paulo' },
  { label: 'Osaco', value: 'osasco' }
]

const coins = [
  { label: 'Dolar', value: 'dolar' },
  { label: 'Euro', value: 'euro' },
  { label: 'Libra', value: 'libra' }
]

export default class WhitelabelForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: '', 
      real: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({quantity: event.target.value});
  }

  render() {

    return (
      <Form onSubmit={data => console.log('form data', data)} className="form-whitelabel">
        {
          ({ formProps, submitting }) => (
            <form {...formProps}>
              <div className="title">
                <h4 className="h4">Dinheiro em espécie</h4>
                <div className="time">
                  <h4 className="h4">4:30</h4>
                </div>
              </div>
              <div className="items-form">
                <div className="two-items">
                  <FieldSelect
                    label="Cidade"
                    name="city"
                    options={cities}
                    defaultValue={cities[0]}
                    />
                  <FieldSelect
                    label="Moeda"
                    name="coin"
                    options={coins}
                    defaultValue={coins[0]}
                  />
                </div>
                <div className="two-items">
                  <FieldText
                    label="Quero essa quantia"
                    required={false}
                    defaultValue={this.state.quantity}
                    value={this.state.quantity}
                    name="quantity"
                  />
                  <FieldText
                    label="Em R$"
                    required={false}
                    defaultValue={this.state.real}
                    value={this.state.real}
                    name="real"
                  />
                </div>
              </div>
              <div className="actions">
                <Button
                  type="submit"
                  value="Gostei! Comprar agora"
                  theme="success"
                  size="large"
                  full={true}
                  isLoading={submitting}
                />
              </div>
              <div className="footer">
                <div className="security">
                  <span className="span">
                    USD 1,00 = 3.9018 (valores com IOF) <br/>
                    Nossas cotações são atualizadas a cada <br/>
                    4 minutos e 30 segundos
                  </span>
                  <div className="tagSecurity">
                    <div className="icon"></div>
                    <p className="p">site <br/>seguro</p>
                  </div>
                </div>
              </div>
            </form>
          )
        }
      </Form>
    )
  }
}
