import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import WhitelabelReducer from "./WhitelabelReducer"
import ShippingReducer from './ShippingReducer'
import ContactReducer from './ContactReducer'

const rootReducer = combineReducers({
  WhitelabelReducer,
  ShippingReducer,
  ContactReducer,
  form: formReducer
})

export default rootReducer