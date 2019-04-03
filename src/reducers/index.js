import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import WhitelabelReducer from "./WhitelabelReducer"
import ShippingReducer from './ShippingReducer'

const rootReducer = combineReducers({
  WhitelabelReducer,
  ShippingReducer,
  form: formReducer
})

export default rootReducer