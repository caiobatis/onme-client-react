import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRouter } from 'connected-react-router'
import rootReducer from '../reducers'

const middlewares = applyMiddleware(
  thunk, 
  multi, 
  promise
)

export const store = createStore(rootReducer,
  compose(process.env.ENV == 'development' ? composeWithDevTools(middlewares) : middlewares)
)