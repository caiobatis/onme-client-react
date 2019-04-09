import {
  RECEIVE_CONTACT,
  FETCH_CONTACT
} from '../lib/actionsTypes'

const INITAL_STATE = {
  loading: false,
  error: false,
  message: ''
}

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_CONTACT:
      return {
        ...state,
        message: action.msg,
        error: action.err
      }
    case FETCH_CONTACT:
      return {
        ...state,
        loading: action.payload
      }

    default:
      return state
  }
}



