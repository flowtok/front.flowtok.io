import { Maybe, Scalars } from './graphql';
import { gql } from '@apollo/client';

type PayOutInput = any;
type UserNameInput = any;

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

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  value: Scalars['String'];
  type: WalletType;
};

export type MutationPayOutArgs = {
  input?: Maybe<PayOutInput>;
};

export type MutationUpdateUserNameArgs = {
  input?: Maybe<UserNameInput>;
};

export type GeneralSettings = {
  __typename?: 'GeneralSettings';
  vk?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
};

export const WALLETS = gql`
  query getWallets {
    wallets {
      type
      value
    }
  }
`;

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
