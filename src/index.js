import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  store
} from './lib/store'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ReactGA from 'react-ga'

export const applicationContainer = document.getElementById('root')

ReactGA.initialize('UA-125270117-1')
ReactGA.pageview('/homepage')

render(
  <Provider store={store}>
    <App />
  </Provider>
  , applicationContainer
)
serviceWorker.unregister()