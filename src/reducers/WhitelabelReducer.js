import { RECEIVE_SHIPPING_COINS, RECEIVE_COINS, RECEIVE_COIN, RECEIVE_COIN_REAL, FETCH_COINS } from '../lib/actionsTypes'

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
  city: { value: 'WL-ONME-SP', label: 'São Paulo' },
  loading: false,
  shipping: {
    type: { value: 'enviar', label: 'Enviar' },
    person: { value: 'IR001', label: 'Eu mesmo' },
    remessaCoins: [
      { value: 'USD', label: 'Dólar Americano' },
      { value: 'EUR', label: 'Euro' },
      { value: 'GBP', label: 'Libra Esterlina' }
    ],
    real: 1000,
    coin: { value: 'USD', label: 'Dólar Americano' },
    quantity: 1000,
    cotacao: 0,
    tarifa: 0,
    iof: 0,
    iofPercentage: 0,
    vet: 0
  }
}

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_SHIPPING_COINS:
      // console.log(action.payload);
      return {
        ...state,
        shipping: {
          ...state.shipping,
          quantity: action.payload.currency.offer.value / action.payload.currency.offer.divisor,
          real: action.payload.total.withTax.value / action.payload.total.withTax.divisor,
          cotacao: action.payload.currency.levelingRate.value / action.payload.currency.levelingRate.divisor,
          tarifa: action.payload.tax.bankFee.value / action.payload.tax.bankFee.divisor,
          iof: action.payload.tax.iof.total.value / action.payload.tax.iof.total.divisor,
          iofPercentage: action.payload.tax.iof.percentage,
          vet: action.payload.currency.price.withTax.value / action.payload.currency.price.withTax.divisor,

        }
      }

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



