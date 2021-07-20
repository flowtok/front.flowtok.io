import { gql } from '@apollo/client';

const query = gql`
  query getNavbarData {
    me {
      name
      tagName
      userImage
    }
  }
`;
