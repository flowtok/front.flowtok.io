import { gql } from '@apollo/client';

const FINISH_JOIN = gql`
  mutation finishJoin($input: FinishJoin!) {
    finishJoin(input: $input) {
      ...UserData
    }
  }
`;
