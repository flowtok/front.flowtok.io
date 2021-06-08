import React, { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { NetworkButton } from '../../../atoms/NetworkButton';
import { Link } from 'react-router-dom';
import { Button } from '../../../atoms/Button';
import { useTranslation } from 'react-i18next';
import { gql, useLazyQuery } from '@apollo/client';
import { LoginResponse, QueryLoginArgs } from '../../../../models/models';
import { currentUserVar } from '../../../../api/cache';

const LOGIN = gql`
  query getQuery($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      user {
        name
        tagName
        userImage
        balance
        avgViews
        price
        goodRate
        heldMoney
        totalEarnings
        refLink
        refCount
        refEarnings
        history {
          value
          date
          type
        }
      }
      token
    }
  }
`;

type SignUpFormPropsT = any;

export const LoginForm: FC<SignUpFormPropsT> = ({}) => {
  const [runQuery, { called, loading, data }] = useLazyQuery<
    { login: LoginResponse },
    QueryLoginArgs
  >(LOGIN);

  const loginHandler = () => {
    return runQuery({
      variables: {
        name: 'Ketty Bounce',
        password: '1234567',
      },
    });
  };

  useEffect(() => {
    currentUserVar(data?.login.user);
    localStorage.setItem('user', JSON.stringify(data?.login.user));
    localStorage.setItem('token', JSON.stringify(data?.login.token));
  }, [data]);

  const { t } = useTranslation();
  return (
    <div className={styles['sign-in']}>
      <div className={styles['title']}>{t('pages.login.enter')}</div>
      <div className={styles['column']}>
        <NetworkButton network={'vk'}>
          {t('pages.login.sign-in-vk')}
        </NetworkButton>
        <NetworkButton network={'fb'}>
          {t('pages.login.sign-in-fb')}
        </NetworkButton>
        <NetworkButton network={'gm'} onClick={() => loginHandler()}>
          {t('pages.login.sign-in-google')}
        </NetworkButton>
        <div className={styles['label']}>{t('pages.login.no-account')}</div>
        <Link to={'/signup'} className={styles['sign-up-link']}>
          <Button
            preset={'black'}
            className={styles['sign-up-btn']}
            radius={48}
            size={'sm'}
          >
            {t('pages.login.sign-up')}
          </Button>
        </Link>
      </div>
    </div>
  );
};
