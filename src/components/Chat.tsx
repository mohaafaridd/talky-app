import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Message } from '../interfaces/Message'

const MESSAGE_QUERY = gql`
  query Chat {
    chat {
      id
      sender
      message
      createDate
    }
  }
`

export const Chat = () => {
  const [chat, setChat] = useState<Message[]>([])
  const { data, loading: qLoading } = useQuery(MESSAGE_QUERY)

  useEffect(() => {
    if (data) {
      setChat(data.chat)
    }
  }, [data])

  if (qLoading) return <h4>loading</h4>

  return (
    <ol>
      {chat.map((message) => (
        <li key={message.id}>{message.message}</li>
      ))}
    </ol>
  )
}
