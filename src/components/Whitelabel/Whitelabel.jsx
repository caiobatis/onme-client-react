import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCoins, updateShipping } from '../../actions/WhitelabelActions'
import WhitelabelForm from './WhitelabelForm'
import WhitelabelFormRemessa from './WhitelabelFormRemessa';

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

const typeRemessa = [
  {
    value: 'enviar',
    label: 'Enviar'
  },
  {
    value: 'receber',
    label: 'Receber'
  }
]

const person = [
  {
    value: 'IR001',
    label: 'Eu mesmo'
  },
  {
    value: 'IR002',
    label: 'Outra pessoa'
  }
]

class Whitelabel extends Component {
  constructor(props) {
    super(props)

    this.updateForm = this.updateForm.bind(this);
  }

  state = {
    type: 'enviar',
    person: 'IR001',
    coin: 'USD',
    real: 500,
    quantity: 100
  }

  updateForm(current = false) {
    const { updateShipping } = this.props

    let { quantity, type, real, coin, person } = current

    const types = type === 'enviar' ? 'outbound' : 'inbound'

    const value = type === 'enviar' ? real : quantity

    const query = `purposeCode=${person.value ? person.value : person}&currency=${coin}&correspondentId=94&value=${value * 100}`

    if (quantity >= 100)
      updateShipping && updateShipping(types, query)
  }

  componentDidMount() {
    this.updateForm(this.state)
  }

  render() {
    const {
      getCoins,
      listCoins,
      button
    } = this.props

    return (
      <WhitelabelFormRemessa
        // cities={cities}
        typeRemessa={typeRemessa}
        updateForm={this.updateForm}
        person={person}
        // getCoins={getCoins}
        // listCoins={listCoins}
        button={button}
      />
    )
  }
}


const mapStateToProps = state => {
  return {
    listCoins: state.WhitelabelReducer.list
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCoins, updateShipping
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Whitelabel) 