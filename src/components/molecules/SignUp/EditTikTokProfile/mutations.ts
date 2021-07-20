import { gql } from '@apollo/client';

const FIND_ACCOUNT_TIKTOK = gql`
  mutation findAccountTikTok($account: String!) {
    findAccountTikTok(account: $account) {
      find
      tagName
      avatar
      name
      isOfficial
    }
  }
`;
