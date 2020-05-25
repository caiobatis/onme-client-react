import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCoins } from '../../actions/WhitelabelActions'
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
    value: 'eu',
    label: 'Eu mesmo'
  },
  {
    value: 'outra-pessoa',
    label: 'Outra pessoa'
  }
]

class Whitelabel extends Component {
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
  getCoins
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Whitelabel) 