import { gql } from '@apollo/client';

export const USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
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
    }
  }
`;
