import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'
import { useMutation } from '@apollo/client'
import { MESSAGE_MUTATION } from '../graphql/mutations'

export const SubmitMessage = () => {
  const { user } = useContext(UserContext)
  const [createMessage, { loading }] = useMutation(MESSAGE_MUTATION)
  const [message, setMessage] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    try {
      const variables = {
        sender: user,
        message,
      }
      await createMessage({ variables })

      setMessage('')
    } catch (error) {}
  }

  return (
    <form id='message-form'>
      <div className='inputs'>
        <input
          disabled={loading}
          autoFocus
          type='text'
          placeholder='Type a message...'
          value={message}
          onChange={onChange}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
      {message && <small>Press ENTER to send</small>}
    </form>
  )
}
