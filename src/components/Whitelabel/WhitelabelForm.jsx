import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import moment from 'moment'
import Button from '../Button/Button'
import FieldTextRedux from '../Fields/FieldTextRedux'
import FieldSelect from '../Fields/FieldSelect'
import FieldSelectRedux from '../Fields/FieldSelectRedux'
import { receiveCoin, receiveCoinReal } from '../../actions/WhitelabelActions'


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
      listCoins
    } = this.props

    listCoins.map((e)=> {
      if(e.productCode === event.value) {
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
    const url = `https://frentetech.com.br/onme/checkout?agentId=${this.state.city}&productId=${this.state.coinSelected}&productAmount=${this.state.quantity}`
    window.open(url, '_blank')
  }

  componentDidMount() {
    const {
      getCoins,
      cities
    } = this.props
    
    getCoins(cities[0].value)

    // this.duration = moment.duration({ minutes: 10 }, 'milliseconds');
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
  
    // let interval = 1000
    
    // let self = this

    // setInterval(function(){
    //   self.duration = moment.duration(self.duration - interval, 'milliseconds')
    //   self.setState({
    //     time: `${self.duration.minutes()}:${self.duration.seconds('m')}`
    //   })
    // }, interval)

  }

  render() {
    const {
      listCoins,
      cities,
      coin
    } = this.props
    
    return (
      <form className="form-whitelabel">
        <div>
          <div className="title">
            <h4 className="h4">Dinheiro em espécie</h4>
            <div className="time">
              <span className="span">Atualizando valores em:</span>
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
              theme="success"
              size="large"
              full={true}
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
        </div>
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

  return {
    listCoins: whitelabel.list,
    initialValues: {
      ...whitelabel,
      price: whitelabel.item.sellPrice,
      city: whitelabel.city,
      real: whitelabel.quantity * whitelabel.item.sellPrice,
      coin: whitelabel.item
    },
    coin: whitelabel.item
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  receiveCoin, receiveCoinReal
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WhitelabelForm) 