import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
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
      real: 500,
      quantity: 100
    }

    this.handleChangeCoin = this.handleChangeCoin.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
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

      // this.updateForm(values)
    }
  }

  handleChangeQuantity(value) {


    console.log(value);
    const { type, real, coin, person, quantity } = this.state

    if (quantity !== value) {
      const values = {
        quantity: value, type, real, coin, person
      }
      this.setState({
        quantity: value
      })

      this.props.updateForm(values)
    }
    // }
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

      // this.updateForm(values)
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

      // this.updateForm(values)
    }
  }

  handleClick() {
    const { initialValues } = this.props

    const url = `https://frentetech.com.br/onme/checkout?agentId=${initialValues.city.value}&productId=${initialValues.item.value}&productAmount=${initialValues.quantity}`

    window.open(url, '_blank')
  }

  // componentWillReceiveProps(nextProps, nextState) {
  //   const {
  //     receiveCoin,
  //     listCoins,
  //     initialValues
  //   } = nextProps

  //   listCoins.map((e) => {
  //     if (e.productCode === initialValues.coin.productCode) {
  //       receiveCoin(e)
  //     }
  //     return null
  //   })
  // }

  render() {
    const {
      remessaCoins,
      loading,
      typeRemessa,
      person,
      initialValues
    } = this.props

    const { type } = this.state

    // console.log(initialValues);

    // const coinFormat =
    //   <NumberFormat
    //     value={0}
    //     displayType={'text'}
    //     thousandSeparator={true}
    //     prefix={'R$ '}
    //     decimalScale={3}
    //   />

    return (
      <form className="form-whitelabel">
        <div>
          <div className="title">
            <h4 className="h4">Remessa</h4>
          </div>
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
            <div className={`flex ${type === 'enviar' ? 'send' : 'receive'}`}>
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
                  code='USD'
                // disabled={type === 'enviar'}
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
                />
              </div>
            </div>
          </div>
          <div className="actions">
            <Button
              onClick={this.handleClick}
              value="Gostei! Comprar agora"
              theme={this.props.button || 'success'}
              size="large"
              full={true}
            />
          </div>
          <div className="footer">
            <div className="security">
              {/* <span className="span">
                R$1,00 = {coin} {coinFormat} (valores com IOF) <br />
                Nossas cotações são atualizadas <br /> a cada 4 minutos e 30 segundos
              </span> */}
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
    }
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  receiveCoin, receiveCoinReal, updateShipping
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WhitelabelFormRemessa) 