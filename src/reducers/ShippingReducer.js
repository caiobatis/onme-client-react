import { RECEIVE_SHIPPING, FETCH_SHIPPING } from "../lib/actionsTypes"

const INITAL_STATE = {
  coins: [
    {
      label: 'USD',
      value: 'usd'
    },
    {
      label: 'EUR',
      value: 'eur'
    },
    {
      label: 'MXN',
      value: 'mxn'
    }
  ],
  loading: false,
  reasons: [
    {
      label: 'Motivo A',
      value: 'motivo a'
    },
    {
      label: 'Motivo B',
      value: 'motivo b'
    },
    {
      label: 'Motivo C',
      value: 'motivo c'
    },
    {
      label: 'Motivo D',
      value: 'motivo d'
    }
  ],
  error: false,
  message: ''
}

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_SHIPPING:
      return {
        ...state,
        message: action.msg,
        error: action.err
      }

    case FETCH_SHIPPING:
      return {
        ...state,
        loading: action.payload
      }

    
    default:
      return state
  }
}



