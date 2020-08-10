import { gql } from '@apollo/client'

export const MESSAGE_QUERY = gql`
  query Chat {
    chat {
      id
      sender
      message
      createDate
    }
  }
`
