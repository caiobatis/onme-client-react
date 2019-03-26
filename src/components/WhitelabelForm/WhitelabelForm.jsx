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
      quantity: 100, 
      real: 0,
      coinSelected: 'USD',
      price: 0
    }

    this.handleChangeCoin = this.handleChangeCoin.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
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
      quantity: event.target.value
    })
  }

  handleChangeCity(event) {
    const {
      getCoins
    } = this.props
    
    getCoins(event.value)
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
      <Form onSubmit={data => console.log('form data', data)} className="form-whitelabel">
        {
          ({ formProps, submitting }) => (
            <form {...formProps}>
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
                    required={false}
                    defaultValue={this.state.quantity}
                    value={this.state.quantity}
                    onChange={this.handleChangeQuantity}
                    name="quantity"
                  />
                  <FieldText
                    label="Em R$"
                    required={false}
                    defaultValue={realCoin}
                    disabled={true}
                    value={realCoin}
                    name="real"
                  />
                </div>
              </div>
              <div className="actions">
                <Button
                  type="submit"
                  value="Gostei! Comprar agora"
                  theme="success"
                  size="large"
                  full={true}
                  isLoading={submitting}
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
            </form>
          )
        }
      </Form>
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