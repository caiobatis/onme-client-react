import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Button from '../Button/Button'
import FieldTextRedux from '../Fields/FieldTextRedux'
import FieldSelectRedux from '../Fields/FieldSelectRedux'

class ShippingForm extends Component {
  
  render () {

    const {
      initialValues,
      handleSubmit
    } = this.props


    return (
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <FieldSelectRedux
            label="Qual moeda deseja enviar?"
            name="moeda"
            options={initialValues.coins}
            theme="secundary"
          />
          <FieldSelectRedux
            label="Qual o motivo do envio?"
            name="motivo"
            options={initialValues.reasons}
            theme="secundary"
          />
          <FieldTextRedux
            label="Quero essa quantia"
            name="quantia"
            mask="money"
            code={'R$'}
            theme="secundary"
          />
        </div>
        <div className="col-md-6">
          <FieldTextRedux
            label="Nome completo"
            name="nome"
            theme="secundary"
          />
          <FieldTextRedux
            label="Telefone"
            onChange={this.handle}
            name="telefone"
            mask="phone"
            theme="secundary"
          />
          <FieldTextRedux
            label="E-mail"
            name="email"
            theme="secundary"
          />
        </div>
        <div className="col-md-12 text-center">
          <Button
            type="submit"
            value="Enviar solicitação"
            theme="primary"
            size="large"
          />
        </div>
      </form>
    )
  }
}

ShippingForm = reduxForm({
  form: 'ShippingForm',
  enableReinitialize: true
})(ShippingForm)

const mapStateToProps = state => {
  const shipping = state.ShippingReducer
  return {
    initialValues: {
      ...shipping,
      quantity: 1000
    }
  }
}
export default connect(mapStateToProps)(ShippingForm) 