import React from 'react'
import moment from 'moment'
import { Message as IMessage } from '../interfaces/Message'
import { motion } from 'framer-motion'

interface MessageProps {
  message: IMessage
}

export const Message = (props: MessageProps) => {
  const { message } = props
  return (
    <motion.li
      animate={{
        opacity: 1,
        x: 0,
      }}
      initial={{
        opacity: 0,
        x: '-100%',
      }}
      transition={{ duration: 0.5 }}
      className='message'
    >
      <div className='data'>
        <small className='sender'>{message.sender}</small>
        <small className='date'>
          {moment(message.createDate).format('LTS')}
        </small>
      </div>
      <p className='content'>{message.message}</p>
    </motion.li>
  )
}
