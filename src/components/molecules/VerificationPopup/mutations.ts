import { gql } from '@apollo/client';

export const NEW_CODE_TIK_TOK = gql`
  mutation newCodeTikTok {
    newCodeTikTok
  }
`;

export const VERIFY_TIK_TOK = gql`
  mutation verifyTikTok {
    verifyTikTok
  }
`;
