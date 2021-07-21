import { gql } from '@apollo/client';

const query = gql`
  query getSocialMediaData {
    me {
      social {
        nickname
        socialId
      }
    }
  }
`;
