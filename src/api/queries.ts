import { gql } from '@apollo/client';

export const USER_DATA = gql`
  fragment UserData on User {
    name
    tagName
    userImage
    balance
    avgViews
    price
    goodRate
    heldMoney
    totalEarnings
    refLink
    refCount
    refEarnings
    history {
      value
      date
      type
    }
    type
  }
`;

export const USER = gql`
  ${USER_DATA}
  query getUser {
    user {
      ...UserData
    }
  }
`;

export const LOGIN = gql`
  ${USER_DATA}
  query getQuery($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      user {
        ...UserData
      }
      token
    }
  }
`;

export const WALLETS = gql`
  query getQuery {
    wallets {
      type
      value
    }
  }
`;
