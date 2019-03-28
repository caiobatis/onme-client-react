import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import WhitelabelReducer from "./WhitelabelReducer"

const rootReducer = combineReducers({
  WhitelabelReducer,
  form: formReducer
})

export default rootReducer