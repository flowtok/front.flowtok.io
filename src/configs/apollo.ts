import { ApolloClient, HttpLink, ApolloLink, concat } from '@apollo/client';
import { cache } from '../api/cache';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL + '/webhook',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  cache,
  link: concat(authMiddleware, httpLink),
});
