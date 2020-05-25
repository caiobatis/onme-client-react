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
      person: 'eu'
    }

    this.handleChangeCoin = this.handleChangeCoin.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangePerson = this.handleChangePerson.bind(this);
  }

  handleChangeCoin(event) {
    const {
      listCoins,
      receiveCoin
    } = this.props

    listCoins.map((e) => {
      if (e.value === event.value) {
        receiveCoin(e)
      }
      return null
    })
  }

  handleChangeQuantity(value) {
    const {
      receiveCoinReal
    } = this.props

    receiveCoinReal(value)
  }

  handleChangeCity(event) {
    const {
      getCoins
    } = this.props

    getCoins(event.value)

    this.setState({
      city: event.value
    })
  }

  handleChangeType(event) {
    this.setState({
      type: event.value
    })
  }

  handleChangePerson(event) {
    this.setState({
      person: event.value
    })
  }

  handleClick() {
    const {
      initialValues,
    } = this.props

    const url = `https://frentetech.com.br/onme/checkout?agentId=${initialValues.city.value}&productId=${initialValues.item.value}&productAmount=${initialValues.quantity}`
    window.open(url, '_blank')
  }

  componentDidMount() {
    const {
      updateShipping,
      coin,
      quantity,
      type,
      real
    } = this.props

    // purposeCode: IR002
    // currency: USD
    // correspondentId: 94
    // value: 79444

    updateShipping(type.value === 'enviar' ? 'outbound' : 'inbound',
      `purposeCode=IR002&currency=${coin.value}&correspondentId=94&value=${type === 'enviar' ? real : quantity}`)
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
      coin,
      loading,
      typeRemessa,
      person
    } = this.props

    const { type } = this.state

    const coinFormat =
      <NumberFormat
        value={(coin.sellPrice * (coin.iof / 100)) + coin.sellPrice}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'R$ '}
        decimalScale={3}
      />

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
                  onChange={this.handleChangeQuantity}
                  name="quantity"
                  mask="money"
                  code={coin.productCode}
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
              <span className="span">
                R$1,00 = {coin.value} {coinFormat} (valores com IOF) <br />
                Nossas cotações são atualizadas <br /> a cada 4 minutos e 30 segundos
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

const mapStateToProps = state => {
  const whitelabel = state.WhitelabelReducer
  if (!whitelabel.quantity) {
    whitelabel.quantity = 1000
  }
  return {
    remessaCoins: whitelabel.shipping.remessaCoins,
    initialValues: {
      ...whitelabel,
      type: whitelabel.shipping.type,
      person: whitelabel.shipping.person,
      real: whitelabel.shipping.real,
      coin: whitelabel.shipping.coin,
      quantity: whitelabel.shipping.quantity
    },
    real: whitelabel.shipping.real,
    coin: whitelabel.shipping.coin,
    quantity: whitelabel.shipping.quantity,
    type: whitelabel.shipping.type,
    loading: whitelabel.loading
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  receiveCoin, receiveCoinReal, updateShipping
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WhitelabelFormRemessa) 