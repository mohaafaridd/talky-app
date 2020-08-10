import React from 'react'
import ReactDOM from 'react-dom'
import './styles/output.css'
import { App } from './App'
import { Apollo } from './Apollo'
import { UserState } from './context/UserState'

ReactDOM.render(
  <React.StrictMode>
    <Apollo>
      <UserState>
        <App />
      </UserState>
    </Apollo>
  </React.StrictMode>,
  document.getElementById('root')
)
