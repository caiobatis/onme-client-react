import { RECEIVE_COINS, RECEIVE_COIN, RECEIVE_COIN_REAL, FETCH_COINS } from '../lib/actionsTypes'

const INITAL_STATE = {
  list: [],
  item: {
    sellPrice: 0,
    productCode: 'USD',
    label: 'Dolar'
  },
  quantity: 1000,
  real: 0,
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
  city: { value: 'WL-ONME-BH', label: 'Belo Horizonte' },
  loading: false
}

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_COINS:
      return {
        ...state,
        list: action.payload
      }
      
    case RECEIVE_COIN:
      return {
        ...state,
        item: action.payload
      }

    case RECEIVE_COIN_REAL:
      return {
        ...state,
        quantity: action.payload
      }

    case FETCH_COINS:
      return {
        ...state,
        loading: action.payload
      }

    default:
      return state
  }
}



