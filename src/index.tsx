import React from 'react'
import ReactDOM from 'react-dom'
import './styles/output.css'
import { App } from './App'
import { Apollo } from './Apollo'

ReactDOM.render(
  <React.StrictMode>
    <Apollo>
      <App />
    </Apollo>
  </React.StrictMode>,
  document.getElementById('root')
)
