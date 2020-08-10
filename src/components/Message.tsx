import React from 'react'
import moment from 'moment'
import { Message as IMessage } from '../interfaces/Message'

interface MessageProps {
  message: IMessage
}

export const Message = (props: MessageProps) => {
  const { message } = props
  return (
    <li className='message'>
      <div className='data'>
        <small className='sender'>{message.sender}</small>
        <small className='date'>
          {moment(message.createDate).format('LTS')}
        </small>
      </div>
      <p className='content'>{message.message}</p>
    </li>
  )
}
