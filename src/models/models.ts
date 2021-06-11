import { gql } from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GeneralSettings = {
  __typename?: 'GeneralSettings';
  facebook?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
};

export type HistoryItem = {
  __typename?: 'HistoryItem';
  value: Scalars['String'];
  date: Scalars['String'];
  type: HistoryItemType;
};

export enum HistoryItemType {
  Dec = 'dec',
  Inc = 'inc',
}

export type LoginResponse = {
  __typename?: 'LoginResponse';
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateUserName?: Maybe<User>;
  payOut?: Maybe<Scalars['String']>;
};

export type MutationUpdateUserNameArgs = {
  input?: Maybe<UserNameInput>;
};

export type MutationPayOutArgs = {
  input?: Maybe<PayOutInput>;
};

export type PayOutInput = {
  type: Scalars['String'];
  value: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<Maybe<User>>>;
  user: User;
  login?: Maybe<LoginResponse>;
  getCurrentUser?: Maybe<User>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  generalSettings?: Maybe<GeneralSettings>;
};

export type QueryLoginArgs = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type QueryGetCurrentUserArgs = {
  id: Scalars['ID'];
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  promo: Scalars['String'];
  price: Scalars['Float'];
  state: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  password: Scalars['String'];
  name: Scalars['String'];
  userImage: Scalars['String'];
  tagName: Scalars['String'];
  age: Scalars['Int'];
  country: Scalars['String'];
  balance: Scalars['String'];
  avgViews: Scalars['String'];
  price: Scalars['String'];
  goodRate: Scalars['Float'];
  heldMoney: Scalars['String'];
  totalEarnings: Scalars['String'];
  refLink: Scalars['String'];
  refCount: Scalars['Int'];
  refEarnings: Scalars['String'];
  history: Array<Maybe<HistoryItem>>;
  type: UserType;
};

export type UserNameInput = {
  name: Scalars['String'];
  id: Scalars['ID'];
};

export enum UserType {
  Blogger = 'Blogger',
  Advertiser = 'Advertiser',
}
