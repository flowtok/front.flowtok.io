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
      id
      name
      email
      userImage
      tagName
      verifiedTikTok
      balance
      heldMoney
      refEarning
      refLink
      refCount
      typeUser
      subjects
      telegramNotify
      telegramId
      verifiedTelegram
      telegramVerifyCode
      socialId
      social {
        id
        socialProvider
        nickname
        socialId
        createdAt
        updatedAt
      }
      referrals {
        id
        refId
        byRef
        invited {
          id
          name
          userImage
          tagName
          email
        }
        invitedBy {
          id
          name
          userImage
          tagName
          email
        }
        createdAt
        updatedAt
      }
      historyPayment {
        value
        date
        type
      }
      createdAt
      updatedAt
    }
  }
`;

export const FIND_ACCOUNT_TIKTOK = gql`
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

export const VERIFY_TIK_TOK = gql`
  mutation verifyTikTok {
    verifyTikTok
  }
`;
