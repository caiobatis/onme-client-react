import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Loader from '../Loader/Loader'
import Button from '../Button/Button'
import FieldTextRedux from '../Fields/FieldTextRedux'
import FieldSelectRedux from '../Fields/FieldSelectRedux'

class ShippingForm extends Component {
  
  render () {
    const {
      initialValues,
      handleSubmit,
      loading,
      message,
      error
    } = this.props

    return (
      <form className="row" onSubmit={handleSubmit}>

        <div className="col-md-12">
          { loading && ( <Loader/> )}
          <div className={`label ${error ? 'error': 'success'}`}>
            {message && <p className="p">{message}</p>}
          </div>
        </div>

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
      ...shipping
    },
    loading: shipping.loading,
    error: shipping.error,
    message: shipping.message,

  }
}
export default connect(mapStateToProps)(ShippingForm) 