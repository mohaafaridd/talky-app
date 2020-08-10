import React from 'react'
import moment from 'moment'
import { Message as IMessage } from '../interfaces/Message'

interface MessageProps {
  message: IMessage
}

export const Message = (props: MessageProps) => {
  const { message } = props
  return (
    <li>
      <small>{message.sender}</small>
      <small>{moment(message.createDate).format('LTS')}</small>
      <p>{message.message}</p>
    </li>
  )
}
