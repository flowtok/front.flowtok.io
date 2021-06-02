import { gql } from '@apollo/client';

export const UPDATE_NAME = gql`
  mutation updateUserName($input: UserNameInput) {
    updateUserName(input: $input) {
      name
    }
  }
`;
