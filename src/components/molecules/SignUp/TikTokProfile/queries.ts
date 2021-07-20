import { gql } from '@apollo/client';

const query = gql`
  query getTikTokProfileData {
    me {
      name
      tagName
      userImage
    }
  }
`;
