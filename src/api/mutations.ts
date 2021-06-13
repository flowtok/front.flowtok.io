import { gql } from '@apollo/client';

export const UPDATE_NAME = gql`
  mutation updateUserName($input: UserNameInput) {
    updateUserName(input: $input) {
      name
    }
  }
`;

export const PAY_OUT = gql`
  mutation payOut($input: PayOutInput) {
    payOut(input: $input) {
      success
      message
    }
  }
`;

export const ADD_WALLET = gql`
  mutation addWallet($input: AddWallet) {
    addWallet(input: $input)
  }
`;
