import { gql } from '@apollo/client';

export const USER_DATA = gql`
  fragment UserData on User {
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
    earnTotal
    goodRate
    verifyTikTokCode
  }
`;
