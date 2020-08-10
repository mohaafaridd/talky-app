import React, { useEffect, useState } from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import { Message as IMessage } from '../interfaces/Message'
import { MESSAGE_QUERY } from '../graphql/queries'
import { MESSAGE_SUBSCRIPTION } from '../graphql/subscriptions'
import { Message } from './Message'

export const Chat = () => {
  const [chat, setChat] = useState<IMessage[]>([])
  const { data, loading: qLoading } = useQuery(MESSAGE_QUERY)
  const { data: sData } = useSubscription(MESSAGE_SUBSCRIPTION)

  useEffect(() => {
    if (data) {
      setChat(data.chat)
    }
  }, [data])

  useEffect(() => {
    if (sData) {
      setChat([...chat, sData.messageSent])
    }
  }, [sData])

  if (qLoading) return <h4>loading</h4>

  return (
    <ol id='chat'>
      {chat.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </ol>
  )
}
