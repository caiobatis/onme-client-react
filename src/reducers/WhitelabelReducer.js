import { RECEIVE_COINS } from '../constants/actionsTypes'

const INITAL_STATE = {
  list: []
}

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_COINS:
      return {
        ...state,
        list: action.payload
      }

    default:
      return state
  }
}



