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
  mutation addWallet($input: AddWalletInput) {
    addWallet(input: $input) {
      type
      value
    }
  }
`;
export const FINISH_JOIN = gql`
  mutation finishJoin($input: FinishJoin!) {
    finishJoin(input: $input) {
      balance
    }
  }
`;
