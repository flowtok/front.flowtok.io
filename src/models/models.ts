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

export type Mutation = {
  __typename?: 'Mutation';
  updateUserName?: Maybe<User>;
};

export type MutationUpdateUserNameArgs = {
  input?: Maybe<UserNameInput>;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<Maybe<User>>>;
  user: User;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type QueryUserArgs = {
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
  name: Scalars['String'];
  tagname: Scalars['String'];
  age: Scalars['Int'];
  country: Scalars['String'];
  balance: Scalars['String'];
  avg_views: Scalars['String'];
  price: Scalars['String'];
  good_rate: Scalars['Float'];
  held_money: Scalars['String'];
  total_earnings: Scalars['String'];
  ref_link: Scalars['String'];
  ref_count: Scalars['Int'];
  ref_earnings: Scalars['String'];
  history: Array<Maybe<HistoryItem>>;
};

export type UserNameInput = {
  name: Scalars['String'];
  id: Scalars['ID'];
};
