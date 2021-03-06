import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, formValueSelector } from 'redux-form'
import NumberFormat from 'react-number-format'
import { receiveCoin, receiveCoinReal, updateShipping } from '../../actions/WhitelabelActions'
import FieldSelectRedux from '../Fields/FieldSelectRedux'
import FieldTextRedux from '../Fields/FieldTextRedux'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'
import brIcon from '../Commons/brazil.svg'

class WhitelabelFormRemessa extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: 'enviar',
      person: 'IR001',
      coin: 'USD',
      real: 1000,
      quantity: 1000
    }

    this.handleChangeCoin = this.handleChangeCoin.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeQuantityBR = this.handleChangeQuantityBR.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangePerson = this.handleChangePerson.bind(this);
  }

  handleChangeCoin(event) {
    this.setState({
      coin: event.value
    })

    const { type, real, coin, person, quantity } = this.state

    if (coin !== event.value) {
      const values = {
        coin: event.value, type, real, quantity, person
      }

      this.props.updateForm(values)
    }
  }

  handleChangeQuantity(value) {
    const { initialValues } = this.props

    const { type, real, coin, person, quantity } = this.state

    if (quantity !== value) {
      this.setState({
        quantity: value
      })

      if (value < initialValues.minValue)
        return alert('valor mínimo não atingido')

      if (value > initialValues.maxValue)
        return alert('valor maximo atingido')

      const values = {
        quantity: value, type, real, coin, person
      }

      this.props.updateForm(values)
    }
  }

  handleChangeQuantityBR(value) {
    const { initialValues } = this.props

    const { type, real, coin, person, quantity } = this.state

    if (real !== value) {
      this.setState({
        real: value
      })

      if (value / initialValues.vet < initialValues.minValue)
        return alert('valor mínimo não atingido')

      if (value / initialValues.vet > initialValues.maxValue)
        return alert('valor maximo atingido')


      const values = {
        real: value, type, coin, person, quantity
      }

      this.props.updateForm(values)
    }
  }

  handleChangeType(event) {
    this.setState({
      type: event.value
    })

    const { type, real, coin, person, quantity } = this.state

    if (type !== event.value) {
      const values = {
        type: event.value, quantity, real, coin, person
      }

      // this.props.updateForm(values)
    }
  }

  handleChangePerson(event) {
    this.setState({
      person: event.value
    })

    const { type, real, coin, person, quantity } = this.state

    if (person !== event.value) {
      const values = {
        type, real, coin, quantity, person: event.value
      }

      this.props.updateForm(values)
    }
  }

  handleClick() {
    const { initialValues } = this.props

    const {
      real,
      quantity
    } = initialValues

    const {
      person,
      coin,
      type
    } = this.state

    const send = type === 'enviar' ? 'outbound' : 'inbound'
    const url = `https://iamsimple.com.br/onme/app/checkout/remittance?remittance=true&remittanceAmountBRL=${real}&remittanceAmount=${quantity}&purposeCode=${person}&currencyCode=${coin}&remittanceType=${send}`

    window.open(url, '_blank')
  }

  render() {
    const {
      remessaCoins,
      loading,
      typeRemessa,
      person,
      initialValues
    } = this.props

    const { type, coin } = this.state

    console.log(this.props);

    const {
      cotacao,
      vet,
      iofPercentage,
      iof,
      tarifa
    } = initialValues

    // const coinFormat =
    //   <NumberFormat
    //     value={0}
    //     displayType={'text'}
    //     thousandSeparator={true}
    //     prefix={'R$ '}
    //     decimalScale={3}
    //   />
    return (
      <form className="form-whitelabel remessa">
        <div>
          {/* <div className="title">
            <h4 className="h4">Remessa</h4>
          </div> */}
          <div className="items-form">
            <div className="two-items">
              <FieldSelectRedux
                label="Tipo da Remessa"
                name="type"
                options={typeRemessa}
                onChange={this.handleChangeType}
              />
              <FieldSelectRedux
                label={type === 'enviar' ? 'Para quem vai enviar?' : 'Receber de quem?'}
                name="person"
                options={person}
                onChange={this.handleChangePerson}
              />
            </div>
            <div className={`flex ${type === 'enviar' ? 'send' : 'receive'
              }`}>
              <div className="two-items">
                <FieldSelectRedux
                  label="Moeda"
                  name="coin"
                  options={remessaCoins}
                  onChange={this.handleChangeCoin}
                />

                <FieldTextRedux
                  label="Quero essa quantia"
                  handleBlur={this.handleChangeQuantity}
                  name="quantity"
                  mask="money"
                  code={coin}
                  disabled={type === 'enviar'}
                />
              </div>
              <div className="two-items br">
                <div className="brCoin">
                  <div className="icon">
                    <img src={brIcon} alt="" />
                  </div>
                </div>
                <FieldTextRedux
                  label="Enviar essa quantia:"
                  name="real"
                  mask="money"
                  disabled={type !== 'enviar'}
                  handleBlur={this.handleChangeQuantityBR}
                />
              </div>
            </div>
          </div>
          <div className="actions">
            <Button
              onClick={this.handleClick}
              value="Enviar agora"
              theme={this.props.button || 'success'}
              size="large"
              full={true}
            />
          </div>
          <div className="footer">
            <div className="security">
              <span className="span">
                Cotação = R$ {cotacao} <br />
                Tarifa bancária = R$ {tarifa} <br />
                IOF({iofPercentage}%) = R$ {iof} <br />
                VET = R$ {vet}
              </span>
              <div className="tagSecurity">
                <div className="icon"></div>
                <p className="p">site <br />seguro</p>
              </div>
            </div>
          </div>
        </div>
        {loading && (<Loader />)}
      </form>
    )
  }
}

WhitelabelFormRemessa = reduxForm({
  form: 'WhitelabelFormRemessa',
  enableReinitialize: true
})(WhitelabelFormRemessa)

const selector = formValueSelector('WhitelabelFormRemessa')

const mapStateToProps = state => {
  const whitelabel = state.WhitelabelReducer
  return {
    remessaCoins: whitelabel.shipping.remessaCoins,
    real: whitelabel.shipping.real,
    quantity: whitelabel.shipping.quantity,
    type: whitelabel.shipping.type,
    loading: whitelabel.loading,
    initialValues: {
      ...whitelabel.shipping
    },
    values: selector(whitelabel.shipping, 'shipping')
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  receiveCoin, receiveCoinReal, updateShipping
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WhitelabelFormRemessa) 