import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

export const Sign = () => {
  const { signUser } = useContext(UserContext)
  const [name, setName] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmit = () => {
    signUser(name)
  }

  return (
    <form onSubmit={onSubmit} id='sign-form'>
      <h1>Talky.</h1>
      <input
        autoFocus
        type='text'
        placeholder='Select a username'
        value={name}
        onChange={onChange}
      />
      {name && <small>Press ENTER to proceed</small>}
    </form>
  )
}
