import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'

import FieldTextRedux from '../Fields/FieldTextRedux'
import FieldSelectRedux from '../Fields/FieldSelectRedux'

class ShippingForm extends Component {
  
  
  handle (e, state) {
    console.log(e, state)
  }
  
  render () {

    const {
      initialValues
    } = this.props


    return (
      <form className="row">
        <div className="col-md-6">
          <FieldSelectRedux
            label="Qual moeda deseja enviar?"
            name="coin"
            options={initialValues.coin}
            onChange={this.handle}
            theme="secundary"
          />
          <FieldSelectRedux
            label="Qual o motivo do envio?"
            name="coin"
            options={initialValues.reason}
            onChange={this.handle}
            theme="secundary"
          />
          <FieldTextRedux
            label="Quero essa quantia"
            name="quantity"
            mask="money"
            code={'R$'}
            theme="secundary"
          />
        </div>
        <div className="col-md-6">
          <FieldTextRedux
            label="Nome completo"
            onChange={this.handle}
            name="name"
            theme="secundary"
          />
          <FieldTextRedux
            label="Telefone"
            onChange={this.handle}
            name="phone"
            mask="phone"
            theme="secundary"
          />
          <FieldTextRedux
            label="E-mail"
            onChange={this.handle}
            name="email"
            theme="secundary"
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
      quantity: ''
    }
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShippingForm) 