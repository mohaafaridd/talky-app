import React, { useEffect } from 'react'
import { gql, useSubscription } from '@apollo/client'
import { Message } from './interfaces/Message'

const MESSAGE_SUBSCRIPTION = gql`
  subscription MessageSent {
    messageSent {
      id
      sender
      message
      createDate
    }
  }
`

export const App = () => {
  const { data, loading } = useSubscription(MESSAGE_SUBSCRIPTION)
  const message: Message = data?.messageSent

  return <h4>New message: {!loading && message.message}</h4>
}
