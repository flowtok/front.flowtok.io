import { gql } from '@apollo/client';

const query = gql`
  query getBloggerProfileData {
    me {
      balance
      refCount
      refEarning
      refLink
      heldMoney
      userImage
      earnTotal
      historyPayment {
        date
        value
        type
      }
    }
  }
`;
