import React, { useEffect, useState, useRef } from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import { Message as IMessage } from '../interfaces/Message'
import { MESSAGE_QUERY } from '../graphql/queries'
import { MESSAGE_SUBSCRIPTION } from '../graphql/subscriptions'
import { Message } from './Message'
import { SubmitMessage } from './SubmitMessage'

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

  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [chat])

  if (qLoading) return <h4>loading</h4>

  return (
    <div id='chat-wrapper'>
      <ol id='chat'>
        {chat.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </ol>

      <SubmitMessage />
    </div>
  )
}
