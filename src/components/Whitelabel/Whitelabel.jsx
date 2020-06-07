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
    real: 1000,
    quantity: 1000,
    tab: 1
  }

  updateForm(current = false) {
    const { updateShipping } = this.props

    let { quantity, type, real, coin, person } = current

    const reverse = type === 'enviar' && true

    const value = type === 'enviar' ? real : quantity

    const query = `purposeCode=${person.value ? person.value : person}&currency=${coin}&correspondentId=94&value=${value * 100}`

    updateShipping && updateShipping(reverse, query)
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

    const { tab } = this.state

    const selected = tab === 1 ? 'papel' : 'remessa'

    return (
      <div className={`tabs ${selected}`}>
        <div className="nav">
          <div className="title" onClick={() => this.setState({ tab: 1 })}>Papel Moeda</div>
          <div className="title" onClick={() => this.setState({ tab: 0 })}>Remessa</div>
        </div>
        {tab ? (
          <div className="tab" style={{ display: tab ? 'block' : 'none' }}>
            <div className="content">
              <WhitelabelForm
                cities={cities}
                getCoins={getCoins}
                listCoins={listCoins}
                button={button}
              />
            </div>
          </div>
        ) : (
            <div className="tab" style={{ display: !tab ? 'block' : 'none' }}>
              <div className="content">
                <WhitelabelFormRemessa
                  typeRemessa={typeRemessa}
                  updateForm={this.updateForm}
                  person={person}
                  button={button}
                />
              </div>
            </div>
          )}
      </div>
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