import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  store
} from './lib/store'
import App from './App'
import * as serviceWorker from './serviceWorker'

export const applicationContainer = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>
  , applicationContainer
)
serviceWorker.unregister()