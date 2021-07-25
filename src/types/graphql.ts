import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type FindTikTok = {
  __typename?: 'FindTikTok';
  find: Scalars['Boolean'];
  tagName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  isOfficial?: Maybe<Scalars['Boolean']>;
};

export type FinishJoin = {
  name?: Maybe<Scalars['String']>;
  subjects: Array<Scalars['String']>;
  telegramNotify: Scalars['Boolean'];
  tagName: Scalars['String'];
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export enum HistoryItemType {
  Dec = 'Dec',
  Inc = 'Inc',
}

export type HistoryPayment = {
  __typename?: 'HistoryPayment';
  value: Scalars['String'];
  date: Scalars['String'];
  type: HistoryItemType;
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  finishJoin?: Maybe<User>;
  cancelTelegram?: Maybe<NotifyTelegram>;
  saveTelegram?: Maybe<NotifyTelegram>;
  findAccountTikTok?: Maybe<FindTikTok>;
  verifyTikTok: Scalars['Boolean'];
  newCodeTikTok: Scalars['String'];
};

export type MutationFinishJoinArgs = {
  input: FinishJoin;
};

export type MutationCancelTelegramArgs = {
  value: Scalars['Boolean'];
};

export type MutationSaveTelegramArgs = {
  telegramId: Scalars['String'];
};

export type MutationFindAccountTikTokArgs = {
  account: Scalars['String'];
};

export type NewPasswordWithCodeInput = {
  email: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type NotifyTelegram = {
  __typename?: 'NotifyTelegram';
  telegramNotify?: Maybe<Scalars['Boolean']>;
  telegramId?: Maybe<Scalars['String']>;
  verifiedTelegram?: Maybe<Scalars['Boolean']>;
  telegramVerifyCode: Scalars['String'];
};

export type OrderByClause = {
  column: Scalars['String'];
  order: SortOrder;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  lastPage: Scalars['Int'];
};

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages: Scalars['Boolean'];
  lastItem?: Maybe<Scalars['Int']>;
  lastPage: Scalars['Int'];
  perPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type PredictBudgetAdsInput = {
  dateStart: Scalars['String'];
  dateEnd: Scalars['String'];
  perTask: Array<Scalars['Float']>;
  subjects: Array<Scalars['String']>;
};

export type PredictBudgetAdsType = {
  __typename?: 'PredictBudgetAdsType';
  costPerDay?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  tasksDay?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  user?: Maybe<User>;
  predictBudgetAds?: Maybe<PredictBudgetAdsType>;
  users?: Maybe<UserPaginator>;
  themes?: Maybe<ThemesPaginator>;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryPredictBudgetAdsArgs = {
  input?: Maybe<PredictBudgetAdsInput>;
};

export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type QueryThemesArgs = {
  first?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type RefUser = {
  __typename?: 'RefUser';
  id: Scalars['ID'];
  refId: Scalars['Int'];
  byRef: Scalars['Int'];
  invited: ReferralInfo;
  invitedBy: ReferralInfo;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ReferralInfo = {
  __typename?: 'ReferralInfo';
  id: Scalars['ID'];
  name: Scalars['String'];
  userImage: Scalars['String'];
  tagName: Scalars['String'];
  email: Scalars['String'];
};

export type RefreshTokenInput = {
  refresh_token?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export enum RegisterStatuses {
  MustVerifyEmail = 'MUST_VERIFY_EMAIL',
  Success = 'SUCCESS',
}

export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  lastItem?: Maybe<Scalars['Int']>;
  perPage: Scalars['Int'];
};

export type Social = {
  __typename?: 'Social';
  id: Scalars['ID'];
  socialProvider: Scalars['String'];
  nickname: Scalars['String'];
  socialId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type SocialLoginInput = {
  provider: Scalars['String'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Themes = {
  __typename?: 'Themes';
  value: Scalars['String'];
  name: Scalars['String'];
};

export type ThemesPaginator = {
  __typename?: 'ThemesPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<Themes>;
};

export enum Trashed {
  Only = 'ONLY',
  With = 'WITH',
  Without = 'WITHOUT',
}

export type UpdatePassword = {
  old_password: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  userImage?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  verifiedTikTok?: Maybe<Scalars['Boolean']>;
  balance: Scalars['Float'];
  heldMoney: Scalars['Float'];
  earnTotal: Scalars['Float'];
  refEarning: Scalars['Float'];
  refLink: Scalars['String'];
  refCount: Scalars['Int'];
  typeUser: Scalars['Int'];
  subjects?: Maybe<Scalars['String']>;
  telegramNotify?: Maybe<Scalars['Boolean']>;
  telegramId?: Maybe<Scalars['String']>;
  verifiedTelegram?: Maybe<Scalars['Boolean']>;
  telegramVerifyCode?: Maybe<Scalars['String']>;
  verifyTikTokCode?: Maybe<Scalars['String']>;
  socialId?: Maybe<Scalars['ID']>;
  social?: Maybe<Social>;
  referrals?: Maybe<Array<Maybe<RefUser>>>;
  historyPayment?: Maybe<Array<Maybe<HistoryPayment>>>;
  goodRate: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserPaginator = {
  __typename?: 'UserPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<User>;
};

export type VerifyEmailInput = {
  token: Scalars['String'];
};

export type UserDataFragment = { __typename?: 'User' } & Pick<
  User,
  | 'id'
  | 'name'
  | 'email'
  | 'userImage'
  | 'tagName'
  | 'verifiedTikTok'
  | 'balance'
  | 'heldMoney'
  | 'refEarning'
  | 'refLink'
  | 'refCount'
  | 'typeUser'
  | 'subjects'
  | 'telegramNotify'
  | 'telegramId'
  | 'verifiedTelegram'
  | 'telegramVerifyCode'
  | 'socialId'
  | 'createdAt'
  | 'updatedAt'
  | 'earnTotal'
  | 'goodRate'
  | 'verifyTikTokCode'
> & {
    social?: Maybe<
      { __typename?: 'Social' } & Pick<
        Social,
        | 'id'
        | 'socialProvider'
        | 'nickname'
        | 'socialId'
        | 'createdAt'
        | 'updatedAt'
      >
    >;
    referrals?: Maybe<
      Array<
        Maybe<
          { __typename?: 'RefUser' } & Pick<
            RefUser,
            'id' | 'refId' | 'byRef' | 'createdAt' | 'updatedAt'
          > & {
              invited: { __typename?: 'ReferralInfo' } & Pick<
                ReferralInfo,
                'id' | 'name' | 'userImage' | 'tagName' | 'email'
              >;
              invitedBy: { __typename?: 'ReferralInfo' } & Pick<
                ReferralInfo,
                'id' | 'name' | 'userImage' | 'tagName' | 'email'
              >;
            }
        >
      >
    >;
    historyPayment?: Maybe<
      Array<
        Maybe<
          { __typename?: 'HistoryPayment' } & Pick<
            HistoryPayment,
            'value' | 'date' | 'type'
          >
        >
      >
    >;
  };

export type VerifyTikTokMutationVariables = Exact<{ [key: string]: never }>;

export type VerifyTikTokMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'verifyTikTok'
>;

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<{ __typename?: 'User' } & UserDataFragment>;
};

export type NewCodeTikTokMutationVariables = Exact<{ [key: string]: never }>;

export type NewCodeTikTokMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'newCodeTikTok'
>;

export type FindAccountTikTokMutationVariables = Exact<{
  account: Scalars['String'];
}>;

export type FindAccountTikTokMutation = { __typename?: 'Mutation' } & {
  findAccountTikTok?: Maybe<
    { __typename?: 'FindTikTok' } & Pick<
      FindTikTok,
      'find' | 'tagName' | 'avatar' | 'name' | 'isOfficial'
    >
  >;
};

export type WriteUserQueryVariables = Exact<{ [key: string]: never }>;

export type WriteUserQuery = { __typename?: 'Query' } & {
  me?: Maybe<{ __typename?: 'User' } & UserDataFragment>;
};

export type FinishJoinMutationVariables = Exact<{
  input: FinishJoin;
}>;

export type FinishJoinMutation = { __typename?: 'Mutation' } & {
  finishJoin?: Maybe<{ __typename?: 'User' } & UserDataFragment>;
};

export type GetSocialMediaDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetSocialMediaDataQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & {
      social?: Maybe<
        { __typename?: 'Social' } & Pick<Social, 'nickname' | 'socialId'>
      >;
    }
  >;
};

export type GetTikTokProfileDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetTikTokProfileDataQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<User, 'name' | 'tagName' | 'userImage'>
  >;
};

export type GetNavbarDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetNavbarDataQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<User, 'name' | 'tagName' | 'userImage'>
  >;
};

export type GetAuthLayoutDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetAuthLayoutDataQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      'verifiedTikTok' | 'verifyTikTokCode' | 'typeUser'
    >
  >;
};

export type GetBloggerProfileDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetBloggerProfileDataQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      | 'balance'
      | 'refCount'
      | 'refEarning'
      | 'refLink'
      | 'heldMoney'
      | 'userImage'
      | 'earnTotal'
    > & {
        historyPayment?: Maybe<
          Array<
            Maybe<
              { __typename?: 'HistoryPayment' } & Pick<
                HistoryPayment,
                'date' | 'value' | 'type'
              >
            >
          >
        >;
      }
  >;
};

export const UserDataFragmentDoc = gql`
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
export const VerifyTikTokDocument = gql`
  mutation verifyTikTok {
    verifyTikTok
  }
`;
export type VerifyTikTokMutationFn = Apollo.MutationFunction<
  VerifyTikTokMutation,
  VerifyTikTokMutationVariables
>;

export function useVerifyTikTokMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyTikTokMutation,
    VerifyTikTokMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    VerifyTikTokMutation,
    VerifyTikTokMutationVariables
  >(VerifyTikTokDocument, options);
}

export type VerifyTikTokMutationHookResult = ReturnType<
  typeof useVerifyTikTokMutation
>;
export type VerifyTikTokMutationResult = Apollo.MutationResult<VerifyTikTokMutation>;
export type VerifyTikTokMutationOptions = Apollo.BaseMutationOptions<
  VerifyTikTokMutation,
  VerifyTikTokMutationVariables
>;
export const MeDocument = gql`
  query me {
    me {
      ...UserData
    }
  }
  ${UserDataFragmentDoc}
`;

export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}

export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}

export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const NewCodeTikTokDocument = gql`
  mutation newCodeTikTok {
    newCodeTikTok
  }
`;
export type NewCodeTikTokMutationFn = Apollo.MutationFunction<
  NewCodeTikTokMutation,
  NewCodeTikTokMutationVariables
>;

export function useNewCodeTikTokMutation(
  baseOptions?: Apollo.MutationHookOptions<
    NewCodeTikTokMutation,
    NewCodeTikTokMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    NewCodeTikTokMutation,
    NewCodeTikTokMutationVariables
  >(NewCodeTikTokDocument, options);
}

export type NewCodeTikTokMutationHookResult = ReturnType<
  typeof useNewCodeTikTokMutation
>;
export type NewCodeTikTokMutationResult = Apollo.MutationResult<NewCodeTikTokMutation>;
export type NewCodeTikTokMutationOptions = Apollo.BaseMutationOptions<
  NewCodeTikTokMutation,
  NewCodeTikTokMutationVariables
>;
export const FindAccountTikTokDocument = gql`
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
export type FindAccountTikTokMutationFn = Apollo.MutationFunction<
  FindAccountTikTokMutation,
  FindAccountTikTokMutationVariables
>;

export function useFindAccountTikTokMutation(
  baseOptions?: Apollo.MutationHookOptions<
    FindAccountTikTokMutation,
    FindAccountTikTokMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    FindAccountTikTokMutation,
    FindAccountTikTokMutationVariables
  >(FindAccountTikTokDocument, options);
}

export type FindAccountTikTokMutationHookResult = ReturnType<
  typeof useFindAccountTikTokMutation
>;
export type FindAccountTikTokMutationResult = Apollo.MutationResult<FindAccountTikTokMutation>;
export type FindAccountTikTokMutationOptions = Apollo.BaseMutationOptions<
  FindAccountTikTokMutation,
  FindAccountTikTokMutationVariables
>;
export const WriteUserDocument = gql`
  query writeUser {
    me {
      ...UserData
    }
  }
  ${UserDataFragmentDoc}
`;

export function useWriteUserQuery(
  baseOptions?: Apollo.QueryHookOptions<WriteUserQuery, WriteUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WriteUserQuery, WriteUserQueryVariables>(
    WriteUserDocument,
    options
  );
}

export function useWriteUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WriteUserQuery,
    WriteUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WriteUserQuery, WriteUserQueryVariables>(
    WriteUserDocument,
    options
  );
}

export type WriteUserQueryHookResult = ReturnType<typeof useWriteUserQuery>;
export type WriteUserLazyQueryHookResult = ReturnType<
  typeof useWriteUserLazyQuery
>;
export type WriteUserQueryResult = Apollo.QueryResult<
  WriteUserQuery,
  WriteUserQueryVariables
>;
export const FinishJoinDocument = gql`
  mutation finishJoin($input: FinishJoin!) {
    finishJoin(input: $input) {
      ...UserData
    }
  }
  ${UserDataFragmentDoc}
`;
export type FinishJoinMutationFn = Apollo.MutationFunction<
  FinishJoinMutation,
  FinishJoinMutationVariables
>;

export function useFinishJoinMutation(
  baseOptions?: Apollo.MutationHookOptions<
    FinishJoinMutation,
    FinishJoinMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<FinishJoinMutation, FinishJoinMutationVariables>(
    FinishJoinDocument,
    options
  );
}

export type FinishJoinMutationHookResult = ReturnType<
  typeof useFinishJoinMutation
>;
export type FinishJoinMutationResult = Apollo.MutationResult<FinishJoinMutation>;
export type FinishJoinMutationOptions = Apollo.BaseMutationOptions<
  FinishJoinMutation,
  FinishJoinMutationVariables
>;
export const GetSocialMediaDataDocument = gql`
  query getSocialMediaData {
    me {
      social {
        nickname
        socialId
      }
    }
  }
`;

export function useGetSocialMediaDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSocialMediaDataQuery,
    GetSocialMediaDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSocialMediaDataQuery,
    GetSocialMediaDataQueryVariables
  >(GetSocialMediaDataDocument, options);
}

export function useGetSocialMediaDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSocialMediaDataQuery,
    GetSocialMediaDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSocialMediaDataQuery,
    GetSocialMediaDataQueryVariables
  >(GetSocialMediaDataDocument, options);
}

export type GetSocialMediaDataQueryHookResult = ReturnType<
  typeof useGetSocialMediaDataQuery
>;
export type GetSocialMediaDataLazyQueryHookResult = ReturnType<
  typeof useGetSocialMediaDataLazyQuery
>;
export type GetSocialMediaDataQueryResult = Apollo.QueryResult<
  GetSocialMediaDataQuery,
  GetSocialMediaDataQueryVariables
>;
export const GetTikTokProfileDataDocument = gql`
  query getTikTokProfileData {
    me {
      name
      tagName
      userImage
    }
  }
`;

export function useGetTikTokProfileDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTikTokProfileDataQuery,
    GetTikTokProfileDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTikTokProfileDataQuery,
    GetTikTokProfileDataQueryVariables
  >(GetTikTokProfileDataDocument, options);
}

export function useGetTikTokProfileDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTikTokProfileDataQuery,
    GetTikTokProfileDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTikTokProfileDataQuery,
    GetTikTokProfileDataQueryVariables
  >(GetTikTokProfileDataDocument, options);
}

export type GetTikTokProfileDataQueryHookResult = ReturnType<
  typeof useGetTikTokProfileDataQuery
>;
export type GetTikTokProfileDataLazyQueryHookResult = ReturnType<
  typeof useGetTikTokProfileDataLazyQuery
>;
export type GetTikTokProfileDataQueryResult = Apollo.QueryResult<
  GetTikTokProfileDataQuery,
  GetTikTokProfileDataQueryVariables
>;
export const GetNavbarDataDocument = gql`
  query getNavbarData {
    me {
      name
      tagName
      userImage
    }
  }
`;

export function useGetNavbarDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNavbarDataQuery,
    GetNavbarDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNavbarDataQuery, GetNavbarDataQueryVariables>(
    GetNavbarDataDocument,
    options
  );
}

export function useGetNavbarDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNavbarDataQuery,
    GetNavbarDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNavbarDataQuery, GetNavbarDataQueryVariables>(
    GetNavbarDataDocument,
    options
  );
}

export type GetNavbarDataQueryHookResult = ReturnType<
  typeof useGetNavbarDataQuery
>;
export type GetNavbarDataLazyQueryHookResult = ReturnType<
  typeof useGetNavbarDataLazyQuery
>;
export type GetNavbarDataQueryResult = Apollo.QueryResult<
  GetNavbarDataQuery,
  GetNavbarDataQueryVariables
>;
export const GetAuthLayoutDataDocument = gql`
  query getAuthLayoutData {
    me {
      verifiedTikTok
      verifyTikTokCode
      typeUser
    }
  }
`;

export function useGetAuthLayoutDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAuthLayoutDataQuery,
    GetAuthLayoutDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAuthLayoutDataQuery,
    GetAuthLayoutDataQueryVariables
  >(GetAuthLayoutDataDocument, options);
}

export function useGetAuthLayoutDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAuthLayoutDataQuery,
    GetAuthLayoutDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAuthLayoutDataQuery,
    GetAuthLayoutDataQueryVariables
  >(GetAuthLayoutDataDocument, options);
}

export type GetAuthLayoutDataQueryHookResult = ReturnType<
  typeof useGetAuthLayoutDataQuery
>;
export type GetAuthLayoutDataLazyQueryHookResult = ReturnType<
  typeof useGetAuthLayoutDataLazyQuery
>;
export type GetAuthLayoutDataQueryResult = Apollo.QueryResult<
  GetAuthLayoutDataQuery,
  GetAuthLayoutDataQueryVariables
>;
export const GetBloggerProfileDataDocument = gql`
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

export function useGetBloggerProfileDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBloggerProfileDataQuery,
    GetBloggerProfileDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetBloggerProfileDataQuery,
    GetBloggerProfileDataQueryVariables
  >(GetBloggerProfileDataDocument, options);
}

export function useGetBloggerProfileDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBloggerProfileDataQuery,
    GetBloggerProfileDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBloggerProfileDataQuery,
    GetBloggerProfileDataQueryVariables
  >(GetBloggerProfileDataDocument, options);
}

export type GetBloggerProfileDataQueryHookResult = ReturnType<
  typeof useGetBloggerProfileDataQuery
>;
export type GetBloggerProfileDataLazyQueryHookResult = ReturnType<
  typeof useGetBloggerProfileDataLazyQuery
>;
export type GetBloggerProfileDataQueryResult = Apollo.QueryResult<
  GetBloggerProfileDataQuery,
  GetBloggerProfileDataQueryVariables
>;
