import { gql } from '@apollo/client';

const query = gql`
  query getAuthLayoutData {
    me {
      verifiedTikTok
      verifyTikTokCode
      typeUser
    }
  }
`;
