import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

export const Sign = () => {
  const { user, signUser } = useContext(UserContext)
  const [name, setName] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmit = () => {
    signUser(name)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Select a name to enter the chat'
        value={name}
        onChange={onChange}
      />
    </form>
  )
}
