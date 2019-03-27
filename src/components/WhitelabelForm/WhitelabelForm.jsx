import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getCoins } from '../../actions/WhitelabelActions'
import Button from '../Button/Button';
import FieldText from '../Fields/FieldText'
import FieldSelect from '../Fields/FieldSelect'
import Form from '@atlaskit/form'

const cities = [
  { value: 'WL-ONME-SP', label: 'São Paulo' },
  { value: 'WL-ONME-BH', label: 'Belo Horizonte' },
  { value: 'WL-ONME-BLU', label: 'Blumenau' },
  { value: 'WL-ONME-CPS', label: 'Campinas' },
  { value: 'WL-ONME-CTB', label: 'Curitiba' },
  { value: 'WL-ONME-FORTA', label: 'Fortaleza' },
  { value: 'WL-ONME-POA', label: 'Porto Alegre' },
  { value: 'WL-ONME-RJ', label: 'Rio de Janeiro' },
  { value: 'WL-ONME-SJC', label: 'São José dos Campos' }
]

class WhitelabelForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 1000, 
      real: 0,
      coinSelected: 'USD',
      price: 0,
      city: cities[0].value
    }

    this.handleChangeCoin = this.handleChangeCoin.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeCoin(event) {
    let price
    this.props.listCoins.map((e)=> {
      if(e.productCode == event.value && e.sellPrice) {
        price = e.sellPrice
      }
    })

    this.setState({
      coinSelected: event.value,
      price
    })
  }

  handleChangeQuantity(event) {
    this.setState({
      quantity: event
    })
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
      getCoins
    } = this.props
    
    getCoins(cities[0].value)
  }

  componentWillReceiveProps (nextProps, nextState) {
    const { listCoins } = nextProps

    let price = 0
    listCoins.map((e)=> {
      if(e.productCode == this.state.coinSelected && e.sellPrice) {
        price = e.sellPrice
      }
    })
    this.setState({
      price,
      real: this.state.quantity * price
    })

  }

  render() {
    const {
      listCoins
    } = this.props

    const _listCoins = (listCoins || []).map((e)=> ({
      label: e.currency,
      value: e.productCode
    }))

    const realCoin = this.state.quantity * this.state.price

    return (
      <form className="form-whitelabel">
        <div>
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
                onChange={this.handleChangeCity}
              />
              <FieldSelect
                label="Moeda"
                name="coin"
                options={_listCoins}
                defaultValue={_listCoins[0]}
                onChange={this.handleChangeCoin}
              />
            </div>
            <div className="two-items">
              <FieldText
                label="Quero essa quantia"
                defaultValue={this.state.quantity}
                value={this.state.quantity}
                onChange={this.handleChangeQuantity}
                name="quantity"
                mask="money"
                code={this.state.coinSelected}
              />
              <FieldText
                label="Em R$"
                defaultValue={realCoin}
                value={realCoin}
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

const mapStateToProps = state => {
  return {
    listCoins: state.WhitelabelReducer.list
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCoins
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WhitelabelForm) 