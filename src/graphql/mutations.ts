import { gql } from '@apollo/client'

export const MESSAGE_MUTATION = gql`
  mutation SendMessage($sender: String!, $message: String!) {
    sendMessage(sender: $sender, message: $message) {
      id
      sender
      message
      createDate
    }
  }
`
