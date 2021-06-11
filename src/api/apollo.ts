import { ApolloClient, HttpLink, ApolloLink, concat } from '@apollo/client';
import { cache } from './cache';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || '',
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  cache,
  link: concat(authMiddleware, httpLink),
});
