import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useUrlSearchParams } from '@hooks/useUrlSearchParams';
import { isRegisteredVar, tokenExistVar } from '@graphql/local-state';

type OAuthHandlerPropsT = any;

export const AuthHandler: FC<OAuthHandlerPropsT> = ({}) => {
  const { t } = useTranslation();
  const params = useUrlSearchParams();
  const token = params.get('token');
  const registered = params.get('registered');
  const failed = params.get('failed');
  const email = params.get('email');

  if (token) {
    localStorage.setItem('token', token);
    tokenExistVar(true);
  }
  if (registered) {
    localStorage.setItem('registered', registered);
    isRegisteredVar(registered === 'true');
  }

  const isRegistered = useReactiveVar(isRegisteredVar);
  const tokenExist = useReactiveVar(tokenExistVar);

  if (tokenExist) {
    if (isRegistered) {
      return <Redirect to={'/profile'} />;
    } else {
      return <Redirect to={'/signup'} />;
    }
  } else {
    if (failed) {
      if (email === 'NotExist') {
        return (
          <Redirect
            to={`/fail/?title=${t('fail.email-not-exist.title')}&message=${t(
              'fail.email-not-exist.message'
            )}`}
          />
        );
      }
    }
    return <>Loading</>;
  }
};
