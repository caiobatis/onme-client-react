import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
