import React, { FC } from 'react'
import {
  ApolloProvider,
  HttpLink,
  split,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

export const Apollo: FC = ({ children }) => {
  const wsLink = new WebSocketLink({
    uri: `ws://${process.env.REACT_APP_API_URL}/`,
    options: {
      reconnect: true,
    },
  })

  const httpLink = new HttpLink({
    uri: `http://${process.env.REACT_APP_API_URL}/`,
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
    connectToDevTools: true,
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
