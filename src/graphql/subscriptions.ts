import { gql } from '@apollo/client'

export const MESSAGE_SUBSCRIPTION = gql`
  subscription MessageSent {
    messageSent {
      id
      sender
      message
      createDate
    }
  }
`
