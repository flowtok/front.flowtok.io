import { gql } from '@apollo/client';

export const USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      balance
      avg_views
      price
      good_rate
      held_money
      total_earnings
      ref_link
      ref_count
      ref_earnings
      history {
        value
        date
        type
      }
    }
  }
`;
