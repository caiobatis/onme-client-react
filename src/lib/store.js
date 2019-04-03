// import React from 'react'
// import {
//   createStore,
//   applyMiddleware,
//   compose
// } from 'redux'
// import thunk from 'redux-thunk'
// import multi from 'redux-multi'
// import promise from 'redux-promise'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from '../reducers'

// const Store = React.createContext()

// const middlewares = applyMiddleware(
//   thunk, 
//   multi, 
//   promise
// )
// const Provider = ({children}) => {
//   const store = createStore(rootReducer, compose(process.env.ENV === 'development' ? composeWithDevTools(middlewares) : middlewares))
//   return <Store.Provider value={store}>{children}</Store.Provider>
// }

// export { Store, Provider }

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

const middlewares = applyMiddleware(
  thunk, 
  multi, 
  promise
)

export const store = createStore(rootReducer,
  compose(process.env.ENV === 'development' ? composeWithDevTools(middlewares) : middlewares)
)