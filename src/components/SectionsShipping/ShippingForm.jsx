import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'

class ShippingForm extends Component {
  render () {
    return (
      <form>
        <div className="col-md-6">
          {/* <FieldSelectRedux
            label="Cidade"
            name="city"
            options={cities}
            onChange={this.handleChangeCity}
          /> */}
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
    }
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShippingForm) 