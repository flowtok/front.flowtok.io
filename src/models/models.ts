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
  DateTime: any;
};

export type AddWaletResponse = {
  __typename?: 'AddWaletResponse';
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AddWalletInput = {
  type: WalletType;
  value: Scalars['String'];
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

export type HistoryPayment = {
  __typename?: 'HistoryPayment';
  value: Scalars['String'];
  date: Scalars['String'];
  type: HistoryItemType;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateUserName?: Maybe<User>;
  payOut?: Maybe<PayOutResponse>;
  addWallet?: Maybe<AddWaletResponse>;
};

export type FinishJoinInput = {
  name: Scalars['String'];
  subjects: Themes[];
  telegramNotify: Scalars['Boolean'];
  tagName: Scalars['String'];
};

export type FindAccountInput = {
  account: Scalars['String'];
};

export type MutationUpdateUserNameArgs = {
  input?: Maybe<UserNameInput>;
};

export type MutationPayOutArgs = {
  input?: Maybe<PayOutInput>;
};

export type MutationFinishJoinArgs = {
  input?: Maybe<FinishJoinInput>;
};

export type MutationFindTickTokArgs = {
  input?: Maybe<FindAccountInput>;
};

export type MutationAddWalletArgs = {
  input?: Maybe<AddWalletInput>;
};

export type PayOutInput = {
  type: WalletType;
  value: Scalars['Float'];
};

export type PayOutResponse = {
  __typename?: 'PayOutResponse';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  value: Scalars['String'];
  type: WalletType;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<Maybe<User>>>;
  user: User;
  login?: Maybe<LoginResponse>;
  getCurrentUser?: Maybe<User>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  generalSettings?: Maybe<GeneralSettings>;
  wallets?: Maybe<Array<Maybe<PaymentMethod>>>;
};

export type QueryLoginArgs = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export type QueryGetCurrentUserArgs = {
  id: Scalars['ID'];
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

export type Social = {
  __typename?: 'Social';
  id: Scalars['ID'];
  socialProvider: Scalars['String'];
  nickname: Scalars['String'];
  socialId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
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
  email: Scalars['String'];
  userImage?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  verifiedTikTok?: Maybe<Scalars['Boolean']>;
  balance: Scalars['Float'];
  heldMoney: Scalars['Float'];
  refEarning: Scalars['Float'];
  refLink: Scalars['String'];
  refCount: Scalars['Int'];
  typeUser: Scalars['Int'];
  subjects?: Maybe<Scalars['String']>;
  telegramNotify?: Maybe<Scalars['Boolean']>;
  telegramId?: Maybe<Scalars['String']>;
  verifiedTelegram?: Maybe<Scalars['Boolean']>;
  telegramVerifyCode?: Maybe<Scalars['String']>;
  socialId?: Maybe<Scalars['ID']>;
  social?: Maybe<Social>;
  referrals?: Maybe<Array<Maybe<RefUser>>>;
  historyPayment?: Maybe<Array<Maybe<HistoryPayment>>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FindTikTok = {
  __typename?: 'FindTikTok';
  find: Maybe<Scalars['Boolean']>;
  tagName: Maybe<Scalars['String']>;
  avatar: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  isOfficial: Maybe<Scalars['Boolean']>;
};

export type UserNameInput = {
  name: Scalars['String'];
  id: Scalars['ID'];
};

export enum WalletType {
  Phone = 'phone',
  Yandex = 'yandex',
  Card = 'card',
  Qiwi = 'qiwi',
  Wmr = 'wmr',
  Wmz = 'wmz',
}

export enum Themes {
  parodies,
  karaoke,
  duets,
  games,
  unsuccessfulTakes,
  entertaining,
  dressingUp,
  animals,
  children,
  magicTricks,
  challenges,
  fashion,
  food,
  traveling,
  dancing,
  sport,
  cosplay,
  unpacking,
  music,
  socialVideos,
  auto,
  congratulations,
}
