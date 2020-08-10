import React, { useContext } from 'react'
import { Sign } from './components/Sign'
import UserContext from './context/userContext'
import { Chat } from './components/Chat'

export const App = () => {
  const { user } = useContext(UserContext)

  return <div id='app'>{user ? <Chat /> : <Sign />}</div>
}
