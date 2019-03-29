import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCoins } from '../../actions/WhitelabelActions'
import WhitelabelForm from './WhitelabelForm'

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


class Whitelabel extends Component {
  render() {
    const {
      getCoins,
      listCoins,
      quantity
    } = this.props

    return (
      <WhitelabelForm
        cities={cities}
        getCoins={getCoins}
        listCoins={listCoins}
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