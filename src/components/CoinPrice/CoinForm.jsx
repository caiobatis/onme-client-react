import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { getCoins } from '../../actions/WhitelabelActions'
import Loader from '../Loader/Loader'
import FieldSelectRedux from '../Fields/FieldSelectRedux'
import CoinPrice from './CoinPrice'

class CoinForm extends Component {
  constructor (props) {
    super(props)

    this.handleChangeCity = this.handleChangeCity.bind(this)
  }
  
  handleChangeCity(data) {
    const {
      getCoins
    } = this.props

    getCoins(data.value)
  }
  
  render () {
    const {
      codes,
      listCoins,
      cities,
      loading
    } = this.props

    return (
      <form className="coinForm">
        <div className="cities pull-right">
          <div className="col-md-5 offset-md-7">
            <FieldSelectRedux
              label="Selecione uma cidade"
              name="city"
              options={cities}
              theme="secundary"
              onChange={(data)=>this.handleChangeCity(data)}
              labelWidth={160}
            />
          </div>
        </div>
        <div className="coins">
          <div className="list-coins">
            { listCoins.map((item, i)=> {
              return codes.map(code => {
                return code === item.productCode &&
                  <CoinPrice
                    key={i}
                    title={item.currency}
                    coin={item.productCode}
                    price={item.sellPrice}
                    iof={item.iof}
                  />
              })
            })}
          </div>
        </div>

        { loading && ( <Loader/> )}
      </form>
    )
  }
}

CoinForm = reduxForm({
  form: 'CoinForm',
  enableReinitialize: true
})(CoinForm)

const mapStateToProps = state => {
  const whitelabel = state.WhitelabelReducer
  return {
    listCoins: whitelabel.list,
    cities: [
      { value: 'WL-ONME-SP', label: 'São Paulo' },
      { value: 'WL-ONME-BH', label: 'Belo Horizonte' },
      { value: 'WL-ONME-BLU', label: 'Blumenau' },
      { value: 'WL-ONME-CPS', label: 'Campinas' },
      { value: 'WL-ONME-CTB', label: 'Curitiba' },
      { value: 'WL-ONME-FORTA', label: 'Fortaleza' },
      { value: 'WL-ONME-POA', label: 'Porto Alegre' },
      { value: 'WL-ONME-RJ', label: 'Rio de Janeiro' },
      { value: 'WL-ONME-SJC', label: 'São José dos Campos' }
    ],
    initialValues: {
      ...whitelabel,
      city: { value: 'WL-ONME-SP', label: 'São Paulo' },
    },
    loading: whitelabel.loading
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCoins
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(CoinForm) 