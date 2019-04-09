import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import { receiveCoin, receiveCoinReal } from '../../actions/WhitelabelActions'
import Button from '../Button/Button'
import FieldTextRedux from '../Fields/FieldTextRedux'
import NumberFormat from 'react-number-format'
import FieldSelectRedux from '../Fields/FieldSelectRedux'
import Loader from '../Loader/Loader'


class WhitelabelForm extends Component {

  constructor(props) {
    super(props)

    this.handleChangeCoin = this.handleChangeCoin.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeCoin(event) {
    const {
      listCoins,
      receiveCoin
    } = this.props

    listCoins.map((e)=> {
      if(e.value === event.value) {
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

  handleClick() {
    const {
      initialValues,
    } = this.props

    const url = `https://frentetech.com.br/onme/checkout?agentId=${initialValues.city.value}&productId=${initialValues.item.value}&productAmount=${initialValues.quantity}`
    window.open(url, '_blank')
  }

  componentDidMount() {
    const {
      getCoins,
      cities
    } = this.props
    
    getCoins(cities[0].value)
  }

  componentWillReceiveProps (nextProps, nextState) {
    const {
      receiveCoin,
      listCoins,
      initialValues
    } = nextProps

    listCoins.map((e)=> {
      if(e.productCode === initialValues.coin.productCode) {
        receiveCoin(e)
      }
      return null
    })
  }

  render() {
    const {
      listCoins,
      cities,
      coin,
      loading
    } = this.props


    const coinFormat = <NumberFormat
                        value={(coin.sellPrice * (coin.iof/100)) + coin.sellPrice}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'R$ '}
                        decimalScale={3}
                      />

    return (
      <form className="form-whitelabel">
        <div>
          <div className="title">
            <h4 className="h4">Dinheiro em espécie</h4>
            <div className="time">
              {/* <span className="span">Atualizando valores em:</span> */}
              {/* <h4 className="h4">{'this.state.time'}</h4> */}
            </div>
          </div>
          <div className="items-form">
            <div className="two-items">
              <FieldSelectRedux
                label="Cidade"
                name="city"
                options={cities}
                onChange={this.handleChangeCity}
              />
              <FieldSelectRedux
                label="Moeda"
                name="coin"
                options={listCoins}
                onChange={this.handleChangeCoin}
              />
            </div>
            <div className="two-items">
              <FieldTextRedux
                label="Quero essa quantia"
                onChange={this.handleChangeQuantity}
                name="quantity"
                mask="money"
                code={coin.productCode}
              />
              <FieldTextRedux
                label="Em R$"
                disabled={true}
                name="real"
                mask="money"
              />
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
                R$1,00 = {coin.value} {coinFormat} (valores com IOF) <br/>
                Nossas cotações são atualizadas <br/> a cada 4 minutos e 30 segundos
              </span>
              <div className="tagSecurity">
                <div className="icon"></div>
                <p className="p">site <br/>seguro</p>
              </div>
            </div>
          </div>
        </div>
        { loading && ( <Loader/> )}
      </form>
    )
  }
}

WhitelabelForm = reduxForm({
  form: 'WhitelabelForm',
  enableReinitialize: true
})(WhitelabelForm)


const mapStateToProps = state => {
  const whitelabel = state.WhitelabelReducer
  if(!whitelabel.quantity) {
    whitelabel.quantity = 1000
  }
  return {
    listCoins: whitelabel.list,
    initialValues: {
      ...whitelabel,
      price: whitelabel.item.sellPrice,
      city: whitelabel.city,
      real: whitelabel.quantity * whitelabel.item.sellPrice,
      coin: whitelabel.item
    },
    coin: whitelabel.item,
    loading: whitelabel.loading
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  receiveCoin, receiveCoinReal
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WhitelabelForm) 