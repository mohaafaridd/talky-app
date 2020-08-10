import React, { FC, useReducer } from 'react'
import { State, Methods } from '../interfaces/context'
import reducer from './userReducer'
import { UserProvider } from './userContext'

export const UserState: FC = ({ children }) => {
  const initialState: State = {
    user: '',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const methods: Methods = {
    signUser(name) {
      dispatch({
        type: 'SIGN_USER',
        payload: {
          user: name,
        },
      })
    },
  }

  return (
    <UserProvider
      value={{
        ...state,
        ...methods,
      }}
    >
      {children}
    </UserProvider>
  )
}
